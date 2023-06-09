import { useState } from "react";
import "./Footer.css";

function Footer() {
  let time = new Date();
  let year = time.getFullYear();
  const footerText = `Copyright © ${year} SulkyBug`;

  return (
    <footer>
      <p className="footer-text">{footerText}</p>
    </footer>
  );
}

export default Footer;
