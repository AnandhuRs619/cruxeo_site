import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated Cyber Ring / Logo Halo */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-brand-cyan/20 border-t-brand-cyan animate-spin" />
          <div className="absolute inset-2 rounded-full border border-brand-purple/30 border-b-brand-purple animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
          <div className="w-2.5 h-2.5 rounded-full bg-white shadow-glow animate-pulse" />
        </div>

        <div className="flex flex-col items-center gap-1.5 text-center">
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">
            Initialising Matrix
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            Cruxeo Field Experience // Loading Assets
          </span>
        </div>
      </div>
    </div>
  );
}
