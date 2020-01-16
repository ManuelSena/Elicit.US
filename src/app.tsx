import * as React from "react";
import { header } from "./components/header/header";

export const App: React.StatelessComponent<{}> = (props) => {

    return (
        <div className="container">
            <header />
            {props.children}
        </div>
    );
}