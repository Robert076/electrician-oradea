"use client";
import { useState, useEffect } from "react";
import Button from "../button/page";
import "./style.css";

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
      <p>
        Ai o urgență electrică? Prize care scot fum, siguranțe care sar, lipsă totală de
        curent?
      </p>
      <p>Sună acum sau trimite-ne un mesaj pe WhatsApp — răspundem imediat.</p>

      <div className="buttons">
        <Button isPhone={true} href="tel:0729914750" text="Sună-ne" />
        <Button
          isWhatsapp={true}
          href="https://wa.me/0729914750?text=Salut!+Am+văzut+site-ul+tău+și+aș+vrea+o+informație."
          text="Mesaj pe whatsapp"
        />
      </div>
    </div>
  );
};

export default page;
