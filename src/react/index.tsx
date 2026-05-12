"use client";

import { useEffect } from "react";

import { injectTikTokPixel } from "../core/inject";

export function useTikTokReact(
  id: string,
  location?: any,
  debug?: boolean
) {
  useEffect(() => {
    injectTikTokPixel(id, debug);
  }, [id, debug]);

  useEffect(() => {
    if (window.ttq) {
      window.ttq.page();
    }
  }, [location]);
}