import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, Globe as GlobeIcon } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQAccordion } from "@/components/contact/FAQAccordion";
import { Globe } from "@/components/ui/Globe";
import { companyConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact & RFP Inquiries | Cruxeo Dubai",
  description:
    "Request a proposal or discuss your brand activation with Cruxeo in Dubai. Phone: +971 54 545 4891. Drone light shows, AI photobooths, and robotics.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-background text-slate-100">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#00f5d4] mb-3 block">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative w-full h-44 sm:h-60 rounded-3xl overflow-hidden border border-white/10 bg-slate-950">
          <Image
            src="/assets/images/contact-dubai-nightscape.jpg"
            alt="Cruxeo Dubai Headquarters"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse" />
            <span className="text-xs font-mono text-white tracking-wider">
              DUBAI SILICON OASIS & BUSINESS BAY
            </span>
          </div>
        </div>
      </section>

      {/* Main Grid: Left side 3D Globe & Contacts, Right side Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT SIDE: 3D Dotted Globe with Animated Arcs & Direct Info (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* 3D Dotted Globe Card */}
            <div className="rounded-3xl bg-slate-950/90 border border-white/10 overflow-hidden backdrop-blur-2xl relative shadow-2xl">
              <div className="p-6 pb-2 border-b border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-blue block">
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
              <div className="relative w-full">
                <Globe />
              </div>

              <div className="p-4 bg-slate-900/40 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Direct flights & on-site deployment across GCC</span>
                <span className="font-mono text-white text-[11px]">24/7 Response</span>
              </div>
            </div>

            {/* Direct Communication Details */}
            <div className="rounded-3xl bg-slate-950/80 border border-white/10 p-6 backdrop-blur-xl space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
                Direct Contact Channels
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${companyConfig.whatsapp}`}
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
                  <Phone className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Office Phone
                    </h5>
                    <a
                      href={`tel:${companyConfig.phone}`}
                      className="text-xs font-bold text-white hover:text-brand-cyan transition-colors"
                    >
                      {companyConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <Mail className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Direct Email
                    </h5>
                    <a
                      href={`mailto:${companyConfig.email}`}
                      className="text-xs font-bold text-white hover:text-brand-cyan transition-colors"
                    >
                      {companyConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <Clock className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
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
                <MapPin className="w-4 h-4 text-[#00f5d4] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">HQ:</strong> {companyConfig.location}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Contact Form (6 cols) */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-2 block">
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
