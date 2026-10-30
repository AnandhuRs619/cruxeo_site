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
        <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.12] max-w-4xl mx-auto mb-5 drop-shadow-sm select-none">
          Transforming Events with Immersive Technology
        </h1>

        {/* Punchy Visual Sub-headline */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 drop-shadow select-none">
          Autonomous drone swarms, 6-axis cinematic robotics, volumetric 3D holograms, and spatial interactive installations.
        </p>

        {/* Visual Tech Element Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 pointer-events-auto">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-blue-500/30 text-[11px] font-mono text-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>1,200+ Autonomous UAVs</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-[11px] font-mono text-cyan-200">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>6-Axis Robotic Motion</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-purple-500/30 text-[11px] font-mono text-purple-200">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Volumetric 3D Holograms</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-[11px] font-mono text-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>&lt;15ms Spatial Radar</span>
          </div>
        </div>

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
