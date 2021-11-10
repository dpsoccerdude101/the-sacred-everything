import { component, html, useState, useEffect } from "haunted";
import "./common/Navbar.js";
import "./common/Footer.js";
import { getText, stringToHTML } from "../tools/utils";
import { marked } from "marked";
import cmsText from "../../content/page-description.md?url";

marked.setOptions({
  breaks: false,
});

const Main = () => {
  const [markupText, setMarkupText] = useState();

  useEffect(async () => {
    const text = await getText(cmsText);
    const markupStr = marked(text);
    setMarkupText(stringToHTML(markupStr));
  }, []);

  return html`<div>
    <header>
      <div class="container">
        <nav-bar></nav-bar>
      </div>
    </header>
    <main class="my-auto">
      <div class="container">
        <h1 class="page-title">The Sacred Everything</h1>
        <p class="page-description">${markupText ? markupText : ``}</p>
        <foot-er></foot-er>
      </div>
    </main>
  </div>`;
};

customElements.define(
  "main-component",
  component(Main, { useShadowDOM: false })
);
