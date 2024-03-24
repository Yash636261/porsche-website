import { type HTMLAttributes } from 'react';
import type { SelectedAriaAttributes, CrestAriaAttribute, CrestTarget } from '../types';
export type PCrestProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<CrestAriaAttribute>;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string;
    /**
     * Target attribute where the link should be opened.
     */
    target?: CrestTarget;
};
export declare const PCrest: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<CrestAriaAttribute>;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string;
    /**
     * Target attribute where the link should be opened.
     */
    target?: CrestTarget;
} & import("react").RefAttributes<HTMLElement>>;
