"use client";
import { useState, useEffect } from "react";
import Button from "../button/page";
import "./style.css";
import { HERO_TEXT_CALL_TO_ACTION, HERO_TEXT_SUBTITLU } from "@/lib/constants";

const images = ["/hero.jpg", "/hero2.jpg"];

const page = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {images.map((src, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      ))}

      <h1>Electrician Oradea</h1>
      <p>{HERO_TEXT_SUBTITLU}</p>
      <p>{HERO_TEXT_CALL_TO_ACTION}</p>

      <div className="buttons">
        <Button isPhone={true} href="tel:0729914750" text="Sună-ne" />
        <Button
          isWhatsapp={true}
          href="https://wa.me/40729914750?text=Bun%C4%83%20ziua%2C%20v%C4%83%20pot%20suna%3F"
          text="Mesaj pe whatsapp"
        />
      </div>
    </div>
  );
};

export default page;
