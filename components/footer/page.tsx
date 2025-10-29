import React from "react";
import "./style.css";
import Button from "@/components/button/page";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <p className="hook">Eşti gata pentru o consultare?</p>
      <p className="description">Nu ezita sa ne contactezi folosind butonul de mai jos</p>
      <Button href="tel:075654323" text="0744605023" isPhone={true} />
    </footer>
  );
};

export default Footer;
