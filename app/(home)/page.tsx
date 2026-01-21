import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileHeader from "@/components/MobileHeader";
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
    </div>
  );
}
