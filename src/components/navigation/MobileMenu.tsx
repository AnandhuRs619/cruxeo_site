"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
  currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
  currentPath,
}) => {
  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 pt-20 animate-in fade-in duration-200 overflow-y-auto">
      {/* Top Close Row */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
          Navigation Menu
        </span>
        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col space-y-2.5 my-auto">
        {links.map((link) => {
          const isActive = currentPath === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`text-xl sm:text-2xl font-semibold py-3 px-4 rounded-2xl transition-all ${
                isActive
                  ? "text-white bg-blue-500/15 border border-blue-400/30 font-bold"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="pt-6 border-t border-white/10 space-y-4">
        <Button href="/contact" variant="primary" size="lg" className="w-full" onClick={onClose}>
          <span>Schedule Activation</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        <div className="space-y-2 text-xs text-slate-400 pt-1">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="truncate">Dubai Silicon Oasis & Business Bay, UAE</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-400 shrink-0" />
            <span>+971 54 545 4891</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-400 shrink-0" />
            <span>info@cruxeo.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};


