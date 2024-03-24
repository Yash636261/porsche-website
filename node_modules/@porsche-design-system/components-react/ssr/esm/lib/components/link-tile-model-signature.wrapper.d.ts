import { type HTMLAttributes } from 'react';
import type { BreakpointCustomizable, LinkTileModelSignatureAspectRatio, LinkTileModelSignatureHeadingTag, LinkTileModelSignatureLinkDirection, LinkTileModelSignatureModel, LinkTileModelSignatureWeight } from '../types';
export type PLinkTileModelSignatureProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Aspect ratio of the link-tile-model-signature.
     */
    aspectRatio?: BreakpointCustomizable<LinkTileModelSignatureAspectRatio>;
    /**
     * Description text.
     */
    description?: string;
    /**
     * Heading text.
     */
    heading: string;
    /**
     * Sets a custom headline tag which wraps the heading to enhance semantics.
     */
    headingTag?: LinkTileModelSignatureHeadingTag;
    /**
     * Defines the direction of the main and cross axis of the links. The default is '{base: ‘column’, xs: ‘row’}' showing buttons vertically stacked on mobile viewports and side-by-side in a horizontal row from breakpoint 'xs'.
     */
    linkDirection?: BreakpointCustomizable<LinkTileModelSignatureLinkDirection>;
    /**
     * Adapts the model of the component.
     */
    model?: LinkTileModelSignatureModel;
    /**
     * Adapts the font weight of the heading.
     */
    weight?: BreakpointCustomizable<LinkTileModelSignatureWeight>;
};
export declare const PLinkTileModelSignature: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Aspect ratio of the link-tile-model-signature.
     */
    aspectRatio?: BreakpointCustomizable<LinkTileModelSignatureAspectRatio>;
    /**
     * Description text.
     */
    description?: string;
    /**
     * Heading text.
     */
    heading: string;
    /**
     * Sets a custom headline tag which wraps the heading to enhance semantics.
     */
    headingTag?: LinkTileModelSignatureHeadingTag;
    /**
     * Defines the direction of the main and cross axis of the links. The default is '{base: ‘column’, xs: ‘row’}' showing buttons vertically stacked on mobile viewports and side-by-side in a horizontal row from breakpoint 'xs'.
     */
    linkDirection?: BreakpointCustomizable<LinkTileModelSignatureLinkDirection>;
    /**
     * Adapts the model of the component.
     */
    model?: LinkTileModelSignatureModel;
    /**
     * Adapts the font weight of the heading.
     */
    weight?: BreakpointCustomizable<LinkTileModelSignatureWeight>;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
