import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            Clarif
        </Link>
        <div>
        <ul className="navbar-nav">
            <li
            className={
                window.location.pathname === "/About" 
                ? "nav-item active"
                : "nav-item"
                }
            >
            <Link to="/about" className="nav-link">
                About
            </Link>
            </li>
        </ul>
        <ul className="navbar-nav pull-right">
            <li className="">Login</li>
            <li className="">Logout</li>
        </ul>
        </div>
    </nav>
);

export default Navbar;