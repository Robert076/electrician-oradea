import "./style.css";
import Button from "@/components/button/page";
import Link from "next/link";
import { FOOTER_CALL_TO_ACTION, FOOTER_HEADER } from "@/lib/constants";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        {/* Main CTA Section */}
        <div className="footer-cta">
          <h2 className="footer-hook">{FOOTER_HEADER}</h2>
          <p className="footer-description">{FOOTER_CALL_TO_ACTION}</p>
          <div className="footer-buttons">
            <Button href="tel:0729914750" text="📞 0729914750" />
            <Button
              href="https://wa.me/40729914750?text=Bun%C4%83%20ziua%2C%20v%C4%83%20pot%20suna%3F"
              text="💬 Mesaj WhatsApp"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Links Section */}
        <div className="footer-links-wrapper">
          <div className="footer-column">
            <h3 className="column-title">Link-uri utile</h3>
            <nav className="footer-nav">
              <Link href="/contact" className="footer-link">
                Formular de contact
              </Link>
              <Link href="/blog" className="footer-link">
                Blog & Articole
              </Link>
            </nav>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Informații de contact</h3>
            <div className="footer-nav">
              <Link href="mailto:office@electricianoradea.ro" className="footer-link">
                <svg
                  className="link-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 4L8 8L14 4M2 4V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V4M2 4C2 3.44772 2.44772 3 3 3H13C13.5523 3 14 3.44772 14 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                office@electricianoradea.ro
              </Link>
              <Link href="tel:0729914750" className="footer-link">
                <svg
                  className="link-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.5 1.5C3.5 1.22386 3.72386 1 4 1H6C6.27614 1 6.5 1.22386 6.5 1.5V4.5C6.5 4.77614 6.27614 5 6 5H4.5C4.5 7.76142 6.73858 10 9.5 10V8.5C9.5 8.22386 9.72386 8 10 8H13C13.2761 8 13.5 8.22386 13.5 8.5V10.5C13.5 10.7761 13.2761 11 13 11H10.5C6.35786 11 3 7.64214 3 3.5V1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                0729 914 750
              </Link>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Social Media</h3>
            <div className="footer-nav">
              <Link
                href="https://www.facebook.com/electricianoradea2025"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <svg
                  className="link-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM10 5.5H8.8C8.4 5.5 8.2 5.7 8.2 6.1V7H10L9.8 8.8H8.2V13.5H6.2V8.8H5V7H6.2V5.9C6.2 4.6 6.9 4 8.4 4H10V5.5Z"
                    fill="currentColor"
                  />
                </svg>
                Facebook
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Electrician Oradea. Toate drepturile rezervate.
          </p>

          <Link
            className="footer-anpc"
            href="https://anpc.ro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/anpc1.png" alt="ANPC - Soluționarea Alternativă a Litigiilor" />
            <img src="/anpc2.png" alt="ANPC - Soluționarea Online a Litigiilor" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
