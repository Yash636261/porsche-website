import { type HTMLAttributes } from 'react';
export type PTabsItemProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Defines the label used in tabs.
     */
    label: string;
};
export declare const PTabsItem: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Defines the label used in tabs.
     */
    label: string;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
