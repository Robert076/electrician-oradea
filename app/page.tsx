import Hero from "@/components/hero/page";
import Services from "@/components/services/page";
import "./style.css";
import UnderServicesThing from "@/components/under-services-thing/page";
import ReviewSection from "@/components/review-section/page";

export default function Home() {
  return (
    <div className="home">
      <div className="padding-home">
        <Hero />
        <Services />
      </div>
      <UnderServicesThing />
      <h1
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
          marginBottom: "20px",
        }}
      >
        Recenziile noastre
      </h1>
      <ReviewSection />
    </div>
  );
}
