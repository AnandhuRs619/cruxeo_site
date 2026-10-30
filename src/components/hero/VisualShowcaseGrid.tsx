"use client";

import React from "react";
import Image from "next/image";
import { Camera, Eye, Sparkles } from "lucide-react";

interface VisualAsset {
  src: string;
  alt: string;
  category: string;
  caption: string;
  span?: string;
}

const VISUAL_ASSETS: VisualAsset[] = [
  {
    src: "/assets/images/dubai-cinematic-night.webp",
    alt: "Dubai Laser Skyline Production",
    category: "SKYLINE SPECTACLE",
    caption: "High-power laser matrix over Dubai skyline",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "/assets/images/cruxeo/service-11.jpg",
    alt: "Drone Fleet Staging",
    category: "IGNISPECTRA FLEET",
    caption: "Centimeter RTK drone swarm launch grid",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/assets/images/cruxeo/service-demo.jpg",
    alt: "Interactive Live Pavilion",
    category: "NEXPLAY ARENA",
    caption: "Multi-touch visitor interactive station",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/assets/images/cruxeo/service-2.jpg",
    alt: "Broadcast Curved LED Rig",
    category: "LUMEN LAB",
    caption: "7680Hz curved LED wall calibration",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/assets/images/cruxeo/service-3.jpg",
    alt: "Kinematic Motion Rig",
    category: "6-AXIS ROBOTICS",
    caption: "Glambot high-speed camera arm staging",
    span: "col-span-1 row-span-1",
  },
];

export const VisualShowcaseGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10" id="visual-staging">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#38bdf8] bg-blue-500/10 border border-blue-500/25 mb-3">
            <Camera className="w-3.5 h-3.5 text-[#38bdf8]" />
            On-Site Hardware Staging
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Behind the Spectacle
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400">
          Field Captures · Dubai Silicon Oasis & DWTC
        </span>
      </div>

      {/* Bento Image Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
        {VISUAL_ASSETS.map((item, idx) => (
          <div
            key={idx}
            className={`group relative rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-xl bg-slate-950 ${
              item.span || ""
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Top Category Badge */}
            <div className="absolute top-3.5 left-3.5">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-black/70 backdrop-blur-md border border-white/15 text-blue-300">
                {item.category}
              </span>
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5">
              <p className="text-xs font-medium text-white/90 drop-shadow line-clamp-1">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
