"use client";

import { useRouter } from "next/navigation";
import "./style.css";

interface ButtonProps {
  text: string;
  href?: string;
  isPhone?: boolean;
}

export default function Button({ text, href, isPhone = false }: ButtonProps) {
  const router = useRouter();

  return (
    <button
      className="button"
      onClick={() => {
        if (href) router.push(href);
      }}
    >
      {isPhone && <img src="/phone.svg" alt="" />}
      {text}
    </button>
  );
}
