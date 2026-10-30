"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { Plane, Shield, Crosshair, Compass, Zap } from "lucide-react";

type FormationMode = "falcon" | "helix" | "crux" | "vortex";

interface DroneParticle {
  x: number;
  y: number;
  z: number;
  targetX: number;
  targetY: number;
  targetZ: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  pulsePhase: number;
}

export const DroneSwarmVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [formation, setFormation] = useState<FormationMode>("falcon");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const getFormationTargets = useCallback((mode: FormationMode, count: number, w: number, h: number) => {
    const targets: { x: number; y: number; z: number; color: string }[] = [];
    const cx = w / 2;
    const cy = h / 2;

    for (let i = 0; i < count; i++) {
      let x = cx;
      let y = cy;
      let z = 1;
      let color = "#38bdf8";

      if (mode === "falcon") {
        const t = (i / count) * Math.PI * 2;
        const wing = i % 2 === 0 ? 1 : -1;
        const spread = i / count;
        x = cx + wing * (Math.sin(t) * 220 + spread * 140);
        y = cy - Math.cos(t) * 75 + Math.abs(spread * 60) - 15;
        z = 0.8 + Math.sin(t * 2) * 0.4;
        color = i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#60a5fa" : "#7c3aed";
      } else if (mode === "helix") {
        const strand = i % 2 === 0 ? 1 : -1;
        const progress = (i / count) * 4 * Math.PI;
        x = cx + Math.sin(progress) * 180 * strand;
        y = cy + (i / count - 0.5) * 220;
        z = 0.7 + Math.cos(progress) * 0.4;
        color = strand === 1 ? "#38bdf8" : "#818cf8";
      } else if (mode === "crux") {
        const ring = i % 3;
        const angle = (i / (count / 3)) * Math.PI * 2 + ring * 0.6;
        const radius = ring === 0 ? 55 : ring === 1 ? 115 : 175;
        x = cx + Math.cos(angle) * radius;
        y = cy + Math.sin(angle) * radius * 0.7;
        z = 1 + Math.sin(angle) * 0.3;
        color = ring === 0 ? "#38bdf8" : ring === 1 ? "#0b5cff" : "#7c3aed";
      } else {
        // Vortex
        const angle = (i / count) * Math.PI * 6;
        const dist = (i / count) * 160;
        x = cx + Math.cos(angle) * dist;
        y = cy + Math.sin(angle) * dist * 0.7;
        z = 0.6 + (i / count) * 0.8;
        color = "#38bdf8";
      }

      targets.push({ x, y, z, color });
    }
    return targets;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 320);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 320;
    };
    window.addEventListener("resize", handleResize);

    const droneCount = 70;
    const initialTargets = getFormationTargets(formation, droneCount, width, height);

    const drones: DroneParticle[] = initialTargets.map((t) => ({
      x: t.x + (Math.random() - 0.5) * 300,
      y: t.y + (Math.random() - 0.5) * 200,
      z: t.z,
      targetX: t.x,
      targetY: t.y,
      targetZ: t.z,
      vx: 0,
      vy: 0,
      color: t.color,
      size: 2.5 + Math.random() * 2,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    let time = 0;
    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Night Sky Mesh Background with Grid Lines
      ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update Targets if formation changed
      const currentTargets = getFormationTargets(formation, droneCount, width, height);
      for (let i = 0; i < drones.length; i++) {
        if (currentTargets[i]) {
          drones[i].targetX = currentTargets[i].x;
          drones[i].targetY = currentTargets[i].y;
          drones[i].targetZ = currentTargets[i].z;
          drones[i].color = currentTargets[i].color;
        }
      }

      // Draw constellation flight vectors between neighboring drones
      ctx.lineWidth = 0.6;
      for (let i = 0; i < drones.length; i++) {
        for (let j = i + 1; j < drones.length; j++) {
          const dx = drones[i].x - drones[j].x;
          const dy = drones[i].y - drones[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 45) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.35 * (1 - dist / 45)})`;
            ctx.beginPath();
            ctx.moveTo(drones[i].x, drones[i].y);
            ctx.lineTo(drones[j].x, drones[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and Draw Drone Nodes
      for (let i = 0; i < drones.length; i++) {
        const d = drones[i];

        // Hover wind turbulence
        const windX = Math.sin(time + i) * 0.8;
        const windY = Math.cos(time * 1.2 + i) * 0.8;

        // Mouse attraction/repulsion if interactive
        let mx = 0;
        let my = 0;
        if (mousePos.active) {
          const mdx = mousePos.x - d.x;
          const mdy = mousePos.y - d.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 120 && mDist > 0) {
            mx = (mdx / mDist) * 1.5;
            my = (mdy / mDist) * 1.5;
          }
        }

        // Spring towards target
        const ax = (d.targetX + windX - d.x) * 0.06 + mx;
        const ay = (d.targetY + windY - d.y) * 0.06 + my;

        d.vx = d.vx * 0.82 + ax;
        d.vy = d.vy * 0.82 + ay;
        d.x += d.vx;
        d.y += d.vy;

        // Render Drone Strobe Light Glow
        const pulse = 0.7 + Math.sin(time * 3 + d.pulsePhase) * 0.3;
        const droneSize = d.size * d.targetZ;

        // Diffused Outer Glow
        const radGlow = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, droneSize * 3.5);
        radGlow.addColorStop(0, d.color);
        radGlow.addColorStop(0.5, `${d.color}66`);
        radGlow.addColorStop(1, "transparent");
        ctx.fillStyle = radGlow;
        ctx.beginPath();
        ctx.arc(d.x, d.y, droneSize * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Solid Core LED
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(d.x, d.y, droneSize * 0.7 * pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [formation, mousePos, getFormationTargets]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <div className="relative w-full rounded-2xl bg-slate-950/90 border border-white/10 p-5 overflow-hidden backdrop-blur-xl group">
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
            <Plane className="w-4 h-4 text-[#38bdf8]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-white tracking-wider">
                AUTONOMOUS SWARM · CRX-UAV
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                1,200 UAVs SYNCED
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              RTK-GPS Centimeter Constellation Fleet
            </span>
          </div>
        </div>

        {/* Formation Selector */}
        <div className="flex items-center gap-1.5 bg-white/[0.04] p-1 rounded-lg border border-white/10">
          {(["falcon", "helix", "crux", "vortex"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setFormation(m)}
              className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-all ${
                formation === m
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Flight Canvas Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center cursor-crosshair"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* HUD Overlay Badges */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-cyan-300 backdrop-blur-sm">
            <Crosshair className="w-3 h-3 text-[#38bdf8]" />
            <span>RTK FIX: ±1.2cm · ALTITUDE: 180M · GCAA AIRSPACE CLEAR</span>
          </div>
        </div>

        <div className="absolute bottom-3 right-3 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-[10px] font-mono text-blue-200 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            <span>INTERACTIVE SWARM · MOVE MOUSE</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Fleet Capacity</span>
          <span className="text-sm font-bold font-mono text-white">100–1,500+ Drones</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">GPS Precision</span>
          <span className="text-sm font-bold font-mono text-[#38bdf8]">±1.2 cm RTK</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Music / DMX Sync</span>
          <span className="text-sm font-bold font-mono text-white">&lt; 0.8 ms</span>
        </div>
        <div className="p-2.5 rounded-xl border border-white/5 bg-white/[0.03]">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Airspace Status</span>
          <span className="text-sm font-bold font-mono text-emerald-400">GCAA / DCAA Approved</span>
        </div>
      </div>
    </div>
  );
};
