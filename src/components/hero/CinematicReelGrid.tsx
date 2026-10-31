"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck, Film } from "lucide-react";

interface ReelItem {
  id: string;
  title: string;
  division: string;
  videoSrc: string;
  posterSrc: string;
  metric: string;
  metricLabel: string;
  accent: string;
  location: string;
}

const REELS: ReelItem[] = [
  {
    id: "ignispectra",
    title: "1,200 UAV Constellation Light Show",
    division: "IGNISPECTRA",
    videoSrc: "/assets/videos/work-aerial-symphony.mp4",
    posterSrc: "/assets/images/work-aerial-symphony.jpg",
    metric: "1,200 UAVs",
    metricLabel: "RTK Centimeter Swarm",
    accent: "#38bdf8",
    location: "Dubai Marina Waterfront",
  },
  {
    id: "nexplay",
    title: "6-Axis High-Speed Cinematic Robot",
    division: "NEXPLAY",
    videoSrc: "/assets/videos/nexplay.mp4",
    posterSrc: "/assets/images/nexplay.jpg",
    metric: "1000 FPS",
    metricLabel: "Phantom 4K Motion Rig",
    accent: "#7c3aed",
    location: "DWTC Exhibition Arena",
  },
  {
    id: "lumen-lab",
    title: "Volumetric 3D Hologram Pavilion",
    division: "LUMEN LAB",
    videoSrc: "/assets/videos/work-immersion-led.mp4",
    posterSrc: "/assets/images/work-immersion-led.jpg",
    metric: "7680 Hz",
    metricLabel: "Curved Broadcast LED",
    accent: "#0b5cff",
    location: "Al Fahidi Heritage Quarter",
  },
  {
    id: "synapse",
    title: "Spatial LiDAR Multi-Touch Floor",
    division: "SYNAPSE",
    videoSrc: "/assets/videos/work-radar-arena.mp4",
    posterSrc: "/assets/images/work-radar-arena.jpg",
    metric: "< 12 ms",
    metricLabel: "Real-Time Laser Tracking",
    accent: "#60a5fa",
    location: "GITEX Global Flagship",
  },
];

export const CinematicReelGrid: React.FC = () => {
  const [activeReel, setActiveReel] = useState<string | null>(null);
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    ignispectra: true,
    nexplay: true,
    "lumen-lab": true,
    synapse: true,
  });

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const toggleSound = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (vid) {
      const newMuted = !vid.muted;
      vid.muted = newMuted;
      setMutedStates((prev) => ({ ...prev, [id]: newMuted }));
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10" id="live-reels">
      {/* Visual Header with Micro-Text */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-4 backdrop-blur-xl shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-blue-400">Live 4K Production Field Captures</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 leading-[1.15]">
            Raw Visual Output. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
              Zero Simulated Renders.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed">
            Real field captures from our live Dubai productions. Zero simulated renders.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#38bdf8] hover:text-white transition-colors"
        >
          <span>View full repertoire</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 4-Reel Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {REELS.map((reel) => {
          const isMuted = mutedStates[reel.id] ?? true;
          return (
            <div
              key={reel.id}
              className="group relative rounded-3xl overflow-hidden bg-slate-950 border border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl flex flex-col justify-between aspect-[16/11] sm:aspect-[9/13] md:aspect-[9/13]"
              onMouseEnter={() => setActiveReel(reel.id)}
              onMouseLeave={() => setActiveReel(null)}
            >
              {/* Autoplaying Ambient Video Background */}
              <video
                ref={(el) => {
                  videoRefs.current[reel.id] = el;
                }}
                src={reel.videoSrc}
                poster={reel.posterSrc}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />

              {/* Contrast Gradients for Maximum Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/60 pointer-events-none" />

              {/* Top Bar: Division Badge & Audio Toggle */}
              <div className="relative z-10 p-4 flex items-center justify-between">
                <span
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider backdrop-blur-md border shadow-md flex items-center gap-1.5"
                  style={{
                    backgroundColor: "rgba(10, 15, 26, 0.8)",
                    borderColor: `${reel.accent}60`,
                    color: reel.accent,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-ping"
                    style={{ backgroundColor: reel.accent }}
                  />
                  {reel.division}
                </span>

                <button
                  type="button"
                  onClick={(e) => toggleSound(reel.id, e)}
                  className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:scale-110 transition-all"
                  aria-label="Toggle sound"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-blue-400" />}
                </button>
              </div>

              {/* Bottom Info: Location, Title & Metric */}
              <div className="relative z-10 p-5 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  📍 {reel.location}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug line-clamp-2">
                  {reel.title}
                </h3>

                {/* Micro Metric Badge */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <span
                      className="text-xl font-bold font-mono tracking-tight block"
                      style={{ color: reel.accent }}
                    >
                      {reel.metric}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 block">
                      {reel.metricLabel}
                    </span>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white/90 backdrop-blur-md">
                    4K LIVE
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
