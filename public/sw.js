if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-a186a8f5"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/F10xZMMgJ5ae6HodWPIsc/_buildManifest.js",revision:"db769e218bdfbcae22b4b50f46dd2be1"},{url:"/_next/static/F10xZMMgJ5ae6HodWPIsc/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/108.eb146a16b8827604.js",revision:"eb146a16b8827604"},{url:"/_next/static/chunks/11.2d9b51caa1243206.js",revision:"2d9b51caa1243206"},{url:"/_next/static/chunks/125-4c34baf5a7e30b19.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/187.30714b092ae71395.js",revision:"30714b092ae71395"},{url:"/_next/static/chunks/241-d0e5399738205dd3.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/242.07ef2706d5f30d47.js",revision:"07ef2706d5f30d47"},{url:"/_next/static/chunks/244-6fbb6382c86195d6.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/262.7a55c37cae2e101d.js",revision:"7a55c37cae2e101d"},{url:"/_next/static/chunks/266.c3f2e620ff9451c8.js",revision:"c3f2e620ff9451c8"},{url:"/_next/static/chunks/30.af11b2ccb464330e.js",revision:"af11b2ccb464330e"},{url:"/_next/static/chunks/306.574d70c8e3e19646.js",revision:"574d70c8e3e19646"},{url:"/_next/static/chunks/345.b40fe591760eff0c.js",revision:"b40fe591760eff0c"},{url:"/_next/static/chunks/399.f04fdc5774393660.js",revision:"f04fdc5774393660"},{url:"/_next/static/chunks/454.16ca160b47402198.js",revision:"16ca160b47402198"},{url:"/_next/static/chunks/502.38196d3686489492.js",revision:"38196d3686489492"},{url:"/_next/static/chunks/515.1e46629cea4280d4.js",revision:"1e46629cea4280d4"},{url:"/_next/static/chunks/525.6f4bc8d77ce71067.js",revision:"6f4bc8d77ce71067"},{url:"/_next/static/chunks/547-f8160cd67b2d0c21.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/584.5e50e11ae3247803.js",revision:"5e50e11ae3247803"},{url:"/_next/static/chunks/59925f94-a25b549daf0e5b9f.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/64-a74d34391971b54d.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/656.eabaeb4cb2c0e946.js",revision:"eabaeb4cb2c0e946"},{url:"/_next/static/chunks/831-1e4d08c3e6a4ddd0.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/837.007984a52ad41066.js",revision:"007984a52ad41066"},{url:"/_next/static/chunks/839-c0f646140ffdec31.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/890-832805ccdcd7595c.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/8e5a698c-4e06674d2251d7c3.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/902.715cfeb314c10b07.js",revision:"715cfeb314c10b07"},{url:"/_next/static/chunks/938.c5b859ff08ce46a5.js",revision:"c5b859ff08ce46a5"},{url:"/_next/static/chunks/952.437d1d5620052bf7.js",revision:"437d1d5620052bf7"},{url:"/_next/static/chunks/98-82da215fcd5dfa45.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/996.2dbc32fb3302a579.js",revision:"2dbc32fb3302a579"},{url:"/_next/static/chunks/app/about/page-439a73c5da2bef5f.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/app/event/%5Bslug%5D/page-6e6b7cc4a4ef8a94.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/app/home/page-cc91e7558a8e44f6.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/app/layout-88034dff553481b9.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/app/overview/page-9a254c125ff9e10e.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/app/page-6937349881a4b044.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/app/ship/page-7e496fa1b18c55c3.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/bce60fc1-7d25e6cd85d21858.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/framework-89837f5784be6e42.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/main-app-7c6d269289e67b24.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/main-c6f0a877fb55729b.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/pages/_app-b3be15c38839fee9.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/pages/_error-4f74552e9de18005.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-08c11bb1c013ea44.js",revision:"F10xZMMgJ5ae6HodWPIsc"},{url:"/_next/static/css/31a0c1657eadacbb.css",revision:"31a0c1657eadacbb"},{url:"/_next/static/css/530ba8815fdfbc80.css",revision:"530ba8815fdfbc80"},{url:"/_next/static/media/HoratioNelson1.239fef78.png",revision:"86e132ba705d915c19f0dca10082e7c4"},{url:"/_next/static/media/cloudy_background.259a3e4f.png",revision:"259a3e4f"},{url:"/_next/static/media/sails.e264809a.png",revision:"a5fbc2e8d4201bbb283cfefc0b90de90"},{url:"/_next/static/media/victory.913676ff.png",revision:"5b9bea353ea96c0d9f92aa11e78364e2"},{url:"/_next/static/media/victory2.f14d8dad.png",revision:"f911f90757329e96d612366e2ac77f1c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!!e&&!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
