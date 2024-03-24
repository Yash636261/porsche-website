import { type HTMLAttributes } from 'react';
import type { BreakpointCustomizable, FlexAlignContent, FlexAlignItems, FlexDirection, FlexInline, FlexJustifyContent, FlexWrap } from '../types';
export type PFlexProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis.
     */
    alignContent?: BreakpointCustomizable<FlexAlignContent>;
    /**
     * Defines how the flex items are aligned along the cross axis.
     */
    alignItems?: BreakpointCustomizable<FlexAlignItems>;
    /**
     * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
     */
    direction?: BreakpointCustomizable<FlexDirection>;
    /**
     * Defines the flex containers content flow if 2 or more containers are siblings of each other.
     */
    inline?: BreakpointCustomizable<FlexInline>;
    /**
     * Defines how the flex items are aligned along the main axis.
     */
    justifyContent?: BreakpointCustomizable<FlexJustifyContent>;
    /**
     * Handles wrapping behaviour of elements.
     */
    wrap?: BreakpointCustomizable<FlexWrap>;
};
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
export declare const PFlex: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis.
     */
    alignContent?: BreakpointCustomizable<FlexAlignContent>;
    /**
     * Defines how the flex items are aligned along the cross axis.
     */
    alignItems?: BreakpointCustomizable<FlexAlignItems>;
    /**
     * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
     */
    direction?: BreakpointCustomizable<FlexDirection>;
    /**
     * Defines the flex containers content flow if 2 or more containers are siblings of each other.
     */
    inline?: BreakpointCustomizable<FlexInline>;
    /**
     * Defines how the flex items are aligned along the main axis.
     */
    justifyContent?: BreakpointCustomizable<FlexJustifyContent>;
    /**
     * Handles wrapping behaviour of elements.
     */
    wrap?: BreakpointCustomizable<FlexWrap>;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
