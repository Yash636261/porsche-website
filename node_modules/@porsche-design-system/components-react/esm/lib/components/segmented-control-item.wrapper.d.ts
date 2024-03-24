import { type HTMLAttributes } from 'react';
import type { SegmentedControlItemIcon } from '../types';
export type PSegmentedControlItemProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Disables the button. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * The icon shown.
     */
    icon?: SegmentedControlItemIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * The label text.
     */
    label?: string;
    /**
     * The value of this item which is emitted by the parent element if it becomes selected. This property is **required**.
     */
    value: string | number;
};
export declare const PSegmentedControlItem: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Disables the button. No events will be triggered while disabled state is active.
     */
    disabled?: boolean | undefined;
    /**
     * The icon shown.
     */
    icon?: import("../types").LinkButtonIconName | undefined;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string | undefined;
    /**
     * The label text.
     */
    label?: string | undefined;
    /**
     * The value of this item which is emitted by the parent element if it becomes selected. This property is **required**.
     */
    value: string | number;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
