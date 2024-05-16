import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./LateralBar.css";

function LateralBar() {
  return (
    <section className="buttonsBar">
      <a
        href="https://www.linkedin.com/in/andres-angulo-522a66258/"
        target="_blank"
        className="linkedin"
      >
        <FaLinkedin />
      </a>

      <a href="https://github.com/Sulkybug" target="_blank" className="gitHub">
        <FaGithub />
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=573152637167"
        className="whatsapp"
        target="_blank"
      >
        <FaWhatsapp />
      </a>

      <a
        href="mailto:feang_c0@hotmail.com"
        className="whatsapp"
        target="_blank"
      >
        <FaEnvelope />
      </a>
    </section>
  );
}

export default LateralBar;
