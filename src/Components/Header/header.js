import * as React from "react";
import { Link } from "react-router";
export const header = () => {
    return (React.createElement("div", null,
        React.createElement(Link, { to: "/", className: "btn btn-default" }, "Home"),
        React.createElement(Link, { to: "/about", className: "btn btn-default" }, "About"),
        React.createElement(Link, { to: "/contact", className: "btn btn-default" }, "Contact")));
};
//# sourceMappingURL=header.js.map