import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { Suspense, useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/core/events.ts
var track = (event, data) => {
  if (typeof window !== "undefined" && window.ttq) {
    window.ttq.track(event, data);
  } else if (globalThis.process?.env?.NODE_ENV === "development") {
    console.warn(`[TikTok Pixel] "${event}" fired before initialization`);
  }
};

// src/core/snippet.ts
var createTikTokSnippet = (id, debug) => `
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

  ttq.load('${id}');

  ${debug ? "ttq.debug();" : ""}
}(window, document, 'ttq');
`;
function PixelLogic({ pixelId, debug }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (window.ttq) {
      window.ttq.page();
    }
  }, [pathname, searchParams]);
  return /* @__PURE__ */ jsx(Script, { id: "tiktok-pixel-next", strategy: "afterInteractive", children: createTikTokSnippet(pixelId, debug) });
}
function TikTokPixelNextProvider(props) {
  return /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(PixelLogic, { ...props }) });
}

// src/core/inject.ts
var injectTikTokPixel = (id, debug) => {
  if (typeof window === "undefined") return;
  if (window.ttq) return;
  const script = document.createElement("script");
  script.innerHTML = createTikTokSnippet(id, debug);
  document.head.appendChild(script);
};

// src/react/index.tsx
function useTikTokReact(pixelId, location, debug) {
  useEffect(() => {
    injectTikTokPixel(pixelId, debug);
  }, [pixelId, debug]);
  useEffect(() => {
    if (window.ttq) {
      window.ttq.page();
    }
  }, [location]);
}

export { TikTokPixelNextProvider, track, useTikTokReact };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map