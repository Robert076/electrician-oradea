import React from "react";
import Review from "./review/page";

const ReviewSection = () => {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "16px",
        padding: "16px",
        scrollBehavior: "smooth",
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <Review
          author="Camycarmen Marc"
          text="Sunt foarte multumita de serviciile prestate! Foarte punctual ,a lucrat curat si organizat,mi-a explicat la fiecare pas ce face.Recomand cu încredere!"
          imagePath="/cgri.png"
        />
      </div>

      <div style={{ flexShrink: 0 }}>
        <Review
          author="Bradea Laura Camelia"
          text="Servicii prompte si profesioniste, se lucreaza curat, eficient si calitativ. Recomand cu incredere 🙂"
          imagePath="/bverde.png"
        />
      </div>

      <div style={{ flexShrink: 0 }}>
        <Review
          author="Chebeleu Ciprian"
          text="Super ok!!!
Am avut niste ...nevoi electrice (prize desprise, oglinzi electrice nemontate, racorduri nefinalizate).
A venit repede, a văzut despre ce e vorba, a știut ce e de făcut și a rezolvat toate problemele.
După 2 luni totul ok!"
          imagePath="/cgri.png"
        />
      </div>

      <div style={{ flexShrink: 0 }}>
        <Review
          author="Monica Gonczy"
          text="Super profesionalism!!! Rapid și eficient.
Sunt foarte încântată de serviciile prestate!"
          imagePath="/mverde.png"
        />
      </div>

      <div style={{ flexShrink: 0 }}>
        <Review
          author="Maria Carajia"
          text="Foarte multumiti de serviciile prestate, foarte prompt si punctual, lucrarea executata a fost de calitate. Mai apelam neaparat cu orice problema legata de partea electrica"
          imagePath="/mmaro.png"
        />
      </div>

      <div style={{ flexShrink: 0 }}>
        <Review
          author="Cristina sss"
          text="Super punctal și servicii de calitate."
          imagePath="/calbastru.png"
        />
      </div>

      <div style={{ flexShrink: 0 }}>
        <Review author="dazurit" text="Promt, profesional, rapid!" imagePath="/dazurit.png" />
      </div>
      <div style={{ flexShrink: 0 }}>
        <Review author="Bogdan Fuciu" text="👍🏻👍🏻👍🏻👍🏻" imagePath="/bfuc.png" />
      </div>
      <div style={{ flexShrink: 0 }}>
        <Review
          author="Raluca Legman"
          text="Foarte prompti, profesionisti si de ajutor. Ofera solutii practice si eficiente, la preturi accesibile. Recomand cu drag!!!"
          imagePath="/rroz.png"
        />
      </div>
      <div style={{ flexShrink: 0 }}>
        <Review author="Radu Istoc" text="" imagePath="/rist.png" />
      </div>
    </div>
  );
};

export default ReviewSection;
