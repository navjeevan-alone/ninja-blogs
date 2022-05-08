import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [themeIcon, setThemeIcon] = useState("");

  const body = document.querySelector("body");
  useEffect(() => {
    isDark ? setThemeIcon("light_mode") : setThemeIcon("dark_mode");
  }, [isDark]);
  const handleThemeChange = () => {
    body.classList.toggle("dark-theme");
    setIsDark(!isDark);

    isDark ? setThemeIcon("light_mode") : setThemeIcon("dark_mode");
  };

  return (
    <header className="shadow-1 navbar">
      <div className="container nav-container">
        <Link to="/">
          <h2 className="title text-primary brand-title">Ninja Blogs</h2>
        </Link>

        <nav>
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link
            className="nav-item"
            className="btn btn-primary icon-btn"
            to="/create">
            <span className="material-icons">add</span>
            <p>Add</p>
          </Link>
          <span
            className="nav-item icon-only-btn material-icons theme-icon"
            onClick={handleThemeChange}>
            {themeIcon}
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
