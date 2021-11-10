import { component, html, useState, useEffect } from "haunted";
import "./common/Navbar.js";
import "./common/Footer.js";
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
        <nav-bar></nav-bar>
      </div>
    </header>
    <main class="my-auto">
      <div class="container">
        <h1 class="aboutUs-title">About Us:</h1>
        <p class="page-description">${markupText ? markupText : ``}</p>
        <foot-er></foot-er>
      </div>
    </main>
  </div>`;
};

customElements.define("about-us", component(AboutUs, { useShadowDOM: false }));
