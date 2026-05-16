'use strict';

var navigation = require('next/navigation');
var Script = require('next/script');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Script__default = /*#__PURE__*/_interopDefault(Script);

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
  const pathname = navigation.usePathname();
  const searchParams = navigation.useSearchParams();
  react.useEffect(() => {
    if (window.ttq) {
      window.ttq.page();
    }
  }, [pathname, searchParams]);
  return /* @__PURE__ */ jsxRuntime.jsx(Script__default.default, { id: "tiktok-pixel-next", strategy: "afterInteractive", children: createTikTokSnippet(pixelId, debug) });
}
function TikTokPixelNextProvider(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(react.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntime.jsx(PixelLogic, { ...props }) });
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
  react.useEffect(() => {
    injectTikTokPixel(pixelId, debug);
  }, [pixelId, debug]);
  react.useEffect(() => {
    if (window.ttq) {
      window.ttq.page();
    }
  }, [location]);
}

exports.TikTokPixelNextProvider = TikTokPixelNextProvider;
exports.track = track;
exports.useTikTokReact = useTikTokReact;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map