import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a to="/" className="navbar-logo">
            <img src="/img/logo.png" alt="icon" className="myLogo" />
          </a>
          <a href="#">Home</a>
          <a href="#">My Work</a>
          <a href="">About me</a>
          <button>
            <FaTimes />
          </button>
        </div>
      </nav>
      <button>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
