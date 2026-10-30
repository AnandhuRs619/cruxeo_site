import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "cyan" | "outline" | "pill";
  className?: string;
  pillText?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "pill",
  className,
  pillText = "New",
}) => {
  if (variant === "pill") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-lg transition-colors hover:border-white/20",
          className
        )}
      >
        <span className="px-2 py-0.5 text-[11px] font-semibold text-white bg-brand-blue rounded-full shadow-sm">
          {pillText}
        </span>
        <span className="text-xs font-medium text-slate-300 tracking-wide">{children}</span>
      </div>
    );
  }

  const variants = {
    blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    outline: "bg-white/5 text-slate-300 border border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

