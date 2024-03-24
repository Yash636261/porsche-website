import { type HTMLAttributes } from 'react';
import type { StepperHorizontalItemState } from '../types';
export type PStepperHorizontalItemProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Disables the stepper-horizontal-item. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * The validation state.
     */
    state?: StepperHorizontalItemState;
};
export declare const PStepperHorizontalItem: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Disables the stepper-horizontal-item. No events will be triggered while disabled state is active.
     */
    disabled?: boolean | undefined;
    /**
     * The validation state.
     */
    state?: "warning" | "current" | "complete" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
