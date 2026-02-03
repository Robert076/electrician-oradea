import "./style.css";
import {
  BULINA_SERVICIU_1_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_2_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_3_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_4_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_5_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_6_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_7_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_8_TEXT_SUB_CHENAR,
} from "@/lib/constants";

const features = [
  BULINA_SERVICIU_1_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_2_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_3_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_4_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_5_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_6_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_7_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_8_TEXT_SUB_CHENAR,
];

const UnderServicesThing = () => {
  return (
    <div className="why-choose-section">
      <div className="why-choose-container">
        {/* Image Section */}
        <div className="why-choose-image">
          <div className="image-wrapper">
            <img
              src="/electrician.jpg"
              alt="Electrician profesionist la lucru"
              loading="lazy"
            />
            <div className="image-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Profesioniști certificați</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="why-choose-content">
          <div className="content-wrapper">
            <div className="section-label">De ce noi?</div>

            <h2 className="section-title">De ce să alegi echipa noastră de electricieni?</h2>

            <p className="section-description">
              Oferim servicii electrice complete, sigure și rapide, realizate de profesioniști
              cu experiență. Ne concentrăm pe calitate, transparență și rezultate de durată —
              astfel încât să te bucuri de confort și siguranță în locuința sau afacerea ta.
            </p>

            {/* Features Grid */}
            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="stats-bar">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clienți mulțumiți</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Disponibilitate</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Ani experiență</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderServicesThing;
