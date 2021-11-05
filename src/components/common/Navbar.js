import { html, component } from "haunted";

const Navbar = () => {
  return html`
    <nav class="navbar navbar-dark bg-transparenet">
          <a is="router-link" class="navbar-brand" href="/"> The Sacred Everything </a>
          <span class="navbar-text ml-auto d-none d-sm-inline-block"> </span>
          <span class="navbar-text d-none d-sm-inline-block">
            <a is="router-link" href="/about-us">About Us</a>
          </span>
        </nav>
    <!-- End Nav Bar -->
  `;
}
customElements.define("nav-bar", component(Navbar, { useShadowDOM: false }));