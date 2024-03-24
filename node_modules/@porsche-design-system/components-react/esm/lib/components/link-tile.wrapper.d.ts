import { type HTMLAttributes } from 'react';
import type { LinkTileAlign, SelectedAriaAttributes, LinkTileAriaAttribute, BreakpointCustomizable, LinkTileAspectRatio, LinkTileBackground, LinkTileSize, LinkTileTarget, LinkTileWeight } from '../types';
export type PLinkTileProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Alignment of link and description.
     */
    align?: LinkTileAlign;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<LinkTileAriaAttribute>;
    /**
     * Aspect ratio of the link-tile.
     */
    aspectRatio?: BreakpointCustomizable<LinkTileAspectRatio>;
    /**
     * Adapts the description and link theme when used on light background image.
     */
    background?: LinkTileBackground;
    /**
     * Displays the link-tile as compact version with description and link icon only.
     */
    compact?: BreakpointCustomizable<boolean>;
    /**
     * Description text.
     */
    description: string;
    /**
     * Special download attribute to open native browser download dialog if target url points to a downloadable file.
     */
    download?: string;
    /**
     * Show gradient.
     */
    gradient?: boolean;
    /**
     * href of the `<a>`.
     */
    href: string;
    /**
     * Label of the <a />.
     */
    label: string;
    /**
     * Specifies the relationship of the target object to the link object.
     */
    rel?: string;
    /**
     * Font size of the description.
     */
    size?: BreakpointCustomizable<LinkTileSize>;
    /**
     * Target attribute where the link should be opened.
     */
    target?: LinkTileTarget;
    /**
     * Font weight of the description.
     */
    weight?: BreakpointCustomizable<LinkTileWeight>;
};
export declare const PLinkTile: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Alignment of link and description.
     */
    align?: "top" | "bottom" | undefined;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<"aria-label" | "aria-current"> | undefined;
    /**
     * Aspect ratio of the link-tile.
     */
    aspectRatio?: BreakpointCustomizable<"1:1" | "4:3" | "3:4" | "16:9" | "9:16"> | undefined;
    /**
     * Adapts the description and link theme when used on light background image.
     */
    background?: "light" | "dark" | "auto" | undefined;
    /**
     * Displays the link-tile as compact version with description and link icon only.
     */
    compact?: BreakpointCustomizable<boolean> | undefined;
    /**
     * Description text.
     */
    description: string;
    /**
     * Special download attribute to open native browser download dialog if target url points to a downloadable file.
     */
    download?: string | undefined;
    /**
     * Show gradient.
     */
    gradient?: boolean | undefined;
    /**
     * href of the `<a>`.
     */
    href: string;
    /**
     * Label of the <a />.
     */
    label: string;
    /**
     * Specifies the relationship of the target object to the link object.
     */
    rel?: string | undefined;
    /**
     * Font size of the description.
     */
    size?: BreakpointCustomizable<"default" | "inherit"> | undefined;
    /**
     * Target attribute where the link should be opened.
     */
    target?: string | undefined;
    /**
     * Font weight of the description.
     */
    weight?: BreakpointCustomizable<"regular" | "semi-bold" | "semibold"> | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
