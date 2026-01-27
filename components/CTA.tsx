import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./animations/ScrollReveal";

const CTA = () => {
  return (
    <section className=" w-full flex flex-col items-center justify-center relative bg-primary-4 py-8 md:py-16 px-4 n md:px-8 lg:px-20">
      <Image
        src="/ctalogo.svg"
        alt="background"
        width={1500}
        height={1500}
        className="absolute z-0 top-50 md:top-30 w-400"
      />
      <ScrollReveal className="flex flex-col items-center">
        <div className="z-20">
          <h1 className="text-2xl md:text-5xl font-bold text-center text-primary-2">
            Let Nexline handle the technology, marketing, and optimization — so
            you can focus on growth.
          </h1>
        </div>
        <Button className="mt-5 px-15 py-6 bg-primary-2 text-[#CDDFFF] text-xl font-medium rounded-full group hover:scale-105 z-20">
          Join The Movement
          <ArrowRight size={30} />
        </Button>
      </ScrollReveal>
    </section>
  );
};

export default CTA;
