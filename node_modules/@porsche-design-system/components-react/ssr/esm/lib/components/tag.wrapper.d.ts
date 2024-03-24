import { type HTMLAttributes } from 'react';
import type { TagColor, TagIcon, Theme } from '../types';
export type PTagProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Background color variations depending on theme property.
     */
    color?: TagColor;
    /**
     * The icon shown.
     */
    icon?: TagIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Adapts the tag color depending on the theme.
     */
    theme?: Theme;
};
export declare const PTag: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Background color variations depending on theme property.
     */
    color?: TagColor;
    /**
     * The icon shown.
     */
    icon?: TagIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Adapts the tag color depending on the theme.
     */
    theme?: Theme;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
