import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-div">
      <div>
        <Link to="/" className="menu-link">
          <h1 className="logo">MESH URL PHISHING DETECTOR</h1>
        </Link>
      </div>

      <div className="right-side-menu">
        <Link to="/about-us" className="menu-link">
          <h2 className="logo">AboutUs</h2>
        </Link>
        <Link to="/contact-us" className="menu-link">
          <h2 className="logo">ContactUs</h2>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
