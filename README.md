# next-tiktok-pixel

TikTok Pixel SDK for React and Next.js App Router.

## Features

- ⚡ Next.js 15/16 App Router ready
- 🎯 Type-safe event tracking
- 🧩 `TikTokProvider` Wrap once, track everywhere
- 🪝 Headless hook — `useTikTokReact()`
- 🔷 Full TypeScript support

## Installation

With pnpm

```bash
pnpm add next-tiktok-pixel
```

With npm

```bash
npm install next-tiktok-pixel
```

With bun

```bash
bun add next-tiktok-pixel
```

## Getting Started

Add `<TikTokProvider />` to your app root. It handles pixel initialization and makes `track()` available everywhere — no extra setup needed.

### Next.js App Router

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
        <TikTokProvider pixelId="YOUR_PIXEL_ID">{children}</TikTokProvider>
      </body>
    </html>
  );
}
```

Now call `track()` from any client component:

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

### React SPA

```tsx
import { useLocation } from "react-router-dom";
import { useTikTokReact, track } from "next-tiktok-pixel";

export default function App() {
  const location = useLocation();
  useTikTokReact("YOUR_PIXEL_ID", location, false);

  return (
    <button onClick={() => track("ViewContent", { value: 0 })}>
      Track view
    </button>
  );
}
```

## Imports

```ts
import { TikTokProvider, useTikTokReact, track } from "next-tiktok-pixel";
```

Optional server subpath:

```ts
import { track } from "next-tiktok-pixel/server";
```

## API

### `TikTokProvider`

| Prop       | Type        | Required | Description          |
| ---------- | ----------- | :------: | -------------------- |
| `pixelId`  | `string`    |    ✓     | Your TikTok Pixel ID |
| `debug`    | `boolean`   |          | Enable debug logging |
| `children` | `ReactNode` |          | React children       |

### `useTikTokReact(pixelId, location?, debug?)`

| Param      | Type      | Required | Description                                      |
| ---------- | --------- | :------: | ------------------------------------------------ |
| `pixelId`  | `string`  |    ✓     | Your TikTok Pixel ID                             |
| `location` | `unknown` |          | Router location — re-fires pixel on route change |
| `debug`    | `boolean` |          | Enable debug logging                             |

### `track(event, data?)`

| Param   | Type              | Required | Description                      |
| ------- | ----------------- | :------: | -------------------------------- |
| `event` | `TikTokEvent`     |    ✓     | One of the supported event names |
| `data`  | `TikTokEventData` |          | Optional event payload           |

### Supported Events

| Event                  |
| ---------------------- |
| `AddToCart`            |
| `CompletePayment`      |
| `InitiateCheckout`     |
| `ViewContent`          |
| `SubmitForm`           |
| `Search`               |
| `Contact`              |
| `CompleteRegistration` |
| `Subscribe`            |

## License

MIT
