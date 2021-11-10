import { html, component } from "haunted";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const Footer = () => {
  return html`
    <p>Additional Resources:</p>
    <nav class="footer-social-links">
      <a href="https://medium.com/@travis.p.sheehan" class="social-link"
        ><i class="fab fa-medium"></i
      ></a>
    </nav>
  `;
};
customElements.define("foot-er", component(Footer, { useShadowDOM: false }));
