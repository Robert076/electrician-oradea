import React from "react";
import "./style.css";
import UnderServicesThingCheckbox from "./under-services-thing-checkbox/page";
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
            <UnderServicesThingCheckbox title={BULINA_SERVICIU_1_TEXT_SUB_CHENAR} />
            <UnderServicesThingCheckbox title={BULINA_SERVICIU_2_TEXT_SUB_CHENAR} />
            <UnderServicesThingCheckbox title={BULINA_SERVICIU_3_TEXT_SUB_CHENAR} />
            <UnderServicesThingCheckbox title={BULINA_SERVICIU_4_TEXT_SUB_CHENAR} />
            <UnderServicesThingCheckbox title={BULINA_SERVICIU_5_TEXT_SUB_CHENAR} />
            <UnderServicesThingCheckbox title={BULINA_SERVICIU_6_TEXT_SUB_CHENAR} />
            <UnderServicesThingCheckbox title={BULINA_SERVICIU_7_TEXT_SUB_CHENAR} />
            <UnderServicesThingCheckbox title={BULINA_SERVICIU_8_TEXT_SUB_CHENAR} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderServicesThing;
