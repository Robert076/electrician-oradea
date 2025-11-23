import React from "react";
import "./style.css";

interface SomeProps {
  title: string;
  description?: string;
}

const UnderServicesThingCheckbox: React.FC<SomeProps> = ({ title, description }) => {
  return (
    <div className="under-services-thing-checkbox">
      <img src="/checkbox.svg" alt="" />
      <div className="info">
        <h1 style={{ fontWeight: "400" }}>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default UnderServicesThingCheckbox;
