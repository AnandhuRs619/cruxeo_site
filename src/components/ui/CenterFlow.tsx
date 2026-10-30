"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "./CenterFlow.css";

export interface CenterFlowNode {
  id: string;
  title: string;
  suite: string;
  tagline: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  metrics?: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  href?: string;
}

export interface CenterFlowProps {
  centerContent?: React.ReactNode;
  centerTitle?: string;
  centerSubtitle?: string;
  nodes?: CenterFlowNode[];
  className?: string;
  pulseDuration?: number;
  onNodeClick?: (nodeId: string) => void;
}

// Iconic Cruxeo Vector "X" Logo Mark with multi-chromatic neon gradient
export const CruxeoXMark: React.FC<{ className?: string; size?: number }> = ({
  className = "w-10 h-10",
  size = 44,
}) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Cruxeo X Logo Mark"
  >
    <defs>
      <linearGradient id="crux_flow_grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f5d4" />
        <stop offset="45%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ffb12b" />
      </linearGradient>
      <linearGradient id="crux_flow_grad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38b58b" />
        <stop offset="50%" stopColor="#00f5d4" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <filter id="crux_flow_glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#crux_flow_glow)">
      {/* Primary Bar (NW to SE) */}
      <path
        d="M 15 15 L 24 15 L 49 49 L 40 49 Z"
        fill="url(#crux_flow_grad1)"
      />
      {/* Secondary Bar (NE to SW) */}
      <path
        d="M 49 15 L 40 15 L 15 49 L 24 49 Z"
        fill="url(#crux_flow_grad2)"
      />
      {/* Central Nexus Prism */}
      <polygon
        points="32,25 39,32 32,39 25,32"
        fill="#ffffff"
        opacity="0.95"
      />
      <circle cx="32" cy="32" r="3" fill="#00f5d4" />
    </g>
  </svg>
);

