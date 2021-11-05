import { html, component } from "haunted";

const Footer = () => {
  return html`
    <nav class="footer-social-links">
      <a href="https://medium.com/@travis.p.sheehan" class="social-link"
        ><i class="mdi mdi-medium"></i
      ></a>
    </nav>
  `;
};
customElements.define("foot-er", component(Footer, { useShadowDOM: false }));
