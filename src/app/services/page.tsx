import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Box,
  Sparkles,
  Touchpad,
  Cpu,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { servicesData, deliveryProcessData } from "@/data/siteData";
import { PricingPlans } from "@/components/services/PricingPlans";
import { CtaBanner } from "@/components/ui/CtaBanner";
import CenterFlow, { CenterFlowNode } from "@/components/ui/CenterFlow";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

export const metadata: Metadata = {
  title: "Specialist Divisions & Technology Capabilities | Cruxeo Experience",
  description:
    "Explore Cruxeo's four specialist divisions: NEXPLAY event tech, LUMEN LAB visual systems, IGNISPECTRA drone light shows & live spectacles, and SYNAPSE AI & custom software.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string, accentColor: string) => {
    const style = { color: accentColor };
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

  // Authentic Cruxeo Division Color Codes (DO NOT ALTER)
  const divisionConfigs: Record<
    string,
    {
      num: string;
      glowBg: string;
      glowBorder: string;
      accent: string;
      gradient: string;
      badgeBg: string;
      badgeBorder: string;
      badgeText: string;
      hoverShadow: string;
      hardwareTag: string;
      benchmark: string;
    }
  > = {
    nexplay: {
      num: "(01)",
      glowBg: "rgba(168, 85, 247, 0.22)",
      glowBorder: "border-[#a855f7]/40",
      accent: "#a855f7",
      gradient: "linear-gradient(90deg, #8b5cf6 0%, #d946ef 100%)",
      badgeBg: "rgba(168, 85, 247, 0.15)",
      badgeBorder: "rgba(168, 85, 247, 0.35)",
      badgeText: "#e9d5ff",
      hoverShadow: "shadow-[0_0_40px_rgba(168,85,247,0.25)]",
      hardwareTag: "6-Axis Robot & Touch Radar",
      benchmark: "<15ms Interaction Latency",
    },
    "lumen-lab": {
      num: "(02)",
      glowBg: "rgba(0, 245, 212, 0.22)",
      glowBorder: "border-[#00f5d4]/40",
      accent: "#00f5d4",
      gradient: "linear-gradient(90deg, #00c2ff 0%, #00f5d4 100%)",
      badgeBg: "rgba(0, 245, 212, 0.15)",
      badgeBorder: "rgba(0, 245, 212, 0.35)",
      badgeText: "#99f6e4",
      hoverShadow: "shadow-[0_0_40px_rgba(0,245,212,0.25)]",
      hardwareTag: "7680Hz LED & 3D Holo Fans",
      benchmark: "7680Hz Broadcast Refresh",
    },
    ignispectra: {
      num: "(03)",
      glowBg: "rgba(255, 177, 43, 0.22)",
      glowBorder: "border-[#ffb12b]/40",
      accent: "#ffb12b",
      gradient: "linear-gradient(90deg, #e96a16 0%, #ffb12b 100%)",
      badgeBg: "rgba(255, 177, 43, 0.15)",
      badgeBorder: "rgba(255, 177, 43, 0.35)",
      badgeText: "#fef08a",
      hoverShadow: "shadow-[0_0_40px_rgba(255,177,43,0.25)]",
      hardwareTag: "1,200 UAVs & RTK Formation",
      benchmark: "500+ Drones in Formation",
    },
    synapse: {
      num: "(04)",
      glowBg: "rgba(56, 181, 139, 0.22)",
      glowBorder: "border-[#38b58b]/40",
      accent: "#38b58b",
      gradient: "linear-gradient(90deg, #009b83 0%, #38b58b 100%)",
      badgeBg: "rgba(56, 181, 139, 0.15)",
      badgeBorder: "rgba(56, 181, 139, 0.35)",
      badgeText: "#a7f3d0",
      hoverShadow: "shadow-[0_0_40px_rgba(56,181,139,0.25)]",
      hardwareTag: "Edge AI & Private On-Prem",
      benchmark: "100% Approved Accuracy",
    },
  };

  // CenterFlow Constellation Nodes
  const centerFlowNodes: CenterFlowNode[] = servicesData.map((service) => {
    let position: CenterFlowNode["position"] = "top-left";
    if (service.id === "nexplay") position = "top-left";
    else if (service.id === "lumen-lab") position = "top-right";
    else if (service.id === "ignispectra") position = "bottom-left";
    else if (service.id === "synapse") position = "bottom-right";

    const config = divisionConfigs[service.id] || divisionConfigs["nexplay"];

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

  // Technical Capability Matrix for UAE & GCC Production Standards
  const divisionMatrix = [
    {
      id: "nexplay",
      suite: "NEXPLAY",
      color: "#a855f7",
      category: "Interactive & Event Tech",
      icon: <Bot className="w-5 h-5 text-[#a855f7]" />,
      coreTech: "Robotic Glambots, Custom Neural Diffusion, Ultra-low Latency Touch Radar",
      permits: "UAE Spectrum Compliance, DWTC & Dubai Mall Venue Rigging Clearances",
      redundancy: "Hot-standby camera bodies, dual on-site GPU neural workstations",
      benchmark: "<15ms Interaction Latency",
    },
    {
      id: "lumen-lab",
      suite: "LUMEN LAB",
      color: "#00f5d4",
      category: "Audiovisual & Production",
      icon: <Box className="w-5 h-5 text-[#00f5d4]" />,
      coreTech: "7680Hz Curved LED Walls, Holographic Fan Arrays, 4K Laser Facade Mapping",
      permits: "Structural Rigging Sign-offs, Dubai Municipality Wind & Load Compliance",
      redundancy: "Dual Novastar processors, isolated optical fiber loop failovers",
      benchmark: "7680Hz Broadcast Refresh",
    },
    {
      id: "ignispectra",
      suite: "IGNISPECTRA",
      color: "#ffb12b",
      category: "Drones & Live Spectacles",
      icon: <Sparkles className="w-5 h-5 text-[#ffb12b]" />,
      coreTech: "100–1,500+ RTK Swarms, DMX Musical Pyrotechnics, High-Power Beam Lasers",
      permits: "GCAA & DCAA Airspace Clearances, Dubai Police & Civil Defense Permits",
      redundancy: "Triple-redundant GPS compasses, automated geofence parachute returns",
      benchmark: "500+ Drones in Sync",
    },
    {
      id: "synapse",
      suite: "SYNAPSE",
      color: "#38b58b",
      category: "AI & Custom Software",
      icon: <Touchpad className="w-5 h-5 text-[#38b58b]" />,
      coreTech: "Custom Private Enterprise LLMs, Automated WhatsApp Pipelines, Touchless Kiosk OS",
      permits: "UAE Federal Data Protection Compliant, Zero-Exfiltration Local Hosting",
      redundancy: "Active-Active regional cloud clusters with offline local caching mode",
      benchmark: "100% Approved Accuracy",
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-background text-slate-100 relative">
      {/* Background Ambient Unified Cruxeo Blue & Violet Glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/12 blur-[150px] pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute top-[900px] left-1/3 w-[600px] h-[600px] rounded-full bg-blue-600/08 blur-[180px] pointer-events-none" />

      {/* 1. Cinematic Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-6 backdrop-blur-xl shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-mono text-blue-400">Turnkey UAE Directorship · Four Specialist Disciplines</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Engineered for Wonder. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
            Delivered with Precision.
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Cruxeo coordinates four elite creative technology divisions under a single
          bench-tested Dubai directorship. One unified brief, proprietary hardware, and zero surprises on show day.
        </p>

        {/* Quick-Nav Capsule Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-10">
          {servicesData.map((s) => {
            const cfg = divisionConfigs[s.id] || divisionConfigs["nexplay"];
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-xl bg-slate-900/80 border transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
                style={{
                  borderColor: `${cfg.accent}40`,
                  boxShadow: `0 0 20px -8px ${cfg.accent}30`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: cfg.accent }}
                />
                <span className="font-mono text-slate-200">
                  {cfg.num} {s.suite.replace(" by CRUXEO", "")}
                </span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </a>
            );
          })}
        </div>
      </section>

      {/* 2. Interactive CenterFlow Constellation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24 relative z-10">
        <CenterFlow
          centerTitle="CRUXEO CORE"
          centerSubtitle="Unified Directorship · Coordinated UAE Execution"
          nodes={centerFlowNodes}
          className="shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]"
        />
      </section>

      {/* 3. Detailed Specialist Division Showcases with ScrollStack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 sm:mb-32 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-4 backdrop-blur-xl shadow-lg">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-mono text-blue-400">Proprietary Divisions Stack</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 leading-[1.15]">
              Specialist Hardware. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
                & Flawless Live Execution.
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="text-[#a855f7] bg-[#a855f7]/10 px-2.5 py-1 rounded-md border border-[#a855f7]/30 font-mono">(01) NEXPLAY</span>
            <span className="text-[#00f5d4] bg-[#00f5d4]/10 px-2.5 py-1 rounded-md border border-[#00f5d4]/30 font-mono">(02) LUMEN LAB</span>
            <span className="text-[#ffb12b] bg-[#ffb12b]/10 px-2.5 py-1 rounded-md border border-[#ffb12b]/30 font-mono">(03) IGNISPECTRA</span>
            <span className="text-[#38b58b] bg-[#38b58b]/10 px-2.5 py-1 rounded-md border border-[#38b58b]/30 font-mono">(04) SYNAPSE</span>
          </div>
        </div>

        <ScrollStack
          useWindowScroll={true}
          stackPosition="96px"
          itemDistance={340}
          itemStackDistance={32}
          itemScale={0.035}
          baseScale={0.88}
          dimAmount={0.22}
          holdDistance={260}
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
                itemClassName="bg-[#0b0f19]/95 border rounded-[28px] sm:rounded-[32px] overflow-hidden backdrop-blur-2xl transition-all duration-300"
                style={{
                  borderColor: `${config.accent}45`,
                  boxShadow: `0 0 50px -10px ${config.accent}25, 0 25px 50px -20px rgba(0,0,0,0.85)`,
                }}
              >
                {/* Top Division Color Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] z-20"
                  style={{ background: config.gradient }}
                />

                {/* Ambient Division Dynamic Glow */}
                <div
                  className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-[110px] pointer-events-none opacity-30"
                  style={{ background: config.glowBg }}
                />
                <div
                  className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20"
                  style={{ background: config.glowBg }}
                />

                {/* 2-Column Responsive Card Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-6 sm:p-8 lg:p-10 relative z-10">
                  {/* Left Column: Details & Capabilities */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                    <div>
                      {/* Top Bar: Icon, Division Number, Suite & Benchmark */}
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
                            <div className="flex items-center gap-2">
                              <span
                                className="text-xs font-mono font-bold"
                                style={{ color: config.accent }}
                              >
                                {config.num}
                              </span>
                              <span
                                className="text-[11px] font-mono font-bold uppercase tracking-widest block"
                                style={{ color: config.accent }}
                              >
                                {service.suite}
                              </span>
                            </div>
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
                          {config.benchmark}
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
                            className="text-xs px-3 py-2 rounded-xl bg-white/[0.04] text-slate-200 border border-white/5 flex items-center gap-2.5"
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
                        <span
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ backgroundColor: config.accent }}
                        />
                        <span>{config.hardwareTag}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={`https://wa.me/971545454891?text=${encodeURIComponent(
                            `Hi CRUXEO, I would like to enquire about ${service.suite} for our upcoming event.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 group shadow-lg"
                          style={{
                            background: config.gradient,
                            boxShadow: `0 0 20px -5px ${config.accent}50`,
                          }}
                        >
                          <span>Enquire for Scope</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Video / Media Reel */}
                  <div className="lg:col-span-5">
                    <div
                      className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border bg-slate-900 group shadow-2xl"
                      style={{ borderColor: `${config.accent}40` }}
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

                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Top Right: Live 4K Deployment Reel Indicator */}
                      <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] text-white">
                        <span
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ backgroundColor: config.accent }}
                        />
                        <span className="font-mono text-[10px] uppercase tracking-wider">
                          Live 4K Reel
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
      </section>

      {/* 4. Technical Benchmark & Governance Matrix */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/70 border-y border-white/10 relative overflow-hidden mb-28">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-6 backdrop-blur-xl shadow-lg">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-mono text-blue-400">Governance & Standards</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              Capability & Redundancy. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
                Zero-Failure Engineering Matrix.
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
              Every system is engineered to strict aviation, civil, and broadcast standards across Dubai, Abu Dhabi, and Saudi Arabia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisionMatrix.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:-translate-y-1 shadow-xl relative overflow-hidden group"
              >
                {/* Top Colored Accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: item.color }}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-xs font-bold uppercase tracking-wider"
                      style={{ color: item.color }}
                    >
                      {item.suite}
                    </span>
                    <div
                      className="p-1.5 rounded-lg border"
                      style={{
                        backgroundColor: `${item.color}15`,
                        borderColor: `${item.color}30`,
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {item.category}
                  </h3>

                  <div className="pt-2 border-t border-white/5 space-y-3 text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                        Core Technology
                      </span>
                      <p className="text-slate-300 leading-relaxed font-normal">
                        {item.coreTech}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                        Redundancy Protocol
                      </span>
                      <p className="text-slate-300 leading-relaxed font-normal">
                        {item.redundancy}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                        Permits & Standards
                      </span>
                      <p className="text-slate-300 leading-relaxed font-normal">
                        {item.permits}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">Benchmark</span>
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: item.color }}
                  >
                    {item.benchmark}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How Projects Are Delivered - Visual Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-6 backdrop-blur-xl shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-blue-400">Execution Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
            How Landmark Experiences. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
              Are Delivered Across the GCC.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
            One team, tested hardware, transparent scope, and zero surprises on site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryProcessData.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-slate-900/70 border border-white/10 hover:border-[#38bdf8]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:bg-slate-900/95 hover:-translate-y-1 shadow-xl relative"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#38bdf8] block mb-3">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-white mb-2.5">{item.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 block mb-3 font-mono">
                  Verified Outputs
                </span>
                <ul className="space-y-2">
                  {item.deliverables.map((deliv, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-xs text-slate-300 flex items-center gap-2 font-normal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Metrics Strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
          <div className="text-center">
            <span className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 block mb-1">
              100%
            </span>
            <span className="text-xs text-slate-400 font-mono">Bench-Tested Hardware</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 block mb-1">
              100%
            </span>
            <span className="text-xs text-slate-400 font-mono">Dual-Redundant Backup</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 block mb-1">
              100%
            </span>
            <span className="text-xs text-slate-400 font-mono">Safety & Airspace Permits</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 block mb-1">
              100%
            </span>
            <span className="text-xs text-slate-400 font-mono">On-Time Show Execution</span>
          </div>
        </div>
      </section>

      {/* 6. Pricing & Engagement Packages */}
      <PricingPlans />

      {/* 7. High-Impact CTA Banner */}
      <CtaBanner />
    </div>
  );
}
