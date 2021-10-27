import "./components/Main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "material-components-web/dist/material-components-web.min.css";
import "../assets/css/bd-coming-soon.css";

import { html, component } from "haunted";

const App = () => {
  return html`<main-component></main-component>`;
};
customElements.define("app-page", component(App, { useShadowDOM: false }));
