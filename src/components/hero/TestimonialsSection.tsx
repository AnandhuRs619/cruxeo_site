"use client";

import React from "react";
import { ScrollReelTestimonials, ScrollReelTestimonial } from "@/components/ui/scroll-reel-testimonials";

const TESTIMONIALS: ScrollReelTestimonial[] = [
  {
    quote:
      "Cruxeo's Ignispectra drone show was the undisputed highlight of our global launch in Dubai. Synchronizing 800 drones over the gulf was nothing short of miraculous.",
    author: "Sultan Al-Hashimi — Executive Director, Dubai Tourism & Commerce",
    image: "/assets/images/team-4.jpg",
    alt: "Portrait of Sultan Al-Hashimi",
  },
  {
    quote:
      "The Nexplay AI booth achieved a 98% lead capture rate across all 5 days of GITEX. Our line stretched down the hall, generating over 15,000 direct WhatsApp interactions.",
    author: "Sarah Jenkins — VP of Global Marketing, Apex Cloud Technologies",
    image: "/assets/images/team-lumenlab-lead.jpg",
    alt: "Portrait of Sarah Jenkins",
  },
  {
    quote:
      "Working with Cruxeo gives our agency a massive competitive edge. Their technical precision, dual redundancy, and hardware activations are unmatched in the GCC.",
    author: "Karim Mansour — Managing Director, Momentum Experiential Group",
    image: "/assets/images/team-nexplay-lead.jpg",
    alt: "Portrait of Karim Mansour",
  },
  {
    quote:
      "Lumen Lab engineered the curved 8K LED pavilion and 3D anamorphic show for our flagship reveal. Flawless execution from brief to opening night.",
    author: "Elena Rostova — Technical Director, Global Tech Summit",
    image: "/assets/images/team-5.jpg",
    alt: "Portrait of Elena Rostova",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-300 bg-white/5 border border-white/10 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f5d4] animate-pulse" />
            Client Voices
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Trusted by the UAE&apos;s Boldest Event Creators
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hear from government entities, global agencies, and brand leaders who scaled their activations with Cruxeo.
          </p>
        </div>

        {/* Counter-Rotating Scroll Reel Testimonials Component */}
        <div className="w-full flex justify-center">
          <ScrollReelTestimonials testimonials={TESTIMONIALS} charStaggerMs={6} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
