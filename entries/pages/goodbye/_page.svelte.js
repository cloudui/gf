import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 5;
  return `<main><section class="card bg-white mx-5 md:w-1/2 h-2/3 opacity-90"><div class="card-body items-center text-center"><h2 class="text-5xl font-bold pb-10" data-svelte-h="svelte-57k4wj">Sorry, it&#39;s time to die.</h2> ${`<span class="countdown text-5xl text-bold pb-10 text-error">${escape(count)}</span>`}</div></section></main>`;
});
export {
  Page as default
};
