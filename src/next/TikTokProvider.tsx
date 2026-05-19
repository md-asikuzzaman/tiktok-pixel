"use client";

import { useEffect, Suspense, type ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

import { createTikTokSnippet } from "../core/snippet";

type TikTokProviderProps = {
  children: ReactNode;
  pixelId: string;
  debug?: boolean;
};

function TikTokPageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ttq) {
      (window as any).ttq.page();
    }
  }, [pathname, searchParams]);

  return null;
}

export function TikTokProvider({
  children,
  pixelId,
  debug,
}: TikTokProviderProps) {
  return (
    <>
      <Script id="next-tiktok-pixel" strategy="afterInteractive">
        {createTikTokSnippet(pixelId, debug)}
      </Script>

      <Suspense fallback={null}>
        <TikTokPageTracker />
      </Suspense>

      {children}
    </>
  );
}

export default TikTokProvider;
