import { type HTMLAttributes } from 'react';
export type PTableCellProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Displays slotted text multiline or forced into a single line.
     */
    multiline?: boolean;
};
export declare const PTableCell: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Displays slotted text multiline or forced into a single line.
     */
    multiline?: boolean | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
