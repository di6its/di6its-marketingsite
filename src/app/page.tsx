import { LangProvider } from "@/contexts/LangContext";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import ForWho from "@/components/ForWho";
import Story from "@/components/Story";
import Courses from "@/components/Courses";
import Playbook from "@/components/Playbook";
import Testimonials from "@/components/Testimonials";
import Founders from "@/components/Founders";
import Team from "@/components/Team";
import EmployerBand from "@/components/EmployerBand";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <FeatureStrip />
        <ForWho />
        <Story />
        <Courses />
        <Playbook />
        <Testimonials />
        <Founders />
        <Team />
        <EmployerBand />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </LangProvider>
  );
}
