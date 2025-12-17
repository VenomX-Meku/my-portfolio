import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we are on Home page
  const isHome = location.pathname === "/";

  // Toggle dark mode
  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      {/* Stylish text logo */}
      <Link
        to="/"
        className="text-logo"
        onClick={() => setMenuOpen(false)}
      >
        Mekuanint
      </Link>

      {/* ⭐ Spacer pushes nav to the right */}
      <div className="nav-spacer"></div>

      {/* Desktop + Mobile menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>
          {isHome ? <a href="#home">Home</a> : <Link to="/">Home</Link>}
        </li>

        <li onClick={() => setMenuOpen(false)}>
          {isHome ? <a href="#about">About</a> : <Link to="/about">About</Link>}
        </li>

        <li onClick={() => setMenuOpen(false)}>
          {isHome ? <a href="#projects">Project</a> : <Link to="/projects">Project</Link>}
        </li>

        <li onClick={() => setMenuOpen(false)}>
          {isHome ? <a href="#contact">Contact</a> : <Link to="/contact">Contact</Link>}
        </li>
      </ul>

      {/* Dark mode toggle */}
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {darkMode ? "🌞" : "🌙"}
      </button>

      {/* Mobile Hamburger Button */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`menu-icon ${menuOpen ? "open" : ""}`}></span>
      </button>
    </nav>
  );
}
