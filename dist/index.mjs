var u=(t,o)=>{var e,i;typeof window!="undefined"&&window.ttq?window.ttq.track(t,o):((i=(e=globalThis.process)==null?void 0:e.env)==null?void 0:i.NODE_ENV)==="development"&&console.warn(`[TikTok Pixel] "${t}" fired before initialization`)},w=()=>{typeof window!="undefined"&&window.ttq&&window.ttq.page()};import{usePathname as c,useSearchParams as p}from"next/navigation";import f from"next/script";import{Suspense as d,useEffect as l}from"react";var n=(t,o)=>`
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

  ${o?"ttq.debug();":""}
}(window, document, 'ttq');
`;import{jsx as r}from"react/jsx-runtime";function m({id:t,debug:o}){let e=c(),i=p();return l(()=>{window.ttq&&window.ttq.page()},[e,i]),r(f,{id:"tiktok-pixel-next",strategy:"afterInteractive",children:n(t,o)})}function k(t){return r(d,{fallback:null,children:r(m,{...t})})}var b=k;import{useEffect as s}from"react";var a=(t,o)=>{if(typeof window=="undefined"||window.ttq)return;let e=document.createElement("script");e.innerHTML=n(t,o),document.head.appendChild(e)};function N(t,o,e){s(()=>{a(t,e)},[t,e]),s(()=>{window.ttq&&window.ttq.page()},[o])}export{k as TikTokPixel,b as TikTokPixelNext,w as page,u as track,N as useTikTokReact};
//# sourceMappingURL=index.mjs.map