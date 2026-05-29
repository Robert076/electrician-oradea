"use client";
import React, { useRef } from "react";
import Review from "./review/page";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { author: "Camycarmen Marc", text: "Sunt foarte multumita de serviciile prestate! Foarte punctual ,a lucrat curat si organizat,mi-a explicat la fiecare pas ce face.Recomand cu încredere!", image: "/cgri.png" },
  { author: "Bradea Laura Camelia", text: "Servicii prompte si profesioniste, se lucreaza curat, eficient si calitativ. Recomand cu incredere 🙂", image: "/bverde.png" },
  { author: "Chebeleu Ciprian", text: "Super ok!!!\nAm avut niste ...nevoi electrice (prize desprise, oglinzi electrice nemontate, racorduri nefinalizate).\nA venit repede, a văzut despre ce e vorba, a știut ce e de făcut și a rezolvat toate problemele.\nDupă 2 luni totul ok!", image: "/cgri.png" },
  { author: "Monica Gonczy", text: "Super profesionalism!!! Rapid și eficient.\nSunt foarte încântată de serviciile prestate!", image: "/mverde.png" },
  { author: "Maria Carajia", text: "Foarte multumiti de serviciile prestate, foarte prompt si punctual, lucrarea executata a fost de calitate. Mai apelam neaparat cu orice problema legata de partea electrica", image: "/mmaro.png" },
  { author: "Cristina sss", text: "Super punctal și servicii de calitate.", image: "/calbastru.png" },
  { author: "dazurit", text: "Promt, profesional, rapid!", image: "/dazurit.png" },
  { author: "Bogdan Fuciu", text: "👍🏻👍🏻👍🏻👍🏻", image: "/bfuc.png" },
  { author: "Raluca Legman", text: "Foarte prompti, profesionisti si de ajutor. Ofera solutii practice si eficiente, la preturi accesibile. Recomand cu drag!!!", image: "/rroz.png" },
  { author: "Radu Istoc", text: "", image: "/rist.png" },
];

const ReviewSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-4 sm:px-8">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur shadow-md rounded-full p-2 hover:bg-white transition-colors hidden sm:block"
        aria-label="Scroll stânga"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur shadow-md rounded-full p-2 hover:bg-white transition-colors hidden sm:block"
        aria-label="Scroll dreapta"
      >
        <ChevronRight size={20} />
      </button>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {reviews.map((r, i) => (
          <div key={i} className="snap-start flex-shrink-0">
            <Review author={r.author} text={r.text} imagePath={r.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
