"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  Zap,
  Radio,
  FileText,
  Clock,
  ShieldCheck,
  Send,
  PhoneCall,
  Mail,
  ExternalLink,
} from "lucide-react";
import { SpecularButton } from "@/components/ui/SpecularButton";
import { companyConfig } from "@/data/siteData";

interface ProjectIntent {
  id: string;
  label: string;
  tag: string;
  accent: string;
  message: string;
  division: string;
}

const INTENTS: ProjectIntent[] = [
  {
    id: "drone-shows",
    label: "Drone Shows & Swarms",
    tag: "IGNISPECTRA",
    accent: "#ffb12b",
    division: "IGNISPECTRA",
    message:
      "Hello Cruxeo team, I would like to check airspace feasibility and pricing for an IGNISPECTRA synchronized drone light show in the UAE/GCC.",
  },
  {
    id: "ai-photobooth",
    label: "AI & Robotic Photobooths",
    tag: "NEXPLAY",
    accent: "#a855f7",
    division: "NEXPLAY",
    message:
      "Hello Cruxeo team, we are planning an event and want to deploy a NEXPLAY AI neural photobooth / 6-axis robotic camera experience.",
  },
  {
    id: "holograms",
    label: "3D Holograms & LED Pavilions",
    tag: "LUMEN LAB",
    accent: "#38bdf8",
    division: "LUMEN LAB",
    message:
      "Hello Cruxeo team, I would like to request technical specs and quotation for a LUMEN LAB curved LED wall or 3D holographic fan array.",
  },
  {
    id: "enterprise-ai",
    label: "Enterprise AI & Software",
    tag: "SYNAPSE",
    accent: "#38b58b",
    division: "SYNAPSE",
    message:
      "Hello Cruxeo team, we are interested in deploying a private SYNAPSE enterprise AI assistant or touchless interactive kiosk.",
  },
  {
    id: "urgent-rfp",
    label: "Urgent RFP / General Pitch",
    tag: "FAST-TRACK",
    accent: "#38bdf8",
    division: "ALL SERVICES",
    message:
      "Hello Cruxeo technical directors, I have an urgent event brief/RFP and would like to schedule a strategy call or send our deck.",
  },
];

