import { c as create_ssr_component, a as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let studentID = "";
  let passcode = "";
  let stardewName = "";
  return `<main><section class="w-full h-full flex items-center justify-center items-center"><div class="card bg-white w-full mx-5 md:w-1/2 min-h-2/3"><form class="flex justify-center items-center card-body"><h2 class="text-xl font-bold text-center pb-5" data-svelte-h="svelte-11qrbgz">Not sure I believe you.</h2> <div class="flex flex-col w-full items-center md:w-1/2"> <label class="form-control w-full max-w-xs"><div class="label" data-svelte-h="svelte-7k3j3v"><span class="label-text">What&#39;s your student ID?</span></div> <input type="text" placeholder="Enter your ID" class="${["input input-bordered w-full max-w-xs", ""].join(" ").trim()}"${add_attribute("value", studentID, 0)}> ${``}</label> <label class="form-control w-full max-w-xs"><div class="label" data-svelte-h="svelte-1j8o6mb"><span class="label-text">What&#39;s your phone passcode?</span></div> <input type="password" placeholder="Enter your password" class="${["input input-bordered w-full max-w-xs", ""].join(" ").trim()}"${add_attribute("value", passcode, 0)}> ${``}</label> <label class="form-control w-full max-w-xs"><div class="label" data-svelte-h="svelte-mxc0lj"><span class="label-text">What&#39;s your name on our Stardew Valley save?</span></div> <input type="text" placeholder="Enter the name" class="${[
    "input input-bordered w-full max-w-xs",
    ""
  ].join(" ").trim()}"${add_attribute("value", stardewName, 0)}></label> ${``}</div> <button type="submit" class="btn btn-success mt-5" data-svelte-h="svelte-1aaazvz">Submit</button></form></div></section></main>`;
});
export {
  Page as default
};
