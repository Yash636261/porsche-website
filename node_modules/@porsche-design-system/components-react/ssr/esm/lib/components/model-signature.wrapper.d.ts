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
} & import("react").RefAttributes<HTMLElement>>;
