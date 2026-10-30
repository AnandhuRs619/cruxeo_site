"use client";

import React, { useEffect, useRef } from "react";

interface CityMarker {
  name: string;
  lat: number;
  lon: number;
  isHQ?: boolean;
}

interface Arc {
  from: CityMarker;
  to: CityMarker;
  speed: number;
  offset: number;
  height: number;
}

export interface GlobeProps {
  className?: string;
}

// Lavender-Pink Arc color tokens matching the reference visual
const ARC_COLOR = "rgba(206, 142, 196, 0.88)"; // #ce8ec4 soft lavender-pink
const ARC_GLOW_COLOR = "rgba(214, 150, 210, 0.45)";
const ARC_PULSE_COLOR = "#ffffff";
const PIN_COLOR = "#ce8ec4";
const PIN_PULSE_RING = "rgba(214, 150, 210, 0.85)";

const DUBAI_HQ: CityMarker = {
  name: "Dubai",
  lat: 25.2048,
  lon: 55.2708,
  isHQ: true,
};

// Global hub markers matching the visual framing (Africa, Europe, Middle East, Americas, Asia)
const CITIES: CityMarker[] = [
  { name: "London", lat: 51.5074, lon: -0.1278 },
  { name: "Johannesburg", lat: -26.2041, lon: 28.0473 },
  { name: "New York", lat: 40.7128, lon: -74.006 },
  { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "Frankfurt", lat: 50.1109, lon: 8.6821 },
  { name: "Nairobi", lat: -1.2921, lon: 36.8219 },
];

const ARCS: Arc[] = [
  { from: DUBAI_HQ, to: CITIES[0], speed: 0.7, offset: 0.1, height: 0.38 },
  { from: DUBAI_HQ, to: CITIES[1], speed: 0.6, offset: 0.45, height: 0.42 },
  { from: DUBAI_HQ, to: CITIES[2], speed: 0.5, offset: 0.75, height: 0.48 },
  { from: CITIES[0], to: CITIES[1], speed: 0.65, offset: 0.3, height: 0.4 },
  { from: DUBAI_HQ, to: CITIES[3], speed: 0.75, offset: 0.2, height: 0.36 },
  { from: DUBAI_HQ, to: CITIES[4], speed: 0.8, offset: 0.6, height: 0.32 },
];

// Accurate continent detection for realistic dotted landmasses
function isLandmass(lat: number, lon: number): boolean {
  // Africa
  if (lat >= -35 && lat <= 37 && lon >= -18 && lon <= 52) {
    if (lat > 20 && lon < -12) return false;
    if (lat < -20 && lon < 14) return false;
    return true;
  }
  // Middle East & GCC
  if (lat >= 12 && lat <= 38 && lon >= 34 && lon <= 62) return true;
  // Europe
  if (lat >= 36 && lat <= 70 && lon >= -10 && lon <= 42) return true;
  // Asia
  if (lat >= 8 && lat <= 72 && lon >= 42 && lon <= 145) {
    if (lat < 22 && lon > 42 && lon < 65) return false;
    if (lat < 10 && lon > 70 && lon < 95) return false;
    return true;
  }
  // North America
  if (lat >= 15 && lat <= 72 && lon >= -168 && lon <= -52) {
    if (lat < 28 && lon < -105) return false;
    return true;
  }
  // South America
  if (lat >= -56 && lat <= 12 && lon >= -82 && lon <= -34) return true;
  // Australia
  if (lat >= -44 && lat <= -10 && lon >= 112 && lon <= 155) return true;
  // Madagascar
  if (lat >= -26 && lat <= -12 && lon >= 43 && lon <= 51) return true;

  return false;
}

