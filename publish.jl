# Builds documentation sites on this machine and publishes them to the gh-pages branch of this
# repository, served at https://remydutto.github.io/doc-Filtration.jl/.
#
#     julia publish.jl                            # build and publish every site
#     julia publish.jl FiltrationSimulation.jl    # only that one
#     julia publish.jl --preview                  # build only: nothing is committed or pushed
#     julia publish.jl --preview --ref=my-branch Filtration.jl   # preview another branch, tag or commit
#
# The source repositories are expected next to this one. Their working trees are left untouched:
# each build runs in a separate checkout under .build/.

const DOC_REPO = @__DIR__
const BUILD_DIR = joinpath(DOC_REPO, ".build")
const URL = "https://remydutto.github.io/doc-Filtration.jl/"

# `target`: the folder of gh-pages the site is published to. `develop`: whether the docs
# environment needs the package itself. `siteinfo`: read by the version selector of the pages.
const SITES = [
    (
        repo="Filtration.jl",
        ref="origin/main",
        target="dev",
        develop=true,
        siteinfo="var DOCUMENTER_CURRENT_VERSION = \"dev\";\n",
    ),
    (
        repo="FiltrationSimulation.jl",
        ref="origin/master",
        target="simulation",
        develop=false,
        siteinfo="var DOCUMENTER_VERSION_SELECTOR_DISABLED = true;\n",
    ),
]

git(repo, args...) = `git -C $repo $(collect(args))`
output(cmd) = strip(read(cmd, String))

# A fresh checkout of `ref` in `dir`, as a detached worktree of `repo`.
function checkout(repo, dir, ref)
    if isdir(dir)
        success(git(repo, "worktree", "remove", "--force", dir)) ||
            rm(dir; force=true, recursive=true)
    end
    run(git(repo, "worktree", "prune"))
    run(git(repo, "worktree", "add", "--quiet", "--detach", dir, ref))
    return dir
end

# Build the docs of `site` at `ref`; returns the built folder and the commit it was built from.
function build(site, ref)
    repo = joinpath(dirname(DOC_REPO), site.repo)
    isdir(repo) || error("$(site.repo) not found at $repo")
    run(git(repo, "fetch", "--quiet", "origin"))
    source = checkout(repo, joinpath(BUILD_DIR, site.repo), ref)
    sha = output(git(source, "rev-parse", "--short", "HEAD"))

    println("Building the documentation of $(site.repo) at $ref ($sha)")
    develop = site.develop ? "Pkg.develop(PackageSpec(path=pwd()))" : ""
    script = """
    using Pkg
    $develop
    Pkg.instantiate()
    include("docs/make.jl")
    """
    # GKSwstype: no plot window for the GR backend of Plots
    run(
        addenv(
            Cmd(`$(Base.julia_cmd()) --project=docs -e $script`; dir=source),
            "GKSwstype" => "nul",
        ),
    )
    return (; site, sha, built=joinpath(source, "docs", "build"))
end

function main(args)
    preview = "--preview" in args
    refs = [last(split(a, "="; limit=2)) for a in args if startswith(a, "--ref=")]
    names = filter(!startswith("--"), args)
    unknown = setdiff(names, [s.repo for s in SITES])
    isempty(unknown) ||
        error("unknown site $(join(unknown, ", ")); known: $(join((s.repo for s in SITES), ", "))")
    sites = isempty(names) ? SITES : [s for s in SITES if s.repo in names]
    if !isempty(refs)
        preview || error("--ref is only for --preview: the published sites are built from their main branch")
        length(sites) == 1 || error("--ref needs exactly one site")
    end

    builds = [build(site, isempty(refs) ? site.ref : only(refs)) for site in sites]

    if preview
        println("Preview built, nothing published:")
        foreach(b -> println("  ", joinpath(b.built, "index.html")), builds)
        return nothing
    end

    run(git(DOC_REPO, "fetch", "--quiet", "origin", "gh-pages"))
    pages = checkout(DOC_REPO, joinpath(BUILD_DIR, "gh-pages"), "origin/gh-pages")
    for b in builds
        target = joinpath(pages, b.site.target)
        rm(target; force=true, recursive=true)
        cp(b.built, target)
        write(joinpath(target, "siteinfo.js"), b.site.siteinfo)
        run(git(pages, "add", "--all", b.site.target))
    end
    # the header every site loads (see shared/ecosystem.js)
    cp(joinpath(DOC_REPO, "shared"), joinpath(pages, "shared"); force=true)
    run(git(pages, "add", "--all", "shared"))
    message = "build based on " * join(("$(b.site.repo) $(b.sha)" for b in builds), ", ")
    run(git(pages, "commit", "--quiet", "-m", message))
    run(git(pages, "push", "origin", "HEAD:gh-pages"))
    println("Published:")
    foreach(b -> println("  ", URL, b.site.target, "/"), builds)
    return nothing
end

main(ARGS)
