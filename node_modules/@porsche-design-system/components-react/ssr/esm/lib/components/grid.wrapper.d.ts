import { type HTMLAttributes } from 'react';
import type { BreakpointCustomizable, GridDirection, GridGutter, GridWrap } from '../types';
export type PGridProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {base: "column", l: "row"}. You always need to provide a base value when doing this.
     */
    direction?: BreakpointCustomizable<GridDirection>;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    gutter?: BreakpointCustomizable<GridGutter>;
    /**
     * Handles wrapping behaviour of elements.
     */
    wrap?: BreakpointCustomizable<GridWrap>;
};
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
export declare const PGrid: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {base: "column", l: "row"}. You always need to provide a base value when doing this.
     */
    direction?: BreakpointCustomizable<GridDirection>;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    gutter?: BreakpointCustomizable<GridGutter>;
    /**
     * Handles wrapping behaviour of elements.
     */
    wrap?: BreakpointCustomizable<GridWrap>;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
