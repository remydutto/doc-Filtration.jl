# Builds the documentation of Filtration.jl on this machine and publishes it to the gh-pages
# branch of this repository, served at https://remydutto.github.io/doc-Filtration.jl/.
#
#     julia publish.jl                      # build origin/main of ../Filtration.jl and publish it
#     julia publish.jl --preview            # build only: nothing is committed or pushed
#     julia publish.jl --preview my-branch  # preview another branch, tag or commit
#
# Filtration.jl is expected next to this repository. Its working tree is left untouched: the
# build runs in a separate checkout under .build/.

const DOC_REPO = @__DIR__
const SOURCE_REPO = joinpath(dirname(DOC_REPO), "Filtration.jl")
const BUILD_DIR = joinpath(DOC_REPO, ".build")

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

function main(args)
    preview = "--preview" in args
    refs = filter(!startswith("--"), args)
    ref = isempty(refs) ? "origin/main" : only(refs)
    preview ||
        ref == "origin/main" ||
        error("only origin/main can be published; use --preview to build $ref")
    isdir(SOURCE_REPO) || error("Filtration.jl not found at $SOURCE_REPO")

    run(git(SOURCE_REPO, "fetch", "--quiet", "origin"))
    source = checkout(SOURCE_REPO, joinpath(BUILD_DIR, "Filtration.jl"), ref)
    sha = output(git(source, "rev-parse", "--short", "HEAD"))

    println("Building the documentation of Filtration.jl at $ref ($sha)")
    build = """
    using Pkg
    Pkg.develop(PackageSpec(path=pwd()))
    Pkg.instantiate()
    include("docs/make.jl")
    """
    # GKSwstype: no plot window for the GR backend of Plots
    run(
        addenv(
            Cmd(`$(Base.julia_cmd()) --project=docs -e $build`; dir=source),
            "GKSwstype" => "nul",
        ),
    )
    built = joinpath(source, "docs", "build")

    if preview
        println("Preview built, nothing published: ", joinpath(built, "index.html"))
        return nothing
    end

    run(git(DOC_REPO, "fetch", "--quiet", "origin", "gh-pages"))
    site = checkout(DOC_REPO, joinpath(BUILD_DIR, "gh-pages"), "origin/gh-pages")
    dev = joinpath(site, "dev")
    rm(dev; force=true, recursive=true)
    cp(built, dev)
    # read by the version selector of the pages
    write(joinpath(dev, "siteinfo.js"), "var DOCUMENTER_CURRENT_VERSION = \"dev\";\n")

    run(git(site, "add", "--all", "dev"))
    run(git(site, "commit", "--quiet", "-m", "build based on $sha"))
    run(git(site, "push", "origin", "HEAD:gh-pages"))
    println("Published: https://remydutto.github.io/doc-Filtration.jl/dev/")
    return nothing
end

main(ARGS)
