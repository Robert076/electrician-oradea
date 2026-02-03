"use client";
import { useState, useEffect } from "react";
import Button from "../button/page";
import "./style.css";
import { HERO_TEXT_CALL_TO_ACTION, HERO_TEXT_SUBTITLU } from "@/lib/constants";

const images = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg"];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      {/* Background Slides */}
      <div className="hero-background">
        {images.map((src, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 10V3L4 14H11L11 21L20 10L13 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Servicii electrice profesionale</span>
          </div>

          <h1 className="hero-title">
            Electrician <span className="highlight">Oradea</span>
          </h1>

          <p className="hero-subtitle">{HERO_TEXT_SUBTITLU}</p>

          <p className="hero-description">{HERO_TEXT_CALL_TO_ACTION}</p>

          <div className="hero-buttons">
            <Button href="tel:0729914750" text="📞 Sună acum" />
            <Button
              href="https://wa.me/40729914750?text=Bun%C4%83%20ziua%2C%20v%C4%83%20pot%20suna%3F"
              text="💬 WhatsApp"
            />
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Certificați ANRE</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Disponibili 24/7</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11.48 3.499C11.6332 3.19365 11.8077 2.89933 12.0018 2.61866C12.1958 2.89933 12.3704 3.19365 12.5236 3.499L14.9203 8.35025L20.2656 9.13279C21.0653 9.25346 21.3735 10.2319 20.7949 10.7955L16.9279 14.5668L17.8377 19.8876C17.9798 20.6846 17.1428 21.2859 16.4382 20.9153L12 18.3984L7.56177 20.9153C6.85721 21.2859 6.02018 20.6846 6.16232 19.8876L7.07207 14.5668L3.20507 10.7955C2.62653 10.2319 2.93474 9.25346 3.73437 9.13279L9.07969 8.35025L11.4764 3.499H11.48Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>500+ clienți mulțumiți</span>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="hero-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
