import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, MapPin, Mail, Phone, ChevronUp } from "lucide-react";
import { companyConfig } from "@/data/siteData";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#02050e] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-blue/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info & Mission (Cols 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-44 h-12">
                <Image
                  src="/assets/brand/logo-light.png"
                  alt="Cruxeo Experience"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              {companyConfig.description}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-blue hover:bg-brand-blue/10 transition-all text-xs"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={companyConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-blue hover:bg-brand-blue/10 transition-all text-xs"
                aria-label="LinkedIn"
              >
                IN
              </a>
              <a
                href={companyConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-blue hover:bg-brand-blue/10 transition-all text-xs"
                aria-label="X Twitter"
              >
                X
              </a>
              <a
                href={`https://wa.me/${companyConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-xs font-medium transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services & Tech
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Cruxeo
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Insights & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Experiential Tech Suites */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Technology Suites
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#ignispectra" className="hover:text-white transition-colors">
                  Ignispectra Drone Shows
                </Link>
              </li>
              <li>
                <Link href="/services#nexplay" className="hover:text-white transition-colors">
                  Nexplay AI Photobooths
                </Link>
              </li>
              <li>
                <Link href="/services#synapse" className="hover:text-white transition-colors">
                  Synapse Gesture Kiosks
                </Link>
              </li>
              <li>
                <Link href="/services#lumen-lab" className="hover:text-white transition-colors">
                  Lumen Lab 3D Holograms
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Automated Content Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Dubai Headquarters & Direct Reach */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Dubai Office
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>Dubai Silicon Oasis & Business Bay, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`tel:${companyConfig.phone}`} className="hover:text-white">
                  {companyConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`mailto:${companyConfig.email}`} className="hover:text-white">
                  {companyConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>© {new Date().getFullYear()} {companyConfig.legalName}. All rights reserved. Dubai, United Arab Emirates.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500">Designed with Fyntic Precision</span>
            <a
              href="#top"
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

