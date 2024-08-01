

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/memories/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.BQdCHFp4.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/chunks/index.BPOZuHRv.js"];
export const stylesheets = [];
export const fonts = [];
