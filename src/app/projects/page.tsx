import React from "react";
import { Metadata } from "next";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectsCarouselShowcase } from "@/components/projects/ProjectsCarouselShowcase";
import { CtaBanner } from "@/components/ui/CtaBanner";
import {
  ShieldCheck,
  Plane,
  Flame,
  Radio,
  Cpu,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Activations | Cruxeo Field Deployments",
  description:
    "Explore Cruxeo's portfolio of premier creative technology activations across Dubai and the UAE: synchronized drone light shows, volumetric hologram pavilions, and high-throughput interactive motion arenas.",
};

const TELEMETRY_STATISTICS = [
  {
    value: "85,000+",
    label: "Live Spectators",
    division: "IGNISPECTRA",
    accent: "#ffb12b",
    description: "Peak crowd capacity achieved during Dubai Marina waterfront spectacles",
  },
  {
    value: "1,200+",
    label: "Swarm Fleet",
    division: "IGNISPECTRA",
    accent: "#ffb12b",
    description: "Centimeter-accurate RTK-GPS drones deployable in single 3D constellation",
  },
  {
    value: "<15ms",
    label: "Sensor Latency",
    division: "NEXPLAY",
    accent: "#a855f7",
    description: "Zero-lag optical radar & multi-touch floor response under peak queue volume",
  },
  {
    value: "100%",
    label: "GCAA & Civil Defense",
    division: "ALL UNITS",
    accent: "#00f5d4",
    description: "Full regulatory clearance across Dubai, Abu Dhabi & GCC sovereign airspace",
  },
];

const AUTHORITY_STANDARDS = [
  {
    icon: Plane,
    title: "GCAA Category-A Airspace",
    description:
      "Direct municipal and civil aviation licensing for daytime and night-sky drone swarms and pyrotechnic corridors.",
  },
  {
    icon: Flame,
    title: "52°C Thermal Resilience",
    description:
      "Mil-spec heat-dissipated server racks, outdoor rated LED displays, and custom cooling pods engineered for UAE summer extremes.",
  },
  {
    icon: Radio,
    title: "Dual Redundant Mesh",
    description:
      "Automated wireless failover running localized radio meshes with zero dependence on venue public cellular networks.",
  },
  {
    icon: Cpu,
    title: "Private Sovereign AI",
    description:
      "Zero data leakage via air-gapped on-premise neural compute pods for government entities and tier-1 financial brands.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 bg-background text-slate-100 relative overflow-hidden">
      {/* Ambient Quad-Division Radial Halo Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#ffb12b]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-[550px] h-[550px] bg-[#00f5d4]/10 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[800px] left-10 w-[600px] h-[600px] bg-[#a855f7]/10 blur-[170px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[1400px] right-1/4 w-[500px] h-[500px] bg-[#38b58b]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Atmospheric Background Subtle Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* 1. Cinematic Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center mb-20 relative z-10">
        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-xl mb-6 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
            Field Repertoire // Dubai & GCC Deployments
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Engineering Wonder for <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-purple">
            Global Brands & Sovereign Entities
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
          From the Dubai Marina waterfront to GITEX Global, explore how Cruxeo unites
          autonomous drone swarms, volumetric LED architectures, and kinetic AI arenas into
          unforgettable public moments.
        </p>

        {/* 2. Cumulative Telemetry Ticker */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-[28px] bg-slate-950/70 border border-white/10 backdrop-blur-2xl shadow-2xl">
          {TELEMETRY_STATISTICS.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md border"
                    style={{
                      borderColor: `${stat.accent}50`,
                      color: stat.accent,
                      backgroundColor: `${stat.accent}10`,
                    }}
                  >
                    {stat.division}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stat.accent }} />
                </div>
                <div
                  className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 font-normal leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Case Studies & Interactive Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 relative z-10">
        <ProjectGallery />
      </section>

      {/* 4. WebGL Liquid Refraction Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 relative z-10">
        <ProjectsCarouselShowcase />
      </section>

      {/* 5. Production & Engineering Standards Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 relative z-10">
        <div className="p-8 sm:p-12 rounded-[32px] bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>GCC Deployment Assurance</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Tested for Zero-Failure Production Rigor
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3">
              Every Cruxeo installation is bench-tested in our Dubai staging labs and built to withstand intense heat, high-density audiences, and strict aviation safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUTHORITY_STANDARDS.map((std, idx) => {
              const Icon = std.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {std.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {std.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              Civil Aviation Authority (GCAA / DCAA)
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              Dubai Civil Defense (DCD) Fire Safety
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              TRA / TDRA Spectrum Compliance
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              ISO-Aligned Production Protocols
            </span>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <CtaBanner />
    </div>
  );
}
