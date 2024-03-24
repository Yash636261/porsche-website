import { type HTMLAttributes } from 'react';
import type { FieldsetLabelSize, FieldsetState, Theme } from '../types';
export type PFieldsetProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * The label text.
     */
    label?: string;
    /**
     * The size of the label text.
     */
    labelSize?: FieldsetLabelSize;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * Marks the Fieldset as required.
     */
    required?: boolean;
    /**
     * The validation state.
     */
    state?: FieldsetState;
    /**
     * Adapts color depending on theme.
     */
    theme?: Theme;
};
export declare const PFieldset: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * The label text.
     */
    label?: string;
    /**
     * The size of the label text.
     */
    labelSize?: FieldsetLabelSize;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * Marks the Fieldset as required.
     */
    required?: boolean;
    /**
     * The validation state.
     */
    state?: FieldsetState;
    /**
     * Adapts color depending on theme.
     */
    theme?: Theme;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
