"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Eye, Box, RotateCw } from "lucide-react";

export const HologramFanVisual: React.FC = () => {
  const [rpm, setRpm] = useState(720);
  const [hologramObject, setHologramObject] = useState<"cube" | "crux" | "falcon">("crux");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      setRotation(frame * (rpm / 120));
    }, 25);
    return () => clearInterval(interval);
  }, [rpm]);

  return (
    <div className="relative w-full rounded-2xl bg-slate-950/90 border border-white/10 p-5 overflow-hidden backdrop-blur-xl group">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#38bdf8]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-white tracking-wider">
                VOLUMETRIC HOLO · V-RAY 3D
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                PERSISTENT POV
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              High-Density Quad-Blade 3D Fan Array
            </span>
          </div>
        </div>

        {/* Object Selector */}
        <div className="flex items-center gap-1.5 bg-white/[0.04] p-1 rounded-lg border border-white/10">
          {(["crux", "cube", "falcon"] as const).map((obj) => (
            <button
              key={obj}
              onClick={() => setHologramObject(obj)}
              className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-all ${
                hologramObject === obj
                  ? "bg-cyan-600 text-white font-bold shadow-md shadow-cyan-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {obj}
            </button>
          ))}
        </div>
      </div>

      {/* Holographic Projection Arena */}
      <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
        {/* Optical Light Rays Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/15 via-blue-600/5 to-transparent pointer-events-none" />

        {/* Spinning Quad-Blade Rotor Fan (POV Simulation) */}
        <svg
          viewBox="0 0 300 300"
          className="absolute w-60 h-60 sm:w-72 sm:h-72 opacity-25"
          style={{ transform: `rotate(${rotation * 4}deg)` }}
        >
          <line x1="150" y1="20" x2="150" y2="280" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="20" y1="150" x2="280" y2="150" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="58" y1="58" x2="242" y2="242" stroke="#60a5fa" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="242" y1="58" x2="58" y2="242" stroke="#60a5fa" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="150" cy="150" r="130" fill="none" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="6 6" />
        </svg>

        {/* Floating 3D Volumetric Hologram Geometry */}
        <div className="relative z-10 flex items-center justify-center">
          {hologramObject === "cube" && (
            <svg
              viewBox="0 0 200 200"
              className="w-40 h-40 sm:w-48 sm:h-48 drop-shadow-[0_0_30px_rgba(56,189,248,0.7)]"
              style={{ transform: `rotateY(${rotation * 1.5}deg) rotateX(${rotation * 0.8}deg)` }}
            >
              <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="rgba(11,92,255,0.12)" stroke="#38bdf8" strokeWidth="2" />
              <line x1="100" y1="20" x2="100" y2="100" stroke="#38bdf8" strokeWidth="2" />
              <line x1="170" y1="60" x2="100" y2="100" stroke="#38bdf8" strokeWidth="2" />
              <line x1="30" y1="60" x2="100" y2="100" stroke="#38bdf8" strokeWidth="2" />
              <line x1="100" y1="100" x2="100" y2="180" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="4" fill="#ffffff" />
            </svg>
          )}

          {hologramObject === "crux" && (
            <svg
              viewBox="0 0 200 200"
              className="w-40 h-40 sm:w-48 sm:h-48 drop-shadow-[0_0_35px_rgba(56,189,248,0.8)]"
              style={{ transform: `rotate(${rotation * 0.5}deg)` }}
            >
              {/* Outer floating orbital rings */}
              <circle cx="100" cy="100" r="85" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="12 6" opacity="0.6" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#7c3aed" strokeWidth="1" strokeDasharray="4 8" opacity="0.8" />
              {/* Central Crux Diamond */}
              <polygon points="100,30 160,100 100,170 40,100" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" strokeWidth="2.5" />
              <polygon points="100,55 140,100 100,145 60,100" fill="rgba(124,58,237,0.2)" stroke="#a78bfa" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="6" fill="#ffffff">
                <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          )}

          {hologramObject === "falcon" && (
            <svg
              viewBox="0 0 240 180"
              className="w-48 h-36 sm:w-56 sm:h-44 drop-shadow-[0_0_35px_rgba(56,189,248,0.85)]"
              style={{ transform: `scale(${1 + Math.sin(rotation * 0.05) * 0.06})` }}
            >
              {/* Geometric Wireframe Falcon */}
              <path
                d="M 120 40 L 150 70 L 220 50 L 170 95 L 210 115 L 145 110 L 120 145 L 95 110 L 30 115 L 70 95 L 20 50 L 90 70 Z"
                fill="rgba(56,189,248,0.15)"
                stroke="#38bdf8"
                strokeWidth="2"
              />
              <line x1="120" y1="40" x2="120" y2="145" stroke="#60a5fa" strokeWidth="1.5" />
              <line x1="90" y1="70" x2="150" y2="70" stroke="#7c3aed" strokeWidth="1.5" />
              <line x1="70" y1="95" x2="170" y2="95" stroke="#7c3aed" strokeWidth="1.5" />
            </svg>
          )}
        </div>

        {/* HUD Overlay Badges */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-cyan-300 backdrop-blur-sm">
            <RotateCw className="w-3 h-3 animate-spin" />
            <span>ROTOR: {rpm} RPM · 2,048 LED NODES</span>
          </div>
        </div>

        <div className="absolute bottom-3 right-3 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-[10px] font-mono text-cyan-200 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>TRUE 3D · ZERO GLASS REQUIRED</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Pixel Pitch</span>
          <span className="text-sm font-bold font-mono text-white">0.65 mm</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Luminance</span>
          <span className="text-sm font-bold font-mono text-[#38bdf8]">3,500 Nits</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Array Expansion</span>
          <span className="text-sm font-bold font-mono text-white">1–64 Synchronized</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Viewing Angle</span>
          <span className="text-sm font-bold font-mono text-emerald-400">176° Panoramic</span>
        </div>
      </div>
    </div>
  );
};
