

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/goodbye/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.Dk4kKL-d.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/chunks/index.BPOZuHRv.js"];
export const stylesheets = [];
export const fonts = [];
