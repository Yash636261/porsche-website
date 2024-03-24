import { type HTMLAttributes } from 'react';
import type { BreakpointCustomizable, LinkSocialIcon, LinkSocialTarget, Theme } from '../types';
export type PLinkSocialProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Show or hide label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string;
    /**
     * The icon shown.
     */
    icon?: LinkSocialIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Specifies the relationship of the target object to the link object.
     */
    rel?: string;
    /**
     * Target attribute where the link should be opened.
     */
    target?: LinkSocialTarget;
    /**
     * Adapts the link color when used on dark background.
     */
    theme?: Theme;
};
/** @deprecated since v3.0.0, will be removed with next major release. Use `p-link` with corresponding social icon instead. */
export declare const PLinkSocial: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Show or hide label.
     */
    hideLabel?: BreakpointCustomizable<boolean> | undefined;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string | undefined;
    /**
     * The icon shown.
     */
    icon?: LinkSocialIcon | undefined;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string | undefined;
    /**
     * Specifies the relationship of the target object to the link object.
     */
    rel?: string | undefined;
    /**
     * Target attribute where the link should be opened.
     */
    target?: string | undefined;
    /**
     * Adapts the link color when used on dark background.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
