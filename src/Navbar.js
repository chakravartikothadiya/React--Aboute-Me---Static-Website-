import React from "react";
import logo from './logo512.png';

export default function Navbar()
{
    return (
        <nav className="Navigation-Bar">
            <img className="Navigation-logo" src={logo} alt=""/>
            <h1 className="Navigation-header">Chakravarti Kothadiya</h1>
        </nav>
    );
}