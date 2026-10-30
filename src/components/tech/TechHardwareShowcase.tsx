"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plane, Bot, Sparkles, Radio, Cpu, Shield, Layers } from "lucide-react";
import { DroneSwarmVisual } from "./DroneSwarmVisual";
import { RoboticArmVisual } from "./RoboticArmVisual";
import { HologramFanVisual } from "./HologramFanVisual";
import { RadarLidarVisual } from "./RadarLidarVisual";

type ActiveTab = "drones" | "robotics" | "holograms" | "radar";

export const TechHardwareShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("drones");

  const tabs: {
    id: ActiveTab;
    label: string;
    sublabel: string;
    badge: string;
    icon: React.ReactNode;
    color: string;
  }[] = [
    {
      id: "drones",
      label: "Autonomous Drones",
      sublabel: "1,200 UAV Swarms",
      badge: "IGNISPECTRA",
      icon: <Plane className="w-4 h-4" />,
      color: "#38bdf8",
    },
    {
      id: "robotics",
      label: "6-Axis Robotic Arm",
      sublabel: "High-Speed Cinema Rig",
      badge: "NEXPLAY",
      icon: <Bot className="w-4 h-4" />,
      color: "#0b5cff",
    },
    {
      id: "holograms",
      label: "Volumetric Holograms",
      sublabel: "3D POV Fan Array",
      badge: "LUMEN LAB",
      icon: <Sparkles className="w-4 h-4" />,
      color: "#38bdf8",
    },
    {
      id: "radar",
      label: "Spatial LiDAR Radar",
      sublabel: "Multi-User Tracking",
      badge: "SYNAPSE",
      icon: <Radio className="w-4 h-4" />,
      color: "#7c3aed",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10" id="tech-command">
      {/* Visual Header with Micro-Text */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-white bg-blue-500/10 border border-blue-500/30 mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#38bdf8]" />
            Hardware & Robotics Command Deck
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Engineered for Live Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Interactive hardware modules built and deployed across Dubai & the GCC. Select a system to inspect real-time telemetry.
          </p>
        </div>

        {/* Quick Nav Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#38bdf8] hover:text-white transition-colors"
        >
          <span>All capabilities</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Futuristic Tab Switcher Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 sm:p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isActive
                  ? "bg-slate-900 border-blue-500/50 shadow-[0_0_30px_rgba(11,92,255,0.25)] ring-1 ring-blue-400/40"
                  : "bg-slate-950/60 border-white/10 hover:border-white/20 hover:bg-slate-900/40 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="p-1.5 rounded-lg border flex items-center justify-center"
                  style={{
                    backgroundColor: isActive ? `${tab.color}20` : "rgba(255,255,255,0.04)",
                    borderColor: isActive ? `${tab.color}50` : "rgba(255,255,255,0.1)",
                    color: isActive ? tab.color : "#94a3b8",
                  }}
                >
                  {tab.icon}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {tab.badge}
                </span>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-bold text-white block">
                  {tab.label}
                </span>
                <span className="text-[11px] font-mono text-slate-400 block">
                  {tab.sublabel}
                </span>
              </div>

              {isActive && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: tab.color }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage Display */}
      <div className="relative rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl p-2 sm:p-6 shadow-2xl overflow-hidden min-h-[380px] sm:min-h-[440px]">
        {activeTab === "drones" && (
          <div className="w-full">
            <DroneSwarmVisual />
          </div>
        )}

        {activeTab === "robotics" && (
          <div className="w-full">
            <RoboticArmVisual />
          </div>
        )}

        {activeTab === "holograms" && (
          <div className="w-full">
            <HologramFanVisual />
          </div>
        )}

        {activeTab === "radar" && (
          <div className="w-full">
            <RadarLidarVisual />
          </div>
        )}
      </div>

      {/* Quick Verified Hardware Capabilities Strip */}
      <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
        <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-slate-900/50 border border-white/10">
          <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
          <div className="text-[11px] sm:text-xs">
            <span className="font-bold text-white block truncate">GCAA & DCAA</span>
            <span className="text-slate-400 truncate block">Airspace Clear</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-slate-900/50 border border-white/10">
          <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0" />
          <div className="text-[11px] sm:text-xs">
            <span className="font-bold text-white block truncate">Dual Novastar</span>
            <span className="text-slate-400 truncate block">Redundant Proc</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-slate-900/50 border border-white/10">
          <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
          <div className="text-[11px] sm:text-xs">
            <span className="font-bold text-white block truncate">1000 FPS Rig</span>
            <span className="text-slate-400 truncate block">High-Speed Kin</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 p-3.5 rounded-2xl bg-slate-900/50 border border-white/10">
          <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400 shrink-0" />
          <div className="text-[11px] sm:text-xs">
            <span className="font-bold text-white block truncate">&lt; 15ms Latency</span>
            <span className="text-slate-400 truncate block">Real-Time Touch</span>
          </div>
        </div>
      </div>
    </section>
  );
};
