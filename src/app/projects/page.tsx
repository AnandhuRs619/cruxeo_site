import React from "react";
import { Metadata } from "next";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Case Studies & Activations | Projects",
  description:
    "Discover Cruxeo's portfolio of premier brand activations across Dubai, including drone light shows, AI avatar experiences, and interactive gesture kiosks.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 bg-background text-slate-100">
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3 block">
          Proven Track Record
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Selected Activations & Experiential Case Studies
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          From the Dubai shoreline to the grand halls of GITEX, explore how we help visionary organizations captivate audiences.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ProjectGallery />
      </section>

      <CtaBanner />
    </div>
  );
}

