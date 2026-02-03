import React from "react";
import "./style.css";
import {
  PRETURI_HEADER,
  PRETURI_INTERVENTII_TITLE,
  PRETURI_INTERVENTII_1,
  PRETURI_INTERVENTII_2,
  PRETURI_INTERVENTII_3,
  PRETURI_INTERVENTII_4,
  PRETURI_INTERVENTII_5,
  PRETURI_INSTALATII_TITLE,
  PRETURI_INSTALATII_1,
  PRETURI_INSTALATII_2,
  PRETURI_INSTALATII_3,
  PRETURI_INSTALATII_4,
  PRETURI_INSTALATII_5,
  PRETURI_NOTE,
} from "@/lib/constants";

const Preturi = () => {
  return (
    <div className="pricing-page">
      {/* Hero Header with Background Image */}
      <div className="pricing-hero" style={{ backgroundImage: "url('/hero2.jpg')" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="pricing-title">{PRETURI_HEADER}</h1>
          <p className="pricing-subtitle">Transparență și calitate garantată</p>
        </div>
      </div>

      {/* Pricing Container */}
      <div className="pricing-container">
        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {/* Interventii Card */}
          <div className="pricing-card interventii-card">
            <div className="card-header">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 10V3L4 14H11L11 21L20 10L13 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="card-title">{PRETURI_INTERVENTII_TITLE}</h2>
            </div>

            <ul className="pricing-list">
              <li className="pricing-item">
                <span className="item-icon">⚡</span>
                <span className="item-text">{PRETURI_INTERVENTII_1}</span>
              </li>
              <li className="pricing-item">
                <span className="item-icon">⚡</span>
                <span className="item-text">{PRETURI_INTERVENTII_2}</span>
              </li>
              <li className="pricing-item">
                <span className="item-icon">⚡</span>
                <span className="item-text">{PRETURI_INTERVENTII_3}</span>
              </li>
              <li className="pricing-item">
                <span className="item-icon">⚡</span>
                <span className="item-text">{PRETURI_INTERVENTII_4}</span>
              </li>
              <li className="pricing-item">
                <span className="item-icon">⚡</span>
                <span className="item-text">{PRETURI_INTERVENTII_5}</span>
              </li>
            </ul>

            <div className="card-badge">Urgențe 24/7</div>
          </div>

          {/* Instalatii Card */}
          <div className="pricing-card instalatii-card">
            <div className="card-header">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="card-title">{PRETURI_INSTALATII_TITLE}</h2>
            </div>

            <ul className="pricing-list">
              <li className="pricing-item">
                <span className="item-icon">🔧</span>
                <span className="item-text">{PRETURI_INSTALATII_1}</span>
              </li>
              <li className="pricing-item">
                <span className="item-icon">🔧</span>
                <span className="item-text">{PRETURI_INSTALATII_2}</span>
              </li>
              <li className="pricing-item">
                <span className="item-icon">🔧</span>
                <span className="item-text">{PRETURI_INSTALATII_3}</span>
              </li>
              <li className="pricing-item">
                <span className="item-icon">🔧</span>
                <span className="item-text">{PRETURI_INSTALATII_4}</span>
              </li>
              <li className="pricing-item">
                <span className="item-icon">🔧</span>
                <span className="item-text">{PRETURI_INSTALATII_5}</span>
              </li>
            </ul>

            <div className="card-badge">Proiecte complete</div>
          </div>
        </div>

        {/* Note Section */}
        <div className="pricing-note">
          <div className="note-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="note-content">
            {PRETURI_NOTE.split("\n").map((line, idx) => (
              <p key={idx} className="note-line">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="pricing-cta">
          <h3>Ai nevoie de o ofertă personalizată?</h3>
          <p>Contactează-ne pentru o evaluare gratuită și o ofertă adaptată nevoilor tale!</p>
          <div className="cta-buttons">
            <a href="tel:0729914750" className="cta-button primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sună acum
            </a>
            <a href="/contact" className="cta-button secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Formular contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preturi;
