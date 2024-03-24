import { type HTMLAttributes } from 'react';
import type { SelectedAriaAttributes, TagDismissibleAriaAttribute, TagDismissibleColor, Theme } from '../types';
export type PTagDismissibleProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<TagDismissibleAriaAttribute>;
    /**
     * Background color variations
     */
    color?: TagDismissibleColor;
    /**
     * The label text.
     */
    label?: string;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
};
export declare const PTagDismissible: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<TagDismissibleAriaAttribute>;
    /**
     * Background color variations
     */
    color?: TagDismissibleColor;
    /**
     * The label text.
     */
    label?: string;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
