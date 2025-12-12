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
    <div className="prices" style={{ marginTop: "60px", width: "100%" }}>
      <h1
        style={{
          fontWeight: 600,
          marginBottom: "20px",
          textAlign: "center",
          backgroundImage: "url('/hero2.jpg')",
        }}
      >
        {PRETURI_HEADER}
      </h1>

      <div className="price-category">
        <h3>{PRETURI_INTERVENTII_TITLE}</h3>
        <ul>
          <li>{PRETURI_INTERVENTII_1}</li>
          <li>{PRETURI_INTERVENTII_2}</li>
          <li>{PRETURI_INTERVENTII_3}</li>
          <li>{PRETURI_INTERVENTII_4}</li>
          <li>{PRETURI_INTERVENTII_5}</li>
        </ul>
      </div>

      <div className="price-category" style={{ marginTop: "30px" }}>
        <h3>{PRETURI_INSTALATII_TITLE}</h3>
        <ul>
          <li>{PRETURI_INSTALATII_1}</li>
          <li>{PRETURI_INSTALATII_2}</li>
          <li>{PRETURI_INSTALATII_3}</li>
          <li>{PRETURI_INSTALATII_4}</li>
          <li>{PRETURI_INSTALATII_5}</li>
        </ul>
      </div>

      <p
        style={{
          marginTop: "20px",
          fontStyle: "italic",
          fontSize: "1.2rem",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {PRETURI_NOTE.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default Preturi;
