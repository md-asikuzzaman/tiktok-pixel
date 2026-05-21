# next-tiktok-pixel

TikTok Pixel SDK for React & Next.js App Router — type-safe events, ESM + CJS, zero config.

[![npm version](https://img.shields.io/npm/v/next-tiktok-pixel)](https://www.npmjs.com/package/next-tiktok-pixel)
[![npm downloads](https://img.shields.io/npm/dm/next-tiktok-pixel)](https://www.npmjs.com/package/next-tiktok-pixel)
[![License: MIT](https://img.shields.io/npm/l/next-tiktok-pixel)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178C6)](https://www.typescriptlang.org)

---

## Why next-tiktok-pixel?

Most TikTok Pixel libraries were built for the Pages Router. They inject raw scripts, require manual `useEffect` wiring, and break under React Server Components.

`next-tiktok-pixel` is built from the ground up for the **App Router**:

- Wraps the pixel in a single `<TikTokProvider />` — add it once to `app/layout.tsx`, done
- Exposes a tree-shakeable `track()` function callable from any Client Component
- Ships a `useTikTokReact()` hook for React SPA / React Router setups
- Fully typed events — no string typos, no guessing at payload shape
- Dual ESM + CJS output with proper `exports` map and `sideEffects: false`

---

## Features

- ⚡ **Next.js 15 & 16 App Router** ready — works with Turbopack
- 🎯 **Type-safe events** — `TikTokEvent` union type catches mistakes at compile time
- 🧩 **`TikTokProvider`** — wrap once, track everywhere via React context
- 🪝 **`useTikTokReact()`** — headless hook for React SPA / React Router
- 🔷 **Full TypeScript** — types shipped in the package, no `@types/*` needed
- 📦 **Dual ESM + CJS** — works in any bundler, Node.js `>=18.18`
- 🌐 **Server subpath** — `next-tiktok-pixel/server` for safe server-side imports

---

## Installation

```bash
# pnpm
pnpm add next-tiktok-pixel

# npm
npm install next-tiktok-pixel

# bun
bun add next-tiktok-pixel
```

---

## Quick Start

### Next.js App Router

Add `<TikTokProvider />` once in your root layout:

```tsx
// app/layout.tsx
import { TikTokProvider } from "next-tiktok-pixel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TikTokProvider pixelId="YOUR_PIXEL_ID">
          {children}
        </TikTokProvider>
      </body>
    </html>
  );
}
```

Then call `track()` from any Client Component — no imports from context, no prop drilling:

```tsx
// app/shop/page.tsx
"use client";
import { track } from "next-tiktok-pixel";

export default function ShopPage() {
  return (
    <button onClick={() => track("AddToCart", { value: 29, currency: "USD" })}>
      Add to cart
    </button>
  );
}
```

### React SPA (React Router)

Use the `useTikTokReact()` hook at your app root. Passing `location` re-fires the pixel on every route change automatically:

```tsx
// src/App.tsx
import { useLocation } from "react-router-dom";
import { useTikTokReact, track } from "next-tiktok-pixel";

export default function App() {
  const location = useLocation();
  useTikTokReact("YOUR_PIXEL_ID", location);

  return (
    <button onClick={() => track("ViewContent", { value: 0 })}>
      Track view
    </button>
  );
}
```

---

## API

### `<TikTokProvider />`

| Prop | Type | Required | Description |
|---|---|:---:|---|
| `pixelId` | `string` | ✓ | Your TikTok Pixel ID |
| `debug` | `boolean` | | Log pixel calls to the console |
| `children` | `ReactNode` | | React children |

### `useTikTokReact(pixelId, location?, debug?)`

| Parameter | Type | Required | Description |
|---|---|:---:|---|
| `pixelId` | `string` | ✓ | Your TikTok Pixel ID |
| `location` | `unknown` | | Router location — re-fires pixel on route change |
| `debug` | `boolean` | | Log pixel calls to the console |

### `track(event, data?)`

| Parameter | Type | Required | Description |
|---|---|:---:|---|
| `event` | `TikTokEvent` | ✓ | One of the supported event names (see below) |
| `data` | `TikTokEventData` | | Optional event payload |

---

## Supported Events

| Event | Typical use |
|---|---|
| `AddToCart` | User adds a product to cart |
| `InitiateCheckout` | User begins checkout |
| `CompletePayment` | Purchase confirmed |
| `ViewContent` | Product / content page view |
| `Search` | Site search performed |
| `SubmitForm` | Lead or contact form submitted |
| `Contact` | User initiates contact |
| `CompleteRegistration` | User signs up / registers |
| `Subscribe` | User subscribes to a plan or newsletter |

---

## Imports

```ts
// Main entrypoint — client + server safe exports
import { TikTokProvider, useTikTokReact, track } from "next-tiktok-pixel";

// Server-only subpath — safe to import in Server Components and API routes
import { track } from "next-tiktok-pixel/server";

```

---

## How It Works

`TikTokProvider` injects the TikTok Pixel script once via `next/script` with `strategy="afterInteractive"` and stores the pixel instance in React context. The exported `track()` function reads from that context, so calling it anywhere in the component tree — no matter how deeply nested — always reaches the same initialized pixel.

On route changes, the provider fires a `PageView` event automatically. In React SPA mode, `useTikTokReact()` achieves the same by watching the `location` value you pass in.

---

## FAQ

**Does it work with Turbopack?**
Yes. The package ships standard ESM and CJS — no Webpack-specific transforms.

**Can I use `track()` without `<TikTokProvider />`?**
Only if you use `useTikTokReact()` to initialise the pixel first. `TikTokProvider` is the recommended approach for Next.js.

**Is the pixel loaded on the server?**
No. The script is injected client-side only.

---

## Contributing

Issues and pull requests are welcome. Please open an issue first for any significant change so we can discuss the approach.

```bash
git clone https://github.com/md-asikuzzaman/next-tiktok-pixel.git
cd next-tiktok-pixel
pnpm install
pnpm dev     # watch mode
pnpm build   # production build
```

---

## License

[MIT](LICENSE) © [Md Asikuzzaman](https://github.com/md-asikuzzaman)
