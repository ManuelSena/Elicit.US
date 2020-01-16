import * as React from "react";
import { Link } from "react-router";

export const header: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <Link to="/" className="btn btn-default" >Home</Link>
            <Link to="/about" className="btn btn-default" >About</Link>
            <Link to="/contact" className="btn btn-default" >Contact</Link>
        </div>
    );
}