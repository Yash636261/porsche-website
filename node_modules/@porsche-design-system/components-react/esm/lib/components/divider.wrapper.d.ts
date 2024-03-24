import { type HTMLAttributes } from 'react';
import type { DividerColor, BreakpointCustomizable, DividerDirection, DividerOrientation, Theme } from '../types';
export type PDividerProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Defines color depending on theme.
     */
    color?: DividerColor;
    /**
     * Defines direction.
     */
    direction?: BreakpointCustomizable<DividerDirection>;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `direction` instead. Defines orientation.
     */
    orientation?: BreakpointCustomizable<DividerOrientation>;
    /**
     * Adapts color depending on theme.
     */
    theme?: Theme;
};
export declare const PDivider: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Defines color depending on theme.
     */
    color?: "contrast-low" | "contrast-medium" | "contrast-high" | "neutral-contrast-low" | "neutral-contrast-medium" | "neutral-contrast-high" | undefined;
    /**
     * Defines direction.
     */
    direction?: BreakpointCustomizable<"horizontal" | "vertical"> | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `direction` instead. Defines orientation.
     */
    orientation?: BreakpointCustomizable<"horizontal" | "vertical"> | undefined;
    /**
     * Adapts color depending on theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & import("react").RefAttributes<HTMLElement>>;
