"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.ts
var client_exports = {};
__export(client_exports, {
  TikTokProvider: () => TikTokProvider,
  track: () => track,
  useTikTokReact: () => useTikTokReact
});
module.exports = __toCommonJS(client_exports);

// src/next/TikTokProvider.tsx
var import_react = require("react");
var import_navigation = require("next/navigation");
var import_script = __toESM(require("next/script"), 1);

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

// src/next/TikTokProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function TikTokPageTracker() {
  const pathname = (0, import_navigation.usePathname)();
  const searchParams = (0, import_navigation.useSearchParams)();
  (0, import_react.useEffect)(() => {
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.page();
    }
  }, [pathname, searchParams]);
  return null;
}
function TikTokProvider({
  children,
  pixelId,
  debug
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_script.default, { id: "tiktok-pixel", strategy: "afterInteractive", children: createTikTokSnippet(pixelId, debug) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, { fallback: null, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TikTokPageTracker, {}) }),
    children
  ] });
}

// src/react/hooks.ts
var import_react2 = require("react");

// src/core/inject.ts
var injectTikTokPixel = (id, debug) => {
  if (typeof window === "undefined") return;
  if (window.ttq) return;
  const script = document.createElement("script");
  script.innerHTML = createTikTokSnippet(id, debug);
  document.head.appendChild(script);
};

// src/react/hooks.ts
function useTikTokReact(pixelId, location, debug) {
  (0, import_react2.useEffect)(() => {
    injectTikTokPixel(pixelId, debug);
  }, [pixelId, debug]);
  (0, import_react2.useEffect)(() => {
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.page();
    }
  }, [location]);
}

// src/core/events.ts
var track = (event, data) => {
  if (typeof window !== "undefined" && window.ttq) {
    window.ttq.track(event, data);
    return;
  }
  if (typeof window === "undefined") return;
  if (globalThis?.process?.env?.NODE_ENV === "development") {
    console.warn(`[tiktok-pixel] "${event}" fired before initialization`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TikTokProvider,
  track,
  useTikTokReact
});
//# sourceMappingURL=client.cjs.map