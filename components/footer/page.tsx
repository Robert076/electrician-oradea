import "./style.css";
import Button from "@/components/button/page";
import Link from "next/link";
import { FOOTER_CALL_TO_ACTION, FOOTER_HEADER } from "@/lib/constants";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <p className="hook" style={{ marginBottom: "20px" }}>
        {FOOTER_HEADER}
      </p>
      <p className="description">{FOOTER_CALL_TO_ACTION}</p>
      <div className="buttons">
        <Button href="tel:0729914750" text="0729914750" isPhone={true} />
        <Button
          isWhatsapp={true}
          href="https://wa.me/40729914750?text=Bun%C4%83%20ziua%2C%20v%C4%83%20pot%20suna%3F"
          text="Mesaj pe whatsapp"
        />
      </div>
      <div className="down-footer-wrapper">
        <div className="links-footer">
          <p>Link-uri utile</p>
          <Link href="/contact">Formular de contact</Link>
        </div>
        <div className="adresa-footer">
          <p>Informații de contact</p>
          <Link href="mail:office@electricianoradea.ro">office@electricianoradea.ro</Link>
          <Link href="tel:0729914750">0729914750</Link>
        </div>
        <div className="social-media-footer">
          <p>Social media</p>
          <Link href="https://www.facebook.com/electricianoradea2025">Facebook</Link>
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
