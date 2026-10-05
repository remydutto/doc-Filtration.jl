# doc-Filtration.jl

Documentation for the [Filtration.jl](https://github.com/remydutto/Filtration.jl) package (private repository). If you are interested in this package, <a href="mailto:remy.dutto@orange.fr">please contact me</a>.

----

[ci-img]: https://github.com/remydutto/Filtration.jl/actions/workflows/CI.yml/badge.svg?branch=main
[ci-url]: https://github.com/remydutto/Filtration.jl/actions/workflows/CI.yml?query=branch%3Amain

[co-img]: https://codecov.io/gh/remydutto/Filtration.jl/graph/badge.svg?token=Z7W8GHW7R0
[co-url]: https://codecov.io/gh/remydutto/Filtration.jl

[doc-dev-img]: https://img.shields.io/badge/docs-dev-8A2BE2.svg
[doc-dev-url]: https://remydutto.github.io/doc-Filtration.jl/dev/

[doc-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg
[doc-stable-url]: https://remydutto.github.io/doc-Filtration.jl/stable/

[licence-img]: https://img.shields.io/badge/License-MIT-yellow.svg
[licence-url]: https://github.com/remydutto/Filtration.jl/blob/master/LICENSE

| **Name**          | **Badge**         |
:-------------------|:------------------|
| CI / Build        | [![Build Status][ci-img]][ci-url]  |
| Test Coverage     | [![Coverage][co-img]][co-url]  |
| Documentation     | [![Documentation][doc-stable-img]][doc-stable-url] [![Documentation][doc-dev-img]][doc-dev-url]                   |
| Licence           | [![License: MIT][licence-img]][licence-url]   |

CI, test coverage and license badges above refer to the source repository, [Filtration.jl](https://github.com/remydutto/Filtration.jl), since this repository only hosts the built documentation, published on the `gh-pages` branch.

## Publishing

The documentation is built locally, not by GitHub Actions. This repository hosts two sites, each built from its source repository cloned next to this one:

| Source | Published at |
|---|---|
| `Filtration.jl` (`main`) | <https://remydutto.github.io/doc-Filtration.jl/dev/> |
| `FiltrationSimulation.jl` (`master`) | <https://remydutto.github.io/doc-Filtration.jl/simulation/> |

```sh
julia publish.jl                          # build both and push them to gh-pages
julia publish.jl FiltrationSimulation.jl  # only that one
julia publish.jl --preview                # build only, to check the result before publishing
```

Building the FiltrationSimulation.jl site needs Node.js (`npx`).

Every page of both sites shows the same header, with a link to each package. It lives in [`shared/ecosystem.js`](shared/ecosystem.js) and is published with the sites: to add or rename a package, edit that file and publish again.
