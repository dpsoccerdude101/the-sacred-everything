import { html, component } from "haunted";

const Navbar = () => {
  return html`
    <nav class="navbar navbar-dark bg-transparenet">
      <a is="router-link" class="navbar-brand" href="/"
        ><img id="navbar-logo" src="../../../assets/images/logo.svg" alt="The Sacred Everything Logo"
      /></a>
      <span class="navbar-text ml-auto d-none d-sm-inline-block"> </span>
      <span class="navbar-text d-none d-sm-inline-block">
        <a is="router-link" href="/about-us">About Us</a>
      </span>
    </nav>
    <!-- End Nav Bar -->
  `;
};
customElements.define("nav-bar", component(Navbar, { useShadowDOM: false }));
