"use client";
import React from "react";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface ServiceProps {
  iconPath: string;
  title: string;
  text: string;
}

const Service: React.FC<ServiceProps> = ({ iconPath, title, text }) => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Link href="/servicii" className="no-underline text-inherit w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]">
      <div
        ref={ref}
        className="reveal-on-scroll group bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center h-full hover:border-primary/30 hover:shadow-md transition-all duration-300"
      >
        <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-primary/10 transition-colors mb-5">
          <img src={iconPath} alt="" className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
      </div>
    </Link>
  );
};

export default Service;
