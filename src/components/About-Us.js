import { component, html, useState, useEffect } from "haunted";
import { getText, stringToHTML } from "../tools/utils";
import { marked } from "marked";
import aboutUsText from "../../content/about-us.md?url";
import "haunted-router";

marked.setOptions({
  breaks: true,
});

const AboutUs = () => {
  const [markupText, setMarkupText] = useState();

  useEffect(async () => {
    const text = await getText(aboutUsText);
    const markupStr = marked(text);
    setMarkupText(stringToHTML(markupStr));
  }, []);

  return html`<div>
    <header>
      <div class="container">
        <nav class="navbar navbar-dark bg-transparenet">
          <a class="navbar-brand" href="#"> The Sacred Everything </a>
          <span class="navbar-text ml-auto d-none d-sm-inline-block"> </span>
          <span class="navbar-text d-none d-sm-inline-block">
            <a is="router-link" href="/about-us">About Us</a>
          </span>
        </nav>
      </div>
    </header>
    <main class="my-auto">
      <div class="container">
        <h1 class="page-title">The Sacred Everything</h1>
        <p class="page-description">${markupText ? markupText : ``}</p>
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

customElements.define("about-us", component(AboutUs, { useShadowDOM: false }));
