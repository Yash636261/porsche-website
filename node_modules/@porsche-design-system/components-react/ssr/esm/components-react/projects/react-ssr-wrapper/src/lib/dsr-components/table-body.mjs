import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { splitChildren } from '../../splitChildren.mjs';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getTableBodyCss as getComponentCss$j } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';

class DSRTableBody extends Component {
    host;
    render() {
        splitChildren(this.props.children);
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$j()));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx(Fragment, { children: jsx("slot", {}) })] }), this.props.children] }));
    }
}

export { DSRTableBody };
