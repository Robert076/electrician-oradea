"use client";

import { useRouter } from "next/navigation";
import "./style.css";

interface ButtonProps {
  text: string;
  href?: string;
  isPhone?: boolean;
  isWhatsapp?: boolean;
  isFacebook?: boolean;
}

export default function Button({
  text,
  href,
  isPhone = false,
  isWhatsapp = false,
  isFacebook = false,
}: ButtonProps) {
  const router = useRouter();

  return (
    <button
      className="button"
      onClick={() => {
        if (href) router.push(href);
      }}
    >
      {isPhone && <img src="/phone.svg" alt="" />}
      {isWhatsapp && <img src="/whatsapp.svg" alt="" />}
      {isFacebook && <img src="/facebook.svg" alt="" />}
      {text}
    </button>
  );
}
