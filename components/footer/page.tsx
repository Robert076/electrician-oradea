import React from "react";
import "./style.css";
import Button from "@/components/button/page";
import Link from "next/link";

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
          isWhatsapp={true}
          href="https://wa.me/0729914750?text=Salut!+Am+văzut+site-ul+tău+și+aș+vrea+o+informație."
          text="Mesaj pe whatsapp"
        />
      </div>
      <div className="down-footer-wrapper">
        <div className="links-footer">
          <p>Link-uri utile</p>
          <Link href="#">Facebook</Link>
          <Link href="#">Formular de contact</Link>
        </div>
        <div className="adresa-footer">
          <p>Informații de contact</p>
          <Link href="mail:office@electricianoradea.ro">office@electricianoradea.ro</Link>
          <Link href="tel:0729914750">0729914750</Link>
        </div>
        <div className="social-media-footer">
          <p>Social media</p>
          <Link href="mail:office@electricianoradea.ro">Facebook</Link>
        </div>
      </div>
      <p className="copyright">&copy;&nbsp;Copyright Electrician Oradea 2025.</p>
      <Link className="anpc" href="https://anpc.ro">
        <div>
          <img src="/anpc1.png" alt="" />
          <img src="/anpc2.png" alt="" />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
