import { c as create_ssr_component, a as add_attribute } from "../../../../chunks/ssr.js";
const emeric = "/_app/immutable/assets/emeric.fyJ1heB4.jpeg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="text-2xl font-bold" data-svelte-h="svelte-1nbii38">Oct 16, 2023</h2> <p class="text-xl mb-2" data-svelte-h="svelte-1qq378l">Our first selfie together</p> <img${add_attribute("src", emeric, 0)} alt="us" class="w-1/3 rounded-xl mb-2"> <p class="mb-2 md:px-5" data-svelte-h="svelte-i6wj74">I couldn&#39;t believe I took a pic with a cute girl...</p> <a class="btn btn-info" href="/memories/2" data-svelte-h="svelte-s6hus0">Next &gt;</a>`;
});
export {
  Page as default
};
