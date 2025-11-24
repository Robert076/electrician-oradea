import "./style.css";
import UnderServicesThingCheckbox from "@/components/under-services-thing/under-services-thing-checkbox/page";

const servicesData = [
  {
    title: "Urgențe electrice 24/7",
    description:
      "Intervenții rapide pentru pene de curent, prize cu fum, scurtcircuite, siguranțe care sar și cabluri topite. Diagnostic pe loc, reparație rapidă și testare completă.",
  },
  {
    title: "Montaj & Reparații electrice",
    description:
      "Montaj prize, întrerupătoare, corpuri de iluminat, reparații circuite și conexiuni slăbite, înlocuire cabluri vechi și instalare prize sigure în baie sau bucătărie.",
  },
  {
    title: "Tablouri & Siguranțe electrice",
    description:
      "Montaj tablouri moderne cu protecție diferențială, reconfigurare circuite pentru consumatori mari și înlocuire siguranțe vechi din porțelan.",
  },
  {
    title: "Verificări periodice & Audit electric",
    description:
      "Verificări complete ale instalației: prize, siguranțe, tablouri, împământare și consum anormal. Recomandate anual pentru case vechi și la 2–3 ani pentru locuințe noi.",
  },
  {
    title: "Automatizări & Smart Home",
    description:
      "Iluminat automat, control prin telefon, senzori inteligenți, siguranțe smart, video-interfon, sisteme de control acces și automatizări pentru porți.",
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
          Intervenim oriunde în Bihor și în toate cartierele din Oradea — Rogerius, Ioșia,
          Nufărul, Cantemir, Oncea, Calea Aradului, Episcopia, Grigorescu, Bălcescu, Velenta,
          Decebal, Nicolae Iorga și zonele apropiate.
        </p>
      </div>
    </div>
  );
};

export default MainServices;
