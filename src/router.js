//const components = import.meta.glob("./components/*.js");
import "./components/Main.js";
import "./components/LinkTree.js";
import { html } from "haunted";
const mainRoutes = {
  "/": () => html`<main-component></main-component>`,
  "/mobile": () => html`<link-tree></link-tree>`,
};

export { mainRoutes };
