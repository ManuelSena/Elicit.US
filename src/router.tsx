import * as React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { AboutPage, ContactPage, HomePage } from "./components";
import { App } from "./app";

export const AppRouter: React.StatelessComponent<{}> = () => {
    //browserHistory
    return (
        <Router history={browserHistory}> 
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
            </Route>
        </Router>
    );
}