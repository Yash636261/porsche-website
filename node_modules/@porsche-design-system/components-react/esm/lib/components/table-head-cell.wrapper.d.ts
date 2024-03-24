import { type HTMLAttributes } from 'react';
import type { TableHeadCellSort } from '../types';
export type PTableHeadCellProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Hides the label but stays accessible for screen readers. This property only takes effect when sort property is not defined.
     */
    hideLabel?: boolean;
    /**
     * Displays slotted text multiline or forced into a single line.
     */
    multiline?: boolean;
    /**
     * Defines sortability properties.
     */
    sort?: TableHeadCellSort;
};
export declare const PTableHeadCell: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Hides the label but stays accessible for screen readers. This property only takes effect when sort property is not defined.
     */
    hideLabel?: boolean | undefined;
    /**
     * Displays slotted text multiline or forced into a single line.
     */
    multiline?: boolean | undefined;
    /**
     * Defines sortability properties.
     */
    sort?: TableHeadCellSort | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
