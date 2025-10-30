import React from "react";
import "./style.css";
import UnderServicesThingCheckbox from "./under-services-thing-checkbox/page";

const UnderServicesThing = () => {
  return (
    <div className="under-services-thing">
      <div className="left-half">
        <img src="/electrician.jpg" alt="Electrician profesionist" />
      </div>
      <div className="right-half">
        <div className="info">
          <h1>De ce să alegi echipa noastră de electricieni?</h1>
          <p style={{ marginBottom: "20px" }}>
            Oferim servicii electrice complete, sigure și rapide, realizate de profesioniști cu
            experiență. Ne concentrăm pe calitate, transparență și rezultate de durată — astfel
            încât să te bucuri de confort și siguranță în locuința sau afacerea ta.
          </p>

          <div className="checkboxes">
            <UnderServicesThingCheckbox
              title="Garanție pentru fiecare lucrare"
              description="Primești garanție completă pentru toate lucrările efectuate de echipa noastră."
            />

            <UnderServicesThingCheckbox
              title="Electricieni autorizați, cu experiență reală"
              description="Specialiști calificați, autorizați ANRE, cu experiență în instalații complexe."
            />

            <UnderServicesThingCheckbox
              title="Comunicare clară, fără costuri ascunse"
              description="Primești ofertă clară și preț final încă de la început, fără surprize neplăcute."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderServicesThing;
