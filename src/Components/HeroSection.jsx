import React, { useState } from "react";
import "./HeroSection.css";
import { FaArrowDown } from "react-icons/fa";
function HeroSection({ classDiv }) {
  const [MousePosition, setMousePosition] = useState({
    left: 800,
    top: 400,
  });

  function dataMouse(e) {
    setMousePosition({
      left: e.pageX - 150,
      top: e.pageY - 150,
    });
  }

  return (
    <div className="hero-container" onMouseMove={dataMouse}>
      <h1>Hey, I'm Andres Angulo</h1>
      <div
        className={classDiv}
        style={{
          left: `${MousePosition.left}px`,
          top: `${MousePosition.top}px`,
        }}
      ></div>
      <div className="box">
        <p className="underH1">Web Developer </p>
        <img
          src="/Portafolio/img/message-code.png"
          alt="coding"
          className="code-img"
          width="512"
          height="512"
          loading="lazy"
        />
      </div>
      <p className="description">
        "Frontend Developer from Colombia detail-oriented, focused in simple and
        efficent coding."
      </p>
      <a href="#myWork" className="sendToPortafolio">
        <button className="btn-Projects">
          Check Out My Projects&thinsp;
          <FaArrowDown />
        </button>
      </a>
    </div>
  );
}

export default HeroSection;
