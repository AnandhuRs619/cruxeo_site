"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export const ScrollExpandMedia = ({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);

  // Keep progressRef always in sync with state
  progressRef.current = scrollProgress;

  useEffect(() => {
    setScrollProgress(0);
    progressRef.current = 0;
    setShowContent(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const currentProg = progressRef.current;

      // 1. Scrolling DOWN (expanding video)
      // When section top reaches the viewport (rect.top <= 20) and not fully expanded
      if (e.deltaY > 0 && rect.top <= 20 && currentProg < 1) {
        e.preventDefault();
        const delta = e.deltaY * 0.0014;
        const next = Math.min(1, currentProg + delta);
        setScrollProgress(next);
        progressRef.current = next;

        if (next >= 0.98) {
          setShowContent(true);
        }
        return;
      }

      // 2. Scrolling UP (shrinking video back down)
      // When user scrolls back up and section is at top of viewport (rect.top >= -25) and video is expanded
      if (e.deltaY < 0 && rect.top >= -25 && currentProg > 0) {
        e.preventDefault();
        const delta = e.deltaY * 0.0014; // negative
        const next = Math.max(0, currentProg + delta);
        setScrollProgress(next);
        progressRef.current = next;

        if (next < 0.85) {
          setShowContent(false);
        }
        return;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartYRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const currentProg = progressRef.current;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - touchY;

      // Touch scrolling DOWN (expand)
      if (deltaY > 0 && rect.top <= 20 && currentProg < 1) {
        e.preventDefault();
        const delta = deltaY * 0.004;
        const next = Math.min(1, currentProg + delta);
        setScrollProgress(next);
        progressRef.current = next;

        if (next >= 0.98) {
          setShowContent(true);
        }
        touchStartYRef.current = touchY;
        return;
      }

      // Touch scrolling UP (shrink back)
      if (deltaY < 0 && rect.top >= -25 && currentProg > 0) {
        e.preventDefault();
        const delta = deltaY * 0.005; // negative
        const next = Math.max(0, currentProg + delta);
        setScrollProgress(next);
        progressRef.current = next;

        if (next < 0.85) {
          setShowContent(false);
        }
        touchStartYRef.current = touchY;
        return;
      }

      touchStartYRef.current = touchY;
    };

    const handleTouchEnd = (): void => {
      touchStartYRef.current = 0;
    };

    window.addEventListener("wheel", handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener(
      "touchstart",
      handleTouchStart as unknown as EventListener,
      { passive: false },
    );
    window.addEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListener,
      { passive: false },
    );
    window.addEventListener("touchend", handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel as unknown as EventListener,
      );
      window.removeEventListener(
        "touchstart",
        handleTouchStart as unknown as EventListener,
      );
      window.removeEventListener(
        "touchmove",
        handleTouchMove as unknown as EventListener,
      );
      window.removeEventListener("touchend", handleTouchEnd as EventListener);
    };
  }, []);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden relative"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt="Background"
              width={1920}
              height={1080}
              className="w-screen h-screen"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.6)",
                }}
              >
                {mediaType === "video" ? (
                  mediaSrc.includes("youtube.com") ? (
                    <div className="relative w-full h-full pointer-events-none">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          mediaSrc.includes("embed")
                            ? mediaSrc +
                              (mediaSrc.includes("?") ? "&" : "?") +
                              "autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
                            : mediaSrc.replace("watch?v=", "embed/") +
                              "?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=" +
                              mediaSrc.split("v=")[1]
                        }
                        className="w-full h-full rounded-xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div
                        className="absolute inset-0 z-10"
                        style={{ pointerEvents: "none" }}
                      ></div>

                      <motion.div
                        className="absolute inset-0 bg-black/30 rounded-xl"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full pointer-events-none">
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover rounded-xl"
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className="absolute inset-0 z-10"
                        style={{ pointerEvents: "none" }}
                      ></div>

                      <motion.div
                        className="absolute inset-0 bg-black/30 rounded-xl"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc}
                      alt={title || "Media content"}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover rounded-xl"
                    />

                    <motion.div
                      className="absolute inset-0 bg-black/50 rounded-xl"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
                  {date && (
                    <p
                      className="text-xl sm:text-2xl text-blue-200 font-semibold"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-cyan-300 font-mono text-xs sm:text-sm tracking-wider uppercase mt-1"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollProgress >= 0.95 ? "Scroll Up to Shrink" : scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center gap-2 sm:gap-4 w-full relative z-10 transition-none flex-col pointer-events-none ${
                  textBlend ? "mix-blend-difference" : "mix-blend-normal"
                }`}
              >
                <motion.h2
                  className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight transition-none drop-shadow-lg"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className="text-3xl sm:text-5xl lg:text-7xl font-bold text-center text-white/90 tracking-tight transition-none drop-shadow-lg"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>
            </div>

            {children && (
              <motion.section
                className="flex flex-col w-full px-6 py-8 md:px-12 lg:py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.7 }}
              >
                {children}
              </motion.section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
