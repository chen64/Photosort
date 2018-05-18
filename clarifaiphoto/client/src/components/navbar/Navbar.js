import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            Clarif
        </Link>
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
        <li className={window.location.pathname==="/auth/flickr"
               ? "nav-item active"
               : "nav-item"}>
           <a href="http://localhost:3001/auth/flickr" className="nav-link" >
               Login
           </a>    
           </li>
            <li className="logout">Logout</li>
        </ul>
    </nav>
);

export default Navbar;