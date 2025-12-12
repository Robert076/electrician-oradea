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
import "./style.css";
import UnderServicesThingCheckbox from "@/components/under-services-thing/under-services-thing-checkbox/page";

export const servicesData = [
  {
    title: SERVICIU_1_TEXT_TITLU,
    description: SERVICIU_1_TEXT_DESCRIERE,
  },
  {
    title: SERVICIU_2_TEXT_TITLU,
    description: SERVICIU_2_TEXT_DESCRIERE,
  },
  {
    title: SERVICIU_3_TEXT_TITLU,
    description: SERVICIU_3_TEXT_DESCRIERE,
  },
  {
    title: SERVICIU_4_TEXT_TITLU,
    description: SERVICIU_4_TEXT_DESCRIERE,
  },
  {
    title: SERVICIU_5_TEXT_TITLU,
    description: SERVICIU_5_TEXT_DESCRIERE,
  },
];

const MainServices = () => {
  return (
    <div className="services-details">
      <div className="info">
        <h1
          style={{
            backgroundImage: "url('/hero.jpg')",
          }}
        >
          Serviciile noastre
        </h1>

        <div className="checkboxes">
          {servicesData.map((service, index) => (
            <UnderServicesThingCheckbox
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <p style={{ marginTop: "50px", maxWidth: "1000px" }} className="subtext">
          {SERVICIU_CALL_TO_ACTION}
        </p>
      </div>
    </div>
  );
};

export default MainServices;
