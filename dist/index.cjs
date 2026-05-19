"use strict";"use client";var w=Object.create;var r=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var v=(t,e)=>{for(var o in e)r(t,o,{get:e[o],enumerable:!0})},f=(t,e,o,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of y(e))!g.call(t,n)&&n!==o&&r(t,n,{get:()=>e[n],enumerable:!(d=q(e,n))||d.enumerable});return t};var h=(t,e,o)=>(o=t!=null?w(x(t)):{},f(e||!t||!t.__esModule?r(o,"default",{value:t,enumerable:!0}):o,t)),b=t=>f(r({},"__esModule",{value:!0}),t);var _={};v(_,{TikTokProvider:()=>l,track:()=>m,useTikTokReact:()=>T});module.exports=b(_);var p=require("react"),s=require("next/navigation"),k=h(require("next/script"),1);var a=(t,e)=>`
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
`;var i=require("react/jsx-runtime");function P(){let t=(0,s.usePathname)(),e=(0,s.useSearchParams)();return(0,p.useEffect)(()=>{typeof window<"u"&&window.ttq&&window.ttq.page()},[t,e]),null}function l({children:t,pixelId:e,debug:o}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k.default,{id:"next-tiktok-pixel",strategy:"afterInteractive",children:a(e,o)}),(0,i.jsx)(p.Suspense,{fallback:null,children:(0,i.jsx)(P,{})}),t]})}var c=require("react");var u=(t,e)=>{if(typeof window>"u"||window.ttq)return;let o=document.createElement("script");o.innerHTML=a(t,e),document.head.appendChild(o)};function T(t,e,o){(0,c.useEffect)(()=>{u(t,o)},[t,o]),(0,c.useEffect)(()=>{typeof window<"u"&&window.ttq&&window.ttq.page()},[e])}var m=(t,e)=>{if(typeof window<"u"&&window.ttq){window.ttq.track(t,e);return}typeof window>"u"||globalThis?.process?.env?.NODE_ENV==="development"&&console.warn(`[next-tiktok-pixel] "${t}" fired before initialization`)};0&&(module.exports={TikTokProvider,track,useTikTokReact});
//# sourceMappingURL=index.cjs.map