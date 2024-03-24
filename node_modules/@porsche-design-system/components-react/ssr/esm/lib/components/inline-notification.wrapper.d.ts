import { type HTMLAttributes } from 'react';
import type { InlineNotificationActionIcon, InlineNotificationState, Theme } from '../types';
export type PInlineNotificationProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Action icon of the inline-notification.
     */
    actionIcon?: InlineNotificationActionIcon;
    /**
     * Action label of the inline-notification.
     */
    actionLabel?: string;
    /**
     * Disables the action button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    actionLoading?: boolean;
    /**
     * Description of the inline-notification.
     */
    description?: string;
    /**
     * If false, the inline-notification will not have a dismiss button.
     */
    dismissButton?: boolean;
    /**
     * Heading of the inline-notification.
     */
    heading?: string;
    /**
     * Emitted when the action button is clicked.
     */
    onAction?: (event: CustomEvent<void>) => void;
    /**
     * Emitted when the close button is clicked.
     */
    onDismiss?: (event: CustomEvent<void>) => void;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `dismissButton` instead. Defines if the inline-notification can be closed/removed by the user.
     */
    persistent?: boolean;
    /**
     * State of the inline-notification.
     */
    state?: InlineNotificationState;
    /**
     * Adapts the inline-notification color depending on the theme.
     */
    theme?: Theme;
};
export declare const PInlineNotification: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Action icon of the inline-notification.
     */
    actionIcon?: InlineNotificationActionIcon;
    /**
     * Action label of the inline-notification.
     */
    actionLabel?: string;
    /**
     * Disables the action button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    actionLoading?: boolean;
    /**
     * Description of the inline-notification.
     */
    description?: string;
    /**
     * If false, the inline-notification will not have a dismiss button.
     */
    dismissButton?: boolean;
    /**
     * Heading of the inline-notification.
     */
    heading?: string;
    /**
     * Emitted when the action button is clicked.
     */
    onAction?: (event: CustomEvent<void>) => void;
    /**
     * Emitted when the close button is clicked.
     */
    onDismiss?: (event: CustomEvent<void>) => void;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `dismissButton` instead. Defines if the inline-notification can be closed/removed by the user.
     */
    persistent?: boolean;
    /**
     * State of the inline-notification.
     */
    state?: InlineNotificationState;
    /**
     * Adapts the inline-notification color depending on the theme.
     */
    theme?: Theme;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
