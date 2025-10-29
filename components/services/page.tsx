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
          title="Serviciu 1"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iusto sunt. Sequi voluptatem nulla earum nam enim beatae ratione maxime?"
        />
        <Service
          iconPath="/bec.svg"
          title="Serviciu 2"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iusto sunt. Sequi voluptatem nulla earum nam enim beatae ratione maxime?"
        />
        <Service
          iconPath="/scut.svg"
          title="Serviciu 3"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iusto sunt. Sequi voluptatem nulla earum nam enim beatae ratione maxime?"
        />
        <Service
          iconPath="/cladire.svg"
          title="Serviciu 4"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iusto sunt. Sequi voluptatem nulla earum nam enim beatae ratione maxime?"
        />
      </div>
    </div>
  );
};

export default Services;
