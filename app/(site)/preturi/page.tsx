import "./style.css";

const Preturi = () => {
  return (
    <div
      className="prices"
      style={{
        marginTop: "60px",
        width: "100%",
      }}
    >
      <h1
        style={{
          fontWeight: 600,
          marginBottom: "20px",
          textAlign: "center",
          backgroundImage: "url('/hero2.jpg')",
        }}
      >
        Lista de prețuri
      </h1>

      <div className="price-category">
        <h3>Electrician Oradea – Intervenții</h3>
        <ul>
          <li>
            Deplasare + constatare – 150 - 250 RON (în funcție de distanță și complexitate)
          </li>
          <li>Reparație – în funcție de constatare</li>
          <li>Urgențe – Tarif de bază + 50%</li>
          <li>Schimbat prize / întrerupătoare – 50 RON / buc (min. 150 RON)</li>
          <li>
            Schimbat corp iluminat – min. 50 RON / buc (în funcție de complexitate poate
            crește)
          </li>
        </ul>
      </div>

      <div className="price-category" style={{ marginTop: "30px" }}>
        <h3>Electrician Oradea – Instalații A-Z</h3>
        <ul>
          <li>Montaj trasee prize / întrerupătoare – 115 RON / aparat</li>
          <li>Montaj doze distribuție – 50 RON / buc</li>
          <li>Montaj doze aparate – 12 RON / buc</li>
          <li>
            Montaj aparate – 15 RON / buc (25 RON / buc dacă instalația nu e făcută de noi)
          </li>
          <li>Montaj tablou siguranțe – min. 250 RON (în funcție de complexitate)</li>
        </ul>
      </div>

      <p
        style={{
          marginTop: "20px",
          fontStyle: "italic",
          fontSize: "1.2rem",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        *Prețurile pot fi negociabile în funcție de mărimea lucrării sau intervenției.
        <br />
        **Prețurile afişate nu conțin TVA.
        <br />
        Fără griji şi fără scurtcircuit în portofel.
      </p>
    </div>
  );
};

export default Preturi;
