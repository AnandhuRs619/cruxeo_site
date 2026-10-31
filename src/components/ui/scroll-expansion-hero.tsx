"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: React.ReactNode;
}

export const ScrollExpandMedia: React.FC<ScrollExpandMediaProps> = ({
  mediaType = "video",
  mediaSrc,
  posterSrc = "/assets/images/hero-poster.webp",
  bgImageSrc,
  title = "Live Production Reel",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Measure scroll progress through the pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Silky-smooth spring physics for momentum trackpad and wheel scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  // 1. Numeric Pixel Expansion:
  // Starts at exact portrait card size (350x480), expands to (1380x840), clamped by CSS max-w/max-h
  const mediaWidth = useTransform(smoothProgress, [0, 0.72, 1], [350, 1380, 1380]);
  const mediaHeight = useTransform(smoothProgress, [0, 0.72, 1], [480, 840, 840]);
  const borderRadius = useTransform(smoothProgress, [0, 0.72, 1], [26, 18, 18]);

  // 2. Title Separation:
  // "Live" slides left, "Production Reel" slides right as video expands
  const textLeftX = useTransform(smoothProgress, [0, 0.6], ["0%", "-120%"]);
  const textRightX = useTransform(smoothProgress, [0, 0.6], ["0%", "120%"]);
  const textOpacity = useTransform(smoothProgress, [0, 0.45], [1, 0]);

  // 3. Background Image Opacity
  const bgOpacity = useTransform(smoothProgress, [0, 0.7], [0.9, 0.15]);

  // 4. Video Contrast Tint Overlay
  const overlayOpacity = useTransform(
    smoothProgress,
    [0, 0.4, 0.75, 1],
    [0.25, 0.1, 0.25, 0.35]
  );

  // 5. Children Details (Hold Phase 0.72 -> 1.0)
  const contentOpacity = useTransform(
    smoothProgress,
    [0.68, 0.84, 1],
    [0, 1, 1]
  );
  const contentY = useTransform(
    smoothProgress,
    [0.68, 0.84, 1],
    [30, 0, 0]
  );

  // Split title: "Live" on line 1, "Production Reel" on line 2
  const titleWords = title.split(" ");
  const firstWord = titleWords[0] || "Live";
  const restOfTitle = titleWords.slice(1).join(" ") || "Production Reel";

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleExpandClick = () => {
    if (containerRef.current) {
      const targetY =
        containerRef.current.offsetTop + window.innerHeight * 0.9;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[250vh] sm:h-[280vh] bg-transparent"
    >
      {/* Pinned Sticky Viewport: Holds the video on screen while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient Blurred Night Skyline Background Image */}
        <motion.div
          className="absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden"
          style={{ opacity: bgOpacity }}
        >
          <Image
            src={bgImageSrc}
            alt="Dubai nightscape"
            fill
            sizes="100vw"
            className="object-cover object-center filter blur-[8px] scale-105 brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </motion.div>

        {/* Central Stage Container */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
          {/* Expanding Media Box */}
          <motion.div
            onClick={handleExpandClick}
            style={{
              width: mediaWidth,
              height: mediaHeight,
              maxWidth: "94vw",
              maxHeight: "84vh",
              borderRadius: borderRadius,
            }}
            className="relative overflow-hidden cursor-pointer shadow-[0_25px_70px_rgba(0,0,0,0.9)] border border-white/20 bg-black flex items-center justify-center group shrink-0"
          >
            {mediaType === "video" ? (
              mediaSrc.includes("youtube.com") ? (
                <div className="relative w-full h-full pointer-events-none">
                  <iframe
                    width="100%"
                    height="100%"
                    src={
                      mediaSrc.includes("embed")
                        ? `${mediaSrc}${mediaSrc.includes("?") ? "&" : "?"}autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1`
                        : `${mediaSrc.replace("watch?v=", "embed/")}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=${mediaSrc.split("v=")[1]}`
                    }
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative w-full h-full bg-black">
                  {/* Poster Fallback Image to eliminate black flash */}
                  {posterSrc && (
                    <Image
                      src={posterSrc}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 360px, 1400px"
                      className="object-cover -z-0"
                      priority
                    />
                  )}

                  <video
                    ref={videoRef}
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="relative z-10 w-full h-full object-cover"
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback
                  />

                  {/* Sound Toggle Button (Discreetly at top-right on hover) */}
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 border border-white/20 text-white/80 hover:text-white hover:bg-black/80 transition-all backdrop-blur-md cursor-pointer pointer-events-auto opacity-0 group-hover:opacity-100 shadow-lg"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-cyan-400" />
                    )}
                  </button>
                </div>
              )
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={mediaSrc}
                  alt={title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}

            {/* Subtle Contrast Tint Overlay */}
            <motion.div
              className="absolute inset-0 bg-black pointer-events-none z-10"
              style={{ opacity: overlayOpacity }}
            />
          </motion.div>

          {/* Clean Display Title: "Live \n Production Reel" matching Reference Image */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 pointer-events-none px-4 select-none"
            style={{ opacity: textOpacity }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
              style={{ x: textLeftX }}
            >
              {firstWord}
            </motion.h2>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] mt-1 sm:mt-2"
              style={{ x: textRightX }}
            >
              {restOfTitle}
            </motion.h2>
          </motion.div>

          {/* Child Content / Specs (Revealed smoothly during the HOLD phase) */}
          {children && (
            <motion.div
              className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 pointer-events-auto z-20"
              style={{ opacity: contentOpacity, y: contentY }}
            >
              <div className="rounded-2xl bg-slate-950/75 backdrop-blur-xl border border-white/15 p-4 sm:p-6 shadow-[0_12px_45px_rgba(0,0,0,0.85)] text-center">
                {children}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;
