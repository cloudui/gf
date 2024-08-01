export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/background.webp","images/booboo/emeric.jpeg","images/booboo/emily.jpeg","images/booboo/fireworks.gif","images/booboo/pochacco.gif","images/booboo/pochacco2.gif","images/catgif.gif","images/explosion.gif","robots.txt"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".jpeg":"image/jpeg",".gif":"image/gif",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.B0ff6Gtb.js","app":"_app/immutable/entry/app.DTwIBvf6.js","imports":["_app/immutable/entry/start.B0ff6Gtb.js","_app/immutable/chunks/entry.De0vAQbM.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/entry/app.DTwIBvf6.js","_app/immutable/chunks/scheduler.Cp24rM3s.js","_app/immutable/chunks/index.BPOZuHRv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js'))
		],
		routes: [
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/booboo",
				pattern: /^\/booboo\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/booboo/1",
				pattern: /^\/booboo\/1\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/booboo/2",
				pattern: /^\/booboo\/2\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/booboo/3",
				pattern: /^\/booboo\/3\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/booboo/4",
				pattern: /^\/booboo\/4\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/goodbye",
				pattern: /^\/goodbye\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/memories",
				pattern: /^\/memories\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/memories/1",
				pattern: /^\/memories\/1\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/memories/2",
				pattern: /^\/memories\/2\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/memories/3",
				pattern: /^\/memories\/3\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/memories/4",
				pattern: /^\/memories\/4\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/memories/5",
				pattern: /^\/memories\/5\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/timeline",
				pattern: /^\/timeline\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 18 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
