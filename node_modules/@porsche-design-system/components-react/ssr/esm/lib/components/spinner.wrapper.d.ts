import { type HTMLAttributes } from 'react';
import type { SelectedAriaAttributes, SpinnerAriaAttribute, BreakpointCustomizable, SpinnerSize, Theme } from '../types';
export type PSpinnerProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<SpinnerAriaAttribute>;
    /**
     * Size of the spinner.
     */
    size?: BreakpointCustomizable<SpinnerSize>;
    /**
     * Adapts the spinner color depending on the theme.
     */
    theme?: Theme;
};
export declare const PSpinner: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<SpinnerAriaAttribute>;
    /**
     * Size of the spinner.
     */
    size?: BreakpointCustomizable<SpinnerSize>;
    /**
     * Adapts the spinner color depending on the theme.
     */
    theme?: Theme;
} & import("react").RefAttributes<HTMLElement>>;
