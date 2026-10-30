"use client";

import React, { useState, useEffect } from "react";
import { Radio, Scan, ShieldCheck, Cpu } from "lucide-react";

interface Target {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  trackTime: number;
}

export const RadarLidarVisual: React.FC = () => {
  const [sweepAngle, setSweepAngle] = useState(0);
  const [targets, setTargets] = useState<Target[]>([
    { id: "T-01", x: 120, y: 90, vx: 0.3, vy: -0.2, trackTime: 12.4 },
    { id: "T-02", x: 230, y: 160, vx: -0.2, vy: 0.3, trackTime: 4.8 },
    { id: "T-03", x: 170, y: 210, vx: 0.1, vy: 0.2, trackTime: 28.1 },
    { id: "T-04", x: 280, y: 80, vx: -0.4, vy: 0.1, trackTime: 8.6 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSweepAngle((prev) => (prev + 3) % 360);
      setTargets((prev) =>
        prev.map((t) => {
          let nx = t.x + t.vx;
          let ny = t.y + t.vy;
          let nvx = t.vx;
          let nvy = t.vy;
          if (nx < 60 || nx > 320) nvx = -nvx;
          if (ny < 50 || ny > 240) nvy = -nvy;
          return { ...t, x: nx, y: ny, vx: nvx, vy: nvy, trackTime: t.trackTime + 0.05 };
        })
      );
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl bg-slate-950/90 border border-white/10 p-5 overflow-hidden backdrop-blur-xl group">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <Radio className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-white tracking-wider">
                SPATIAL LIDAR · RADAR-360
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                ZERO DELAY
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Interactive Surface & Audience Tracking Grid
            </span>
          </div>
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>4 TARGETS LOCKED</span>
        </div>
      </div>

      {/* Radar Matrix Canvas */}
      <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
        {/* Concentric Radar Rings & Cross-Axes */}
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full stroke-emerald-500/20">
          <circle cx="200" cy="150" r="40" fill="none" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="200" cy="150" r="80" fill="none" strokeWidth="1" />
          <circle cx="200" cy="150" r="120" fill="none" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="200" y1="10" x2="200" y2="290" strokeWidth="1" opacity="0.4" />
          <line x1="60" y1="150" x2="340" y2="150" strokeWidth="1" opacity="0.4" />

          {/* Sweeping Radar Scanner Line */}
          <g transform={`rotate(${sweepAngle}, 200, 150)`}>
            <line x1="200" y1="150" x2="200" y2="20" stroke="#38bdf8" strokeWidth="2" opacity="0.9" />
            <path d="M 200 150 L 160 30 A 130 130 0 0 1 200 20 Z" fill="url(#sweepGlow)" opacity="0.25" />
          </g>

          <defs>
            <linearGradient id="sweepGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0b5cff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Render Active Tracked Targets */}
          {targets.map((t) => (
            <g key={t.id} transform={`translate(${t.x}, ${t.y})`}>
              <circle cx="0" cy="0" r="5" fill="#38bdf8" />
              <circle cx="0" cy="0" r="10" fill="none" stroke="#38bdf8" strokeWidth="1">
                <animate attributeName="r" values="6;14;6" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.2s" repeatCount="indefinite" />
              </circle>
              {/* Target Bounding Box and ID */}
              <rect x="-14" y="-14" width="28" height="28" fill="none" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 3" />
              <text x="16" y="4" fill="#93c5fd" fontSize="9" fontFamily="monospace">
                {t.id} [{t.x.toFixed(0)},{t.y.toFixed(0)}]
              </text>
            </g>
          ))}
        </svg>

        {/* HUD Overlay Badges */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-emerald-300 backdrop-blur-sm">
            <Scan className="w-3 h-3 text-emerald-400" />
            <span>FOV: 360° · RANGE: 25.0M · FREQ: 60Hz</span>
          </div>
        </div>

        <div className="absolute bottom-3 right-3 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-200 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>LATENCY: &lt;4.2ms · MULTI-TOUCH</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Tracking Latency</span>
          <span className="text-sm font-bold font-mono text-[#38bdf8]">&lt; 12 ms</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Simultaneous Users</span>
          <span className="text-sm font-bold font-mono text-white">100+ Touchpoints</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Spatial Accuracy</span>
          <span className="text-sm font-bold font-mono text-emerald-400">±1.0 mm</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Protocol Support</span>
          <span className="text-sm font-bold font-mono text-white">OSC / DMX / TUIO</span>
        </div>
      </div>
    </div>
  );
};
