import React from "react";
import "./style.css";
import UnderServicesThingCheckbox from "@/components/under-services-thing/under-services-thing-checkbox/page";

const servicesData = [
  {
    title: "Urgențe electrice 24/7",
    description:
      "Intervenții rapide pentru pene de curent, prize cu fum, scurtcircuite, siguranțe care sar și cabluri topite. Diagnostic pe loc, reparație rapidă și testare completă.",
  },
  {
    title: "Montaj & Reparații electrice",
    description:
      "Montaj prize, întrerupătoare, corpuri de iluminat, reparații circuite și conexiuni slăbite, înlocuire cabluri vechi și instalare prize sigure în baie sau bucătărie.",
  },
  {
    title: "Tablouri & Siguranțe electrice",
    description:
      "Montaj tablouri moderne cu protecție diferențială, reconfigurare circuite pentru consumatori mari și înlocuire siguranțe vechi din porțelan.",
  },
  {
    title: "Verificări periodice & Audit electric",
    description:
      "Verificări complete ale instalației: prize, siguranțe, tablouri, împământare și consum anormal. Recomandate anual pentru case vechi și la 2–3 ani pentru locuințe noi.",
  },
  {
    title: "Automatizări & Smart Home",
    description:
      "Iluminat automat, control prin telefon, senzori inteligenți, siguranțe smart, video-interfon, sisteme de control acces și automatizări pentru porți.",
  },
];

const MainServices = () => {
  return (
    <div className="services-details">
      <div className="info">
        <h1>Serviciile noastre</h1>

        <div className="checkboxes">
          {servicesData.map((service, index) => (
            <UnderServicesThingCheckbox
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <p style={{ marginTop: "50px", maxWidth: "1000px" }} className="subtext">
          Intervenim oriunde în Bihor și în toate cartierele din Oradea — Rogerius, Ioșia,
          Nufărul, Cantemir, Oncea, Calea Aradului, Episcopia, Grigorescu, Bălcescu, Velenta,
          Decebal, Nicolae Iorga și zonele apropiate.
        </p>

        <div
          className="prices"
          style={{
            marginTop: "60px",
            width: "100%",
          }}
        >
          <h1 style={{ fontWeight: 600, marginBottom: "20px", textAlign: "center" }}>
            Lista de prețuri
          </h1>

          <div>
            <h3>Electrician Oradea – Intervenții</h3>
            <ul>
              <li>
                Deplasare + constatare – 150 - 250 RON (în funcție de distanță și complexitate)
              </li>
              <li>Reparație – în funcție de constatare</li>
              <li>Urgențe – Tarif de bază + 50%</li>
              <li>Schimbat prize / întrerupătoare – 50 RON / buc (min. 150 RON)</li>
              <li>
                Schimbat corp iluminat – min. 50 RON / buc (în funcție de complexitate poate
                crește)
              </li>
            </ul>
          </div>

          <div className="price-category" style={{ marginTop: "30px" }}>
            <h3>Electrician Oradea – Instalații A-Z</h3>
            <ul>
              <li>Montaj trasee prize / întrerupătoare – 115 RON / aparat</li>
              <li>Montaj doze distribuție – 50 RON / buc</li>
              <li>Montaj doze aparate – 12 RON / buc</li>
              <li>
                Montaj aparate – 15 RON / buc (25 RON / buc dacă instalația nu e făcută de noi)
              </li>
              <li>Montaj tablou siguranțe – min. 250 RON (în funcție de complexitate)</li>
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
            *Prețurile pot fi negociabile în funcție de mărimea lucrării sau intervenției.{" "}
            <br />
            Fără scurtcircuit în portofel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
