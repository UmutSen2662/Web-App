if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>r(e,t),f={module:{uri:t},exports:l,require:o};s[t]=Promise.all(i.map((e=>f[e]||o(e)))).then((e=>(n(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/browser-Cnx2uW6y.js",revision:null},{url:"assets/index-C5_I-tfw.css",revision:null},{url:"assets/index-TrFFfGH2.js",revision:null},{url:"index.html",revision:"70907fa57a3c1107a55b006975750996"},{url:"registerSW.js",revision:"9d7c6346cfcc1f3e30140c339668fb22"},{url:"scheduler any.png",revision:"f5fba2bdcb92034fd8d19d4e5864f9d0"},{url:"scheduler maskable.png",revision:"09af93e3e82f62935ff56d702d9c635b"},{url:"manifest.webmanifest",revision:"69595788911521231a1b16665fd0b6b5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
