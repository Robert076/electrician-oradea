"use client";
import UnderServicesThingCheckbox from "./under-services-thing-checkbox/page";
import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  BULINA_SERVICIU_1_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_2_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_3_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_4_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_5_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_6_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_7_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_8_TEXT_SUB_CHENAR,
} from "@/lib/constants";

const items = [
  BULINA_SERVICIU_1_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_2_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_3_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_4_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_5_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_6_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_7_TEXT_SUB_CHENAR,
  BULINA_SERVICIU_8_TEXT_SUB_CHENAR,
];

const UnderServicesThing = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="reveal-on-scroll py-24 sm:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Image */}
        <div className="hidden lg:block w-1/2">
          <img
            src="/electrician.jpg"
            alt="Electrician profesionist"
            className="w-full h-[550px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            De ce să alegi <span className="text-primary">echipa noastră</span> de electricieni?
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Oferim servicii electrice complete, sigure și rapide, realizate de profesioniști cu
            experiență. Ne concentrăm pe calitate, transparență și rezultate de durată — astfel
            încât să te bucuri de confort și siguranță în locuința sau afacerea ta.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <UnderServicesThingCheckbox key={i} title={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderServicesThing;
