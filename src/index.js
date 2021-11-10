import "./components/Main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/css/bd-coming-soon.css";
import "../assets/css/style.css"
import { mainRoutes } from "./router.js";
import { html, component, useState } from "haunted";
import { useRoutes } from "haunted-router";

const App = () => {
  const routeResult = useRoutes(mainRoutes);
  /* const screenWidth = useState(
    window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
  );
  console.log(screenWidth); */
  return html`${routeResult}`;
};
customElements.define("app-page", component(App, { useShadowDOM: false }));
