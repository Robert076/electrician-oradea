import {
  SERVICIU_1_TEXT_DESCRIERE,
  SERVICIU_1_TEXT_TITLU,
  SERVICIU_2_TEXT_DESCRIERE,
  SERVICIU_2_TEXT_TITLU,
  SERVICIU_3_TEXT_DESCRIERE,
  SERVICIU_3_TEXT_TITLU,
  SERVICIU_4_TEXT_DESCRIERE,
  SERVICIU_4_TEXT_TITLU,
  SERVICIU_5_TEXT_DESCRIERE,
  SERVICIU_5_TEXT_TITLU,
  SERVICIU_CALL_TO_ACTION,
} from "@/lib/constants";

const servicesData = [
  { title: SERVICIU_1_TEXT_TITLU, description: SERVICIU_1_TEXT_DESCRIERE },
  { title: SERVICIU_2_TEXT_TITLU, description: SERVICIU_2_TEXT_DESCRIERE },
  { title: SERVICIU_3_TEXT_TITLU, description: SERVICIU_3_TEXT_DESCRIERE },
  { title: SERVICIU_4_TEXT_TITLU, description: SERVICIU_4_TEXT_DESCRIERE },
  { title: SERVICIU_5_TEXT_TITLU, description: SERVICIU_5_TEXT_DESCRIERE },
];

const MainServices = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Ce oferim</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          Serviciile noastre
        </h1>
      </div>

      {/* Services list */}
      <div className="space-y-5">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="w-3 h-3 rounded-full bg-primary" />
            </span>
            <div>
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">{service.title}</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center bg-gray-50 rounded-2xl py-8 px-6">
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {SERVICIU_CALL_TO_ACTION}
        </p>
      </div>
    </div>
  );
};

export default MainServices;
