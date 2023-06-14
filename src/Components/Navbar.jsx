import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ onScroll }) => {
  const navRef = useRef();
  const showNavBar = () => {
    window.innerWidth < 1024
      ? navRef.current.classList.toggle("toggle_nav")
      : "";
  };

  return (
    <header className={onScroll}>
      <a href="#" className="navbar-logo">
        <img
          src="/Portafolio/img/logo.png"
          alt="icon"
          className="myLogo"
          loading="lazy"
        />
        <h2 className="logoText">SulkyBug</h2>
      </a>
      <nav ref={navRef}>
        <a href="#" onClick={showNavBar}>
          Home
        </a>
        <a href="#aboutMe" onClick={showNavBar}>
          About me
        </a>
        <a href="#myWork" onClick={showNavBar}>
          My Work
        </a>
        <a href="#ContactMe" onClick={showNavBar}>
          Contact me
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
