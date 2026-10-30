"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import StarBorder from "./StarBorder";
import "./SpecularButton.css";

export interface SpecularButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  idleIntensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  glow?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<any>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  style?: React.CSSProperties;
  starColor?: string;
  trailColor?: string;
  stars?: number;
  duration?: number;
  starBorder?: boolean;
}

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  children = "Get Started",
  variant = "glass",
  size = "lg",
  radius = 18,
  tint,
  tintOpacity,
  blur = 16,
  textColor,
  lineColor,
  baseColor,
  intensity = 1,
  idleIntensity = 0.35,
  thickness = 1.5,
  glow = 1,
  speed = 0.4,
  followMouse = true,
  proximity = 250,
  autoAnimate = false,
  disabled = false,
  onClick,
  className = "",
  type = "button",
  href,
  style,
  starColor,
  trailColor,
  stars,
  duration,
  starBorder = true,
  ...rest
}) => {
  const buttonRef = useRef<HTMLElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [isNear, setIsNear] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Variant color definitions
  const isPrimary = variant === "primary";
  const finalTint = tint ?? (isPrimary ? "#2563eb" : "#0f172a");
  const finalTintOpacity = tintOpacity ?? (isPrimary ? 0.9 : 0.65);
  const finalTextColor = textColor ?? "#ffffff";
  const finalLineColor = lineColor ?? (isPrimary ? "#93c5fd" : "#ffffff");
  const finalBaseColor = baseColor ?? (isPrimary ? "rgba(37,99,235,0.4)" : "rgba(255,255,255,0.12)");

  // Handle global proximity pointer move for realistic magnetic rim lighting
  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      const btn = buttonRef.current;
      if (!btn || disabled || !followMouse) return;

      const rect = btn.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);
      const isClose = dist <= proximity;
      setIsNear(isClose);

      if (isClose) {
        // Position relative to button bounds
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
      }
    },
    [disabled, followMouse, proximity]
  );

  useEffect(() => {
    if (!followMouse) return;
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [followMouse, handlePointerMove]);

  // Auto-animate if idle or enabled
  useEffect(() => {
    if (!autoAnimate && isNear) return;
    if (!autoAnimate && !isNear && !isHovered) return;

    let raf = 0;
    let angle = 0;
    const animate = () => {
      const btn = buttonRef.current;
      if (!btn) return;
      angle += speed * 0.05;
      const w = btn.offsetWidth || 180;
      const h = btn.offsetHeight || 50;
      const cx = w / 2;
      const cy = h / 2;
      const rx = w / 2 + 10;
      const ry = h / 2 + 10;
      const x = cx + Math.cos(angle) * rx;
      const y = cy + Math.sin(angle) * ry;
      setMousePos({ x, y });
      raf = requestAnimationFrame(animate);
    };

    if (autoAnimate) {
      raf = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(raf);
  }, [autoAnimate, isNear, isHovered, speed]);

  const spotlightOpacity = isHovered ? 0.65 * intensity : isNear ? 0.45 * intensity : idleIntensity;

  const dynamicStyles: React.CSSProperties = {
    "--mouse-x": `${mousePos.x}px`,
    "--mouse-y": `${mousePos.y}px`,
    "--spotlight-opacity": spotlightOpacity,
    "--sb-radius": `${radius}px`,
    "--text-color": finalTextColor,
    "--line-glow-color": finalLineColor,
    "--line-base-color": finalBaseColor,
    "--spot-color": isPrimary ? "rgba(96, 165, 250, 0.35)" : "rgba(255, 255, 255, 0.22)",
    "--border-thickness": `${thickness}px`,
    backgroundColor: finalTint,
    background: isPrimary
      ? `linear-gradient(180deg, rgba(37,99,235,${finalTintOpacity}) 0%, rgba(29,78,216,${finalTintOpacity + 0.05}) 100%)`
      : `linear-gradient(180deg, rgba(255,255,255,${finalTintOpacity * 0.15}) 0%, rgba(15,23,42,${finalTintOpacity}) 100%)`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    boxShadow: isPrimary
      ? `0 0 ${24 * glow}px rgba(37,99,235,0.65), 0 8px 24px -4px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.4)`
      : `0 8px 32px -8px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.25)`,
    ...style,
  } as React.CSSProperties;

  const content = (
    <>
      <span className="specular-button__spotlight" aria-hidden="true" />
      <span className="specular-button__horizon" aria-hidden="true" />
      <span className="specular-button__content">{children}</span>
    </>
  );

  const finalStarColor = starColor ?? (isPrimary ? "#ffffff" : "#ce8ec4");
  const finalTrailColor = trailColor ?? (isPrimary ? "#60a5fa" : "#ce8ec4");

  if (!starBorder) {
    const Component = href ? Link : "button";
    return (
      <Component
        ref={buttonRef as any}
        href={href as any}
        type={href ? undefined : type}
        disabled={disabled}
        onClick={onClick}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        className={`specular-button specular-button--${size} ${className}`.trim()}
        style={dynamicStyles}
        {...rest}
      >
        <span className="specular-button__spotlight" aria-hidden="true" />
        <span className="specular-button__horizon" aria-hidden="true" />
        <span className="specular-button__content">{children}</span>
      </Component>
    );
  }

  return (
    <StarBorder
      as={href ? Link : "button"}
      href={href}
      type={type}
      disabled={disabled}
      onClick={onClick}
      color={finalStarColor}
      trailColor={finalTrailColor}
      duration={duration ?? 8}
      stars={stars ?? 1}
      glow={glow ?? 0.6}
      sparkle={true}
      hover="lap"
      clickPulse={true}
      thickness={thickness}
      radius={radius}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className={`specular-button specular-button--${size} ${className}`.trim()}
      style={dynamicStyles}
      {...rest}
    >
      <span className="specular-button__spotlight" aria-hidden="true" />
      <span className="specular-button__horizon" aria-hidden="true" />
      <span className="specular-button__content">{children}</span>
    </StarBorder>
  );
};

export default SpecularButton;
