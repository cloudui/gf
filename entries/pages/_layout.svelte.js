import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".app.svelte-a08u1e{display:flex;flex-direction:column;min-height:100vh}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\timport '../app.css';\\n<\/script>\\n\\n<div class=\\"app\\">\\n\\t<!-- <Header /> -->\\n\\t<slot />\\n\\n</div>\\n\\n<style>\\n\\t.app {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tmin-height: 100vh;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAWC,kBAAK,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,KACb"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-a08u1e"> ${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
