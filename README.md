# tiktok-pixel

> A small, framework-friendly library to integrate the TikTok Pixel in Next.js, React (Vite), and other environments. Focused on developer experience with typed exports, easy server/client usage, and simple event tracking.

**Highlights**

- Lightweight, ESM + CJS bundles in `dist/`.
- TypeScript types included.
- Ready-to-publish package that only contains build artifacts.

**Installation**

```bash
npm install tiktok-pixel
# or
yarn add tiktok-pixel
```

**Quick Start**

- Build the package locally: `npm run build` (configured with `tsup`).
- Import the exports you need in your app (Next.js or React/Vite).

**Next.js Usage**

Use the `TikTokPixelNext` component to inject the TikTok Pixel on Next.js pages or in `_app.tsx`.

Example (`pages/_app.tsx`):

```tsx
import type { AppProps } from "next/app";
import { TikTokPixelNext } from "tiktok-pixel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TikTokPixelNext id="YOUR_PIXEL_ID" />
      <Component {...pageProps} />
    </>
  );
}
```

Track events anywhere in your app by importing `track`:

```ts
import { track } from "tiktok-pixel";

track("AddToCart", {
  value: 20,
  currency: "USD",
});
```

Notes:

- The `TikTokPixelNext` component injects the pixel on the client only.
- `track` is safe to call from client-side code after the pixel is initialized.

**React (Vite) Usage**

If you're using `react-router` (Vite or CRA), use the `useTikTokReact` hook to initialize the pixel and react to route changes.

Example (`App.tsx`):

```tsx
import { useLocation } from "react-router-dom";
import { useTikTokReact } from "tiktok-pixel";

function App() {
  const location = useLocation();

  // Initialize pixel and automatically track page views when `location` changes
  useTikTokReact("YOUR_PIXEL_ID", location);

  return <div>Hello</div>;
}

export default App;
```

Track events (same `track` API):

```ts
import { track } from "tiktok-pixel";

function onAddToCart() {
  track("AddToCart", { value: 20, currency: "USD" });
}
```

**API Reference (quick)**

- `TikTokPixelNext`
  - Props:
    - `id: string` (required) — your Pixel ID.
    - `options?: Record<string, any>` — optional settings for advanced integrations.
- `useTikTokReact(pixelId: string, location: Location, options?)`
  - Hook for SPA route-aware integration (call inside components).
- `track(eventName: string, payload?: Record<string, any>)`
  - Send a custom event to TikTok.

Example: combine hook + track

```tsx
import { useTikTokReact, track } from "tiktok-pixel";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  useTikTokReact("YOUR_PIXEL_ID", location);

  return (
    <button onClick={() => track("Purchase", { value: 100, currency: "USD" })}>
      Buy
    </button>
  );
}
```

**Development & Building**

- Build locally with:

```bash
npm run build
```

- Validate the publishable files with:

```bash
npm pack --dry-run
```

The package is configured to publish only the `dist/` artifacts and `package.json` (see `.npmignore`).

**Publishing**

1. Bump the version in `package.json`.
2. Run `npm run build`.
3. Validate with `npm pack --dry-run`.
4. Run `npm publish` or use your CI pipeline.

**Contributing**

- Open issues for feature requests or bugs.
- Send pull requests against `main` with a clear description and tests where applicable.

**License**

MIT — see `package.json` for details.

---

If you'd like, I can also scaffold a minimal example app:

- `examples/next` — small Next.js demo using `TikTokPixelNext`.
- `examples/react-vite` — Vite + React demo using `useTikTokReact`.

Tell me which example you'd like and I will scaffold it.
