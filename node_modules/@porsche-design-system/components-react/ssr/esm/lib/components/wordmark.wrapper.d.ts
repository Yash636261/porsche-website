import { type HTMLAttributes } from 'react';
import type { SelectedAriaAttributes, WordmarkAriaAttribute, WordmarkSize, WordmarkTarget, Theme } from '../types';
export type PWordmarkProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<WordmarkAriaAttribute>;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string;
    /**
     * Adapts sizing of wordmark.
     */
    size?: WordmarkSize;
    /**
     * Target attribute where the link should be opened.
     */
    target?: WordmarkTarget;
    /**
     * Adapts color depending on theme.
     */
    theme?: Theme;
};
export declare const PWordmark: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<WordmarkAriaAttribute>;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string;
    /**
     * Adapts sizing of wordmark.
     */
    size?: WordmarkSize;
    /**
     * Target attribute where the link should be opened.
     */
    target?: WordmarkTarget;
    /**
     * Adapts color depending on theme.
     */
    theme?: Theme;
} & import("react").RefAttributes<HTMLElement>>;
