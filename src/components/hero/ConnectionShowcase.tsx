import React from "react";
import Image from "next/image";
import { clientLogos } from "@/data/siteData";

export const ConnectionShowcase: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-blue/15 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="relative w-full max-w-5xl mx-auto h-[260px] sm:h-[380px] md:h-[450px] mb-8">
          <Image
            src="/assets/images/creation-synergy.svg"
            alt="Human-Robot Synergy and Orbital Network"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="text-sm sm:text-base font-normal text-slate-300 mb-10 max-w-xl mx-auto tracking-wide">
          Join over 1500+ businesses already growing with Cruxeo
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 max-w-5xl mx-auto opacity-70 hover:opacity-100 transition-opacity">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="relative h-7 w-28 flex items-center justify-center grayscale hover:grayscale-0 hover:brightness-125 transition-all"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

