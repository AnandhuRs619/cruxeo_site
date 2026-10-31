"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";
import { cn } from "@/lib/utils";

export interface StarBurstProps {
  speed?: number;
  density?: number;
  starCount?: number;
  color?: string;
  centerX?: number;
  centerY?: number;
  starSize?: number;
  brightness?: number;
  opacity?: number;
  flowerIntensity?: number;
  twinkleSpeed?: number;
  wobbleAmount?: number;
  innerLayerIntensity?: number;
  outerLayerIntensity?: number;
  fadeHeight?: number;
  className?: string;
  style?: React.CSSProperties;
}

const vertexShader = `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uSpeed;
  uniform float uDensity;
  uniform float uStarCount;
  uniform vec3 uColor;
  uniform float uCenterX;
  uniform float uCenterY;
  uniform float uStarSize;
  uniform float uBrightness;
  uniform float uOpacity;
  uniform float uFlowerIntensity;
  uniform float uTwinkleSpeed;
  uniform float uWobbleAmount;
  uniform float uInnerLayerIntensity;
  uniform float uOuterLayerIntensity;
  uniform float uFadeHeight;

  varying vec2 vUv;

  const float PI = 3.14159265359;

  vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xx + p3.yz) * p3.zy);
  }

  float stars(vec2 uv, float radialOffset, float amount, float intensity) {
    float t = uTime * uSpeed;
    float rad = atan(uv.y, uv.x);
    float r = log(length(uv) + radialOffset) * amount - t;

    vec2 g = vec2(rad / PI * 0.5 + 0.5, r);
    g *= vec2(uStarCount, 1.0);

    vec2 s = vec2(1.0, 1.0);
    vec2 id = floor(g / s + 0.5);
    vec2 o = sign(g - s * id);

    float min_d = 100.0;
    for (int i = 0; i < 2; ++i) {
      for (int j = 0; j < 2; ++j) {
        vec2 nid = id + o * vec2(float(i), float(j));
        vec2 nh = hash22(nid) * 100.0;
        vec2 n = g - s * nid;

        float t2 = t * uTwinkleSpeed;
        vec2 np = vec2(cos(nh.x + t2), sin(nh.y + t2)) * uWobbleAmount;

        vec2 diff = n - np;
        diff.x *= (200.0 / uStarCount);

        float dt = dot(diff, diff);
        if (dt < min_d) {
          min_d = dt;
        }
      }
    }

    float d = sqrt(min_d);
    return (uStarSize * 0.09) / max(d, 0.0015) * intensity;
  }

  float flower(vec2 uv) {
    float fade_out = smoothstep(1.5, 0.0, length(uv));
    float fl = smoothstep(1.2, 0.0, abs(sin(atan(uv.y * 4.0, uv.x) * 3.0)) * 0.7);
    return fl * fade_out * uFlowerIntensity;
  }

  void main() {
    vec2 centeredUv = vUv * 2.0 - 1.0;
    centeredUv.x *= uResolution.x / uResolution.y;

    vec2 centerOffset = vec2((uCenterX - 0.5) * 2.0, (uCenterY - 0.5) * 2.0);
    centerOffset.x *= uResolution.x / uResolution.y;

    vec2 pos = centeredUv - centerOffset;

    float s = stars(pos, 1.0, 20.0 * uDensity, uInnerLayerIntensity) * 0.5;
    float l = stars(pos, 5.0, 30.0 * uDensity, uOuterLayerIntensity) * 0.5;
    float f = flower(pos);

    float brightness = s + l + f;

    float gradient = smoothstep(uFadeHeight, 0.0, length(pos) * 0.35);
    brightness *= gradient;
    brightness *= uBrightness;

    float alpha = clamp(brightness, 0.0, 1.0) * uOpacity;
    gl_FragColor = vec4(uColor * alpha, alpha);
  }
`;

export const StarBurst: React.FC<StarBurstProps> = ({
  speed = 1,
  density = 0.5,
  starCount = 100,
  color = "#38bdf8",
  centerX = 0.5,
  centerY = 0.0,
  starSize = 0.26,
  brightness = 1,
  opacity = 1,
  flowerIntensity = 0.5,
  twinkleSpeed = 0.2,
  wobbleAmount = 1,
  innerLayerIntensity = 1,
  outerLayerIntensity = 1.5,
  fadeHeight = 2.5,
  className,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<Program | null>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    let renderer: Renderer | null = null;
    try {
      renderer = new Renderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        dpr: Math.min(window.devicePixelRatio || 1, 2),
      });
    } catch {
      return;
    }

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    renderer.setSize(width, height);
    const canvas = gl.canvas;
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    container.appendChild(canvas);

    const initialColor = new Color(color);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [width, height] },
        uSpeed: { value: speed },
        uDensity: { value: density },
        uStarCount: { value: starCount },
        uColor: { value: initialColor },
        uCenterX: { value: centerX },
        uCenterY: { value: centerY },
        uStarSize: { value: starSize },
        uBrightness: { value: brightness },
        uOpacity: { value: opacity },
        uFlowerIntensity: { value: flowerIntensity },
        uTwinkleSpeed: { value: twinkleSpeed },
        uWobbleAmount: { value: wobbleAmount },
        uInnerLayerIntensity: { value: innerLayerIntensity },
        uOuterLayerIntensity: { value: outerLayerIntensity },
        uFadeHeight: { value: fadeHeight },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    programRef.current = program;

    const geometry = new Triangle(gl);
    const mesh = new Mesh(gl, { geometry, program });

    const startTime = performance.now();
    const render = (now: number) => {
      const elapsed = (now - startTime) * 0.001;
      program.uniforms.uTime.value = elapsed;
      renderer?.render({ scene: mesh });
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          renderer?.setSize(w, h);
          program.uniforms.uResolution.value = [w, h];
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      programRef.current = null;
      if (canvas && container.contains(canvas)) {
        container.removeChild(canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync uniforms dynamically on prop changes
  useEffect(() => {
    const p = programRef.current;
    if (!p) return;

    p.uniforms.uSpeed.value = speed;
    p.uniforms.uDensity.value = density;
    p.uniforms.uStarCount.value = starCount;
    p.uniforms.uColor.value.set(color);
    p.uniforms.uCenterX.value = centerX;
    p.uniforms.uCenterY.value = centerY;
    p.uniforms.uStarSize.value = starSize;
    p.uniforms.uBrightness.value = brightness;
    p.uniforms.uOpacity.value = opacity;
    p.uniforms.uFlowerIntensity.value = flowerIntensity;
    p.uniforms.uTwinkleSpeed.value = twinkleSpeed;
    p.uniforms.uWobbleAmount.value = wobbleAmount;
    p.uniforms.uInnerLayerIntensity.value = innerLayerIntensity;
    p.uniforms.uOuterLayerIntensity.value = outerLayerIntensity;
    p.uniforms.uFadeHeight.value = fadeHeight;
  }, [
    speed,
    density,
    starCount,
    color,
    centerX,
    centerY,
    starSize,
    brightness,
    opacity,
    flowerIntensity,
    twinkleSpeed,
    wobbleAmount,
    innerLayerIntensity,
    outerLayerIntensity,
    fadeHeight,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden bg-transparent pointer-events-none", className)}
      style={{ minHeight: "inherit", ...style }}
    />
  );
};

export default StarBurst;
