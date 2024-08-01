import * as server from '../entries/pages/auth/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/auth/+page.server.js";
export const imports = ["_app/immutable/nodes/6.DQdLR9Hd.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/chunks/index.BPOZuHRv.js","_app/immutable/chunks/entry.De0vAQbM.js"];
export const stylesheets = [];
export const fonts = [];
