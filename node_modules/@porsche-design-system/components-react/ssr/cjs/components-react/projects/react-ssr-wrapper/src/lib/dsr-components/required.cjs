'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Required = () => {
    return jsxRuntime.jsx("span", { className: "required", children: " *" });
};

exports.Required = Required;
