if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const u=e=>i(e,r),t={module:{uri:r},exports:l,require:u};s[r]=Promise.all(n.map((e=>t[e]||u(e)))).then((e=>(o(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mawdoo3"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.726c38c4.css",revision:null},{url:"/css/chunk-vendors.61300c1d.css",revision:null},{url:"/fonts/bootstrap-icons.afb4c7d9.woff2",revision:null},{url:"/fonts/bootstrap-icons.eb8b2761.woff",revision:null},{url:"/img/6.bd538a68.jpg",revision:null},{url:"/img/broad.84f58429.jpg",revision:null},{url:"/img/polygons.bd538a68.jpg",revision:null},{url:"/img/slick.f895cfdf.svg",revision:null},{url:"/index.html",revision:"99055898d67976edff4872d5b30a00e0"},{url:"/js/app.3d4da2b3.js",revision:null},{url:"/js/chunk-vendors.7279a6bb.js",revision:null},{url:"/manifest.json",revision:"5e5cd39e34d0709872a27d1d0363fce8"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
