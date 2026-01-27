import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SlideInLeft from "./animations/SlideInLeft";
import ScaleInReveal from "./animations/ScaleInReveal";
import ScrollReveal from "./animations/ScrollReveal";

const faqs = [
  {
    id: "1",
    question: "What does Nexline actually do?",
    answer:
      "Nexline builds and manages digital growth infrastructure for businesses. This includes websites, internal systems, SEO, analytics, automation, and ongoing optimization — all designed to work together as one connected growth system.",
  },
  {
    id: "2",
    question: "Is Nexline a marketing agency or a software company?",
    answer:
      "Nexline is neither in the traditional sense. We operate as a growth infrastructure partner — combining software development, analytics, SEO, and optimization into scalable systems that drive measurable business growth.",
  },
  {
    id: "3",
    question: "What types of businesses does Nexline work with?",
    answer:
      "We work with startups, growing businesses, and established companies that want predictable, data-driven growth. Nexline is especially effective for businesses looking to replace fragmented tools with a single, scalable system.",
  },
  {
    id: "4",
    question: "Do I need all Nexline services to get started?",
    answer:
      "No. Nexline services are modular. You can start with one area — such as a website, SEO, or analytics — and expand over time as your business grows.",
  },
  {
    id: "5",
    question: "How is Nexline different from traditional agencies?",
    answer:
      "Traditional agencies focus on campaigns. Nexline builds systems. We connect technology, data, and optimization so growth compounds over time instead of resetting every month.",
  },
  /* {
    id: "6",
    question: "How does Nexline approach SEO?",
    answer:
      "Our SEO approach is data-driven and aligned with search intent. We focus on technical performance, content optimization, and continuous analysis to drive long-term visibility and revenue — not short-term ranking spikes.",
  },
  {
    id: "7",
    question: "How do you measure success?",
    answer:
      "Success is measured through clear business metrics such as conversions, cost per lead, revenue impact, and growth trends — not vanity metrics like traffic alone.",
  },
  {
    id: "8",
    question: "Will I have visibility into performance and data?",
    answer:
      "Yes. Nexline provides clear analytics and reporting so you can see exactly how your systems are performing and where growth is coming from.",
  },
  {
    id: "9",
    question: "How long does it take to see results?",
    answer:
      "Timelines vary depending on the service and business goals. Infrastructure improvements can deliver immediate impact, while SEO and optimization compound over time for long-term growth.",
  },
  {
    id: "10",
    question: "How do I get started with Nexline?",
    answer:
      "Getting started begins with a strategy call. We assess your current setup, identify opportunities, and recommend a growth system aligned with your business goals.",
  }, */
];

const FAQs = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative bg-primary-2 py-8 md:py-16 px-4 md:px-8 lg:px-20">
      <ScrollReveal>
        <div className="flex items-center gap-40">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-primary-4 text-base md:text-2xl max-w-2xl">
              Find answers to common questions about AI-powered content
              creation, campaign automation, and analytics tools.
            </p>
          </div>
          <div className="relative flex-col hidden lg:block">
            <span className="mb">
              <h2 className="font-bold text-lg">Got more questions ?</h2>
              <p>All you need to know in one place</p>
            </span>
            <Button
              variant="outline"
              className="rounded-full hover:bg-secondary-2/30 hover:text-primary-3 mt-4 text-secondary-2 border border-secondary-2 bg-transparent w-3/6"
            >
              Get in Touch
            </Button>

            <Image
              src="/question.svg"
              alt="Frequently Asked Questions"
              width={400}
              height={400}
              className="absolute w-25 top-10 -right-20"
            />
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-10 md:mt-20">
        <Accordion type="single" collapsible className="space-y-4 mb-2">
          {faqs.map((faq, index) => (
            <ScrollReveal>
              <ScaleInReveal>
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="active:bg-secondary-2/5 hover:bg-secondary-2/10 active:border active:border-secondary-2 rounded-3xl px-5 md:px-6"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-primary-3 hover:no-underline py-5 md:py-6">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-primary-3/80 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScaleInReveal>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
      <div className="relative flex-col flex lg:hidden bg-primary-4/10 p-5 rounded-2xl mt-5">
        <span className="mb">
          <h2 className="font-bold text-lg">Got more questions ?</h2>
          <p>All you need to know in one place</p>
        </span>
        <Button
          variant="outline"
          className="rounded-full mt-4 text-secondary-2 border border-secondary-2 bg-transparent w-3/6"
        >
          Get in Touch
        </Button>

        {/* <Image
          src="/question.svg"
          alt="Frequently Asked Questions"
          width={400}
          height={400}
          className="absolute w-25 top-10 right-1"
        /> */}
      </div>
    </section>
  );
};

export default FAQs;
