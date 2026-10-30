import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 block">
          404 — Coordinate Void
        </span>
        <h1 className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400 mb-6">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Lost in the Experiential Multiverse
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
          The coordinates you entered do not correspond to an active activation page or service suite. Let&apos;s guide you back to our core grid.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Mission Control</span>
          </Button>

          <Button href="/services" variant="outline" size="md">
            <span>Explore Services</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

