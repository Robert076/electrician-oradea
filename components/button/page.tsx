"use client";

import { useRouter } from "next/navigation";

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

  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm sm:text-base text-white shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer border-none";

  const color = isWhatsapp
    ? "bg-green-500 hover:bg-green-600"
    : "bg-primary hover:bg-blue-700";

  return (
    <button
      className={`${base} ${color}`}
      onClick={() => {
        if (href) router.push(href);
      }}
    >
      {isPhone && <img src="/phone.svg" alt="" className="w-5 h-5" />}
      {isWhatsapp && <img src="/whatsapp.svg" alt="" className="w-5 h-5" />}
      {isFacebook && <img src="/facebook.svg" alt="" className="w-5 h-5" />}
      {text}
    </button>
  );
}
