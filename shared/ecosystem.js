// The header shared by every documentation site hosted here: one link per package, the current
// one highlighted. Each site loads this file from its pages (`../shared/ecosystem.js`), so adding
// a package or renaming one is a change to this file only. Published by publish.jl.
(function () {
  const SITES = [
    { name: "Filtration.jl", what: "optimal control", path: "dev/" },
    { name: "FiltrationSimulation.jl", what: "closed-loop simulator", path: "simulation/" },
  ];
  const HEIGHT = "2.4rem";
  // The root of the hosting site, from where this file was loaded.
  const root = new URL("..", document.currentScript.src);

  const style = document.createElement("style");
  style.textContent = `
    .ecosystem-bar { background: #20252b; color: #c9d1d9; display: flex; flex-wrap: wrap; align-items: stretch;
      gap: 0.25rem; padding: 0 1rem; font-size: 0.875rem; line-height: 1.2; }
    .ecosystem-bar .ecosystem-label { display: flex; align-items: center; color: #8b949e; font-size: 0.75rem;
      text-transform: uppercase; letter-spacing: 0.08em; padding-right: 0.9rem; }
    .ecosystem-bar a { display: flex; align-items: center; gap: 0.5rem; padding: 0 0.9rem; min-height: ${HEIGHT};
      color: #c9d1d9; text-decoration: none; border-bottom: 2px solid transparent; }
    .ecosystem-bar a:hover { color: #ffffff; }
    .ecosystem-bar a[aria-current="true"] { color: #ffffff; font-weight: 700; border-bottom-color: #7fb0ff; }
    .ecosystem-bar .ecosystem-what { color: #8b949e; font-size: 0.8rem; font-weight: 400; }
    @media screen and (max-width: 1055px) {
      .ecosystem-bar .ecosystem-label, .ecosystem-bar .ecosystem-what { display: none; }
    }
    /* On wide screens Documenter pins its sidebar to the viewport: pin the bar above it. */
    @media screen and (min-width: 1056px) {
      .ecosystem-bar { position: fixed; top: 0; left: 0; right: 0; height: ${HEIGHT}; z-index: 30; flex-wrap: nowrap; }
      html { scroll-padding-top: ${HEIGHT}; }
      body { padding-top: ${HEIGHT}; }
      html #documenter .docs-sidebar { top: ${HEIGHT}; height: calc(100vh - ${HEIGHT}); }
    }
  `;

  const bar = document.createElement("nav");
  bar.className = "ecosystem-bar";
  bar.setAttribute("aria-label", "Filtration ecosystem");
  const label = document.createElement("span");
  label.className = "ecosystem-label";
  label.textContent = "Filtration ecosystem";
  bar.append(label);
  for (const site of SITES) {
    const href = new URL(site.path, root);
    const link = document.createElement("a");
    link.href = href;
    link.textContent = site.name;
    link.setAttribute("aria-current", String(location.pathname.startsWith(href.pathname)));
    const what = document.createElement("span");
    what.className = "ecosystem-what";
    what.textContent = site.what;
    link.append(what);
    bar.append(link);
  }

  function insert() {
    document.head.append(style);
    document.body.prepend(bar);
  }
  if (document.body) insert();
  else document.addEventListener("DOMContentLoaded", insert);
})();
