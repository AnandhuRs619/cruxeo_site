"use client";

import React, { useEffect, useRef } from "react";
import "./AeroShards.css";

export interface AeroShardsProps {
  shardColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  lightMode?: boolean;
  placement?: "full" | "left" | "right" | "center";
  material?: "glass" | "chrome";
  count?: number;
  shardSize?: number;
  spread?: number;
  twist?: number;
  billow?: number;
  speed?: number;
  scale?: number;
  depthOfField?: number;
  glow?: number;
  grain?: number;
  vignette?: number;
  intro?: boolean;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  markers?: "plus" | "dots";
  pulseOnClick?: boolean;
  holdToGather?: boolean;
  parallax?: number;
  paused?: boolean;
  dpr?: number;
  className?: string;
  style?: React.CSSProperties;
  onError?: (error: Error) => void;
  flow?: "stream" | "vortex" | "ribbon";
  size?: number;
}

const TAU = Math.PI * 2;

interface Shard {
  track: number;
  progress: number;
  lane: number;
  layer: number;
  depth: number;
  size: number;
  aspect: number;
  yaw: number;
  yawSpeed: number;
  pitch: number;
  pitchSpeed: number;
  roll: number;
  rollSpeed: number;
  tint: number;
  offsetX: number;
  offsetY: number;
  velX: number;
  velY: number;
  flash: number;
  vertices: [number, number][];
}

interface PulseRing {
  x: number;
  y: number;
  age: number;
  maxAge: number;
}

