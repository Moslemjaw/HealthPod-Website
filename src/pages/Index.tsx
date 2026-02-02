import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import SpecsSection from "@/components/SpecsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <ProblemSection />
      <section id="solution">
        <SolutionSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="demo">
        <DemoSection />
      </section>
      <section id="specs">
        <SpecsSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
