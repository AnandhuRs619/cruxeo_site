"use client";

import React from "react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#030712] text-slate-100 min-h-screen flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 font-mono text-xl">
            !
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Root Level Exception
            </h1>
            <p className="text-sm text-slate-400 mt-2">
              A critical failure occurred in the core framework layout.
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-xl bg-[#38bdf8] text-[#030712] font-bold text-sm"
          >
            Recover Session
          </button>
        </div>
      </body>
    </html>
  );
}
