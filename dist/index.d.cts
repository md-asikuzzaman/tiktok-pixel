import * as react_jsx_runtime from 'react/jsx-runtime';

type TikTokEvent = 'AddToCart' | 'CompletePayment' | 'InitiateCheckout' | 'ViewContent' | 'SubmitForm' | 'Search' | 'Contact' | 'CompleteRegistration' | 'Subscribe';
interface PixelOptions {
    pixelId: string;
    debug?: boolean;
}
declare global {
    interface Window {
        ttq: any;
        TiktokAnalyticsObject: string;
    }
}

declare const track: (event: TikTokEvent, data?: object) => void;

declare function TikTokPixelNextProvider(props: PixelOptions): react_jsx_runtime.JSX.Element;

declare function useTikTokReact(pixelId: string, location?: any, debug?: boolean): void;

export { TikTokPixelNextProvider, track, useTikTokReact };
