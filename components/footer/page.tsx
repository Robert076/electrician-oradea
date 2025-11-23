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
      <div className="buttons">
        <Button href="tel:0729914750" text="0729914750" isPhone={true} />
        <Button
          href="https://wa.me/0729914750?text=Salut!+Am+văzut+site-ul+tău+și+aș+vrea+o+informație."
          text="Mesaj pe whatsapp"
        />
      </div>
    </footer>
  );
};

export default Footer;
