"use client";

import { useEffect } from "react";
import { injectTikTokPixel } from "../core/inject";

export function useTikTokReact(
  pixelId: string,
  location?: unknown,
  debug?: boolean,
) {
  useEffect(() => {
    injectTikTokPixel(pixelId, debug);
  }, [pixelId, debug]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.page();
    }
  }, [location]);
}

export default useTikTokReact;
