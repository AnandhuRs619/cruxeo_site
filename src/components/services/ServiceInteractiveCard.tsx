"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Box, Sparkles, Touchpad, Video, Cpu, ShieldCheck } from "lucide-react";
import { ServiceItem } from "@/types";
import { RoboticArmVisual } from "@/components/tech/RoboticArmVisual";
import { DroneSwarmVisual } from "@/components/tech/DroneSwarmVisual";
import { HologramFanVisual } from "@/components/tech/HologramFanVisual";
import { RadarLidarVisual } from "@/components/tech/RadarLidarVisual";

interface ServiceInteractiveCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceInteractiveCard: React.FC<ServiceInteractiveCardProps> = ({
  service,
  index,
}) => {
  const [viewMode, setViewMode] = useState<"video" | "schematic">("video");
  const isEven = index % 2 === 0;
  const accent = service.accentColor || "#38bdf8";

  const renderSchematic = () => {
    switch (service.id) {
      case "nexplay":
        return <RoboticArmVisual />;
      case "ignispectra":
        return <DroneSwarmVisual />;
      case "lumen-lab":
        return <HologramFanVisual />;
      case "synapse":
        return <RadarLidarVisual />;
      default:
        return <RoboticArmVisual />;
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5" style={{ color: accent }} />;
      case "Bot":
        return <Bot className="w-5 h-5" style={{ color: accent }} />;
      case "Touchpad":
        return <Touchpad className="w-5 h-5" style={{ color: accent }} />;
      case "Box":
        return <Box className="w-5 h-5" style={{ color: accent }} />;
      default:
        return <Sparkles className="w-5 h-5" style={{ color: accent }} />;
    }
  };

  return (
    <div
      id={service.id}
      className={`scroll-mt-36 p-4 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px] bg-slate-950/80 border border-white/10 backdrop-blur-2xl relative overflow-hidden transition-all duration-500 hover:border-white/20 shadow-2xl flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
      style={{
        boxShadow: `0 0 60px -20px ${accent}20, 0 25px 50px -15px rgba(0,0,0,0.8)`,
      }}
    >
      {/* Top Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-20"
        style={{ background: service.gradient || "linear-gradient(90deg, #0b5cff, #38bdf8)" }}
      />

      {/* Ambient Glow */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[130px] pointer-events-none opacity-20"
        style={{ background: accent }}
      />

      {/* Visual Media / Schematic Toggle Stage */}
      <div className="w-full lg:w-1/2 flex flex-col gap-3">
        {/* View Mode Toggle Pill */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5 bg-slate-900/90 border border-white/10 p-1 rounded-xl">
            <button
              onClick={() => setViewMode("video")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                viewMode === "video"
                  ? "bg-blue-600 text-white font-bold shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Live Reel</span>
            </button>
            <button
              onClick={() => setViewMode("schematic")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                viewMode === "schematic"
                  ? "bg-blue-600 text-white font-bold shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Tech Schematic</span>
            </button>
          </div>

          <span className="text-[11px] font-mono text-slate-400">
            {viewMode === "video" ? "Field Deployment Video" : "Interactive Simulation"}
          </span>
        </div>

        {/* Display Container */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
          {viewMode === "video" ? (
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
              {service.video ? (
                <video
                  src={service.video}
                  poster={service.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-200">
                <span className="truncate">{service.tagline}</span>
                <span className="text-[#38bdf8] shrink-0 font-bold ml-2">DUBAI · GCC</span>
              </div>
            </div>
          ) : (
            <div className="w-full">
              {renderSchematic()}
            </div>
          )}
        </div>
      </div>

      {/* Information & Telemetry Specs */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-5">
        <div>
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div
                className="p-2.5 rounded-2xl border"
                style={{
                  backgroundColor: `${accent}15`,
                  borderColor: `${accent}35`,
                }}
              >
                {getIcon(service.iconName)}
              </div>
              <div>
                <span
                  className="text-xs font-mono font-bold uppercase tracking-wider block"
                  style={{ color: accent }}
                >
                  {service.suite}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
              </div>
            </div>

            <span
              className="text-xs font-mono font-semibold px-3 py-1 rounded-full border"
              style={{
                backgroundColor: `${accent}15`,
                borderColor: `${accent}35`,
                color: "#e2e8f0",
              }}
            >
              {service.metrics}
            </span>
          </div>

          {/* Punchy 1-line mission */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Core Hardware & Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
            {service.features.map((feature: string, fIdx: number) => (
              <div
                key={fIdx}
                className="text-xs font-medium px-3 py-2 rounded-xl bg-white/[0.03] text-slate-200 border border-white/5 flex items-center gap-2.5"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: accent }}
                />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Direct WhatsApp Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Turnkey UAE Compliance Included</span>
          </div>

          <Link
            href={`https://wa.me/971545454891?text=${encodeURIComponent(
              `Hello Cruxeo team, I am interested in inquiring about ${service.suite} for an upcoming project.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 w-full sm:w-auto"
          >
            <span>Direct WhatsApp Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
