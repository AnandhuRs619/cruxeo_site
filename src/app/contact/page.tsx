import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Globe as GlobeIcon,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { FAQAccordion } from "@/components/contact/FAQAccordion";
import { Globe } from "@/components/ui/Globe";
import { companyConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact & Fast-Track Inquiries | Cruxeo Dubai",
  description:
    "Connect directly with Cruxeo's Dubai technical production directors on WhatsApp or telephone. Instant feasibility, pricing, and drone airspace clearances across the UAE and GCC.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(
    "Hello Cruxeo team, I would like to inquire about an upcoming project in the UAE/GCC."
  )}`;

  return (
    <div className="pt-32 pb-24 bg-background text-slate-100 relative overflow-hidden">
      {/* Background Ambient Unified Cruxeo Blue & Violet Halo Glows */}
      <div className="absolute top-16 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/12 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-52 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none -z-10" />

      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-12 relative z-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#38bdf8] mb-3 block font-mono">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Let&apos;s Engineer an Unforgettable Experience
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Tell us about your upcoming event, brand launch, or festival in the UAE or GCC. Our technical directors will engineer the ideal solution.
        </p>
      </section>

      {/* Visual Ambient Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="relative w-full h-44 sm:h-60 rounded-3xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
          <Image
            src="/assets/images/contact-dubai-nightscape.jpg"
            alt="Cruxeo Dubai Headquarters"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-4 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="text-xs font-mono text-white tracking-wider">
              DUBAI SILICON OASIS & BUSINESS BAY
            </span>
          </div>
        </div>
      </section>

      {/* Main Grid: Left side 3D Globe, Right side Direct Contact Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT SIDE: 3D Dotted Globe with Animated Arcs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="rounded-3xl bg-slate-950/90 border border-white/10 overflow-hidden backdrop-blur-2xl relative shadow-2xl flex-1 flex flex-col justify-between">
              <div className="p-6 pb-2 border-b border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400 block">
                    Global Reach
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Experiential Operations Network
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-400">
                  <GlobeIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>Dubai Hub</span>
                </div>
              </div>

              {/* 3D Interactive Canvas */}
              <div className="relative w-full my-auto">
                <Globe />
              </div>

              <div className="p-4 bg-slate-900/40 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Direct flights & on-site deployment across GCC</span>
                <span className="font-mono text-white text-[11px]">24/7 Response</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Direct Contact Channels with CTA button (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="rounded-3xl bg-slate-950/90 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl relative shadow-2xl flex-1 flex flex-col justify-between space-y-6">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 rounded-t-3xl" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Direct Communication</span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">
                    Average reply &lt; 15 min
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  Direct Contact Channels
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  Connect directly with our Dubai technical production directors for immediate feasibility, pricing, and rapid quotes.
                </p>

                {/* WhatsApp Call to Action Button */}
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mb-6"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chat on WhatsApp (+{companyConfig.whatsapp})</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* 4 Direct Communication Channels Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all group"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white group-hover:text-emerald-300">
                        WhatsApp Desk
                      </h5>
                      <span className="text-[11px] font-mono text-emerald-400 block mt-0.5">
                        +{companyConfig.whatsapp}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Office Phone
                      </h5>
                      <a
                        href={`tel:${companyConfig.phone}`}
                        className="text-xs font-bold text-white hover:text-blue-400 transition-colors"
                      >
                        {companyConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Direct Email
                      </h5>
                      <a
                        href={`mailto:${companyConfig.email}`}
                        className="text-xs font-bold text-white hover:text-blue-400 transition-colors"
                      >
                        {companyConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Hours (GST)
                      </h5>
                      <p className="text-[11px] text-slate-300">Sun–Thu: 9 AM–6 PM</p>
                    </div>
                  </div>
                </div>

                {/* Location Badge */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white">HQ:</strong> {companyConfig.location}
                  </p>
                </div>
              </div>

              {/* Bottom Assurance Strip */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Airspace Feasibility Clearance</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Zap className="w-3 h-3" />
                  <span>Dubai GST Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#38bdf8] mb-2 block font-mono">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <FAQAccordion />
      </section>
    </div>
  );
}
