import { type HTMLAttributes } from 'react';
import type { ModelSignatureColor, ModelSignatureModel, ModelSignatureSize, Theme } from '../types';
export type PModelSignatureProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Adapts the color of the component.
     */
    color?: ModelSignatureColor;
    /**
     * Adapts the model of the component.
     */
    model?: ModelSignatureModel;
    /**
     * Adapts the size of the component.
     */
    size?: ModelSignatureSize;
    /**
     * Adapts color depending on theme.
     */
    theme?: Theme;
};
export declare const PModelSignature: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Adapts the color of the component.
     */
    color?: "inherit" | "primary" | "contrast-low" | "contrast-medium" | "contrast-high" | undefined;
    /**
     * Adapts the model of the component.
     */
    model?: "718" | "911" | "boxster" | "cayenne" | "cayman" | "macan" | "panamera" | "taycan" | "turbo-s" | "turbo" | undefined;
    /**
     * Adapts the size of the component.
     */
    size?: "inherit" | "small" | undefined;
    /**
     * Adapts color depending on theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & import("react").RefAttributes<HTMLElement>>;
