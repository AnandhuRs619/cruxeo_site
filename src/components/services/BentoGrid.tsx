"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Bot, Touchpad, Box } from "lucide-react";
import { servicesData } from "@/data/siteData";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import CenterFlow, { CenterFlowNode } from "@/components/ui/CenterFlow";

export const BentoGrid: React.FC = () => {
  const getIcon = (iconName: string, accentColor?: string) => {
    const style = { color: accentColor || "#00f5d4" };
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5" style={style} />;
      case "Bot":
        return <Bot className="w-5 h-5" style={style} />;
      case "Touchpad":
        return <Touchpad className="w-5 h-5" style={style} />;
      case "Box":
        return <Box className="w-5 h-5" style={style} />;
      default:
        return <Sparkles className="w-5 h-5" style={style} />;
    }
  };

  const divisionConfigs: Record<
    string,
    {
      glowBg: string;
      glowBorder: string;
      accent: string;
      gradient: string;
      badgeBg: string;
      badgeBorder: string;
      badgeText: string;
      hoverShadow: string;
    }
  > = {
    nexplay: {
      glowBg: "rgba(168, 85, 247, 0.2)",
      glowBorder: "border-[#a855f7]/40",
      accent: "#a855f7",
      gradient: "linear-gradient(90deg, #8b5cf6 0%, #d946ef 100%)",
      badgeBg: "rgba(168, 85, 247, 0.15)",
      badgeBorder: "rgba(168, 85, 247, 0.35)",
      badgeText: "#e9d5ff",
      hoverShadow: "shadow-[0_0_40px_rgba(168,85,247,0.25)]",
    },
    "lumen-lab": {
      glowBg: "rgba(0, 245, 212, 0.2)",
      glowBorder: "border-[#00f5d4]/40",
      accent: "#00f5d4",
      gradient: "linear-gradient(90deg, #00c2ff 0%, #00f5d4 100%)",
      badgeBg: "rgba(0, 245, 212, 0.15)",
      badgeBorder: "rgba(0, 245, 212, 0.35)",
      badgeText: "#99f6e4",
      hoverShadow: "shadow-[0_0_40px_rgba(0,245,212,0.25)]",
    },
    ignispectra: {
      glowBg: "rgba(255, 177, 43, 0.2)",
      glowBorder: "border-[#ffb12b]/40",
      accent: "#ffb12b",
      gradient: "linear-gradient(90deg, #e96a16 0%, #ffb12b 100%)",
      badgeBg: "rgba(255, 177, 43, 0.15)",
      badgeBorder: "rgba(255, 177, 43, 0.35)",
      badgeText: "#fef08a",
      hoverShadow: "shadow-[0_0_40px_rgba(255,177,43,0.25)]",
    },
    synapse: {
      glowBg: "rgba(56, 181, 139, 0.2)",
      glowBorder: "border-[#38b58b]/40",
      accent: "#38b58b",
      gradient: "linear-gradient(90deg, #009b83 0%, #38b58b 100%)",
      badgeBg: "rgba(56, 181, 139, 0.15)",
      badgeBorder: "rgba(56, 181, 139, 0.35)",
      badgeText: "#a7f3d0",
      hoverShadow: "shadow-[0_0_40px_rgba(56,181,139,0.25)]",
    },
  };

  // Center Flow Nodes for the 4 Specialist Divisions
  const centerFlowNodes: CenterFlowNode[] = servicesData.map((service) => {
    const config = divisionConfigs[service.id] || divisionConfigs["nexplay"];
    let position: CenterFlowNode["position"] = "top-left";
    if (service.id === "nexplay") position = "top-left";
    else if (service.id === "lumen-lab") position = "top-right";
    else if (service.id === "ignispectra") position = "bottom-left";
    else if (service.id === "synapse") position = "bottom-right";

    return {
      id: service.id,
      title: service.title,
      suite: service.suite,
      tagline: service.tagline,
      icon: getIcon(service.iconName, config.accent),
      color: config.accent,
      gradient: config.gradient,
      metrics: service.metrics,
      position,
      href: `#${service.id}`,
    };
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative" id="services">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-300 bg-white/5 border border-white/10 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f5d4] animate-pulse" />
              Specialist Divisions · One Brief
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Four Specialist Divisions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Turnkey experiential production under one single Dubai directorship. Explore our integrated capabilities flowing from the central core.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-xs font-mono text-slate-400">Coordinated Delivery:</span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="text-[#a855f7] bg-[#a855f7]/10 px-2.5 py-0.5 rounded-md border border-[#a855f7]/30">NEXPLAY</span>
              <span className="text-[#00f5d4] bg-[#00f5d4]/10 px-2.5 py-0.5 rounded-md border border-[#00f5d4]/30">LUMEN LAB</span>
              <span className="text-[#ffb12b] bg-[#ffb12b]/10 px-2.5 py-0.5 rounded-md border border-[#ffb12b]/30">IGNISPECTRA</span>
              <span className="text-[#38b58b] bg-[#38b58b]/10 px-2.5 py-0.5 rounded-md border border-[#38b58b]/30">SYNAPSE</span>
            </div>
          </div>
        </div>

        {/* Center Flow Component: Central Cruxeo X Hub with pulses flowing to the 4 service divisions */}
        <CenterFlow
          centerTitle="CRUXEO CORE"
          centerSubtitle="Central Directorship · Unified GCC Execution"
          nodes={centerFlowNodes}
          className="mb-14"
        />

        {/* ScrollStack Component for Specialist Divisions */}
        <ScrollStack
          useWindowScroll={true}
          stackPosition="12%"
          itemDistance={90}
          itemStackDistance={28}
          itemScale={0.035}
          baseScale={0.88}
          dimAmount={0.18}
          holdDistance={180}
          smoothScroll={false}
          className="relative"
        >
          {servicesData.map((service) => {
            const config =
              divisionConfigs[service.id] || divisionConfigs["nexplay"];
            return (
              <ScrollStackItem
                key={service.id}
                id={service.id}
                itemClassName="bg-[#090a10]/95 border border-white/10 rounded-[28px] overflow-hidden backdrop-blur-2xl transition-all duration-300"
                style={{
                  borderColor: `${config.accent}45`,
                  boxShadow: `0 0 45px -10px ${config.accent}25, 0 20px 40px -15px rgba(0,0,0,0.8)`,
                }}
              >
                {/* Top Division Color Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] z-20"
                  style={{ background: config.gradient }}
                />

                {/* Ambient Division Glow */}
                <div
                  className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-[110px] pointer-events-none opacity-30"
                  style={{ background: config.glowBg }}
                />
                <div
                  className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20"
                  style={{ background: config.glowBg }}
                />

                {/* 2-Column Responsive Card Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-8 lg:p-10 relative z-10">
                  {/* Left Column: Details & Capabilities */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                    <div>
                      {/* Top Bar: Icon, Suite, Title & Metric */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2.5 rounded-2xl border"
                            style={{
                              backgroundColor: config.badgeBg,
                              borderColor: config.badgeBorder,
                            }}
                          >
                            {getIcon(service.iconName, config.accent)}
                          </div>
                          <div>
                            <span
                              className="text-[11px] font-mono font-bold uppercase tracking-widest block"
                              style={{ color: config.accent }}
                            >
                              {service.suite}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                              {service.title}
                            </h3>
                          </div>
                        </div>

                        <span
                          className="text-xs font-mono font-semibold px-3 py-1 rounded-full border whitespace-nowrap"
                          style={{
                            backgroundColor: config.badgeBg,
                            borderColor: config.badgeBorder,
                            color: config.badgeText,
                          }}
                        >
                          {service.metrics}
                        </span>
                      </div>

                      {/* Tagline Highlight */}
                      <div className="mb-3">
                        <span
                          className="text-xs sm:text-sm font-semibold tracking-wide"
                          style={{ color: config.accent }}
                        >
                          “{service.tagline}”
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>

                      {/* Key Capabilities */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="text-xs sm:text-[13px] font-medium px-3 py-2 rounded-xl bg-white/[0.04] text-slate-200 border border-white/5 flex items-center gap-2.5"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: config.accent }}
                            />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Zero-failure Dubai execution</span>
                      </div>

                      <Link
                        href={`/services#${service.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 group"
                        style={{
                          backgroundColor: config.badgeBg,
                          borderColor: config.badgeBorder,
                          borderWidth: "1px",
                          color: config.accent,
                        }}
                      >
                        <span>Explore Division Scope</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual Video / Media Reel */}
                  <div className="lg:col-span-5">
                    <div
                      className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group shadow-2xl"
                      style={{ borderColor: `${config.accent}30` }}
                    >
                      {service.video ? (
                        <video
                          src={service.video}
                          poster={service.image}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}

                      {/* Contrast gradient vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Top Right: Live Reel Pulse Indicator */}
                      <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] text-white">
                        <span
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ backgroundColor: config.accent }}
                        />
                        <span className="font-mono text-[10px] uppercase tracking-wider">
                          Live Reel
                        </span>
                      </div>

                      {/* Bottom Floating Tagline Pill */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center justify-between px-3.5 py-2 rounded-xl backdrop-blur-md bg-black/80 border border-white/10 text-xs">
                          <span className="font-mono font-medium truncate text-slate-200">
                            {service.tagline}
                          </span>
                          <span
                            className="font-mono font-bold uppercase text-[10px] shrink-0 ml-2"
                            style={{ color: config.accent }}
                          >
                            Dubai · GCC
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </section>
  );
};
