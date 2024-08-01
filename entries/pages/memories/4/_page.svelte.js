import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Carousel } from "../../../../chunks/Carousel.js";
const p1 = "/_app/immutable/assets/p1.DVA-FE9g.jpeg";
const p2 = "/_app/immutable/assets/p2.B4dBK6R6.jpeg";
const p3 = "/_app/immutable/assets/p3.CVvRN0Vq.jpeg";
const p4 = "/_app/immutable/assets/p4.BO2ISWWJ.jpeg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="text-2xl font-bold" data-svelte-h="svelte-v5mo02">Apr 13, 2023</h2> <p class="text-xl mb-2" data-svelte-h="svelte-1trk8t7">The random hangout of me, you, and Vinh.</p> ${validate_component(Carousel, "Carousel").$$render($$result, { images: [p1, p2, p3, p4] }, {}, {})} <p class="mb-2 px-5 text-left" data-svelte-h="svelte-g9xhif">He really thought I was lonely...I had crutches, and you had a lot of tea to spill. Started off 
  many weeks of us hanging out together. Study sessions in VMH, McKeldin, and Patterson for finals.
  Had so much fun talking to you. The starting event that caused it all, Kdramas and all. Sushi bake was so good.</p> <a class="btn btn-info" href="/memories/5" data-svelte-h="svelte-147dfev">Next &gt;</a>`;
});
export {
  Page as default
};
