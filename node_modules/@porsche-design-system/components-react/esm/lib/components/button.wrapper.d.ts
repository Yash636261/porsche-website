import { type HTMLAttributes } from 'react';
import type { SelectedAriaAttributes, ButtonAriaAttribute, BreakpointCustomizable, ButtonIcon, Theme, ButtonType, ButtonVariant } from '../types';
export type PButtonProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<ButtonAriaAttribute>;
    /**
     * Disables the button. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * The icon shown. By choosing 'none', no icon is displayed.
     */
    icon?: ButtonIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean;
    /**
     * The name of the button, submitted as a pair with the button's value as part of the form data, when that button is used to submit the form.
     */
    name?: string;
    /**
     * Adapts the button color depending on the theme.
     */
    theme?: Theme;
    /**
     * Specifies the type of the button.
     */
    type?: ButtonType;
    /**
     * Defines the value associated with the button's name when it's submitted with the form data. This value is passed to the server in params when the form is submitted using this button.
     */
    value?: string;
    /**
     * The style variant of the button.
     */
    variant?: ButtonVariant;
};
export declare const PButton: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<"aria-label" | "aria-expanded" | "aria-pressed" | "aria-haspopup"> | undefined;
    /**
     * Disables the button. No events will be triggered while disabled state is active.
     */
    disabled?: boolean | undefined;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean> | undefined;
    /**
     * The icon shown. By choosing 'none', no icon is displayed.
     */
    icon?: import("../types").LinkButtonIconName | undefined;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string | undefined;
    /**
     * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean | undefined;
    /**
     * The name of the button, submitted as a pair with the button's value as part of the form data, when that button is used to submit the form.
     */
    name?: string | undefined;
    /**
     * Adapts the button color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
    /**
     * Specifies the type of the button.
     */
    type?: "button" | "reset" | "submit" | undefined;
    /**
     * Defines the value associated with the button's name when it's submitted with the form data. This value is passed to the server in params when the form is submitted using this button.
     */
    value?: string | undefined;
    /**
     * The style variant of the button.
     */
    variant?: "primary" | "secondary" | "tertiary" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
