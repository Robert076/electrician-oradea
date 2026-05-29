"use client";
import { useState, useEffect } from "react";
import Button from "../button/page";
import { HERO_TEXT_CALL_TO_ACTION, HERO_TEXT_SUBTITLU } from "@/lib/constants";

const images = ["/hero.jpg", "/hero2.jpg"];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-6 h-[75vh] min-h-[500px] rounded-2xl overflow-hidden shadow-lg">
      {/* Slides */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-12 lg:p-16">
        <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-white/70 mb-2">
          Servicii electrice profesionale
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight">
          Electrician<br />
          <span className="text-white/90">Oradea</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
          {HERO_TEXT_SUBTITLU}
        </p>
        <p className="mt-2 text-base sm:text-lg text-white/60 max-w-xl">
          {HERO_TEXT_CALL_TO_ACTION}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button isPhone={true} href="tel:0729914750" text="Sună-ne" />
          <Button
            isWhatsapp={true}
            href="https://wa.me/40729914750?text=Bun%C4%83%20ziua%2C%20v%C4%83%20pot%20suna%3F"
            text="Mesaj pe whatsapp"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
