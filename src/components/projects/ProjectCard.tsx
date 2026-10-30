"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/types";
import { MapPin, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const accent = project.divisionAccent || "#38bdf8";

  // Quad-division color gradients
  const divisionGradients: Record<string, string> = {
    IGNISPECTRA: "linear-gradient(90deg, #0b5cff 0%, #38bdf8 100%)",
    "LUMEN LAB": "linear-gradient(90deg, #0b5cff 0%, #60a5fa 100%)",
    NEXPLAY: "linear-gradient(90deg, #7c3aed 0%, #38bdf8 100%)",
    SYNAPSE: "linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)",
  };

  const gradient =
    divisionGradients[project.division || ""] ||
    "linear-gradient(90deg, #0b5cff, #7c3aed)";

  return (
    <div
      className="group rounded-[28px] bg-slate-950/85 border border-white/10 hover:border-white/25 overflow-hidden backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between relative shadow-2xl hover:-translate-y-1"
      style={{
        boxShadow: `0 0 45px -15px ${accent}25, 0 20px 40px -15px rgba(0,0,0,0.8)`,
      }}
    >
      {/* Top Division Color Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2.5px] z-20 opacity-80 group-hover:opacity-100 transition-opacity"
        style={{ background: gradient }}
      />

      {/* Ambient Division Glow in Card Corner */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[110px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: accent }}
      />

      <div>
        {/* Cinema Video / Visual Showcase Header */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-slate-900 border-b border-white/10 group">
          {project.video ? (
            <video
              src={project.video}
              poster={project.image}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          )}

          {/* Contrast Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/40 pointer-events-none" />

          {/* Top Left: Division & Category Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
            {project.division && (
              <span
                className="px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-md border shadow-md flex items-center gap-1.5"
                style={{
                  backgroundColor: "rgba(8, 10, 18, 0.85)",
                  borderColor: `${accent}60`,
                  color: accent,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                {project.division}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/70 backdrop-blur-md text-slate-200 border border-white/15">
              {project.category}
            </span>
          </div>

          {/* Top Right: Live Reel / 4K Recording Indicator */}
          {project.video && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: accent }}
              />
              <span className="uppercase tracking-wider">4K Reel</span>
            </div>
          )}

          {/* Bottom Overlay: Location & Year Strip */}
          <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
              <MapPin className="w-3.5 h-3.5" style={{ color: accent }} />
              <span className="font-medium truncate max-w-[200px] sm:max-w-none">
                {project.location}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 font-mono text-xs">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 relative z-10 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block truncate">
                Client: {project.client}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal line-clamp-2">
            {project.summary}
          </p>

          {/* Key Visual Impact Metrics Grid */}
          <div className="grid grid-cols-3 gap-2.5 py-3.5 px-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
            {project.impactMetrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <span
                  className="block text-base sm:text-xl font-bold font-mono tracking-tight"
                  style={{ color: accent }}
                >
                  {metric.value}
                </span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.03] text-slate-300 border border-white/5 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-7 pt-0 relative z-10">
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">Bench-tested in Dubai</span>
          </div>

          <Link
            href={`/contact?project=${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-all hover:gap-2.5 group"
            style={{ color: accent }}
          >
            <span>Enquire for Scope</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
