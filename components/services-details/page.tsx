import React from "react";
import "./style.css";
import UnderServicesThingCheckbox from "@/components/under-services-thing/under-services-thing-checkbox/page";

const servicesData = [
  {
    title: "Instalații electrice complete",
    description:
      "Executăm instalații electrice complete pentru locuințe, birouri și spații comerciale, respectând toate normele de siguranță.",
  },
  {
    title: "Reparații instalații electrice",
    description:
      "Remediem rapid orice defecțiune electrică — circuite, prize, întrerupătoare sau tablouri, cu echipamente profesionale.",
  },
  {
    title: "Montaj prize, întrerupătoare, corpuri de iluminat",
    description:
      "Montăm prize, întrerupătoare și corpuri de iluminat cu atenție la detalii și siguranță.",
  },
  {
    title: "Înlocuire tablouri electrice & siguranțe",
    description:
      "Modernizăm tablourile electrice și înlocuim siguranțele pentru o protecție eficientă și sigură.",
  },
  {
    title: "Verificări, depanare și diagnostic rapid",
    description:
      "Efectuăm verificări și depanări rapide pentru a identifica și rezolva orice problemă electrică.",
  },
  {
    title: "Automatizări & smart home",
    description:
      "Instalăm soluții smart home, senzori și automatizări pentru confort și control complet al locuinței.",
  },
  {
    title: "Sisteme de securitate, camere & interfoane",
    description:
      "Montăm sisteme de securitate, camere video, interfoane și sisteme de acces pentru protecția ta.",
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
      </div>
    </div>
  );
};

export default MainServices;
