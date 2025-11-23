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
              // description="Primești garanție completă pentru toate lucrările efectuate de echipa noastră, indiferent de complexitate."
            />

            <UnderServicesThingCheckbox
              title="Intervenim de urgență, indiferent de zonă"
              // description="Echipa noastră răspunde rapid și intervine în orice cartier sau localitate din Bihor, 24/7."
            />

            <UnderServicesThingCheckbox
              title="Electricieni autorizați, cu experiență reală"
              // description="Lucrările sunt executate doar de electricieni autorizați ANRE, cu experiență în instalații rezidențiale și industriale."
            />

            <UnderServicesThingCheckbox
              title="Comunicare clară, fără costuri ascunse"
              // description="Îți explicăm clar ce urmează să facem, cât costă și de ce — fără taxe ascunse sau surprize."
            />

            <UnderServicesThingCheckbox
              title="Poze sau video după lucrare — transparență totală"
              // description="Primești dovezi foto/video după fiecare lucrare, astfel încât să știi exact ce s-a făcut."
            />

            <UnderServicesThingCheckbox
              title="Plată cash sau card, direct la locație"
              // description="Acceptăm plata în numerar sau cu cardul, pentru confortul tău maxim."
            />

            <UnderServicesThingCheckbox
              title="Lucrăm curat, ca pentru casa noastră"
              // description="Ne asigurăm că zona rămâne curată, fără mizerie, fără praf și fără cabluri abandonate."
            />

            <UnderServicesThingCheckbox
              title="Prețul e comunicat înainte de lucrare"
              // description="Îți transmitem prețul final înainte de intervenție. Fără costuri ascunse, fără discuții ulterioare."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderServicesThing;
