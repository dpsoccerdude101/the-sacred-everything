import { component, html } from "haunted";

const LinkTree = () => {
  return html`<img class="logo" src="" alt="" />`;
};

customElements.define(
  "link-tree",
  component(LinkTree, { useShadowDOM: false })
);
