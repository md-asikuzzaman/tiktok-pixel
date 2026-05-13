"use strict";var u=Object.create;var r=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var g=(t,e)=>{for(var o in e)r(t,o,{get:e[o],enumerable:!0})},d=(t,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of q(e))!x.call(t,n)&&n!==o&&r(t,n,{get:()=>e[n],enumerable:!(i=w(e,n))||i.enumerable});return t};var y=(t,e,o)=>(o=t!=null?u(T(t)):{},d(e||!t||!t.__esModule?r(o,"default",{value:t,enumerable:!0}):o,t)),h=t=>d(r({},"__esModule",{value:!0}),t);var S={};g(S,{TikTokPixel:()=>m,TikTokPixelNext:()=>v,page:()=>P,track:()=>b,useTikTokReact:()=>E});module.exports=h(S);var b=(t,e)=>{var o,i;typeof window!="undefined"&&window.ttq?window.ttq.track(t,e):((i=(o=globalThis.process)==null?void 0:o.env)==null?void 0:i.NODE_ENV)==="development"&&console.warn(`[TikTok Pixel] "${t}" fired before initialization`)},P=()=>{typeof window!="undefined"&&window.ttq&&window.ttq.page()};var c=require("next/navigation"),l=y(require("next/script")),p=require("react");var a=(t,e)=>`
!function (w, d, t) {
  w.TiktokAnalyticsObject = t;
  var ttq = w[t] = w[t] || [];

  ttq.methods = [
    "page",
    "track",
    "identify",
    "instances",
    "debug",
    "on",
    "off",
    "once",
    "ready",
    "alias",
    "group",
    "enableCookie",
    "disableCookie"
  ];

  ttq.setAndDefer = function(t, e) {
    t[e] = function() {
      t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
    };
  };

  for (var i = 0; i < ttq.methods.length; i++) {
    ttq.setAndDefer(ttq, ttq.methods[i]);
  }

  ttq.load = function(e, n) {
    var r = "https://analytics.tiktok.com/i18n/pixel/events.js";

    ttq._i = ttq._i || {};
    ttq._i[e] = [];
    ttq._i[e]._u = r;

    ttq._t = ttq._t || {};
    ttq._t[e] = +new Date;

    ttq._o = ttq._o || {};
    ttq._o[e] = n || {};

    var o = d.createElement("script");
    o.type = "text/javascript";
    o.async = true;
    o.src = r + "?sdkid=" + e + "&lib=" + t;

    var a = d.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(o, a);
  };

  ttq.load('${t}');

  ${e?"ttq.debug();":""}
}(window, document, 'ttq');
`;var s=require("react/jsx-runtime");function _({id:t,debug:e}){let o=(0,c.usePathname)(),i=(0,c.useSearchParams)();return(0,p.useEffect)(()=>{window.ttq&&window.ttq.page()},[o,i]),(0,s.jsx)(l.default,{id:"tiktok-pixel-next",strategy:"afterInteractive",children:a(t,e)})}function m(t){return(0,s.jsx)(p.Suspense,{fallback:null,children:(0,s.jsx)(_,{...t})})}var v=m;var f=require("react");var k=(t,e)=>{if(typeof window=="undefined"||window.ttq)return;let o=document.createElement("script");o.innerHTML=a(t,e),document.head.appendChild(o)};function E(t,e,o){(0,f.useEffect)(()=>{k(t,o)},[t,o]),(0,f.useEffect)(()=>{window.ttq&&window.ttq.page()},[e])}0&&(module.exports={TikTokPixel,TikTokPixelNext,page,track,useTikTokReact});
//# sourceMappingURL=index.cjs.map