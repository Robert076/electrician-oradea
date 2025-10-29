import Hero from "@/components/hero/page";
import Services from "@/components/services/page";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Services />
    </div>
  );
}
