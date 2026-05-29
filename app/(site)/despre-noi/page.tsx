import {
  DESPRE_NOI_TEXT_HEADER,
  DESPRE_NOI_TEXT_1,
  DESPRE_NOI_TEXT_2,
  DESPRE_NOI_TEXT_3,
  DESPRE_NOI_TEXT_4,
} from "@/lib/constants";

const DespreNoi = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Cine suntem</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          {DESPRE_NOI_TEXT_HEADER}
        </h1>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl p-8 sm:p-12 space-y-6 text-gray-600 leading-relaxed text-base sm:text-lg shadow-sm border border-gray-100">
        <p>{DESPRE_NOI_TEXT_1}</p>
        <p>{DESPRE_NOI_TEXT_2}</p>
        <p>{DESPRE_NOI_TEXT_3}</p>
        <p>{DESPRE_NOI_TEXT_4}</p>
      </div>
    </div>
  );
};

export default DespreNoi;
