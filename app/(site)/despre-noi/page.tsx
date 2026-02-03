import "./style.css";
import {
  DESPRE_NOI_TEXT_HEADER,
  DESPRE_NOI_TEXT_1,
  DESPRE_NOI_TEXT_2,
  DESPRE_NOI_TEXT_3,
  DESPRE_NOI_TEXT_4,
} from "@/lib/constants";

const DespreNoi = () => {
  return (
    <div className="despre-noi-section">
      {/* Hero Header */}
      <div className="despre-hero" style={{ backgroundImage: "url('/hero3.jpg')" }}>
        <div className="despre-overlay"></div>
        <div className="despre-hero-content">
          <div className="hero-label">Despre noi</div>
          <h1 className="despre-title">{DESPRE_NOI_TEXT_HEADER}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="despre-container">
        <div className="despre-content">
          {/* Icon Section */}
          <div className="despre-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path
                d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Text Content */}
          <div className="despre-text">
            <p className="despre-paragraph highlight-paragraph">{DESPRE_NOI_TEXT_1}</p>
            <p className="despre-paragraph">{DESPRE_NOI_TEXT_2}</p>
            <p className="despre-paragraph">{DESPRE_NOI_TEXT_3}</p>
            <p className="despre-paragraph">{DESPRE_NOI_TEXT_4}</p>
          </div>

          {/* Features Grid */}
          <div className="despre-features">
            <div className="feature-box">
              <div className="feature-box-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="feature-box-content">
                <h3>Experiență</h3>
                <p>Peste 10 ani în domeniu</p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-box-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15ZM12 15V23M8 23H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="feature-box-content">
                <h3>Profesionalism</h3>
                <p>Echipă certificată ANRE</p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-box-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
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
              <div className="feature-box-content">
                <h3>Calitate</h3>
                <p>Garanție la toate lucrările</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="despre-cta">
            <a href="/contact" className="cta-button">
              <span>Contactează-ne</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DespreNoi;
