"use client";

import React, { useState } from "react";
import { Check, Pause, Play } from "lucide-react";
import { StarBorder } from "@/components/ui/StarBorder";

export const TickerPills: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const row1Items = [
    "AI-Driven Innovation",
    "Custom AI Solutions",
    "Scalable Intelligence",
    "Automation First Approach",
    "Ignispectra Drone Shows",
    "Nexplay AI Photobooths",
  ];

  const row2Items = [
    "Data-Powered Decisions",
    "Enterprise-Ready AI",
    "Future-Focused Technology",
    "Synapse Gesture Kiosks",
    "3D Hologram Pedestals",
    "High-Speed Robotic Rigs",
  ];

  // Triplicate items for seamless continuous looping
  const displayRow1 = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const displayRow2 = [...row2Items, ...row2Items, ...row2Items, ...row2Items];

  return (
    <div className="relative w-full pt-6 pb-2 overflow-hidden flex flex-col gap-3">
      {/* Side Vignettes for smooth edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

      {/* Row 1 Marquee */}
      <div className="flex items-center overflow-hidden">
        <div
          className={`flex items-center gap-3 shrink-0 ${isPaused ? "" : "animate-marquee"}`}
          style={{
            animationDuration: "35s",
            animationPlayState: isPaused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {displayRow1.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md shadow-sm text-xs font-medium text-slate-300 hover:text-white hover:border-white/20 transition-all whitespace-nowrap cursor-default"
            >
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" strokeWidth={2.5} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 Marquee (Staggered) */}
      <div className="flex items-center overflow-hidden pl-8">
        <div
          className={`flex items-center gap-3 shrink-0 ${isPaused ? "" : "animate-marquee"}`}
          style={{
            animationDuration: "40s",
            animationPlayState: isPaused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {displayRow2.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md shadow-sm text-xs font-medium text-slate-300 hover:text-white hover:border-white/20 transition-all whitespace-nowrap cursor-default"
            >
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" strokeWidth={2.5} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Right Floating Pause/Play Toggle Button (matches reference) */}
      <div className="absolute right-4 bottom-2 z-20">
        <StarBorder
          as="button"
          radius={9999}
          stars={1}
          duration={7}
          color="#ce8ec4"
          trailColor="#ce8ec4"
          glow={0.5}
          sparkle={true}
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? "Play ticker animation" : "Pause ticker animation"}
          className="w-10 h-10 rounded-full bg-slate-900/80 border border-white/15 text-slate-300 hover:text-white hover:border-white/30 backdrop-blur-md flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-1 focus:ring-brand-blue"
          style={
            {
              "--star-border-padding": "0",
              "--star-border-surface": "transparent",
              "--star-border-track": "transparent",
            } as React.CSSProperties
          }
        >
          {isPaused ? (
            <Play className="w-4 h-4 ml-0.5 fill-current" />
          ) : (
            <Pause className="w-4 h-4 fill-current" />
          )}
        </StarBorder>
      </div>
    </div>
  );
};
