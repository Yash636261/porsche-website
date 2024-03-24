import { type HTMLAttributes } from 'react';
import type { Theme } from '../types';
export type PToastProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Adapts the toast color depending on the theme.
     */
    theme?: Theme;
};
export declare const PToast: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Adapts the toast color depending on the theme.
     */
    theme?: Theme;
} & import("react").RefAttributes<HTMLElement>>;
