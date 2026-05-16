'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { Suspense, useEffect } from 'react';
import { createTikTokSnippet } from '../core/snippet';
import type { PixelOptions } from '@/types';

function PixelLogic({ pixelId, debug }: PixelOptions) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.ttq) {
      window.ttq.page();
    }
  }, [pathname, searchParams]);

  return (
    <Script id='tiktok-pixel-next' strategy='afterInteractive'>
      {createTikTokSnippet(pixelId, debug)}
    </Script>
  );
}

export function TikTokPixelNextProvider(props: PixelOptions) {
  return (
    <Suspense fallback={null}>
      <PixelLogic {...props} />
    </Suspense>
  );
}
