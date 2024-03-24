import { type HTMLAttributes } from 'react';
import type { ScrollerAlignScrollIndicator, SelectedAriaAttributes, ScrollerAriaAttribute, ScrollerGradientColor, ScrollerGradientColorScheme, ScrollerScrollIndicatorPosition, ScrollerScrollToPosition, Theme } from '../types';
export type PScrollerProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Sets the vertical position of scroll indicator.
     */
    alignScrollIndicator?: ScrollerAlignScrollIndicator;
    /**
     * Add ARIA role.
     */
    aria?: SelectedAriaAttributes<ScrollerAriaAttribute>;
    /**
     * Adapts the background gradient color of prev and next button.
     */
    gradientColor?: ScrollerGradientColor;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `gradientColor` instead. Adapts the background gradient color of prev and next button.
     */
    gradientColorScheme?: ScrollerGradientColorScheme;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `alignScrollIndicator` instead. Sets the vertical position of scroll indicator
     */
    scrollIndicatorPosition?: ScrollerScrollIndicatorPosition;
    /**
     * Scrolls the scroll area to the left either smooth or immediately.
     */
    scrollToPosition?: ScrollerScrollToPosition;
    /**
     * Specifies if scrollbar should be shown.
     */
    scrollbar?: boolean;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
};
export declare const PScroller: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Sets the vertical position of scroll indicator.
     */
    alignScrollIndicator?: ScrollerAlignScrollIndicator;
    /**
     * Add ARIA role.
     */
    aria?: SelectedAriaAttributes<ScrollerAriaAttribute>;
    /**
     * Adapts the background gradient color of prev and next button.
     */
    gradientColor?: ScrollerGradientColor;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `gradientColor` instead. Adapts the background gradient color of prev and next button.
     */
    gradientColorScheme?: ScrollerGradientColorScheme;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `alignScrollIndicator` instead. Sets the vertical position of scroll indicator
     */
    scrollIndicatorPosition?: ScrollerScrollIndicatorPosition;
    /**
     * Scrolls the scroll area to the left either smooth or immediately.
     */
    scrollToPosition?: ScrollerScrollToPosition;
    /**
     * Specifies if scrollbar should be shown.
     */
    scrollbar?: boolean;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
