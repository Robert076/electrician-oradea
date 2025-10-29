import React from "react";
import Button from "../button/page";
import "./style.css";

const page = () => {
  return (
    <div className="hero">
      <h1>Electrician Oradea</h1>
      <p>Servicii electrice sigure și profesionale în Oradea.</p>
      <div className="buttons">
        <Button href="#footer" text="Suna-ne" />
        <Button href="#footer" text="Mesaj pe whatsapp" />
      </div>
    </div>
  );
};

export default page;
