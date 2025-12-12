import "./style.css";
import {
  DESPRE_NOI_TEXT_HEADER,
  DESPRE_NOI_TEXT_1,
  DESPRE_NOI_TEXT_2,
  DESPRE_NOI_TEXT_3,
  DESPRE_NOI_TEXT_4,
} from "@/lib/constants";

const DespreNoi = () => {
  return (
    <div className="despre-noi">
      <h1
        style={{
          backgroundImage: "url('/hero3.jpg')",
          backgroundPosition: "center",
        }}
      >
        {DESPRE_NOI_TEXT_HEADER}
      </h1>
      <p style={{ maxWidth: "700px" }}>{DESPRE_NOI_TEXT_1}</p>
      <p style={{ maxWidth: "700px" }}>{DESPRE_NOI_TEXT_2}</p>
      <p style={{ maxWidth: "700px" }}>{DESPRE_NOI_TEXT_3}</p>
      <p style={{ maxWidth: "700px" }}>{DESPRE_NOI_TEXT_4}</p>
    </div>
  );
};

export default DespreNoi;
