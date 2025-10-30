import React from "react";
import "./style.css";
import Service from "./service/page";

const Services = () => {
  return (
    <div className="services">
      <h1>Servicii pe care le oferim</h1>
      <div className="services-boxes">
        <Service
          iconPath="/fulger.svg"
          title="Instalații electrice complete"
          text="Executăm instalații electrice complete pentru locuințe, birouri și spații comerciale. Asigurăm montajul, cablarea, măsurătorile și punerea în funcțiune conform normelor în vigoare, oferind siguranță și eficiență energetică."
        />

        <Service
          iconPath="/scut.svg"
          title="Reparații instalații electrice"
          text="Diagnosticăm rapid și reparam orice defecțiune electrică: prize, întrerupătoare, circuite arse sau suprasarcini. Folosim echipamente profesionale pentru intervenții sigure și durabile, indiferent de complexitatea lucrării."
        />

        <Service
          iconPath="/bec.svg"
          title="Montaj prize, întrerupătoare, corpuri de iluminat"
          text="Efectuăm montaj profesional pentru prize, întrerupătoare, lămpi, aplice și candelabre. Garanția noastră este un montaj sigur, curat și perfect funcțional, adaptat nevoilor și designului spațiului tău."
        />

        <Service
          iconPath="/cladire.svg"
          title="Înlocuire tablouri electrice & siguranțe"
          text="Modernizăm tablourile electrice vechi și înlocuim siguranțele pentru o distribuție eficientă și sigură a curentului. Folosim componente certificate, asigurând protecție maximă pentru echipamente și locuință."
        />
      </div>
    </div>
  );
};

export default Services;