export const CenterFlow: React.FC<CenterFlowProps> = ({
  centerContent,
  centerTitle = "CRUXEO CORE",
  centerSubtitle = "One Brief · Four Disciplines",
  nodes = [],
  className = "",
  pulseDuration = 2.8,
  onNodeClick,
}) => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Responsive SVG canvas coordinates for 4-corner constellation
  // Center is (500, 250) in a 1000x500 coordinate space
  const paths: Record<string, string> = {
    "top-left": "M 500 250 C 340 250, 280 115, 175 115",
    "top-right": "M 500 250 C 660 250, 720 115, 825 115",
    "bottom-left": "M 500 250 C 340 250, 280 385, 175 385",
    "bottom-right": "M 500 250 C 660 250, 720 385, 825 385",
  };

  return (
    <div
      className={`relative w-full rounded-3xl bg-slate-950/60 border border-white/10 p-6 sm:p-10 my-8 overflow-hidden backdrop-blur-xl ${className}`}
    >
      {/* Background Radial Glow Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(168,85,247,0.08),rgba(0,245,212,0.06),transparent_80%)] pointer-events-none" />

      {/* Grid Pattern Mesh */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Desktop / Tablet Constellation View (hidden on very small screens) */}
      <div className="hidden md:block relative w-full h-[520px] max-w-6xl mx-auto">
        {/* SVG Pulse Flow Canvas Layer */}
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="beam_glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {nodes.map((node) => (
              <linearGradient
                key={`grad-${node.id}`}
                id={`flow-grad-${node.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="30%" stopColor={node.color} stopOpacity="1" />
                <stop offset="100%" stopColor={node.color} stopOpacity="0.2" />
              </linearGradient>
            ))}
          </defs>

          {nodes.map((node) => {
            const d = paths[node.position] || paths["top-left"];
            const isHovered = hoveredNodeId === node.id;
            return (
              <g key={`flow-${node.id}`}>
                {/* 1. Underlying trace path */}
                <path
                  d={d}
                  fill="none"
                  stroke={node.color}
                  strokeWidth={isHovered ? "2.5" : "1.5"}
                  strokeOpacity={isHovered ? "0.45" : "0.18"}
                  strokeDasharray="6 6"
                  className="transition-all duration-300"
                />

                {/* 2. Flowing high-intensity pulse beam */}
                <path
                  d={d}
                  fill="none"
                  stroke={`url(#flow-grad-${node.id})`}
                  strokeWidth={isHovered ? "3.5" : "2.5"}
                  filter="url(#beam_glow)"
                  className="center-flow-beam-pulse"
                  style={{
                    animationDuration: `${isHovered ? pulseDuration * 0.7 : pulseDuration}s`,
                  }}
                />

                {/* 3. Traveling energy particle with SVG animateMotion */}
                <circle
                  r={isHovered ? "5" : "3.5"}
                  fill={node.color}
                  filter="url(#beam_glow)"
                >
                  <animateMotion
                    path={d}
                    dur={`${isHovered ? pulseDuration * 0.7 : pulseDuration}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Central Hub with Cruxeo "X" Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          {/* Pulsing Ripple Wave */}
          <div className="absolute -inset-6 rounded-full border border-white/10 center-flow-hub-pulse pointer-events-none" />
          <div className="absolute -inset-12 rounded-full border border-white/5 center-flow-hub-pulse [animation-delay:1.5s] pointer-events-none" />

          {/* Central Hub Disc with Animated Conic Gradient Border */}
          <div className="relative p-[2px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,245,212,0.2)]">
            {/* Rotating Conic Gradient Rim */}
            <div
              className="absolute inset-[-100%] center-flow-conic-border opacity-70"
              style={{
                background:
                  "conic-gradient(from 0deg, #a855f7, #00f5d4, #ffb12b, #38b58b, #a855f7)",
              }}
            />

            {/* Hub Core Disc */}
            <div className="relative w-32 h-32 rounded-full bg-slate-950/95 border border-white/20 backdrop-blur-2xl flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-105 duration-300">
              {/* Inner ambient glow */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,212,0.18),transparent_70%)] pointer-events-none" />

              {/* Cruxeo Logo Mark from favicon.svg */}
              {centerContent || (
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                  <Image
                    src="/assets/logos/favicon.svg"
                    alt="Cruxeo Core Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_18px_rgba(0,245,212,0.45)]"
                    priority
                  />
                </div>
              )}

              {/* Central Title */}
              <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-white mt-1">
                {centerTitle}
              </span>
              <span className="text-[8px] font-mono text-slate-400 truncate max-w-[84px]">
                Directorship
              </span>
            </div>
          </div>

          {/* Central Subtitle Pill */}
          <div className="mt-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-[10px] font-mono text-slate-300">
              {centerSubtitle}
            </span>
          </div>
        </div>

        {/* 4 Connected Outer Division Nodes */}
        {nodes.map((node) => {
          const isHovered = hoveredNodeId === node.id;
          let positionStyle: React.CSSProperties = {};

          switch (node.position) {
            case "top-left":
              positionStyle = { top: "6%", left: "2%" };
              break;
            case "top-right":
              positionStyle = { top: "6%", right: "2%" };
              break;
            case "bottom-left":
              positionStyle = { bottom: "6%", left: "2%" };
              break;
            case "bottom-right":
              positionStyle = { bottom: "6%", right: "2%" };
              break;
          }

          return (
            <div
              key={node.id}
              style={positionStyle}
              className="absolute z-20 w-[240px]"
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
            >
              <Link
                href={node.href || `#${node.id}`}
                onClick={() => onNodeClick?.(node.id)}
                className={`group block p-4 rounded-2xl bg-slate-950/90 border transition-all duration-300 backdrop-blur-xl ${
                  isHovered ? "scale-105 shadow-2xl" : "hover:border-white/30"
                }`}
                style={{
                  borderColor: isHovered ? node.color : "rgba(255, 255, 255, 0.12)",
                  boxShadow: isHovered
                    ? `0 0 35px -5px ${node.color}50, 0 15px 30px -10px rgba(0,0,0,0.8)`
                    : "0 10px 25px -10px rgba(0,0,0,0.6)",
                }}
              >
                {/* Top Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-75 group-hover:opacity-100 transition-opacity"
                  style={{ background: node.gradient }}
                />

                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="p-1.5 rounded-lg border flex items-center justify-center"
                      style={{
                        backgroundColor: `${node.color}15`,
                        borderColor: `${node.color}35`,
                      }}
                    >
                      {node.icon}
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-wider block"
                        style={{ color: node.color }}
                      >
                        {node.suite}
                      </span>
                      <h4 className="text-xs font-bold text-white tracking-tight line-clamp-1">
                        {node.title}
                      </h4>
                    </div>
                  </div>

                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  />
                </div>

                <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed mb-2 font-normal">
                  {node.tagline}
                </p>

                {node.metrics && (
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">
                      Standard
                    </span>
                    <span
                      className="text-[10px] font-mono font-semibold"
                      style={{ color: node.color }}
                    >
                      {node.metrics}
                    </span>
                  </div>
                )}
              </Link>
            </div>
          );
        })}
      </div>

      {/* Mobile Constellation View (clean responsive stacked flow) */}
      <div className="md:hidden flex flex-col items-center space-y-6 relative z-10">
        {/* Central Hub */}
        <div className="relative p-[2px] rounded-full overflow-hidden shadow-[0_0_35px_rgba(0,245,212,0.2)]">
          <div
            className="absolute inset-[-100%] center-flow-conic-border opacity-70"
            style={{
              background:
                "conic-gradient(from 0deg, #a855f7, #00f5d4, #ffb12b, #38b58b, #a855f7)",
            }}
          />
          <div className="relative w-28 h-28 rounded-full bg-slate-950/95 border border-white/20 backdrop-blur-2xl flex flex-col items-center justify-center p-2 text-center">
            {centerContent || (
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src="/assets/logos/favicon.svg"
                  alt="Cruxeo Core Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_12px_rgba(0,245,212,0.4)]"
                  priority
                />
              </div>
            )}
            <span className="font-mono text-[8px] font-bold tracking-widest uppercase text-white mt-1">
              {centerTitle}
            </span>
            <span className="text-[8px] font-mono text-slate-400">
              Hub
            </span>
          </div>
        </div>

        {/* 4 Division Cards in a 2x2 or 1-column mobile grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nodes.map((node) => (
            <Link
              key={node.id}
              href={node.href || `#${node.id}`}
              onClick={() => onNodeClick?.(node.id)}
              className="p-4 rounded-xl bg-slate-950/90 border border-white/10 flex items-center justify-between gap-3"
              style={{
                borderLeftColor: node.color,
                borderLeftWidth: "3px",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="p-2 rounded-lg border shrink-0"
                  style={{
                    backgroundColor: `${node.color}15`,
                    borderColor: `${node.color}35`,
                  }}
                >
                  {node.icon}
                </div>
                <div>
                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-wider block"
                    style={{ color: node.color }}
                  >
                    {node.suite}
                  </span>
                  <h4 className="text-xs font-bold text-white line-clamp-1">
                    {node.title}
                  </h4>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenterFlow;
