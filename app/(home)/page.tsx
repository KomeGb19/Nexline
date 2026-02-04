import About from "@/components/About";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import FAQs from "@/components/FAQs";
import FocusPoint from "@/components/FocusPoint";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileHeader from "@/components/MobileHeader";
import PricingPage from "@/components/pricing/PricingPage";
import Process from "@/components/Process";
import Services from "@/components/Services";
import { Motorbike } from "lucide";

export default function HomePage() {
  return (
    <div>
      <div className="hidden lg:flex">
        <Header />
      </div>
      <div className="flex lg:hidden">
        <MobileHeader />
      </div>
      <Hero />
      <About />
      <ScrollReveal>
        <Banner />
      </ScrollReveal>

      <ScrollReveal>
        <FocusPoint />
      </ScrollReveal>
      <Services />
      <Process />
      <PricingPage />
      <CTA />
      <FAQs />
      <Footer />
    </div>
  );
}
