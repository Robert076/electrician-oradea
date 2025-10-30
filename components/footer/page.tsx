import React from "react";
import "./style.css";
import Button from "@/components/button/page";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <p className="hook" style={{ marginBottom: "20px" }}>
        Ai o urgență electrică? Prize care scot fum, siguranțe care sar, lipsă totală de
        curent?
      </p>
      <p className="description">
        Sună acum sau trimite-ne un mesaj pe WhatsApp — răspundem imediat.
      </p>
      <Button href="tel:075654323" text="0744605023" isPhone={true} />
    </footer>
  );
};

export default Footer;
