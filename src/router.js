//const components = import.meta.glob("./components/*.js");
import "./components/Main.js";
import "./components/About-Us.js";
import { html } from "haunted";
const mainRoutes = {
  "/": () => html`<main-component></main-component>`,
  "/about-us": () => html`<about-us></about-us>`,
};

export { mainRoutes };
