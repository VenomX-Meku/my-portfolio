import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return(
        <nav className="navbar">
            <h2 className="logo">My Portifolio</h2>

           <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>

            </ul>
        </nav>
    );
}