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
  ShieldCheck,
  Cpu,
  Layers,
  Zap,
  Radio,
  FileCheck2,
} from "lucide-react";
import { servicesData, deliveryProcessData } from "@/data/siteData";
import { PricingPlans } from "@/components/services/PricingPlans";
import { CtaBanner } from "@/components/ui/CtaBanner";
import CenterFlow, { CenterFlowNode } from "@/components/ui/CenterFlow";
import { ServiceInteractiveCard } from "@/components/services/ServiceInteractiveCard";

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

  // CenterFlow Constellation Nodes
  const centerFlowNodes: CenterFlowNode[] = servicesData.map((service) => {
    let position: CenterFlowNode["position"] = "top-left";
    if (service.id === "nexplay") position = "top-left";
    else if (service.id === "lumen-lab") position = "top-right";
    else if (service.id === "ignispectra") position = "bottom-left";
    else if (service.id === "synapse") position = "bottom-right";

    const accent = service.accentColor || "#38bdf8";

    return {
      id: service.id,
      title: service.title,
      suite: service.suite,
      tagline: service.tagline,
      icon: getIcon(service.iconName, accent),
      color: accent,
      gradient: service.gradient || "linear-gradient(90deg, #38bdf8, #a855f7)",
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
      color: "#38bdf8",
      category: "Audiovisual & Production",
      icon: <Box className="w-5 h-5 text-[#38bdf8]" />,
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
    <div className="pt-28 pb-24 bg-background text-slate-100 relative overflow-hidden">
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
          {servicesData.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-xl bg-slate-900/80 border transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
              style={{
                borderColor: `${s.accentColor}40`,
                boxShadow: `0 0 20px -8px ${s.accentColor}30`,
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: s.accentColor }}
              />
              <span className="font-mono text-slate-200">
                {s.suite.replace(" by CRUXEO", "")}
              </span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
            </a>
          ))}
        </div>
      </section>

      {/* 2. Interactive CenterFlow Constellation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <CenterFlow
          centerTitle="CRUXEO CORE"
          centerSubtitle="Unified Directorship · Coordinated UAE Execution"
          nodes={centerFlowNodes}
          className="shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]"
        />
      </section>

      {/* 3. Detailed Specialist Division Showcases with Live Reel & Tech Schematics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 mb-32 relative z-10">
        {servicesData.map((service, index) => (
          <ServiceInteractiveCard key={service.id} service={service} index={index} />
        ))}
      </section>

      {/* 4. Technical Benchmark & Governance Matrix */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/70 border-y border-white/10 relative overflow-hidden mb-28">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/30 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              Technical Governance & Delivery Standards
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Capability & Redundancy Matrix
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
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
                        Permits & Regulatory
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[#38bdf8] bg-white/5 border border-white/10 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
            Delivery Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            How Landmark Experiences Are Delivered
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
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
