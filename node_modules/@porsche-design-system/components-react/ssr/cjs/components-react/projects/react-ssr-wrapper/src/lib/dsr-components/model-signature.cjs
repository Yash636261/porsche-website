'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var minifyCss = require('../../minifyCss.cjs');
var stripFocusAndHoverStyles = require('../../stripFocusAndHoverStyles.cjs');
var stylesEntry = require('../../../../../../components/dist/styles/esm/styles-entry.cjs');
var utilsEntry = require('../../../../../../components/dist/utils/esm/utils-entry.cjs');

class DSRModelSignature extends react.Component {
    host;
    render() {
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getModelSignatureCss(this.props.size, this.props.color, this.props.theme)));
        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsx("img", { src: utilsEntry.getSvgUrl(this.props.model), height: utilsEntry.modelSignatureHeight, alt: this.props.model })] }) }));
    }
}

exports.DSRModelSignature = DSRModelSignature;