export const WhatsAppDirectHub: React.FC = () => {
  const [selectedIntent, setSelectedIntent] = useState<ProjectIntent>(INTENTS[0]);
  const [customBrief, setCustomBrief] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const finalMessage = customBrief.trim()
    ? `${selectedIntent.message} Note: ${customBrief.trim()}`
    : selectedIntent.message;

  const whatsappUrl = `https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(
    finalMessage
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`+${companyConfig.whatsapp}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative rounded-[36px] bg-slate-950/90 border border-white/15 backdrop-blur-3xl p-6 sm:p-12 shadow-2xl overflow-hidden">
      {/* Top Ambient Gradient Line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, #0b5cff, ${selectedIntent.accent}, #7c3aed)`,
        }}
      />

      {/* Atmospheric Ambient Halos */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: selectedIntent.accent }}
      />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-600/15 blur-[140px] pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>DIRECTORS ONLINE // DUBAI UTC+4</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Direct WhatsApp VIP Concierge
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl font-light">
            Skip form submissions. Select your project scope below to pre-configure your direct WhatsApp dialogue with our engineering directors.
          </p>
        </div>

        {/* Copy Phone Pill */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all text-xs font-mono text-slate-200 group"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>+{companyConfig.whatsapp}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 1. Step 1: Intent Scope Selector Pills */}
      <div className="space-y-3 mb-8 relative z-10">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-widest">
          <span>01 / Select Activation Domain</span>
          <span className="text-blue-400 font-semibold">{selectedIntent.tag}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {INTENTS.map((intent) => {
            const isSelected = selectedIntent.id === intent.id;
            return (
              <button
                key={intent.id}
                onClick={() => setSelectedIntent(intent)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between gap-2 group relative overflow-hidden ${
                  isSelected
                    ? "bg-slate-900 border-white/30 shadow-lg -translate-y-0.5"
                    : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.05]"
                }`}
                style={{
                  borderColor: isSelected ? `${intent.accent}70` : undefined,
                  boxShadow: isSelected ? `0 0 25px -8px ${intent.accent}30` : undefined,
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border"
                    style={{
                      borderColor: `${intent.accent}40`,
                      color: intent.accent,
                      backgroundColor: `${intent.accent}12`,
                    }}
                  >
                    {intent.tag}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                    style={{ backgroundColor: intent.accent }}
                  />
                </div>

                <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  {intent.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Step 2: Live Chat Dialogue Simulator / Terminal */}
      <div className="mb-8 space-y-3 relative z-10">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-widest">
          <span>02 / Live Pre-Filled Dispatch Preview</span>
          <span className="text-emerald-400 font-semibold">WhatsApp 256-bit Encrypted</span>
        </div>

        <div className="rounded-2xl bg-black/60 border border-white/10 p-4 sm:p-6 backdrop-blur-xl space-y-4">
          {/* Simulated User Message Bubble */}
          <div className="flex justify-end">
            <div className="max-w-[85%] sm:max-w-[70%] rounded-2xl rounded-tr-sm bg-[#005c4b]/80 border border-emerald-500/30 p-3.5 sm:p-4 text-xs sm:text-sm text-slate-100 shadow-md space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-emerald-300 pb-1 border-b border-emerald-400/20">
                <span>You to Cruxeo Directorship</span>
                <span>Just Now</span>
              </div>
              <p className="leading-relaxed font-normal">{finalMessage}</p>
            </div>
          </div>

          {/* Simulated Cruxeo Response Bubble */}
          <div className="flex justify-start">
            <div className="max-w-[85%] sm:max-w-[75%] rounded-2xl rounded-tl-sm bg-slate-900/90 border border-white/10 p-3.5 sm:p-4 text-xs sm:text-sm text-slate-200 shadow-md space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-blue-400 pb-1 border-b border-white/10">
                <span className="font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Cruxeo Technical Directorship
                </span>
                <span className="text-slate-400">Automated Acknowledgment</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-light text-xs">
                Welcome to Cruxeo. Our flight coordinators and technical leads have received your dispatch. Send us your dates, venue, or floorplan for immediate assessment.
              </p>
            </div>
          </div>

          {/* Optional Custom Note Input */}
          <div className="pt-2">
            <div className="relative">
              <input
                type="text"
                value={customBrief}
                onChange={(e) => setCustomBrief(e.target.value)}
                placeholder="Optional: Add your event date, venue, or expected attendance here..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 hidden sm:inline-block">
                Appended to WhatsApp
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Action Execution Area: Primary Specular WhatsApp Trigger */}
      <div className="space-y-4 pt-2 relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <SpecularButton
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            size="lg"
            radius={20}
            tint="#10b981"
            tintOpacity={0.95}
            textColor="#030712"
            lineColor="#ffffff"
            baseColor="#065f46"
            intensity={1.2}
            idleIntensity={0.5}
            glow={1.3}
            followMouse
            className="w-full sm:w-auto text-base sm:text-lg font-extrabold shadow-[0_0_40px_rgba(16,185,129,0.55)] py-4 px-8 group"
          >
            <MessageCircle className="w-6 h-6 mr-3 fill-current text-slate-950 group-hover:scale-110 transition-transform" />
            <span>Launch WhatsApp Dialogue</span>
            <ArrowRight className="w-5 h-5 ml-2 text-slate-950 transition-transform group-hover:translate-x-1" />
          </SpecularButton>

          <a
            href={`tel:${companyConfig.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 text-white font-semibold text-sm transition-all"
          >
            <PhoneCall className="w-4 h-4 text-blue-400" />
            <span>Direct Voice Dial</span>
          </a>

          <a
            href={`mailto:${companyConfig.email}?subject=${encodeURIComponent(
              `RFP / Activation Brief - ${selectedIntent.label}`
            )}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/10 text-white font-semibold text-sm transition-all"
          >
            <Mail className="w-4 h-4 text-violet-400" />
            <span>Send Executive Deck</span>
          </a>
        </div>

        {/* Live Reliability Metrics Footer */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block text-lg font-bold font-mono text-emerald-400">&lt; 5 mins</span>
            <span className="text-[10px] font-mono text-slate-400 uppercase">First Response</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block text-lg font-bold font-mono text-blue-400">100% GCAA</span>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Airspace Licensed</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block text-lg font-bold font-mono text-purple-400">24/7 GCC</span>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Live Show Support</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block text-lg font-bold font-mono text-amber-400">0 Brokerage</span>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Direct Engineering</span>
          </div>
        </div>
      </div>
    </div>
  );
};
