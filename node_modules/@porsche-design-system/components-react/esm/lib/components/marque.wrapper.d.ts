import { type HTMLAttributes } from 'react';
import type { SelectedAriaAttributes, MarqueAriaAttribute, MarqueSize, MarqueTarget, MarqueVariant } from '../types';
export type PMarqueProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<MarqueAriaAttribute>;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string;
    /**
     * Adapts sizing of marque.
     */
    size?: MarqueSize;
    /**
     * Target attribute where the link should be opened.
     */
    target?: MarqueTarget;
    /**
     * Show/hide trademark sign (only has effect when variant is set to default).
     */
    trademark?: boolean;
    /**
     * Shows marque in special editions
     */
    variant?: MarqueVariant;
};
/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-wordmark" instead. */
export declare const PMarque: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<"aria-label" | "aria-current"> | undefined;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string | undefined;
    /**
     * Adapts sizing of marque.
     */
    size?: "small" | "medium" | "responsive" | undefined;
    /**
     * Target attribute where the link should be opened.
     */
    target?: string | undefined;
    /**
     * Show/hide trademark sign (only has effect when variant is set to default).
     */
    trademark?: boolean | undefined;
    /**
     * Shows marque in special editions
     */
    variant?: "default" | "75-years" | undefined;
} & import("react").RefAttributes<HTMLElement>>;
