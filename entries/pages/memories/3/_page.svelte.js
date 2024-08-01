import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Carousel } from "../../../../chunks/Carousel.js";
const emp1 = "/_app/immutable/assets/emp1.8Gx_JZOw.jpeg";
const emp2 = "/_app/immutable/assets/emp2.BsLO1VzD.jpeg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="text-2xl font-bold" data-svelte-h="svelte-1astn1i">Feb 17, 2023</h2> <p class="text-xl mb-2" data-svelte-h="svelte-d9eys0">Invited to your 21st bday party</p> ${validate_component(Carousel, "Carousel").$$render($$result, { images: [emp1, emp2] }, {}, {})} <p class="mb-2 px-5 text-left" data-svelte-h="svelte-1tqjfg4">Came to your party in a small pink sweater, which I quickly had to change out of. Took some pics with OG gym bros + Vinh w/o Ashley...seems like 
  I knocked out at some point. Remember thinking you looked cute in your dress 😳.</p> <a class="btn btn-info" href="/memories/4" data-svelte-h="svelte-cr9j92">Next &gt;</a>`;
});
export {
  Page as default
};
