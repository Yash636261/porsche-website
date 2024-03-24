import { type HTMLAttributes } from 'react';
import type { SelectedAriaAttributes, PopoverAriaAttribute, PopoverDirection, Theme } from '../types';
export type PPopoverProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<PopoverAriaAttribute>;
    /**
     * Descriptive text to show additional information when popover is open
     */
    description?: string;
    /**
     * Preferred direction in which popover should open, given there is enough space in viewport. Otherwise, it will be opened in the direction with most available space.
     */
    direction?: PopoverDirection;
    /**
     * Adapts the popover color depending on the theme.
     */
    theme?: Theme;
};
export declare const PPopover: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<"aria-label"> | undefined;
    /**
     * Descriptive text to show additional information when popover is open
     */
    description?: string | undefined;
    /**
     * Preferred direction in which popover should open, given there is enough space in viewport. Otherwise, it will be opened in the direction with most available space.
     */
    direction?: "top" | "bottom" | "left" | "right" | undefined;
    /**
     * Adapts the popover color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
