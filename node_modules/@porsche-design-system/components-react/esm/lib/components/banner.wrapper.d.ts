import { type HTMLAttributes } from 'react';
import type { BannerState, Theme, BannerWidth } from '../types';
export type PBannerProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Description of the banner.
     */
    description?: string;
    /**
     * If false, the banner will not have a dismiss button.
     */
    dismissButton?: boolean;
    /**
     * Heading of the banner.
     */
    heading?: string;
    /**
     * Emitted when the close button is clicked.
     */
    onDismiss?: (event: CustomEvent<void>) => void;
    /**
     * If true, the banner is open.
     */
    open: boolean;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `dismissButton` instead. Defines if the banner can be closed/removed by the user.
     */
    persistent?: boolean;
    /**
     * State of the banner.
     */
    state?: BannerState;
    /**
     * Adapts the banner color depending on the theme.
     */
    theme?: Theme;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    width?: BannerWidth;
};
export declare const PBanner: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Description of the banner.
     */
    description?: string | undefined;
    /**
     * If false, the banner will not have a dismiss button.
     */
    dismissButton?: boolean | undefined;
    /**
     * Heading of the banner.
     */
    heading?: string | undefined;
    /**
     * Emitted when the close button is clicked.
     */
    onDismiss?: ((event: CustomEvent<void>) => void) | undefined;
    /**
     * If true, the banner is open.
     */
    open: boolean;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `dismissButton` instead. Defines if the banner can be closed/removed by the user.
     */
    persistent?: boolean | undefined;
    /**
     * State of the banner.
     */
    state?: "warning" | "error" | "info" | "neutral" | undefined;
    /**
     * Adapts the banner color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    width?: "extended" | "basic" | "fluid" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
