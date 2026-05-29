import React from "react";
import {
  PRETURI_HEADER,
  PRETURI_INTERVENTII_TITLE,
  PRETURI_INTERVENTII_1,
  PRETURI_INTERVENTII_2,
  PRETURI_INTERVENTII_3,
  PRETURI_INTERVENTII_4,
  PRETURI_INTERVENTII_5,
  PRETURI_INSTALATII_TITLE,
  PRETURI_INSTALATII_1,
  PRETURI_INSTALATII_2,
  PRETURI_INSTALATII_3,
  PRETURI_INSTALATII_4,
  PRETURI_INSTALATII_5,
  PRETURI_NOTE,
} from "@/lib/constants";

const PriceItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-none">
    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
    <span className="text-gray-600 text-sm sm:text-base">{text}</span>
  </li>
);

const Preturi = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Transparent & corect</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          {PRETURI_HEADER}
        </h1>
      </div>

      {/* Price cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-primary/5 px-8 py-5 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">{PRETURI_INTERVENTII_TITLE}</h3>
          </div>
          <ul className="px-8 py-4 list-none">
            <PriceItem text={PRETURI_INTERVENTII_1} />
            <PriceItem text={PRETURI_INTERVENTII_2} />
            <PriceItem text={PRETURI_INTERVENTII_3} />
            <PriceItem text={PRETURI_INTERVENTII_4} />
            <PriceItem text={PRETURI_INTERVENTII_5} />
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-primary/5 px-8 py-5 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">{PRETURI_INSTALATII_TITLE}</h3>
          </div>
          <ul className="px-8 py-4 list-none">
            <PriceItem text={PRETURI_INSTALATII_1} />
            <PriceItem text={PRETURI_INSTALATII_2} />
            <PriceItem text={PRETURI_INSTALATII_3} />
            <PriceItem text={PRETURI_INSTALATII_4} />
            <PriceItem text={PRETURI_INSTALATII_5} />
          </ul>
        </div>
      </div>

      {/* Note */}
      <div className="mt-12 text-center bg-gray-50 rounded-2xl py-8 px-6">
        <p className="text-gray-500 italic text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {PRETURI_NOTE.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Preturi;
