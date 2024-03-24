import { type HTMLAttributes } from 'react';
import type { TextListListType, TextListOrderType, Theme, TextListType } from '../types';
export type PTextListProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `type` instead. The type of the list.
     */
    listType?: TextListListType;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `type` instead. The list style type of ordered list. Only has effect when list type is set to 'ordered'.
     */
    orderType?: TextListOrderType;
    /**
     * Adapts the text color depending on the theme.
     */
    theme?: Theme;
    /**
     * The list style type.
     */
    type?: TextListType;
};
export declare const PTextList: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `type` instead. The type of the list.
     */
    listType?: "unordered" | "ordered" | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `type` instead. The list style type of ordered list. Only has effect when list type is set to 'ordered'.
     */
    orderType?: "numbered" | "alphabetically" | undefined;
    /**
     * Adapts the text color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
    /**
     * The list style type.
     */
    type?: "unordered" | "numbered" | "alphabetically" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
