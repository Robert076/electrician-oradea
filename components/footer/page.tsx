import Button from "@/components/button/page";
import Link from "next/link";
import { FOOTER_CALL_TO_ACTION, FOOTER_HEADER } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* CTA Section */}
      <div className="bg-gray-900 text-center py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">{FOOTER_HEADER}</h2>
        <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto">{FOOTER_CALL_TO_ACTION}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button href="tel:0729914750" text="0729914750" isPhone={true} />
          <Button
            isWhatsapp={true}
            href="https://wa.me/40729914750?text=Bun%C4%83%20ziua%2C%20v%C4%83%20pot%20suna%3F"
            text="Mesaj pe whatsapp"
          />
        </div>
      </div>

      {/* Links Section - dark */}
      <div className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-semibold mb-3 text-white">Link-uri utile</p>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors no-underline block">
              Formular de contact
            </Link>
          </div>
          <div>
            <p className="font-semibold mb-3 text-white">Informații de contact</p>
            <Link href="mailto:office@electricianoradea.ro" className="text-gray-400 hover:text-white transition-colors no-underline block mb-1">
              office@electricianoradea.ro
            </Link>
            <Link href="tel:0729914750" className="text-gray-400 hover:text-white transition-colors no-underline block">
              0729914750
            </Link>
          </div>
          <div>
            <p className="font-semibold mb-3 text-white">Social media</p>
            <Link href="https://www.facebook.com/electricianoradea2025" className="text-gray-400 hover:text-white transition-colors no-underline block">
              Facebook
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-950 py-5 px-4 text-center text-xs text-gray-500">
        <p>&copy; Copyright Electrician Oradea 2025.</p>
        <Link href="https://anpc.ro" className="inline-flex gap-3 mt-3 items-center opacity-60 hover:opacity-100 transition-opacity">
          <img src="/anpc1.png" alt="ANPC" className="h-8 object-contain" />
          <img src="/anpc2.png" alt="ANPC" className="h-8 object-contain" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
