"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, Mail, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { companyConfig } from "@/data/siteData";

const TOPICS = [
  { id: "drones", label: "Drone Light Shows (Ignispectra)" },
  { id: "robotics", label: "Robotic Rigs & Glambot (Nexplay)" },
  { id: "holograms", label: "3D Holograms & LED (Lumen Lab)" },
  { id: "software", label: "AI & Custom Software (Synapse)" },
];

export const ContactCtaCard: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0].label);

  const whatsappMessage = encodeURIComponent(
    `Hello Cruxeo team, I would like to inquire about ${selectedTopic} for an upcoming project in the UAE/GCC.`
  );

  const whatsappUrl = `https://wa.me/${companyConfig.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="rounded-3xl bg-slate-950/90 border border-white/10 p-6 sm:p-8 lg:p-9 backdrop-blur-2xl relative shadow-2xl overflow-hidden flex flex-col justify-between space-y-6">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600" />

      {/* Ambient Glow */}
      <div className="absolute -top-28 -right-28 w-72 h-72 rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Fast-Track Direct Line</span>
          </div>

          <span className="text-[11px] font-mono text-slate-400">
            Avg reply &lt; 15 min
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
          Connect Directly on WhatsApp
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
          Skip traditional email forms. Connect directly with our Dubai technical production directors for immediate project feasibility, pricing, and rapid quotes.
        </p>

        {/* Quick Topic Selector */}
        <div className="space-y-2 mb-6">
          <label className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block">
            Select Your Project Scope:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {TOPICS.map((topic) => {
              const isSelected = selectedTopic === topic.label;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedTopic(topic.label)}
                  className={`text-left p-3 rounded-xl border text-xs transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? "bg-blue-600/20 border-blue-400 text-white font-semibold shadow-sm"
                      : "bg-white/[0.03] border-white/5 text-slate-300 hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="truncate">{topic.label.split(" (")[0]}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message Preview Box */}
        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 mb-6">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
            Live Dispatch Preview
          </span>
          <p className="text-xs font-mono text-slate-300 italic">
            &ldquo;Hello Cruxeo team, I would like to inquire about {selectedTopic} for an upcoming project in the UAE/GCC.&rdquo;
          </p>
        </div>

        {/* Primary High-Impact WhatsApp CTA Button */}
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Start WhatsApp Chat (+{companyConfig.whatsapp})</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Alternative Direct Channels */}
      <div className="pt-5 border-t border-white/10 space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono uppercase tracking-wider">Alternative Direct Channels</span>
          <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
            <Zap className="w-3 h-3" />
            Dubai GST Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={`tel:${companyConfig.phone}`}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 text-slate-200 hover:text-white transition-all text-xs font-medium"
          >
            <Phone className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="truncate">Call: {companyConfig.phone}</span>
          </a>

          <a
            href={`mailto:${companyConfig.email}`}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 text-slate-200 hover:text-white transition-all text-xs font-medium"
          >
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="truncate">Email: {companyConfig.email}</span>
          </a>
        </div>

        {/* Assurance badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Airspace Feasibility Clearance</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>NDA Protected</span>
          </div>
        </div>
      </div>
    </div>
  );
};
