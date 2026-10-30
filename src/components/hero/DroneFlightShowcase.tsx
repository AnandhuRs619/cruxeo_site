"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plane, Shield, Sparkles, Compass, Eye } from "lucide-react";
import { clientLogos } from "@/data/siteData";
import { StarBorder } from "@/components/ui/StarBorder";

type FormationMode = "falcon" | "helix" | "emblem" | "interactive";

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

export const DroneFlightShowcase: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [formation, setFormation] = useState<FormationMode>("falcon");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });
  const [telemetry, setTelemetry] = useState({
    activeUAVs: 850,
    altitude: 184,
    battery: 98,
    gpsAccuracy: "±1.2cm",
  });

  // Calculate target positions for various formations
  const getFormationTargets = useCallback((mode: FormationMode, count: number, w: number, h: number) => {
    const targets: { x: number; y: number; z: number; color: string }[] = [];
    const cx = w / 2;
    const cy = h / 2 - 20;

    for (let i = 0; i < count; i++) {
      let x = cx;
      let y = cy;
      let z = 1;
      let color = "#38bdf8";

      if (mode === "falcon") {
        // 3D Falcon wing spread formation
        const t = (i / count) * Math.PI * 2;
        const wing = i % 2 === 0 ? 1 : -1;
        const spread = (i / count);
        x = cx + wing * (Math.sin(t) * 260 + spread * 160);
        y = cy - Math.cos(t) * 90 + Math.abs(spread * 70) - 20;
        z = 0.8 + Math.sin(t * 2) * 0.4;
        color = i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#60a5fa" : "#c084fc";
      } else if (mode === "helix") {
        // DNA double helix
        const strand = i % 2 === 0 ? 1 : -1;
        const progress = (i / count) * 4 * Math.PI;
        x = cx + Math.sin(progress) * 220 * strand;
        y = cy + (i / count - 0.5) * 260;
        z = 0.7 + Math.cos(progress) * 0.4;
        color = strand === 1 ? "#38bdf8" : "#818cf8";
      } else if (mode === "emblem") {
        // Concentric Rings and Monogram Core
        const ring = i % 3;
        const angle = ((i / (count / 3)) * Math.PI * 2) + (ring * 0.5);
        const radius = ring === 0 ? 70 : ring === 1 ? 140 : 210;
        x = cx + Math.cos(angle) * radius;
        y = cy + Math.sin(angle) * radius * 0.75;
        z = 1 + Math.sin(angle) * 0.3;
        color = ring === 0 ? "#38bdf8" : ring === 1 ? "#2563eb" : "#a855f7";
      } else {
        // Interactive Flock / Cloud
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 200;
        x = cx + Math.cos(angle) * dist;
        y = cy + Math.sin(angle) * dist * 0.6;
        z = 0.6 + Math.random() * 0.8;
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
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1000);
    let height = (canvas.height = 460);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 460;
    };
    window.addEventListener("resize", handleResize);

    // Initialize 60 drone swarm particles
    const droneCount = 65;
    const initialTargets = getFormationTargets(formation, droneCount, width, height);

    const drones: DroneParticle[] = initialTargets.map((t) => ({
      x: t.x + (Math.random() - 0.5) * 400,
      y: t.y + (Math.random() - 0.5) * 300,
      z: t.z,
      targetX: t.x,
      targetY: t.y,
      targetZ: t.z,
      vx: 0,
      vy: 0,
      color: t.color,
      size: 3 + Math.random() * 2.5,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // Update targets when formation changes
    const updatedTargets = getFormationTargets(formation, droneCount, width, height);
    drones.forEach((d, idx) => {
      if (updatedTargets[idx]) {
        d.targetX = updatedTargets[idx].x;
        d.targetY = updatedTargets[idx].y;
        d.targetZ = updatedTargets[idx].z;
        d.color = updatedTargets[idx].color;
      }
    });

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Subtle atmospheric altitude grid lines
      ctx.strokeStyle = "rgba(56, 189, 248, 0.05)";
      ctx.lineWidth = 1;
      for (let y = 100; y < height; y += 80) {
        ctx.beginPath();
        ctx.moveTo(40, y);
        ctx.lineTo(width - 40, y);
        ctx.stroke();
      }

      // Draw constellation links between nearby drones
      ctx.lineWidth = 0.75;
      for (let i = 0; i < drones.length; i++) {
        for (let j = i + 1; j < drones.length; j++) {
          const dx = drones[i].x - drones[j].x;
          const dy = drones[i].y - drones[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 65) {
            const alpha = (1 - dist / 65) * 0.25;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(drones[i].x, drones[i].y);
            ctx.lineTo(drones[j].x, drones[j].y);
            ctx.stroke();
          }
        }
      }

      // Render each swarm drone
      drones.forEach((drone, idx) => {
        // Natural hovering oscillation
        const hoverOffset = Math.sin(frame * 0.04 + idx) * 4;

        // Interactive mouse influence if near
        let targetX = drone.targetX;
        let targetY = drone.targetY + hoverOffset;

        if (mousePos.active) {
          const mx = mousePos.x;
          const my = mousePos.y;
          const distToMouse = Math.hypot(drone.x - mx, drone.y - my);
          if (distToMouse < 180) {
            const repel = (1 - distToMouse / 180) * 40;
            const angle = Math.atan2(drone.y - my, drone.x - mx);
            targetX += Math.cos(angle) * repel;
            targetY += Math.sin(angle) * repel;
          }
        }

        // Smooth spring physics toward target
        const ax = (targetX - drone.x) * 0.045;
        const ay = (targetY - drone.y) * 0.045;
        drone.vx = (drone.vx + ax) * 0.86;
        drone.vy = (drone.vy + ay) * 0.86;
        drone.x += drone.vx;
        drone.y += drone.vy;

        // Render Downward Projection Light Cone
        if (idx % 4 === 0) {
          const beamGrad = ctx.createLinearGradient(drone.x, drone.y, drone.x, drone.y + 70);
          beamGrad.addColorStop(0, "rgba(56, 189, 248, 0.35)");
          beamGrad.addColorStop(1, "rgba(56, 189, 248, 0)");
          ctx.fillStyle = beamGrad;
          ctx.beginPath();
          ctx.moveTo(drone.x - 2, drone.y);
          ctx.lineTo(drone.x + 2, drone.y);
          ctx.lineTo(drone.x + 20, drone.y + 70);
          ctx.lineTo(drone.x - 20, drone.y + 70);
          ctx.closePath();
          ctx.fill();
        }

        // Render Drone Stardust Glow
        const pulse = Math.sin(frame * 0.08 + drone.pulsePhase) * 0.25 + 0.75;
        const glowRadius = drone.size * 3.5 * pulse;

        const radialGlow = ctx.createRadialGradient(
          drone.x,
          drone.y,
          0,
          drone.x,
          drone.y,
          glowRadius
        );
        radialGlow.addColorStop(0, drone.color);
        radialGlow.addColorStop(0.4, drone.color);
        radialGlow.addColorStop(1, "rgba(3, 7, 18, 0)");

        ctx.fillStyle = radialGlow;
        ctx.beginPath();
        ctx.arc(drone.x, drone.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Drone Core LED Point
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(drone.x, drone.y, drone.size * 0.65, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Flagship Lead Drone (detailed quadcopter with spinning rotors)
      const leadX = width / 2 + Math.sin(frame * 0.02) * 110;
      const leadY = 140 + Math.cos(frame * 0.025) * 25;
      const tilt = Math.cos(frame * 0.02) * 0.08;

      ctx.save();
      ctx.translate(leadX, leadY);
      ctx.rotate(tilt);

      // Lead Drone Downlight Spotlight
      const spotGrad = ctx.createRadialGradient(0, 80, 0, 0, 80, 100);
      spotGrad.addColorStop(0, "rgba(56, 189, 248, 0.2)");
      spotGrad.addColorStop(1, "rgba(3, 7, 18, 0)");
      ctx.fillStyle = spotGrad;
      ctx.beginPath();
      ctx.ellipse(0, 100, 110, 35, 0, 0, Math.PI * 2);
      ctx.fill();

      // Drone Chassis Arms (X-Frame)
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(-35, -16);
      ctx.lineTo(35, 16);
      ctx.moveTo(-35, 16);
      ctx.lineTo(35, -16);
      ctx.stroke();

      // Center Fuselage Pod
      ctx.fillStyle = "#0f172a";
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(-16, -10, 32, 20, 6);
      } else {
        ctx.rect(-16, -10, 32, 20);
      }
      ctx.fill();
      ctx.stroke();

      // High-Brightness Central Aerial Beacon
      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.arc(0, 0, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // 4 Spinning Rotors with Dynamic Propeller Blur
      const rotorPositions = [
        [-35, -16],
        [35, -16],
        [-35, 16],
        [35, 16],
      ];

      rotorPositions.forEach(([rx, ry], rIdx) => {
        // Motor bell
        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.arc(rx, ry, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Spinning prop blur disk
        ctx.strokeStyle = "rgba(148, 163, 184, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(rx, ry, 16, 5, (frame * 0.6) + rIdx, 0, Math.PI * 2);
        ctx.stroke();

        // LED Navigation lights (Port red, Starboard green)
        ctx.fillStyle = rx < 0 ? "#ef4444" : "#10b981";
        ctx.beginPath();
        ctx.arc(rx, ry + (ry < 0 ? -4 : 4), 2, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [formation, getFormationTargets, mousePos]);

  // Track mouse coordinates over the flight canvas
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
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
    <section className="relative pt-8 pb-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden border-t border-white/5">
      {/* Background Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[360px] bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            Ignispectra: Sky-Scale Aerial Storytelling
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Synchronizing hundreds of autonomous UAVs with centimeter-level RTK GPS to transform the night sky into dynamic, 3D animated constellations.
          </p>
        </div>

        {/* Formation Switcher Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <StarBorder
            as="button"
            radius={9999}
            stars={1}
            duration={8}
            color={formation === "falcon" ? "#ffffff" : "#38bdf8"}
            trailColor={formation === "falcon" ? "#38bdf8" : "#2563eb"}
            glow={0.5}
            sparkle={true}
            onClick={() => setFormation("falcon")}
            className={`rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              formation === "falcon"
                ? "bg-brand-blue text-white shadow-glow border border-blue-400/40"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10"
            }`}
            style={
              {
                "--star-border-padding": "0.4rem 1rem",
                "--star-border-surface": "transparent",
                "--star-border-track": "transparent",
              } as React.CSSProperties
            }
          >
            <Plane className="w-3.5 h-3.5" />
            <span>Falcon Wing Swarm</span>
          </StarBorder>

          <StarBorder
            as="button"
            radius={9999}
            stars={1}
            duration={8}
            color={formation === "helix" ? "#ffffff" : "#38bdf8"}
            trailColor={formation === "helix" ? "#38bdf8" : "#2563eb"}
            glow={0.5}
            sparkle={true}
            onClick={() => setFormation("helix")}
            className={`rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              formation === "helix"
                ? "bg-brand-blue text-white shadow-glow border border-blue-400/40"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10"
            }`}
            style={
              {
                "--star-border-padding": "0.4rem 1rem",
                "--star-border-surface": "transparent",
                "--star-border-track": "transparent",
              } as React.CSSProperties
            }
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kinetic Helix</span>
          </StarBorder>

          <StarBorder
            as="button"
            radius={9999}
            stars={1}
            duration={8}
            color={formation === "emblem" ? "#ffffff" : "#38bdf8"}
            trailColor={formation === "emblem" ? "#38bdf8" : "#2563eb"}
            glow={0.5}
            sparkle={true}
            onClick={() => setFormation("emblem")}
            className={`rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              formation === "emblem"
                ? "bg-brand-blue text-white shadow-glow border border-blue-400/40"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10"
            }`}
            style={
              {
                "--star-border-padding": "0.4rem 1rem",
                "--star-border-surface": "transparent",
                "--star-border-track": "transparent",
              } as React.CSSProperties
            }
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Orbital Rings & Core</span>
          </StarBorder>

          <StarBorder
            as="button"
            radius={9999}
            stars={1}
            duration={8}
            color={formation === "interactive" ? "#ffffff" : "#38bdf8"}
            trailColor={formation === "interactive" ? "#38bdf8" : "#2563eb"}
            glow={0.5}
            sparkle={true}
            onClick={() => setFormation("interactive")}
            className={`rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              formation === "interactive"
                ? "bg-brand-blue text-white shadow-glow border border-blue-400/40"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10"
            }`}
            style={
              {
                "--star-border-padding": "0.4rem 1rem",
                "--star-border-surface": "transparent",
                "--star-border-track": "transparent",
              } as React.CSSProperties
            }
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Cursor Free Flight</span>
          </StarBorder>
        </div>

        {/* Live Canvas Flight Simulation Stage */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-[440px] sm:h-[480px] rounded-3xl bg-slate-950/90 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl group cursor-crosshair mb-10"
        >
          {/* Top-Left Telemetry HUD */}
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5 pointer-events-none">
            <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 bg-slate-950/80 border border-cyan-500/20 px-3 py-1 rounded-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>SWARM: {telemetry.activeUAVs} DRONES CONNECTED</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-slate-950/60 px-2.5 py-0.5 rounded border border-white/5">
              <span>RTK-GPS: {telemetry.gpsAccuracy}</span>
              <span>•</span>
              <span>ALT: {telemetry.altitude}M</span>
            </div>
          </div>

          {/* Top-Right Regulatory Status Badge */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full backdrop-blur-md pointer-events-none">
            <Shield className="w-3.5 h-3.5" />
            <span>UAE GCAA Airspace Clear</span>
          </div>

          {/* HTML5 Particle Animation Canvas */}
          <canvas ref={canvasRef} className="w-full h-full block" />

          {/* Interactive Hint Pill on Bottom Left */}
          <div className="absolute bottom-4 left-4 z-20 text-[11px] text-slate-400 bg-black/60 px-3 py-1 rounded-full border border-white/10 pointer-events-none flex items-center gap-1.5">
            <span className="text-cyan-400">⚡</span>
            <span>Hover / move cursor to interact with drone swarm flocking</span>
          </div>

          {/* Link to Services on Bottom Right */}
          <div className="absolute bottom-4 right-4 z-20">
            <Link
              href="/services#ignispectra"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900/80 hover:bg-brand-blue border border-white/10 hover:border-blue-400/30 px-3.5 py-1.5 rounded-full transition-all"
            >
              <span>Explore Drone Fleet</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Social Proof Line (matching Fyntic structure) */}
        <p className="text-sm font-normal text-slate-400 text-center mb-8 tracking-wide">
          Join over 1500+ businesses already growing with Cruxeo
        </p>

        {/* 6 Logoipsum Partner Logos in Sleek Monochrome */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-10 items-center justify-center max-w-5xl mx-auto opacity-60 hover:opacity-100 transition-opacity">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="relative h-8 w-full flex items-center justify-center grayscale hover:grayscale-0 hover:brightness-125 transition-all"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

