import "./style.css";
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

const Services = () => {
  return (
    <div className="services">
      <h1>Servicii pe care le oferim</h1>
      <div className="services-container">
        <Service
          iconPath="/fulger.svg"
          title={SERVICIU_CHENAR_1_TEXT_TITLU}
          text={SERVICIU_CHENAR_1_TEXT_DESCRIERE}
        />
        <Service
          iconPath="/scut.svg"
          title={SERVICIU_CHENAR_2_TEXT_TITLU}
          text={SERVICIU_CHENAR_2_TEXT_DESCRIERE}
        />
        <Service
          iconPath="/bec.svg"
          title={SERVICIU_CHENAR_3_TEXT_TITLU}
          text={SERVICIU_CHENAR_3_TEXT_DESCRIERE}
        />
        <Service
          iconPath="/cladire.svg"
          title={SERVICIU_CHENAR_4_TEXT_TITLU}
          text={SERVICIU_CHENAR_4_TEXT_DESCRIERE}
        />
        <Service
          iconPath="/constructor.svg"
          title={SERVICIU_CHENAR_5_TEXT_TITLU}
          text={SERVICIU_CHENAR_5_TEXT_DESCRIERE}
        />
        <Service
          iconPath="/smart-home.svg"
          title={SERVICIU_CHENAR_6_TEXT_TITLU}
          text={SERVICIU_CHENAR_6_TEXT_DESCRIERE}
        />
        <Service
          iconPath="/security.svg"
          title={SERVICIU_CHENAR_7_TEXT_TITLU}
          text={SERVICIU_CHENAR_7_TEXT_DESCRIERE}
        />
      </div>
    </div>
  );
};

export default Services;
