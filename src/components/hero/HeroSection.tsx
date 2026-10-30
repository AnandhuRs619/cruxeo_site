"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShapeGrid } from "@/components/ui/ShapeGrid";
import { SpecularButton } from "@/components/ui/SpecularButton";
import { TickerPills } from "./TickerPills";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-36 sm:pt-40 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Background Animated ShapeGrid Matrix */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
        <ShapeGrid
          shape="square"
          direction="diagonal"
          lineColor="#2a2734"
          hoverColor="#ffffff"
          hoverFillColor="#38bdf8"
          fillOpacity={0.16}
          cellSize={40}
          speed={0.5}
          tiltX={0}
          tiltY={0}
          rainbow={false}
        />

        {/* Central Diffused Cosmic Ambient Glow */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[360px] bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-blue-500/15 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Main Hero Center Stage with Passthrough Mouse Events */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto flex flex-col items-center pointer-events-none">
        {/* Top Announcement Pill Badge */}
        <div className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-lg transition-colors hover:border-white/20 cursor-default pointer-events-auto">
          <span className="px-2.5 py-0.5 text-[11px] font-bold text-white bg-brand-blue rounded-full shadow-sm">
            Dubai • UAE
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-wide">
            Experiential Marketing & Creative Technology
          </span>
        </div>

        {/* Display H1 Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.12] max-w-4xl mx-auto mb-6 drop-shadow-sm select-none">
          Transforming Events with Immersive Technology
        </h1>

        {/* Subtitle paragraph (from cruxeo.com) */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-9 drop-shadow select-none">
          Cruxeo delivers drone light shows, 3D holograms, AI photo booths, robotics, and interactive installations that turn passive audiences into active participants.
        </p>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto pointer-events-auto">
          {/* Get Started (Frosted Glass Specular Button) */}
          <SpecularButton
            href="/contact"
            variant="glass"
            size="lg"
            radius={18}
            lineColor="#ffffff"
            followMouse
            proximity={250}
            className="w-full sm:w-auto"
          >
            Get Started
          </SpecularButton>

          {/* Explore Services (Primary Electric Blue Specular Button) */}
          <SpecularButton
            href="/services"
            variant="primary"
            size="lg"
            radius={18}
            lineColor="#93c5fd"
            glow={1.3}
            followMouse
            proximity={250}
            className="w-full sm:w-auto"
          >
            Explore Services
          </SpecularButton>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-3.5 bg-slate-900/70 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md pointer-events-auto">
          <div className="flex -space-x-2.5 overflow-hidden">
            <div className="relative w-8 h-8 rounded-full border-2 border-slate-950 overflow-hidden bg-slate-800">
              <Image src="/assets/images/avatars/avatar1.svg" alt="Client 1" fill className="object-cover" />
            </div>
            <div className="relative w-8 h-8 rounded-full border-2 border-slate-950 overflow-hidden bg-slate-800">
              <Image src="/assets/images/avatars/avatar2.svg" alt="Client 2" fill className="object-cover" />
            </div>
            <div className="relative w-8 h-8 rounded-full border-2 border-slate-950 overflow-hidden bg-slate-800">
              <Image src="/assets/images/avatars/avatar3.svg" alt="Client 3" fill className="object-cover" />
            </div>
          </div>

          <div className="text-xs text-left">
            <span className="font-bold text-white block">Trusted by 1500+</span>
            <span className="text-slate-400">Brands Across UAE & GCC</span>
          </div>
        </div>
      </div>

      {/* Dual Row Marquee Ticker with Pause Button */}
      {/* <div className="relative z-10 w-full max-w-7xl mx-auto mt-6 pointer-events-auto">
        <TickerPills />
      </div> */}
    </section>
  );
};

export default HeroSection;
