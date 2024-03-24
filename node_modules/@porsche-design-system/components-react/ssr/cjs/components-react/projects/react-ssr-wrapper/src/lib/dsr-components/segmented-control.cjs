'use strict';

var jsxRuntime = require('react/jsx-runtime');
var splitChildren = require('../../splitChildren.cjs');
var react = require('react');
var minifyCss = require('../../minifyCss.cjs');
var stripFocusAndHoverStyles = require('../../stripFocusAndHoverStyles.cjs');
var stylesEntry = require('../../../../../../components/dist/styles/esm/styles-entry.cjs');

class DSRSegmentedControl extends react.Component {
    host;
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren.splitChildren(this.props.children);
        const manipulatedChildren = children.map((child) => typeof child === 'object' && 'props' in child && otherChildren.includes(child)
            ? { ...child, props: { ...child.props, selected: child.props?.value === this.props.value, backgroundColor: this.props.backgroundColor, theme: this.props.theme } }
            : child);
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getSegmentedControlCss(100, this.props.columns)));
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("slot", {}) })] }), manipulatedChildren] }));
    }
}

exports.DSRSegmentedControl = DSRSegmentedControl;
