import { type HTMLAttributes } from 'react';
import type { ContentWrapperBackgroundColor, Theme, ContentWrapperWidth } from '../types';
export type PContentWrapperProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    backgroundColor?: ContentWrapperBackgroundColor;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    theme?: Theme;
    /**
     * Defines the outer spacings between the content area and the left and right screen sides, as well as centering its content and setting a max-width.
     */
    width?: ContentWrapperWidth;
};
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
export declare const PContentWrapper: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    backgroundColor?: "default" | "transparent" | undefined;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    theme?: "light" | "dark" | "auto" | undefined;
    /**
     * Defines the outer spacings between the content area and the left and right screen sides, as well as centering its content and setting a max-width.
     */
    width?: "extended" | "basic" | "fluid" | "narrow" | "full" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
