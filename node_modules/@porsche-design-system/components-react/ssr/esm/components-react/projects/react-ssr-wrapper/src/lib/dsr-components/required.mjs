import { jsx } from 'react/jsx-runtime';

const Required = () => {
    return jsx("span", { className: "required", children: " *" });
};

export { Required };