export const Globe: React.FC<GlobeProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let radius = 190;

    // Initial orientation: Centered near Africa & Middle East
    let rotY = 0.25;
    let rotX = 0.22;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let velY = 0.002;
    let velX = 0;

    // Generate high-density crisp dotted grid
    const DOT_ROWS = 84;
    const points: {
      lat: number;
      lon: number;
      x: number;
      y: number;
      z: number;
    }[] = [];

    for (let r = 0; r < DOT_ROWS; r++) {
      const lat = -86 + (172 / (DOT_ROWS - 1)) * r;
      const phi = (lat * Math.PI) / 180;
      const rowRadius = Math.cos(phi);
      const cols = Math.max(8, Math.floor(170 * rowRadius));

      for (let c = 0; c < cols; c++) {
        const lon = -180 + (360 / cols) * c;
        if (!isLandmass(lat, lon)) continue; // Clean solid dark globe base, dots only for land

        const theta = (lon * Math.PI) / 180;
        const x = Math.cos(phi) * Math.sin(theta);
        const y = -Math.sin(phi);
        const z = Math.cos(phi) * Math.cos(theta);

        points.push({ lat, lon, x, y, z });
      }
    }

    const latLonToVec3 = (lat: number, lon: number) => {
      const phi = (lat * Math.PI) / 180;
      const theta = (lon * Math.PI) / 180;
      return {
        x: Math.cos(phi) * Math.sin(theta),
        y: -Math.sin(phi),
        z: Math.cos(phi) * Math.cos(theta),
      };
    };

    const rotate3D = (
      p: { x: number; y: number; z: number },
      ry: number,
      rx: number
    ) => {
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = p.x * cosY - p.z * sinY;
      const z1 = p.x * sinY + p.z * cosY;

      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      return { x: x1, y: y2, z: z2 };
    };

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = Math.max(rect.height, 460);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      radius = Math.min(width, height) * 0.43;
    };

    resize();
    window.addEventListener("resize", resize);

    // Mouse drag interaction
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      velY = dx * 0.005;
      velX = dy * 0.005;
      rotY += velY;
      rotX = Math.max(-1.1, Math.min(1.1, rotX + velX));
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };
    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch interaction
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - lastMouseX;
      const dy = e.touches[0].clientY - lastMouseY;
      velY = dx * 0.005;
      velX = dy * 0.005;
      rotY += velY;
      rotX = Math.max(-1.1, Math.min(1.1, rotX + velX));
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    let time = 0;

    const render = () => {
      time += 0.016;

      if (!isDragging) {
        velY = velY * 0.96 + 0.0015 * 0.04;
        velX *= 0.96;
        rotY += velY;
        rotX += velX;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // 1. Subtle Outer Atmosphere Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.35);
      glowGrad.addColorStop(0, "rgba(206, 142, 196, 0.10)");
      glowGrad.addColorStop(0.5, "rgba(206, 142, 196, 0.02)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Solid Dark Matte Globe Sphere Body
      const sphereGrad = ctx.createRadialGradient(
        cx + radius * 0.35,
        cy - radius * 0.35,
        radius * 0.05,
        cx,
        cy,
        radius
      );
      sphereGrad.addColorStop(0, "#1c1c24");
      sphereGrad.addColorStop(0.45, "#121217");
      sphereGrad.addColorStop(0.85, "#0a0a0d");
      sphereGrad.addColorStop(1, "#040406");
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Thin globe rim edge
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // 3. Render Crisp White / Silver Dotted Landmasses
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const rPos = rotate3D(p, rotY, rotX);

        if (rPos.z < 0) continue;

        const screenX = cx + rPos.x * radius;
        const screenY = cy + rPos.y * radius;
        const depth = rPos.z;

        const alpha = Math.max(0.12, Math.pow(depth, 0.75));
        const dotSize = 0.9 + depth * 0.9;

        ctx.beginPath();
        ctx.arc(screenX, screenY, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 244, 250, ${alpha.toFixed(2)})`;
        ctx.fill();
      }

      // 4. Render Brand Blue Animated Arcs
      ARCS.forEach((arc) => {
        const vFrom = latLonToVec3(arc.from.lat, arc.from.lon);
        const vTo = latLonToVec3(arc.to.lat, arc.to.lon);

        const SEGMENTS = 48;
        const curvePoints: { x: number; y: number; z: number }[] = [];

        for (let s = 0; s <= SEGMENTS; s++) {
          const t = s / SEGMENTS;
          const ix = vFrom.x + (vTo.x - vFrom.x) * t;
          const iy = vFrom.y + (vTo.y - vFrom.y) * t;
          const iz = vFrom.z + (vTo.z - vFrom.z) * t;
          const len = Math.sqrt(ix * ix + iy * iy + iz * iz) || 1;

          const heightApex = Math.sin(t * Math.PI) * arc.height;
          const unitX = (ix / len) * (1 + heightApex);
          const unitY = (iy / len) * (1 + heightApex);
          const unitZ = (iz / len) * (1 + heightApex);

          const rotP = rotate3D({ x: unitX, y: unitY, z: unitZ }, rotY, rotX);
          curvePoints.push(rotP);
        }

        // Draw sweeping arc path with brand blue glow
        ctx.beginPath();
        let started = false;
        for (let k = 0; k < curvePoints.length; k++) {
          const pt = curvePoints[k];
          if (pt.z < -0.35) continue;
          const sx = cx + pt.x * radius;
          const sy = cy + pt.y * radius;
          if (!started) {
            ctx.moveTo(sx, sy);
            started = true;
          } else {
            ctx.lineTo(sx, sy);
          }
        }
        ctx.strokeStyle = ARC_COLOR;
        ctx.lineWidth = 1.2;
        ctx.shadowColor = ARC_GLOW_COLOR;
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Animated traveling light particle along arc
        const particleT = (time * arc.speed + arc.offset) % 1;
        const segIdx = Math.floor(particleT * (SEGMENTS - 1));
        const subT = (particleT * (SEGMENTS - 1)) - segIdx;
        const p1 = curvePoints[segIdx];
        const p2 = curvePoints[segIdx + 1];

        if (p1 && p2 && (p1.z > -0.2 || p2.z > -0.2)) {
          const partX = cx + (p1.x + (p2.x - p1.x) * subT) * radius;
          const partY = cy + (p1.y + (p2.y - p1.y) * subT) * radius;

          // Glowing white-pink pulse
          ctx.beginPath();
          ctx.arc(partX, partY, 2.4, 0, Math.PI * 2);
          ctx.fillStyle = ARC_PULSE_COLOR;
          ctx.shadowColor = "#e9bfe2";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 5. Render City Pins
      const allMarkers = [DUBAI_HQ, ...CITIES];
      allMarkers.forEach((city) => {
        const v = latLonToVec3(city.lat, city.lon);
        const rPos = rotate3D(v, rotY, rotX);

        if (rPos.z > -0.05) {
          const sx = cx + rPos.x * radius;
          const sy = cy + rPos.y * radius;

          // Solid pin dot
          ctx.beginPath();
          ctx.arc(sx, sy, 3, 0, Math.PI * 2);
          ctx.fillStyle = PIN_COLOR;
          ctx.fill();

          // Pulse ring
          const pulse = (time * 1.4 + (city.isHQ ? 0 : 0.4)) % 1;
          ctx.beginPath();
          ctx.arc(sx, sy, 3.5 + pulse * 10, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(214, 150, 210, ${(1 - pulse) * 0.85})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[460px] sm:h-[540px] flex items-center justify-center select-none overflow-hidden bg-transparent ${className}`}
    >
      <canvas ref={canvasRef} className="cursor-grab active:cursor-grabbing" />

      {/* Minimalist Interactive Pill */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] text-slate-300 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#ce8ec4] animate-pulse" />
        <span className="font-mono font-medium">Global Network · Drag to Rotate</span>
      </div>

      {/* Bottom Global Hub Labels */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-center gap-1.5 pointer-events-none">
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#ce8ec4]/20 text-[#e9bfe2] border border-[#ce8ec4]/50 font-bold">
          Dubai (HQ)
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
          London
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
          New York
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
          Johannesburg
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
          Tokyo
        </span>
      </div>
    </div>
  );
};

export default Globe;
