import { type HTMLAttributes } from 'react';
import type { HeadlineAlign, HeadlineColor, HeadlineTag, Theme, HeadlineVariant } from '../types';
export type PHeadlineProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Text alignment of the component.
     */
    align?: HeadlineAlign;
    /**
     * Basic text color variations depending on theme property.
     */
    color?: HeadlineColor;
    /**
     * Adds an ellipsis to a single line of text if it overflows.
     */
    ellipsis?: boolean;
    /**
     * Sets a custom HTML tag depending on the usage of the headline component.
     */
    tag?: HeadlineTag;
    /**
     * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: Theme;
    /**
     * Predefined style of the headline.
     */
    variant?: HeadlineVariant;
};
/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-heading" instead. */
export declare const PHeadline: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Text alignment of the component.
     */
    align?: "center" | "start" | "end" | "left" | "right" | undefined;
    /**
     * Basic text color variations depending on theme property.
     */
    color?: "default" | "inherit" | "primary" | undefined;
    /**
     * Adds an ellipsis to a single line of text if it overflows.
     */
    ellipsis?: boolean | undefined;
    /**
     * Sets a custom HTML tag depending on the usage of the headline component.
     */
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
    /**
     * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: "light" | "dark" | "auto" | undefined;
    /**
     * Predefined style of the headline.
     */
    variant?: HeadlineVariant | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
