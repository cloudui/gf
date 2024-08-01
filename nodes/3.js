

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/memories/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.SBYBxq2K.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/chunks/index.BPOZuHRv.js"];
export const stylesheets = [];
export const fonts = [];
