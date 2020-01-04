import * as React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { AboutPage, ContactPage, HomePage } from "./components";
import { App } from "./app";
export const AppRouter = () => {
    return (React.createElement(Router, { history: browserHistory },
        React.createElement(Route, { path: "/", component: App },
            React.createElement(IndexRoute, { component: HomePage }),
            React.createElement(Route, { path: "/home", component: HomePage }),
            React.createElement(Route, { path: "/about", component: AboutPage }),
            React.createElement(Route, { path: "/contact", component: ContactPage }))));
};
//# sourceMappingURL=router.js.map