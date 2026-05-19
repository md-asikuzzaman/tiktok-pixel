"use client";import{useEffect as p,Suspense as s}from"react";import{usePathname as c,useSearchParams as d}from"next/navigation";import f from"next/script";var i=(t,e)=>`
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
`;import{Fragment as u,jsx as n,jsxs as T}from"react/jsx-runtime";function k(){let t=c(),e=d();return p(()=>{typeof window<"u"&&window.ttq&&window.ttq.page()},[t,e]),null}function l({children:t,pixelId:e,debug:o}){return T(u,{children:[n(f,{id:"next-tiktok-pixel",strategy:"afterInteractive",children:i(e,o)}),n(s,{fallback:null,children:n(k,{})}),t]})}import{useEffect as a}from"react";var r=(t,e)=>{if(typeof window>"u"||window.ttq)return;let o=document.createElement("script");o.innerHTML=i(t,e),document.head.appendChild(o)};function m(t,e,o){a(()=>{r(t,o)},[t,o]),a(()=>{typeof window<"u"&&window.ttq&&window.ttq.page()},[e])}var w=(t,e)=>{if(typeof window<"u"&&window.ttq){window.ttq.track(t,e);return}typeof window>"u"||globalThis?.process?.env?.NODE_ENV==="development"&&console.warn(`[next-tiktok-pixel] "${t}" fired before initialization`)};export{l as TikTokProvider,w as track,m as useTikTokReact};
//# sourceMappingURL=client.mjs.map