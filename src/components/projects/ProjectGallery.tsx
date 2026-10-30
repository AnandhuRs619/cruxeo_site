"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/data/siteData";
import { ProjectItem } from "@/types";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Radio,
  Cpu,
  Layers,
  ChevronRight,
} from "lucide-react";

interface FilterTab {
  id: string;
  label: string;
  sublabel: string;
  division?: string;
  accent: string;
}

const FILTER_TABS: FilterTab[] = [
  {
    id: "ALL",
    label: "All Repertoire",
    sublabel: "4 Deployments",
    accent: "#38bdf8",
  },
  {
    id: "IGNISPECTRA",
    label: "IGNISPECTRA",
    sublabel: "Drone Shows & Lasers",
    division: "IGNISPECTRA",
    accent: "#38bdf8",
  },
  {
    id: "LUMEN LAB",
    label: "LUMEN LAB",
    sublabel: "Holograms & LED Domes",
    division: "LUMEN LAB",
    accent: "#0b5cff",
  },
  {
    id: "NEXPLAY",
    label: "NEXPLAY",
    sublabel: "Robotics & Games",
    division: "NEXPLAY",
    accent: "#7c3aed",
  },
  {
    id: "SYNAPSE",
    label: "SYNAPSE",
    sublabel: "AI & Custom Software",
    division: "SYNAPSE",
    accent: "#60a5fa",
  },
];

export const ProjectGallery: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("ALL");
  const [spotlightProject, setSpotlightProject] = useState<ProjectItem>(projectsData[0]);

  const activeTab = FILTER_TABS.find((t) => t.id === activeTabId) || FILTER_TABS[0];

  const filteredProjects =
    activeTabId === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.division === activeTab.division);

  return (
    <div className="space-y-16">
      {/* Interactive Division Navigation Bar with Scrollable Paging on Mobile */}
      <div className="relative">
        <div className="flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-2 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-slate-950/70 backdrop-blur-2xl border border-white/10 max-w-4xl mx-auto shadow-2xl no-scrollbar">
          {FILTER_TABS.map((tab) => {
            const isActive = activeTabId === tab.id;
            const count =
              tab.id === "ALL"
                ? projectsData.length
                : projectsData.filter((p) => p.division === tab.division).length;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  if (tab.id !== "ALL") {
                    const match = projectsData.find((p) => p.division === tab.division);
                    if (match) setSpotlightProject(match);
                  }
                }}
                className={`relative px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-left transition-all duration-300 flex items-center gap-2 sm:gap-2.5 group overflow-hidden shrink-0 ${
                  isActive
                    ? "bg-slate-900/90 text-white shadow-lg"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
                style={{
                  border: isActive
                    ? `1px solid ${tab.accent}60`
                    : "1px solid transparent",
                  boxShadow: isActive ? `0 0 25px -5px ${tab.accent}30` : undefined,
                }}
              >
                {/* Active Indicator Pip */}
                <span
                  className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                  style={{
                    backgroundColor: tab.accent,
                    boxShadow: isActive ? `0 0 10px ${tab.accent}` : "none",
                  }}
                />

                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">
                    {tab.label}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono hidden sm:inline-block">
                    {tab.sublabel}
                  </span>
                </div>

                <span
                  className="ml-1 text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10"
                  style={{ color: isActive ? tab.accent : undefined }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Spotlight Cinema Showcase Card */}
      <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-slate-950/80 border border-white/15 backdrop-blur-3xl shadow-2xl">
        {/* Top Gradient Division Line */}
        <div
          className="absolute top-0 left-0 right-0 h-1 z-20 transition-all duration-700"
          style={{
            background:
              spotlightProject.divisionAccent || "linear-gradient(90deg, #0b5cff, #7c3aed)",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: 16:9 Video Cinema Player */}
          <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[440px] lg:min-h-[500px] bg-black overflow-hidden group">
            {spotlightProject.video ? (
              <video
                key={spotlightProject.video}
                src={spotlightProject.video}
                poster={spotlightProject.image}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            ) : (
              <Image
                src={spotlightProject.image}
                alt={spotlightProject.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            )}

            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/60 pointer-events-none" />

            {/* Spotlight HUD Overlays */}
            <div className="absolute top-5 left-5 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full animate-ping"
                  style={{ backgroundColor: spotlightProject.divisionAccent }}
                />
                Featured Case Study
              </span>
              <span
                className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold backdrop-blur-md border"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  borderColor: `${spotlightProject.divisionAccent}70`,
                  color: spotlightProject.divisionAccent,
                }}
              >
                {spotlightProject.division}
              </span>
            </div>

            <div className="absolute top-5 right-5 flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                <span>4K Reel Playback</span>
              </div>
            </div>

            {/* Bottom Floating Pill on Video */}
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-200">
              <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
                <MapPin
                  className="w-3.5 h-3.5"
                  style={{ color: spotlightProject.divisionAccent }}
                />
                <span className="font-medium">{spotlightProject.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 font-mono text-xs">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{spotlightProject.year} Deployment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Telemetry & Narrative Dossier */}
          <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                  <span>Client Authority</span>
                  <span className="text-white/30">•</span>
                  <span className="text-slate-300 font-semibold truncate">
                    {spotlightProject.client}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                  {spotlightProject.title}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {spotlightProject.summary}
              </p>

              {/* 3-Column Engineering Telemetry Matrix */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Verified Operational Telemetry
                </span>
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                  {spotlightProject.impactMetrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div
                        className="text-lg sm:text-2xl font-bold font-mono tracking-tight"
                        style={{ color: spotlightProject.divisionAccent }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1 truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technologies Capsules */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Deployed Hardware & Software Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {spotlightProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] text-xs text-slate-200 border border-white/10 font-mono"
                    >
                      <Cpu className="w-3 h-3 text-slate-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Bottom CTA Strip */}
            <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dubai Civil Defense / GCAA Approved</span>
              </div>

              <Link
                href={`/contact?project=${spotlightProject.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 transition-all duration-300 hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: spotlightProject.divisionAccent || "#38bdf8",
                  boxShadow: `0 0 20px -3px ${spotlightProject.divisionAccent || "#38bdf8"}80`,
                }}
              >
                <span>Request Technical Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of All Filtered Activations */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <Layers className="w-4 h-4 text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {activeTabId === "ALL" ? "All Field Activations" : `${activeTab.label} Portfolio`}
            </h2>
            <span className="text-xs font-mono text-slate-400">
              ({filteredProjects.length} case {filteredProjects.length === 1 ? "study" : "studies"})
            </span>
          </div>

          <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
            Click any deployment to inspect specs
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSpotlightProject(project)}
              className="cursor-pointer"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
