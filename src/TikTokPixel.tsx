"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect } from "react";
import { createTikTokSnippet } from "./core/snippet";
import { PixelOptions } from "./types";

function PixelLogic({ id, debug }: PixelOptions) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.ttq) {
      window.ttq.page();
    }
  }, [pathname, searchParams]);

  return (
    <Script id="tiktok-pixel-next" strategy="afterInteractive">
      {createTikTokSnippet(id, debug)}
    </Script>
  );
}

export function TikTokPixel(props: PixelOptions) {
  return (
    <Suspense fallback={null}>
      <PixelLogic {...props} />
    </Suspense>
  );
}

// Alias for backwards compatibility
export const TikTokPixelNext = TikTokPixel;
