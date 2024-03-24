import { type HTMLAttributes } from 'react';
import type { BreakpointCustomizable, TextareaWrapperState, Theme } from '../types';
export type PTextareaWrapperProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * The description text.
     */
    description?: string;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * The label text.
     */
    label?: string;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `showCounter` instead. Show or hide max character count.
     */
    showCharacterCount?: boolean;
    /**
     * Show or hide max character count.
     */
    showCounter?: boolean;
    /**
     * The validation state.
     */
    state?: TextareaWrapperState;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: Theme;
};
export declare const PTextareaWrapper: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * The description text.
     */
    description?: string | undefined;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean> | undefined;
    /**
     * The label text.
     */
    label?: string | undefined;
    /**
     * The message styled depending on validation state.
     */
    message?: string | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `showCounter` instead. Show or hide max character count.
     */
    showCharacterCount?: boolean | undefined;
    /**
     * Show or hide max character count.
     */
    showCounter?: boolean | undefined;
    /**
     * The validation state.
     */
    state?: "none" | "success" | "error" | undefined;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
