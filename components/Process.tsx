"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Timeline } from "@/components/ui/timeline";

const Process = () => {
  const data = [
    {
      id: "01",
      title: "Discovery Phase",
      content: (
        <div>
          <p className="">
            During this initial stage, we delve deep into understanding your
            business goals, target audience, and market landscape. We conduct
            thorough research and analysis to identify opportunities and
            challenges, laying the foundation for a successful campaign.
          </p>
        </div>
      ),
    },
    {
      id: "02",
      title: "Strategy Development",
      content: (
        <div>
          <p className="">
            With insights gathered from the discovery phase, we develop a
            customized strategy tailored to your specific needs and objectives.
            This includes defining key messages, selecting channels, and setting
            timelines needed to achieve your business goals effectively.
          </p>
        </div>
      ),
    },
    {
      id: "03",
      title: "Implementation and Execution",
      content: (
        <div>
          <p className="">
            Once the strategy is finalized and approved, we roll out our
            initiatives and put the plan into action. Our expert team utilizes
            cutting-edge tools and techniques to execute each component of the
            strategy meticulously. Whether it's optimizing your website for
            search engines, crafting engaging social media content, or designing
            captivating visuals.
          </p>
        </div>
      ),
    },
    {
      id: "04",
      title: "Monitoring and Optimization",
      content: (
        <div>
          <p className="">
            Continuous monitoring and optimization are essential to ensuring the
            success and effectiveness of our campaigns. We closely track key
            performance indicators (KPIs) and metrics, analyzing data to
            evaluate campaign performance and identify areas for improvement to
            optimize results.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col relative bg-primary-2 py-12 md:py-20 px-4 md:px-8 lg:px-20 overflow-hidden">
      {/* Grid Background with reduced opacity */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.1)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.1)_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary-2 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Process;
