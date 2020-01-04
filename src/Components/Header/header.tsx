import * as React from "react";
import { Link } from "react-router";

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <Link to="/home" className="btn btn-default" >Home</Link>
            <Link to="/about" className="btn btn-default" >About</Link>
            <Link to="/contact" className="btn btn-default" >Contact</Link>
        </div>
    );
}