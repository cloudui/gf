import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-t32ptj_END -->`, ""} <main data-svelte-h="svelte-6nzzip"><section class="card bg-white mx-5 md:w-1/2 opacity-90"><div class="card-body items-center text-center"><h2 class="text-5xl font-bold pb-2">Welcome!</h2> <p class="text-xl pb-2">You can only go ahead if your name is Emily Tuong-Vi Nguyen.</p> <p class="pb-2">Are you Emily?</p> <div class="card-actions justify-end"><a class="btn btn-success" href="/auth">Yes</a> <a class="btn btn-error" href="/goodbye">No</a></div></div></section> </main>`;
});
export {
  Page as default
};
