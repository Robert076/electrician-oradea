"use client";
import { useState, useEffect } from "react";
import "./cookie-notice.css";

export default function CookieNotice() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-notice-dismissed");
    if (!dismissed) {
      setShowNotice(true);
    }
  }, []);

  const dismissNotice = () => {
    localStorage.setItem("cookie-notice-dismissed", "true");
    setShowNotice(false);
  };

  if (!showNotice) return null;

  return (
    <div className="cookie-notice">
      <div className="cookie-notice-container">
        <div className="cookie-notice-text">
          <p>
            Acest site folosește cookie-uri pentru a analiza traficul și a îmbunătăți
            experiența ta. Continuând să folosești site-ul, ești de acord cu utilizarea
            cookie-urilor.
          </p>
        </div>
        <button onClick={dismissNotice} className="cookie-notice-button">
          Am înțeles
        </button>
      </div>
    </div>
  );
}
