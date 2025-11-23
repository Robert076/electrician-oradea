import React from "react";
import Button from "../button/page";
import "./style.css";

const page = () => {
  return (
    <div className="hero">
      <h1>Electrician Oradea</h1>
      <p>
        Ai o urgență electrică? Prize care scot fum, siguranțe care sar, lipsă totală de
        curent?
      </p>
      <p>Sună acum sau trimite-ne un mesaj pe WhatsApp — răspundem imediat.</p>
      <div className="buttons">
        <Button href="tel:0729914750" text="Sună-ne" />
        <Button
          href="https://wa.me/0729914750?text=Salut!+Am+văzut+site-ul+tău+și+aș+vrea+o+informație."
          text="Mesaj pe whatsapp"
        />
      </div>
    </div>
  );
};

export default page;
