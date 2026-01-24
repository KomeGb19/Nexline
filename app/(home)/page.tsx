import About from "@/components/About";
import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import FocusPoint from "@/components/FocusPoint";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileHeader from "@/components/MobileHeader";
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
      <Banner />
      <FocusPoint />
      <Services />
      <Process />
      <CTA />
    </div>
  );
}
