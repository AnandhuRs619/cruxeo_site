"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShapeGrid } from "@/components/ui/ShapeGrid";

/**
 * Curated list of tech visual cutouts for the hero title.
 * You can freely change, add, or replace paths in this array!
 */
export const HERO_TECH_IMAGES: string[] = [
  "/assets/images/contact-dubai-nightscape.jpg",
  "/assets/images/ignispectra.jpg",
  "/assets/images/nexplay.jpg",
  "/assets/images/lumen-lab.jpg",
  "/assets/images/synapse.jpg",
  "/assets/images/work-aerial-symphony.jpg",
  "/assets/images/work-immersion-led.jpg",
];

export const HeroSection: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);

  // Pick random image on mount and cycle periodically
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * HERO_TECH_IMAGES.length);
    setImageIndex(randomIndex);

    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % HERO_TECH_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleNextImage = () => {
    setImageIndex((prev) => (prev + 1) % HERO_TECH_IMAGES.length);
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen min-h-[100dvh] w-full flex flex-col justify-between items-center pt-20 sm:pt-24 pb-6 sm:pb-8 px-3 sm:px-6 overflow-hidden bg-transparent select-none">
      {/* Background Animated ShapeGrid Matrix */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
        <ShapeGrid
          shape="square"
          direction="diagonal"
          lineColor="#2a2734"
          hoverColor="#ffffff"
          hoverFillColor="#38bdf8"
          fillOpacity={0.16}
          cellSize={40}
          speed={0.5}
          tiltX={0}
          tiltY={0}
          rainbow={false}
        />

        {/* Central Diffused Cosmic Ambient Glow */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] lg:w-[850px] h-[300px] sm:h-[360px] bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-blue-500/15 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Main Hero Center Stage: 3-Line Display Title in Neue Metana Next */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-[96vw] xl:max-w-7xl mx-auto text-center pointer-events-none my-auto">
        <h1 className="font-metana text-[clamp(2.1rem,7.5vw,6.8rem)] font-bold uppercase text-[#eff0f2] tracking-[-0.015em] leading-[0.92] select-none text-center mx-auto transition-all duration-300 drop-shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-3">
          {/* LINE 1: Blue Sparkle Star + TRANSFORMING + Blue Sparkle Star */}
          <span className="inline-flex items-center justify-center gap-2.5 sm:gap-5 md:gap-7 w-full">
            {/* Left 4-Point Blue Sparkle */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-7 sm:h-7 md:w-10 md:h-10 text-[#38bdf8] drop-shadow-[0_0_16px_rgba(56,189,248,0.9)] animate-pulse shrink-0"
              aria-hidden="true"
            >
              <path
                d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
                fill="currentColor"
              />
            </svg>

            <span>TRANSFORMING</span>

            {/* Right 4-Point Blue Sparkle */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-7 sm:h-7 md:w-10 md:h-10 text-[#38bdf8] drop-shadow-[0_0_16px_rgba(56,189,248,0.9)] animate-pulse shrink-0"
              aria-hidden="true"
            >
              <path
                d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
                fill="currentColor"
              />
            </svg>
          </span>

          {/* LINE 2: EVENTS WITH + Holographic 3D Wireframe Globe */}
          <span className="inline-flex items-center justify-center gap-2 sm:gap-4 md:gap-6 w-full">
            <span>EVENTS</span>
            <span>WITH</span>

            {/* Holographic 3D Wireframe Globe Element */}
            <span className="relative inline-flex items-center justify-center w-8 h-8 sm:w-14 sm:h-14 md:w-20 md:h-20 -my-3 sm:-my-5 shrink-0 align-middle">
              <span className="w-full h-full rounded-full bg-gradient-to-tr from-[#00f5d4] via-[#ec4899] to-[#8b5cf6] p-[1.5px] shadow-[0_0_24px_rgba(236,72,153,0.55)] inline-block">
                <span className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-indigo-600 opacity-95 overflow-hidden relative block">
                  {/* Wireframe Mesh */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-black/85"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    aria-hidden="true"
                  >
                    <circle cx="50" cy="50" r="48" strokeWidth="3" />
                    <line x1="2" y1="50" x2="98" y2="50" strokeWidth="2.4" />
                    <ellipse cx="50" cy="50" rx="48" ry="24" strokeWidth="2" />
                    <ellipse cx="50" cy="50" rx="48" ry="12" strokeWidth="2" />
                    <line x1="50" y1="2" x2="50" y2="98" strokeWidth="2.4" />
                    <ellipse cx="50" cy="50" rx="24" ry="48" strokeWidth="2" />
                    <ellipse cx="50" cy="50" rx="12" ry="48" strokeWidth="2" />
                  </svg>
                  {/* Gloss Specular Arc */}
                  <span className="absolute top-1 left-2 w-1/3 h-1/3 rounded-full bg-white/40 blur-[2px] pointer-events-none block" />
                </span>
              </span>
            </span>
          </span>

          {/* LINE 3: IMMERSIVE + Embedded Small Tech Image Cutout + TECH */}
          <span className="inline-flex items-center justify-center gap-2 sm:gap-4 md:gap-5 w-full">
            <span>IMMERSIVE</span>

            {/* Interactive / Random Media Image Cutout Slot */}
            <span
              onClick={handleNextImage}
              role="button"
              tabIndex={0}
              title="Click to cycle random tech visual"
              className="relative inline-flex items-center justify-center align-middle mx-1 sm:mx-2 md:mx-3 w-14 sm:w-24 md:w-36 lg:w-44 h-8 sm:h-12 md:h-16 lg:h-20 rounded sm:rounded-md md:rounded-lg overflow-hidden border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.85)] cursor-pointer group pointer-events-auto transition-transform duration-300 hover:scale-105 shrink-0 bg-slate-900"
            >
              <Image
                src={HERO_TECH_IMAGES[imageIndex]}
                alt="Cruxeo Tech Element"
                fill
                sizes="(max-width: 768px) 120px, 200px"
                className="object-cover transition-opacity duration-500 filter contrast-125 brightness-110"
              />
              {/* Tech Scanlines / Vignette */}
              <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none block" />
              {/* HUD Corner Accents */}
              <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-white/80 pointer-events-none block" />
              <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-white/80 pointer-events-none block" />
              <span className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b border-l border-white/80 pointer-events-none block" />
              <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-white/80 pointer-events-none block" />
            </span>

            <span>TECH</span>
          </span>
        </h1>
      </div>

      {/* Centered Scroll Indicator directly matching Reference */}
      <div className="relative z-10 flex justify-center items-center w-full mt-auto">
        <button
          type="button"
          onClick={handleScrollDown}
          className="group inline-flex items-center justify-center gap-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.28em] text-[#eff0f2]/70 hover:text-[#eff0f2] transition-colors cursor-pointer pointer-events-auto select-none py-2 px-4"
          aria-label="Scroll for more"
        >
          <span>SCROLL FOR MORE</span>
          {/* Spatial crosshair dotted down arrow */}
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-[#eff0f2]/80 transition-transform duration-300 group-hover:translate-y-1"
          >
            <circle cx="9" cy="3" r="0.9" fill="currentColor" opacity="0.6" />
            <circle cx="9" cy="17" r="0.9" fill="currentColor" opacity="0.6" />
            <circle cx="3" cy="10" r="0.9" fill="currentColor" opacity="0.6" />
            <circle cx="15" cy="10" r="0.9" fill="currentColor" opacity="0.6" />
            <path
              d="M9 5V14M9 14L6.5 11.5M9 14L11.5 11.5"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
