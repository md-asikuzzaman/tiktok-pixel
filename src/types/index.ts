export type TikTokEvent =
  | "AddToCart"
  | "CompletePayment"
  | "InitiateCheckout"
  | "ViewContent"
  | "SubmitForm"
  | "Search"
  | "Contact"
  | "CompleteRegistration"
  | "Subscribe";

export interface PixelOptions {
  pixelId: string;
  debug?: boolean;
}

export type TikTokValue = string | number | boolean | null;
export type TikTokEventData = Record<
  string,
  TikTokValue | TikTokValue[] | undefined
>;

export interface TikTokQueue {
  page: (payload?: TikTokEventData) => void;
  track: (event: TikTokEvent, payload?: TikTokEventData) => void;
}

declare global {
  interface Window {
    ttq: TikTokQueue;
    TiktokAnalyticsObject: string;
  }
}
