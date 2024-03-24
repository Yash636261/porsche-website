import { type HTMLAttributes } from 'react';
import type { BreakpointCustomizable, ButtonGroupDirection } from '../types';
export type PButtonGroupProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Defines the direction of the main and cross axis. The default is ’{base: ‘column’, xs: ‘row’}' showing buttons vertically stacked on mobile viewports and side-by-side in a horizontal row from breakpoint ‘xs’. You always need to provide a base value when using breakpoints.
     */
    direction?: BreakpointCustomizable<ButtonGroupDirection>;
};
export declare const PButtonGroup: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Defines the direction of the main and cross axis. The default is ’{base: ‘column’, xs: ‘row’}' showing buttons vertically stacked on mobile viewports and side-by-side in a horizontal row from breakpoint ‘xs’. You always need to provide a base value when using breakpoints.
     */
    direction?: BreakpointCustomizable<"row" | "column"> | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
