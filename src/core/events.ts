"use client";

import { TikTokEvent } from "../types";

export const track = (
  event: TikTokEvent,
  data?: object
) => {
  if (
    typeof window !== "undefined" &&
    window.ttq
  ) {
    window.ttq.track(event, data);
  } else if (
    (globalThis as any).process?.env?.NODE_ENV === "development"
  ) {
    console.warn(
      `[TikTok Pixel] "${event}" fired before initialization`
    );
  }
};

export const page = () => {
  if (
    typeof window !== "undefined" &&
    window.ttq
  ) {
    window.ttq.page();
  }
};