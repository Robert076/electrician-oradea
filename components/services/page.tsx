"use client";
import Service from "./service/page";
import {
  SERVICIU_CHENAR_1_TEXT_DESCRIERE,
  SERVICIU_CHENAR_1_TEXT_TITLU,
  SERVICIU_CHENAR_2_TEXT_DESCRIERE,
  SERVICIU_CHENAR_2_TEXT_TITLU,
  SERVICIU_CHENAR_3_TEXT_DESCRIERE,
  SERVICIU_CHENAR_3_TEXT_TITLU,
  SERVICIU_CHENAR_4_TEXT_DESCRIERE,
  SERVICIU_CHENAR_4_TEXT_TITLU,
  SERVICIU_CHENAR_5_TEXT_DESCRIERE,
  SERVICIU_CHENAR_5_TEXT_TITLU,
  SERVICIU_CHENAR_6_TEXT_DESCRIERE,
  SERVICIU_CHENAR_6_TEXT_TITLU,
  SERVICIU_CHENAR_7_TEXT_DESCRIERE,
  SERVICIU_CHENAR_7_TEXT_TITLU,
} from "@/lib/constants";

const services = [
  { icon: "/fulger.svg", title: SERVICIU_CHENAR_1_TEXT_TITLU, text: SERVICIU_CHENAR_1_TEXT_DESCRIERE },
  { icon: "/scut.svg", title: SERVICIU_CHENAR_2_TEXT_TITLU, text: SERVICIU_CHENAR_2_TEXT_DESCRIERE },
  { icon: "/bec.svg", title: SERVICIU_CHENAR_3_TEXT_TITLU, text: SERVICIU_CHENAR_3_TEXT_DESCRIERE },
  { icon: "/cladire.svg", title: SERVICIU_CHENAR_4_TEXT_TITLU, text: SERVICIU_CHENAR_4_TEXT_DESCRIERE },
  { icon: "/constructor.svg", title: SERVICIU_CHENAR_5_TEXT_TITLU, text: SERVICIU_CHENAR_5_TEXT_DESCRIERE },
  { icon: "/smart-home.svg", title: SERVICIU_CHENAR_6_TEXT_TITLU, text: SERVICIU_CHENAR_6_TEXT_DESCRIERE },
  { icon: "/security.svg", title: SERVICIU_CHENAR_7_TEXT_TITLU, text: SERVICIU_CHENAR_7_TEXT_DESCRIERE },
];

const Services = () => {
  return (
    <section className="mt-0">
      <div className="text-center mb-12">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Soluții complete</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          <span className="text-primary">Servicii</span> pe care le oferim
        </h2>
      </div>
      <div className="mt-0 flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <Service key={i} iconPath={s.icon} title={s.title} text={s.text} />
        ))}
      </div>
    </section>
  );
};

export default Services;
