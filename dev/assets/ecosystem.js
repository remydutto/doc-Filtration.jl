// Loads the header shared by the documentation sites hosted on doc-Filtration.jl, from the root of
// the hosting site (see shared/ecosystem.js in that repository).
const script = document.createElement("script");
script.src = new URL("../../shared/ecosystem.js", document.currentScript.src);
document.head.append(script);
