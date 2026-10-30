"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to monitoring service if desired
    console.error("Next.js App Router Runtime Error:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-background">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto space-y-6">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shadow-glow">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-red-400 mb-2 block">
            Signal Interruption // Exception Caught
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Unexpected System State
          </h1>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            An unexpected error occurred while rendering this interface. Our telemetry has logged the anomaly.
          </p>
          {error.digest && (
            <p className="text-[11px] font-mono text-slate-400 mt-2">
              Error Digest: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan text-slate-950 font-bold text-sm transition-all hover:brightness-110 shadow-lg"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retry Connection</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm transition-all hover:bg-white/10"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
