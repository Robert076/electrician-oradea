import Hero from "@/components/hero/page";
import Services from "@/components/services/page";
import UnderServicesThing from "@/components/under-services-thing/page";
import ReviewSection from "@/components/review-section/page";

export default function Home() {
  return (
    <div>
      <div className="px-4 sm:px-8 lg:px-12 pt-6">
        <Hero />
      </div>

      <div className="px-4 sm:px-8 lg:px-12 py-24 sm:py-32">
        <Services />
      </div>

      <UnderServicesThing />

      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Feedback real</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            <span className="text-primary">Recenziile</span> noastre
          </h2>
        </div>
        <ReviewSection />
      </section>
    </div>
  );
}
