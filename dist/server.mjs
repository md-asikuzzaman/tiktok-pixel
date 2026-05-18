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
export {
  track
};
//# sourceMappingURL=server.mjs.map