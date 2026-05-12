import { createTikTokSnippet } from "./snippet";

export const injectTikTokPixel = (
  id: string,
  debug?: boolean
) => {
  if (typeof window === "undefined") return;

  if (window.ttq) return;

  const script = document.createElement("script");

  script.innerHTML = createTikTokSnippet(id, debug);

  document.head.appendChild(script);
};