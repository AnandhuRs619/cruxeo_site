"use client";

import React, { useState, useEffect } from "react";
import { Bot, Crosshair, Zap, Activity } from "lucide-react";

export const RoboticArmVisual: React.FC = () => {
  const [angleJ1, setAngleJ1] = useState(25);
  const [angleJ2, setAngleJ2] = useState(-35);
  const [angleJ3, setAngleJ3] = useState(45);
  const [mode, setMode] = useState<"highspeed" | "cinematic" | "motion_rig">("highspeed");
  const [isCalibrating, setIsCalibrating] = useState(false);

  // Dynamic kinematic animation
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const speed = mode === "highspeed" ? 0.05 : 0.02;
      setAngleJ1(20 + Math.sin(frame * speed) * 18);
      setAngleJ2(-40 + Math.cos(frame * speed * 0.8) * 15);
      setAngleJ3(50 + Math.sin(frame * speed * 1.2) * 20);
    }, 30);
    return () => clearInterval(interval);
  }, [mode]);

  return (
    <div className="relative w-full rounded-2xl bg-slate-950/90 border border-white/10 p-4 sm:p-5 overflow-hidden backdrop-blur-xl group">
      {/* Top Telemetry Header */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 mb-4 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
            <Bot className="w-4 h-4 text-[#38bdf8]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-white tracking-wider">
                ROBOTIC ARM · CRX-6X
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                ACTIVE
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              6-Axis High-Speed Cinematic Motion Rig
            </span>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/10 overflow-x-auto max-w-full">
          {(["highspeed", "cinematic", "motion_rig"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-2 sm:px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                mode === m
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {m.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Main Schematic & Visualization Canvas */}
      <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
        {/* Coordinate Grid Background */}
        <svg className="absolute inset-0 w-full h-full stroke-white/[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arm-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arm-grid)" />
          {/* Target Radar Crosshairs */}
          <circle cx="50%" cy="50%" r="80" fill="none" stroke="rgba(56, 189, 248, 0.08)" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="130" fill="none" stroke="rgba(124, 58, 237, 0.06)" />
        </svg>

        {/* 6-Axis Interactive Kinematic Robotic Arm SVG */}
        <svg
          viewBox="0 0 400 300"
          className="relative z-10 w-full h-full max-w-md max-h-72 drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]"
        >
          <defs>
            <linearGradient id="armMetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="armGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0b5cff" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <filter id="laserGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Base Stand & Plinth */}
          <path d="M 160 270 L 240 270 L 225 240 L 175 240 Z" fill="url(#armMetal)" stroke="#38bdf8" strokeWidth="1.5" />
          <rect x="180" y="230" width="40" height="10" rx="2" fill="#0f172a" stroke="#60a5fa" strokeWidth="1" />

          {/* Joint 1: Base Turntable */}
          <circle cx="200" cy="225" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="200" cy="225" r="5" fill="#38bdf8" />

          {/* Link 1 & Joint 2 */}
          <g transform={`rotate(${angleJ1}, 200, 225)`}>
            <rect x="193" y="145" width="14" height="80" rx="7" fill="url(#armMetal)" stroke="#475569" strokeWidth="1.5" />
            {/* LED Status line on segment */}
            <line x1="200" y1="155" x2="200" y2="215" stroke="#38bdf8" strokeWidth="2" opacity="0.8" />

            {/* Joint 2 (Shoulder) */}
            <circle cx="200" cy="145" r="12" fill="#1e293b" stroke="#7c3aed" strokeWidth="2" />
            <circle cx="200" cy="145" r="4" fill="#a78bfa" />

            {/* Link 2 & Joint 3 (Forearm) */}
            <g transform={`rotate(${angleJ2}, 200, 145)`}>
              <rect x="194" y="65" width="12" height="80" rx="6" fill="url(#armMetal)" stroke="#475569" strokeWidth="1.5" />
              <line x1="200" y1="75" x2="200" y2="135" stroke="#7c3aed" strokeWidth="2" opacity="0.7" />

              {/* Joint 3 (Elbow) */}
              <circle cx="200" cy="65" r="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="200" cy="65" r="3.5" fill="#38bdf8" />

              {/* Link 3 & End Effector / High-Speed Camera Head */}
              <g transform={`rotate(${angleJ3}, 200, 65)`}>
                <rect x="195" y="20" width="10" height="45" rx="5" fill="url(#armMetal)" stroke="#64748b" strokeWidth="1" />

                {/* 3-Axis Gimbal & High-Speed Phantom Camera Body */}
                <rect x="180" y="-8" width="40" height="28" rx="4" fill="#090d16" stroke="#38bdf8" strokeWidth="1.8" />
                <rect x="186" y="-14" width="28" height="6" rx="2" fill="#334155" />

                {/* Cinema Lens Barrel */}
                <path d="M 220 0 L 234 -4 L 234 16 L 220 12 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="234" cy="6" r="8" fill="#0b5cff" opacity="0.7" filter="url(#laserGlow)" />

                {/* Laser Tracking Beam Projecting from Camera */}
                <line x1="234" y1="6" x2="350" y2="6" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" filter="url(#laserGlow)" />
                <circle cx="350" cy="6" r="4" fill="#38bdf8" filter="url(#laserGlow)">
                  <animate attributeName="r" values="3;6;3" dur="1.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" />
                </circle>

                {/* Camera REC Tally Light */}
                <circle cx="187" cy="-2" r="2.5" fill="#ef4444">
                  <animate attributeName="opacity" values="1;0.2;1" dur="0.8s" repeatCount="indefinite" />
                </circle>
              </g>
            </g>
          </g>
        </svg>

        {/* Live HUD Floating Overlays */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-slate-300 backdrop-blur-sm">
            <Crosshair className="w-3 h-3 text-[#38bdf8]" />
            <span>J1: {angleJ1.toFixed(1)}° · J2: {angleJ2.toFixed(1)}° · J3: {angleJ3.toFixed(1)}°</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-[#38bdf8] backdrop-blur-sm">
            <Activity className="w-3 h-3" />
            <span>ACCEL: 4.8 G · VELOCITY: 3.8 m/s</span>
          </div>
        </div>

        <div className="absolute bottom-3 right-3 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-[10px] font-mono text-blue-200 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            <span>PHANTOM 4K · 1000 FPS READY</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Payload Cap</span>
          <span className="text-sm font-bold font-mono text-white">15.0 kg</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Repeatability</span>
          <span className="text-sm font-bold font-mono text-[#38bdf8]">±0.03 mm</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Capture Speed</span>
          <span className="text-sm font-bold font-mono text-white">120–1000 FPS</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Safety Clearance</span>
          <span className="text-sm font-bold font-mono text-emerald-400">TUV / CE Cert</span>
        </div>
      </div>
    </div>
  );
};
