import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="overflow-hidden"><section class="mx-5 md:w-1/2 card bg-white"><div class="card-body items-center h-4/5 overflow-scroll text-center">${slots.default ? slots.default({}) : ``}</div></section></main>`;
});
export {
  Layout as default
};
