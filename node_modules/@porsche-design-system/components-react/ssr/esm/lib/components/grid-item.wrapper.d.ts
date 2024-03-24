import { type HTMLAttributes } from 'react';
import type { BreakpointCustomizable, GridItemOffset, GridItemSize } from '../types';
export type PGridItemProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
     */
    offset?: BreakpointCustomizable<GridItemOffset>;
    /**
     * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
     */
    size?: BreakpointCustomizable<GridItemSize>;
};
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
export declare const PGridItem: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
     */
    offset?: BreakpointCustomizable<GridItemOffset>;
    /**
     * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
     */
    size?: BreakpointCustomizable<GridItemSize>;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
