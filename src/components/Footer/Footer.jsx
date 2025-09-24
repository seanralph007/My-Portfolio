import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <p>Tel: +2348086858275</p>
      <p>Designed and built by Chukwudi Kingsley Okoro</p>
      <p>ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
