import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Hero from "@/components/sections/hero";
import LogoSlider from "@/components/sections/logo-slider";
import Conocenos from "@/components/sections/conocenos";
import Campamento from "@/components/sections/campamento";
import Stats from "@/components/sections/stats";
import ProblemSolution from "@/components/sections/problem-solution";
import Features from "@/components/sections/features";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import Comunidad from "@/components/sections/comunidad";
import Ubicacion from "@/components/sections/ubicacion";
import CtaBanner from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoSlider />
        <Conocenos />
        <Campamento />
        <Stats />
        <ProblemSolution />
        <Features />
        <Team />
        <Testimonials />
        <Comunidad />
        <Ubicacion />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
