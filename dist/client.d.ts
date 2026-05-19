export { P as PixelOptions, t as track } from './server-2tq4R2-O.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

type TikTokProviderProps = {
    children: ReactNode;
    pixelId: string;
    debug?: boolean;
};
declare function TikTokProvider({ children, pixelId, debug, }: TikTokProviderProps): react_jsx_runtime.JSX.Element;

declare function useTikTokReact(pixelId: string, location?: unknown, debug?: boolean): void;

export { TikTokProvider, useTikTokReact };
