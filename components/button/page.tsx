"use client";

import { useRouter } from "next/navigation";
import "./style.css";

interface ButtonProps {
  text: string;
  href: string;
  isPhone?: boolean;
}

export default function Button({ text, href, isPhone = false }: ButtonProps) {
  const router = useRouter();

  return (
    <button className="button" onClick={() => router.push(href)}>
      {isPhone && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon"
        >
          <path d="M2 3.5C2 2.67 2.67 2 3.5 2h3C7.33 2 8 2.67 8 3.5V6c0 .83-.67 1.5-1.5 1.5H5v2.59l1.06 1.06a16.02 16.02 0 0 0 6.29 6.29L13.41 16H16c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5H3.5A1.5 1.5 0 0 1 2 20.5v-17z" />
        </svg>
      )}
      {text}
    </button>
  );
}
