import type { TikTokEvent, TikTokEventData } from "../types";

// Server-safe `track` utility. Can be imported in RSC/server code.
export const track = (event: TikTokEvent, data?: TikTokEventData) => {
  if (typeof window !== "undefined" && window.ttq) {
    window.ttq.track(event, data);
    return;
  }

  // On server or before SDK initialization, it's a no-op. Keep a quiet
  // development warning to help debugging in client-side development only.
  if (typeof window === "undefined") return;

  if ((globalThis as any)?.process?.env?.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.warn(`[tiktok-pixel] "${event}" fired before initialization`);
  }
};
