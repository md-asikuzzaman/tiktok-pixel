'use client';

import { useEffect } from 'react';
import { injectTikTokPixel } from '../core/inject';

export function useTikTokReact(
  pixelId: string,
  location?: any,
  debug?: boolean,
) {
  useEffect(() => {
    injectTikTokPixel(pixelId, debug);
  }, [pixelId, debug]);

  useEffect(() => {
    if (window.ttq) {
      window.ttq.page();
    }
  }, [location]);
}
