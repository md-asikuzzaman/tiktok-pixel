type TikTokEvent = 'AddToCart' | 'CompletePayment' | 'InitiateCheckout' | 'ViewContent' | 'SubmitForm' | 'Search' | 'Contact' | 'CompleteRegistration' | 'Subscribe';
interface PixelOptions {
    pixelId: string;
    debug?: boolean;
}
type TikTokValue = string | number | boolean | null;
type TikTokEventData = Record<string, TikTokValue | TikTokValue[] | undefined>;
interface TikTokQueue {
    page: (payload?: TikTokEventData) => void;
    track: (event: TikTokEvent, payload?: TikTokEventData) => void;
}
declare global {
    interface Window {
        ttq: TikTokQueue;
        TiktokAnalyticsObject: string;
    }
}

declare const track: (event: TikTokEvent, data?: TikTokEventData) => void;

export { type PixelOptions as P, type TikTokEvent as T, track as t };
