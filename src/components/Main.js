import { component, html } from "haunted";

const Main = () => {
  return html`<div>
    <header>
      <div class="container">
        <nav class="navbar navbar-dark bg-transparenet">
          <a class="navbar-brand" href="#"> The Sacred Everything </a>
          <span class="navbar-text ml-auto d-none d-sm-inline-block"> </span>
          <span class="navbar-text d-none d-sm-inline-block">
            <a href="mailto:travis@thesacredeverything.com "
              >travis@thesacredeverything.com</a
            ></span
          >
        </nav>
      </div>
    </header>
    <main class="my-auto">
      <div class="container">
        <h1 class="page-title">The Sacred Everything</h1>
        <p class="page-description">
          A podcast that asks,
          <i
            >“What would the world look like if we treated ourselves, our
            communities, and the natural world as sacred?”</i
          >
        </p>
        <p>Additional Resources</p>
        <nav class="footer-social-links">
          <a href="https://medium.com/@travis.p.sheehan" class="social-link"
            ><i class="mdi mdi-medium"></i
          ></a>
        </nav>
      </div>
    </main>
    >
  </div>`;
};

customElements.define(
  "main-component",
  component(Main, { useShadowDOM: false })
);