import { c as create_ssr_component, b as each, a as add_attribute } from "./ssr.js";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  return `<div class="carousel rounded-box w-96">${each(images, (image) => {
    return `<div class="carousel-item h-96"><img${add_attribute("src", image, 0)}${add_attribute("alt", image, 0)} class="max-h-full"> </div>`;
  })} </div>`;
});
export {
  Carousel as C
};
