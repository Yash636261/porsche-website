import { type HTMLAttributes } from 'react';
import type { SelectedAriaAttributes, FlyoutAriaAttribute, FlyoutPosition, Theme } from '../types';
export type PFlyoutProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<FlyoutAriaAttribute>;
    /**
     * Emitted when the component requests to be dismissed.
     */
    onDismiss?: (event: CustomEvent<void>) => void;
    /**
     * If true, the flyout is open.
     */
    open: boolean;
    /**
     * The position of the flyout
     */
    position?: FlyoutPosition;
    /**
     * Adapts the flyout color depending on the theme.
     */
    theme?: Theme;
};
export declare const PFlyout: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<"aria-label"> | undefined;
    /**
     * Emitted when the component requests to be dismissed.
     */
    onDismiss?: ((event: CustomEvent<void>) => void) | undefined;
    /**
     * If true, the flyout is open.
     */
    open: boolean;
    /**
     * The position of the flyout
     */
    position?: "start" | "end" | "left" | "right" | undefined;
    /**
     * Adapts the flyout color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
