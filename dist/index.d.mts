import * as react_jsx_runtime from 'react/jsx-runtime';

type TikTokEvent = "AddToCart" | "CompletePayment" | "InitiateCheckout" | "ViewContent" | "SubmitForm" | "Search" | "Contact" | "CompleteRegistration" | "Subscribe";
interface PixelOptions {
    id: string;
    debug?: boolean;
}
declare global {
    interface Window {
        ttq: any;
        TiktokAnalyticsObject: string;
    }
}

declare const track: (event: TikTokEvent, data?: object) => void;
declare const page: () => void;

declare function TikTokPixelNext(props: PixelOptions): react_jsx_runtime.JSX.Element;

declare function useTikTokReact(id: string, location?: any, debug?: boolean): void;

export { type PixelOptions, type TikTokEvent, TikTokPixelNext, page, track, useTikTokReact };
