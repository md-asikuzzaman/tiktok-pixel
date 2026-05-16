export type TikTokEvent =
  | 'AddToCart'
  | 'CompletePayment'
  | 'InitiateCheckout'
  | 'ViewContent'
  | 'SubmitForm'
  | 'Search'
  | 'Contact'
  | 'CompleteRegistration'
  | 'Subscribe';

export interface PixelOptions {
  pixelId: string;
  debug?: boolean;
}

declare global {
  interface Window {
    ttq: any;
    TiktokAnalyticsObject: string;
  }
}
