import React from "react";
import "./style.css";

interface ServiceProps {
  iconPath: string;
  title: string;
  text: string;
}

const Service: React.FC<ServiceProps> = ({ iconPath, title, text }) => {
  return (
    <div className="service">
      <div className="icon">
        <img src={iconPath} alt="" />
      </div>
      <div className="wrapper">
        <div className="title">{title}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default Service;
