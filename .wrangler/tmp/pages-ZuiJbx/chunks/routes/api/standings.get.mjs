import{d as t,u as a,c as s}from"../../nitro/nitro.mjs";const n=t(async t=>{const n=a().public.apiUrl;try{return await $fetch(`${n}/standings`)}catch(t){throw s({statusCode:500,statusMessage:"Failed to fetch standings data"})}});export{n as default};
//# sourceMappingURL=standings.get.mjs.map
