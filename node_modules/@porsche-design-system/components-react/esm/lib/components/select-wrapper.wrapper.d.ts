import { type HTMLAttributes } from 'react';
import type { SelectWrapperDropdownDirection, BreakpointCustomizable, SelectWrapperState, Theme } from '../types';
export type PSelectWrapperProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * The description text.
     */
    description?: string;
    /**
     * Changes the direction to which the dropdown list appears.
     */
    dropdownDirection?: SelectWrapperDropdownDirection;
    /**
     * Filters select options by typing a character
     */
    filter?: boolean;
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
     * Forces rendering of native browser select dropdown
     */
    native?: boolean;
    /**
     * The validation state.
     */
    state?: SelectWrapperState;
    /**
     * Adapts the select color depending on the theme.
     */
    theme?: Theme;
};
export declare const PSelectWrapper: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * The description text.
     */
    description?: string | undefined;
    /**
     * Changes the direction to which the dropdown list appears.
     */
    dropdownDirection?: "auto" | "down" | "up" | undefined;
    /**
     * Filters select options by typing a character
     */
    filter?: boolean | undefined;
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
     * Forces rendering of native browser select dropdown
     */
    native?: boolean | undefined;
    /**
     * The validation state.
     */
    state?: "none" | "success" | "error" | undefined;
    /**
     * Adapts the select color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
