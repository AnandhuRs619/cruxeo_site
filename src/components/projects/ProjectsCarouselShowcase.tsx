"use client";

import React from "react";
import { FlexCarousel, FlexCarouselItem } from "@/components/ui/FlexCarousel";
import { Eye, Sparkles, Compass } from "lucide-react";

const ACTIVATION_ITEMS: FlexCarouselItem[] = [
  {
    src: "/assets/images/work-aerial-symphony.jpg",
    alt: "Aerial Symphony Drone Swarm",
    title: "Aerial Symphony Drone Swarm",
    subtitle: "500+ Drones Choreographed Above Dubai Marina",
  },
  {
    src: "/assets/images/work-immersion-led.jpg",
    alt: "Immersive Hologram Pavilion",
    title: "Immersive Hologram Pavilion",
    subtitle: "7680Hz Broadcast Curve & Volumetric Fan Array",
  },
  {
    src: "/assets/images/work-radar-arena.jpg",
    alt: "Interactive Radar-Touch Arena",
    title: "Radar-Touch Motion Arena",
    subtitle: "Sub-15ms Latency & Multi-Player Radar Floor",
  },
  {
    src: "/assets/images/work-enterprise-ai.jpg",
    alt: "Enterprise AI Knowledge Assistant",
    title: "Enterprise AI Concierge",
    subtitle: "100% On-Prem Approved Financial Intelligence",
  },
  {
    src: "/assets/images/ignispectra.jpg",
    alt: "IGNISPECTRA Swarm Formations",
    title: "IGNISPECTRA Pyromusical Lasers",
    subtitle: "Kinetic Sky Art & Architectural Searchlights",
  },
  {
    src: "/assets/images/nexplay.jpg",
    alt: "NEXPLAY Interactive Experiences",
    title: "NEXPLAY AI Robotics Pods",
    subtitle: "Touchless Gesture & Generative Brand Photo Bots",
  },
  {
    src: "/assets/images/synapse.jpg",
    alt: "SYNAPSE Private AI Infrastructure",
    title: "SYNAPSE Workflow Systems",
    subtitle: "Autonomous Lead Qualification & Mission Dashboards",
  },
];

export const ProjectsCarouselShowcase: React.FC = () => {
  return (
    <div className="relative rounded-[32px] bg-slate-950/80 border border-white/10 backdrop-blur-2xl p-4 sm:p-8 shadow-2xl overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-brand-cyan/15 blur-[120px] pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WebGL Liquid Refraction Canvas</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Interactive Activation Repertoire
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Drag across the liquid glass lens to explore fluid optical refractions across recent Dubai field deployments.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
            <Compass className="w-3.5 h-3.5 text-brand-cyan animate-spin-slow" />
            <span>Drag / Scroll Lens</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono text-brand-cyan">
            <Eye className="w-3.5 h-3.5" />
            <span>Focus on Click</span>
          </div>
        </div>
      </div>

      {/* WebGL Container */}
      <div className="relative w-full h-[460px] sm:h-[540px] rounded-2xl overflow-hidden bg-slate-900/50 border border-white/5">
        <FlexCarousel
          items={ACTIVATION_ITEMS}
          preset="liquid"
          intro="rise"
          cardHeight={0.56}
          gap={14}
          radius={18}
          fit="landscape"
          squeeze={0.2}
          focusOnClick
          captions
          autoplay
          interval={5}
        />
      </div>
    </div>
  );
};