export function AeroShardsCanvas({
  shardColor = "#2563eb",
  accentColor = "#38bdf8",
  backgroundColor = "transparent",
  count = 1300,
  shardSize = 1,
  spread = 1,
  billow = 1,
  speed = 0.4,
  scale = 1,
  depthOfField = 0.75,
  vignette = 0.3,
  mouseInteraction = true,
  mouseStrength = 0.6,
  markers = "plus",
  pulseOnClick = true,
  holdToGather = true,
  parallax = 0.5,
  paused = false,
  dpr = 2,
  className = "",
  style,
}: AeroShardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let disposed = false;
    let raf = 0;
    let width = 0;
    let height = 0;

    const pointer = {
      x: 0.5,
      y: 0.5,
      screenX: 0,
      screenY: 0,
      inside: false,
      isDown: false,
      downTime: 0,
    };
    const rings: PulseRing[] = [];
    let gatherAmount = 0;

    // Resize handler
    const updateSize = () => {
      if (disposed || !container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, dpr || 2);
      const w = Math.max(rect.width || container.clientWidth || window.innerWidth || 1200, 320);
      const h = Math.max(rect.height || container.clientHeight || window.innerHeight || 800, 320);

      if (width !== w || height !== h) {
        width = w;
        height = h;
        canvas.width = Math.round(w * pixelRatio);
        canvas.height = Math.round(h * pixelRatio);
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.scale(pixelRatio, pixelRatio);
      }
    };

    updateSize();

    // Create Shards across full viewport with multi-track flow
    const actualCount = Math.min(Math.max(count, 300), 1500);
    const shards: Shard[] = [];

    for (let i = 0; i < actualCount; i++) {
      const track = i % 5;
      const progress = Math.random();
      const lane = (Math.random() - 0.5) * 2;
      const layer = Math.random();
      // Depth from 0.45 (distant) to 1.35 (close foreground)
      const depth = 0.45 + Math.pow(Math.random(), 1.4) * 0.9;
      // Size: 10px to 36px based on depth
      const baseS = (10 + depth * 20) * (shardSize || 1);
      const aspect = 0.4 + Math.random() * 0.45;

      // Faceted polygon vertices (diamond / folded glass kite)
      const sides = Math.random() > 0.45 ? 4 : 5;
      const vertices: [number, number][] = [];
      const rot = Math.random() * TAU;
      for (let s = 0; s < sides; s++) {
        const ang = rot + (s * TAU) / sides;
        vertices.push([Math.cos(ang) * baseS, Math.sin(ang) * baseS * aspect]);
      }

      // Smooth, gentle rotational speeds for calm, fluid motion
      shards.push({
        track,
        progress,
        lane,
        layer,
        depth,
        size: baseS,
        aspect,
        yaw: Math.random() * TAU,
        yawSpeed: (Math.random() - 0.5) * 0.28,
        pitch: Math.random() * TAU,
        pitchSpeed: (Math.random() - 0.5) * 0.22,
        roll: Math.random() * TAU,
        rollSpeed: (Math.random() - 0.5) * 0.18,
        tint: Math.random(),
        offsetX: 0,
        offsetY: 0,
        velX: 0,
        velY: 0,
        flash: 0,
        vertices,
      });
    }

    // Ribbon flow curve returning screen position across full viewport
    const sampleTrack = (track: number, t: number, w: number, h: number) => {
      let x = 0;
      let y = 0;
      const s = ((t % 1) + 1) % 1;

      switch (track) {
        case 0:
          // Diagonal sweep from top-left to bottom-right
          x = (s * 1.3 - 0.15) * w;
          y = (s * 1.2 - 0.1) * h + Math.sin(s * TAU * 1.2) * 55 * (billow || 1);
          break;
        case 1:
          // Upper crest flowing left-to-right
          x = (s * 1.25 - 0.1) * w;
          y = (0.22 + 0.35 * Math.sin(s * Math.PI)) * h + Math.cos(s * TAU * 0.8) * 45;
          break;
        case 2:
          // Central vortex ribbon across the middle
          x = (s * 1.3 - 0.15) * w;
          y = (0.5 + 0.3 * Math.sin(s * TAU * 1.1 + 1.2)) * h;
          break;
        case 3:
          // Lower ascending ribbon
          x = (1.15 - s * 1.3) * w;
          y = (0.75 - 0.45 * Math.sin(s * Math.PI * 1.2)) * h;
          break;
        default:
          // Ambient dispersed circulating flow
          x = (((s * 1.4 - 0.2) * w + Math.sin(s * TAU * 2) * 60) % (w * 1.2)) - w * 0.1;
          y = (0.15 + s * 0.7) * h + Math.sin(s * TAU * 1.6) * 50;
          break;
      }

      return { x, y };
    };

    let clock = 0;
    let lastTime = performance.now();

    // 60 FPS Smooth Animation Loop
    const loop = (time: number) => {
      if (disposed) return;
      raf = requestAnimationFrame(loop);

      const dt = Math.min((time - lastTime) / 1000, 0.04);
      lastTime = time;

      if (!paused) {
        clock += dt * (speed || 0.4);
      }

      updateSize();
      if (width <= 0 || height <= 0) return;

      ctx.clearRect(0, 0, width, height);

      // Background color if specified
      if (backgroundColor && backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }

      // 1. Plus Markers Grid in Theme Cyan/Blue
      if (markers === "plus") {
        ctx.save();
        ctx.lineWidth = 1;
        const gridStep = Math.max(width / 18, 64);
        const countX = Math.ceil(width / gridStep) + 1;
        const countY = Math.ceil(height / gridStep) + 1;

        for (let ix = -1; ix <= countX; ix++) {
          for (let iy = -1; iy <= countY; iy++) {
            const mx = ix * gridStep + ((iy % 2) * gridStep * 0.5) - (clock * 6) % gridStep;
            const my = iy * gridStep;
            const dist = Math.hypot(mx - pointer.screenX, my - pointer.screenY);
            const isNear = pointer.inside && dist < 170;
            const baseAlpha = isNear ? 0.45 : 0.09;

            ctx.strokeStyle = isNear ? accentColor : "rgba(56, 189, 248, 0.25)";
            ctx.globalAlpha = baseAlpha;
            ctx.beginPath();
            ctx.moveTo(mx - 4, my);
            ctx.lineTo(mx + 4, my);
            ctx.moveTo(mx, my - 4);
            ctx.lineTo(mx, my + 4);
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      // 2. Pulse Waves from Clicks in Theme Blue/Cyan
      for (let i = rings.length - 1; i >= 0; i--) {
        const ring = rings[i];
        ring.age += dt;
        const p = ring.age / ring.maxAge;
        if (p >= 1) {
          rings.splice(i, 1);
          continue;
        }

        const radius = p * Math.max(width, height) * 0.85;
        const alpha = (1 - p) * 0.45;

        ctx.save();
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, radius, 0, TAU);
        ctx.strokeStyle = accentColor;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 2 + (1 - p) * 4;
        ctx.stroke();
        ctx.restore();
      }

      // 3. Smooth Hold to Gather Vortex
      if (holdToGather && pointer.inside && pointer.isDown && time - pointer.downTime > 180) {
        gatherAmount = Math.min(1, gatherAmount + dt * 2.2);
      } else {
        gatherAmount = Math.max(0, gatherAmount - dt * 2.8);
      }

      // Gentle Mouse Parallax Lean
      const leanX = pointer.inside ? (pointer.x - 0.5) * 30 * (parallax || 0.5) : 0;
      const leanY = pointer.inside ? (pointer.y - 0.5) * 20 * (parallax || 0.5) : 0;

      // 4. Sort Shards by Depth (Back to Front)
      const sortedShards = [...shards].sort((a, b) => a.depth - b.depth);

      // 5. Draw All Glass Shards in Theme Electric Blue & Cyan
      sortedShards.forEach((shard) => {
        // Track trajectory position with silky progression
        const t = (shard.progress + clock * 0.024 * (shard.depth * 0.5 + 0.5)) % 1;
        const basePos = sampleTrack(shard.track, t, width, height);

        // Lateral spread and lane billow
        const laneDist = shard.lane * (width * 0.18 * (spread || 1));
        let posX = basePos.x + laneDist + leanX * shard.depth;
        let posY = basePos.y + leanY * shard.depth;

        // Smooth Fluid Mouse Repulsion Force
        if (mouseInteraction && pointer.inside && !pointer.isDown) {
          const dx = posX - pointer.screenX;
          const dy = posY - pointer.screenY;
          const dist = Math.hypot(dx, dy);
          const maxDist = 200 * (mouseStrength || 0.6);

          if (dist < maxDist && dist > 1) {
            const force = (1 - dist / maxDist) * 50;
            shard.velX += (dx / dist) * force * dt * 8;
            shard.velY += (dy / dist) * force * dt * 8;
            shard.rollSpeed += (dx / dist) * 1.5;
          }
        }

        // Hold to Gather Vortex
        if (gatherAmount > 0) {
          const gdx = pointer.screenX - posX;
          const gdy = pointer.screenY - posY;
          const gDist = Math.hypot(gdx, gdy);
          if (gDist < 550) {
            const pull = gatherAmount * (1 - gDist / 550) * 130 * dt;
            shard.velX += gdx * 0.06 * pull;
            shard.velY += gdy * 0.06 * pull;
            shard.yaw += 0.12 * gatherAmount;
          }
        }

        // Click Ring Pulse Hit Reaction
        rings.forEach((ring) => {
          const currentRadius = (ring.age / ring.maxAge) * Math.max(width, height) * 0.85;
          const distToRing = Math.hypot(posX - ring.x, posY - ring.y);
          if (Math.abs(distToRing - currentRadius) < 45) {
            shard.flash = Math.max(shard.flash, 0.95);
            shard.rollSpeed += (Math.random() - 0.5) * 6;
          }
        });

        // Soft, high-inertia damping for organic fluid smoothness
        shard.offsetX += shard.velX;
        shard.offsetY += shard.velY;
        shard.velX *= 0.94;
        shard.velY *= 0.94;
        shard.offsetX *= 0.95;
        shard.offsetY *= 0.95;
        shard.flash = Math.max(0, shard.flash - dt * 2.0);

        posX += shard.offsetX;
        posY += shard.offsetY;

        // Skip shards outside visible viewport bounds
        if (posX < -80 || posX > width + 80 || posY < -80 || posY > height + 80) {
          return;
        }

        // Smooth angular rotations
        shard.yaw += shard.yawSpeed * dt;
        shard.pitch += shard.pitchSpeed * dt;
        shard.roll += shard.rollSpeed * dt;

        // 3D perspective foreshortening
        const cosYaw = Math.cos(shard.yaw);
        const cosPitch = Math.cos(shard.pitch);
        const scaleX = shard.depth * (scale || 1) * Math.max(0.2, Math.abs(cosYaw));
        const scaleY = shard.depth * (scale || 1) * Math.max(0.2, Math.abs(cosPitch));

        ctx.save();
        ctx.translate(posX, posY);
        ctx.rotate(shard.roll);
        ctx.scale(scaleX, scaleY);

        // Build polygon path
        ctx.beginPath();
        shard.vertices.forEach(([vx, vy], idx) => {
          if (idx === 0) ctx.moveTo(vx, vy);
          else ctx.lineTo(vx, vy);
        });
        ctx.closePath();

        // Shading: Translucent Prismatic Glass Gradient in Theme Blue / Cyan
        const isAccent = shard.tint > 0.4;
        const colorA = isAccent ? accentColor : shardColor;
        const colorB = isAccent ? "#06b6d4" : "#1d4ed8";
        const alpha = (0.42 + shard.depth * 0.42) * (1 - (depthOfField || 0.75) * 0.18);

        const grad = ctx.createLinearGradient(
          -shard.size,
          -shard.size * shard.aspect,
          shard.size,
          shard.size * shard.aspect
        );

        if (shard.flash > 0.05) {
          grad.addColorStop(0, "rgba(255, 255, 255, 0.98)");
          grad.addColorStop(0.5, "#38bdf8");
          grad.addColorStop(1, "rgba(224, 242, 254, 0.9)");
        } else {
          grad.addColorStop(0, `${colorA}cc`);
          grad.addColorStop(0.5, `${colorA}55`);
          grad.addColorStop(1, `${colorB}bb`);
        }

        ctx.fillStyle = grad;
        ctx.globalAlpha = Math.min(1, alpha + shard.flash * 0.45);
        ctx.fill();

        // Glowing Specular Glass Rim Outline
        ctx.strokeStyle = shard.flash > 0.05 ? "#ffffff" : "rgba(255, 255, 255, 0.82)";
        ctx.lineWidth = shard.flash > 0.05 ? 1.8 : 0.9;
        ctx.stroke();

        // Sharp Refractive Internal Facet Crease
        if (shard.vertices.length >= 3) {
          ctx.beginPath();
          ctx.moveTo(shard.vertices[0][0] * 0.25, shard.vertices[0][1] * 0.25);
          ctx.lineTo(shard.vertices[2][0] * 0.8, shard.vertices[2][1] * 0.8);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }

        ctx.restore();
      });

      // 6. Subtle Vignette around perimeter
      if (vignette && vignette > 0) {
        ctx.save();
        const vigGrad = ctx.createRadialGradient(
          width * 0.5,
          height * 0.5,
          Math.min(width, height) * 0.35,
          width * 0.5,
          height * 0.5,
          Math.max(width, height) * 0.75
        );
        vigGrad.addColorStop(0, "transparent");
        vigGrad.addColorStop(1, `rgba(3, 7, 18, ${vignette * 0.6})`);
        ctx.fillStyle = vigGrad;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }
    };

    // Pointer Event Listeners
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = e.clientX;
      const cy = e.clientY;
      const inside = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;

      pointer.inside = inside;
      if (inside) {
        pointer.screenX = cx - rect.left;
        pointer.screenY = cy - rect.top;
        pointer.x = pointer.screenX / Math.max(rect.width, 1);
        pointer.y = pointer.screenY / Math.max(rect.height, 1);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = e.clientX;
      const cy = e.clientY;
      if (cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom) {
        pointer.isDown = true;
        pointer.downTime = performance.now();
        pointer.screenX = cx - rect.left;
        pointer.screenY = cy - rect.top;

        if (pulseOnClick) {
          rings.push({
            x: pointer.screenX,
            y: pointer.screenY,
            age: 0,
            maxAge: 1.6,
          });
        }
      }
    };

    const onPointerUp = () => {
      pointer.isDown = false;
    };

    const onPointerLeave = () => {
      pointer.inside = false;
      pointer.isDown = false;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("resize", updateSize);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    const observer = new ResizeObserver(() => updateSize());
    observer.observe(container);

    raf = requestAnimationFrame(loop);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", updateSize);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [
    shardColor,
    accentColor,
    backgroundColor,
    count,
    shardSize,
    spread,
    billow,
    speed,
    scale,
    depthOfField,
    vignette,
    markers,
    pulseOnClick,
    holdToGather,
    mouseInteraction,
    mouseStrength,
    parallax,
    paused,
    dpr,
  ]);

  return (
    <div
      ref={containerRef}
      className={["aero-shards", className].filter(Boolean).join(" ")}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "auto",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        className="aero-shards-canvas"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "auto",
        }}
      />
    </div>
  );
}

export default AeroShardsCanvas;
