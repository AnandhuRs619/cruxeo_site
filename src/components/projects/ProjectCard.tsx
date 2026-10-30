"use client";

import React from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const accent = project.divisionAccent || "#0b5cff";

  return (
    <div className="group rounded-3xl bg-slate-950/90 border border-white/10 hover:border-white/20 overflow-hidden backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(0,0,0,0.5)]">
      <div>
        {/* Dynamic Project Video / Visual Header */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-900 border-b border-white/10">
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

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 opacity-90 pointer-events-none" />

          {/* Division & Category Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            {project.division && (
              <span
                className="px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-md border shadow-md flex items-center gap-1.5"
                style={{
                  backgroundColor: "rgba(10, 15, 26, 0.85)",
                  borderColor: `${accent}70`,
                  color: accent,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                {project.division}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-white border border-white/20">
              {project.category}
            </span>
          </div>

          {/* Reel Indicator */}
          {project.video && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accent }} />
              <span>4K RECORDING</span>
            </div>
          )}

          {/* Location & Year Strip */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
              <MapPin className="w-3.5 h-3.5" style={{ color: accent }} />
              <span className="truncate">{project.location}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
              Client: {project.client}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2">
            {project.summary}
          </p>

          {/* Key Visual Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-4">
            {project.impactMetrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <span
                  className="block text-sm sm:text-lg font-bold font-mono tracking-tight"
                  style={{ color: accent }}
                >
                  {metric.value}
                </span>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider truncate">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Scannable Technology Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
