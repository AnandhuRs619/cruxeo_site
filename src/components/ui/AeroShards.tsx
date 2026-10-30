"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AeroShardsCanvas, AeroShardsProps } from "./AeroShardsCanvas";
import "./AeroShards.css";

export type { AeroShardsProps };

// Dynamically import official WebGPU component with SSR disabled
const DynamicWebGPU = dynamic(
  () => import("./AeroShardsWebGPU").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => null,
  }
);

export function AeroShards(props: AeroShardsProps) {
  const [hasWebGPU, setHasWebGPU] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof navigator !== "undefined" && "gpu" in navigator) {
      (navigator as any).gpu
        .requestAdapter({ powerPreference: "high-performance" })
        .then((adapter: any) => {
          setHasWebGPU(!!adapter);
        })
        .catch(() => {
          setHasWebGPU(false);
        });
    } else {
      setHasWebGPU(false);
    }
  }, []);

  // Use hardware-accelerated WebGPU if supported
  if (hasWebGPU === true) {
    return (
      <DynamicWebGPU
        {...(props as any)}
        onError={(err: any) => {
          console.warn("[AeroShards] WebGPU pipeline failed, switching to Canvas fallback:", err);
          setHasWebGPU(false);
        }}
      />
    );
  }

  // Guaranteed 100% visible, ultra-smooth 60 FPS faceted glass prism engine
  return <AeroShardsCanvas {...props} />;
}

export default AeroShards;
