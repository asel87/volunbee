import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">VolunBee</div>
    <nav className="nav-links">
      <a href="#">Events</a>
      <a href="#">My Profile</a>
      <a href="#">About</a>
    </nav>
  </header>
);

export default Header;
