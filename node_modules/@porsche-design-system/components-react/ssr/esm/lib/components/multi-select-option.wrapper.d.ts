import { type HTMLAttributes } from 'react';
export type PMultiSelectOptionProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Disables the option.
     */
    disabled?: boolean;
    /**
     * The option value.
     */
    value: string;
};
export declare const PMultiSelectOption: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Disables the option.
     */
    disabled?: boolean;
    /**
     * The option value.
     */
    value: string;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
