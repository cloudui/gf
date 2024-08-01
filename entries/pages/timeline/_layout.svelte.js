import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="flex flex-col items-center w-full box-border h-screen"><div class="card bg-white mx-5 md:w-1/2 min-h-2/3 overflow-scroll my-10"><div class="flex card-body">${slots.default ? slots.default({}) : ``} <span class="flex justify-center" data-svelte-h="svelte-fpfia2"><a class="btn btn-info mt-5 text-center" href="/memories">Next &gt;</a></span></div></div></section>`;
});
export {
  Layout as default
};
