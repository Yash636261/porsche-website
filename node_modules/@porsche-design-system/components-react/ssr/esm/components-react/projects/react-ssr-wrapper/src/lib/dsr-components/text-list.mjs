import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { splitChildren } from '../../splitChildren.mjs';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getTextListCss as getComponentCss$6 } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { isListTypeOrdered } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRTextList extends Component {
    host;
    render() {
        splitChildren(this.props.children);
        const TagType = isListTypeOrdered(this.props.listType || this.props.type) ? 'ol' : 'ul';
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$6(this.props.listType === 'ordered' ? this.props.orderType || 'numbered' : this.props.type, this.props.theme)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx(TagType, { children: jsx("slot", {}) })] }), this.props.children] }));
    }
}

export { DSRTextList };
