'use strict';

var jsxRuntime = require('react/jsx-runtime');
var splitChildren = require('../../splitChildren.cjs');
var react = require('react');
var minifyCss = require('../../minifyCss.cjs');
var stripFocusAndHoverStyles = require('../../stripFocusAndHoverStyles.cjs');
var stylesEntry = require('../../../../../../components/dist/styles/esm/styles-entry.cjs');
var stateMessage = require('./state-message.cjs');
var label = require('./label.cjs');

class DSRTextareaWrapper extends react.Component {
    host;
    textarea;
    counterElement;
    ariaElement;
    hasCounter;
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren.splitChildren(this.props.children);
        const { disabled } = typeof otherChildren[0] === 'object' && 'props' in otherChildren[0] && otherChildren[0]?.props || {};
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getTextareaWrapperCss(disabled, this.props.hideLabel, this.props.state, this.props.hasCounter, this.props.theme)));
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsxs("div", { className: "root", children: [jsxRuntime.jsx(label.Label, { hasLabel: this.props.label || namedSlotChildren.filter(({ props: { slot } }) => slot === 'label').length > 0, hasDescription: this.props.description || namedSlotChildren.filter(({ props: { slot } }) => slot === 'description').length > 0, host: null, label: this.props.label, description: this.props.description, isDisabled: disabled, formElement: typeof otherChildren[0] === 'object' && 'props' in otherChildren[0] && otherChildren[0]?.props }), jsxRuntime.jsxs("div", { className: "wrapper", children: [jsxRuntime.jsx("slot", {}), this.props.hasCounter && jsxRuntime.jsx("span", { className: "counter", "aria-hidden": "true" }), this.props.hasCounter && jsxRuntime.jsx("span", { className: "sr-only", "aria-live": "polite" })] }), jsxRuntime.jsx(stateMessage.StateMessage, { hasMessage: (this.props.message || namedSlotChildren.filter(({ props: { slot } }) => slot === 'message').length > 0) && ['success', 'error'].includes(this.props.state), state: this.props.state, message: this.props.message, theme: this.props.theme, host: null })] })] }), this.props.children] }));
    }
}

exports.DSRTextareaWrapper = DSRTextareaWrapper;
