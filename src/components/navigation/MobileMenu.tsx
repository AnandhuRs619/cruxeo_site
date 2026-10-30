"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 pt-24 animate-in fade-in duration-200">
      <div className="flex flex-col space-y-3">
        {links.map((link) => {
          const isActive = currentPath === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`text-2xl font-semibold py-3 px-4 rounded-2xl transition-all ${
                isActive
                  ? "text-white bg-white/10 border border-white/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
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

        <div className="space-y-2 text-xs text-slate-400 pt-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-cyan" />
            <span>Dubai Silicon Oasis & Business Bay, Dubai, UAE</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-brand-cyan" />
            <span>+971 54 545 4891</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-cyan" />
            <span>info@cruxeo.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

