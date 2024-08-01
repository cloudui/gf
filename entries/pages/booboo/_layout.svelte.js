import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><section class="card bg-white mx-5 md:w-1/2 min-h-2/3"><div class="card-body items-center text-center">${slots.default ? slots.default({}) : ``}</div></section></main>`;
});
export {
  Layout as default
};
