import * as React from "react";
export const Button = (props) => {
    return (React.createElement("button", { type: "button", className: props.className, onClick: props.onClick, disabled: props.disabled }, props.label));
};
//# sourceMappingURL=button.js.map