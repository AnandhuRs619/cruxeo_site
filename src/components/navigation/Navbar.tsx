"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { SpecularButton } from "@/components/ui/SpecularButton";
import { StarBorder } from "@/components/ui/StarBorder";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 pt-2 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo - Official Cruxeo Light Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="relative w-20 sm:w-44 h-20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/brand/logo-light.png"
                alt="Cruxeo Experience"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Centered Floating Capsule with Animated StarBorder */}
          <StarBorder
            as="nav"
            radius={9999}
            color="#ce8ec4"
            trailColor="#ce8ec4"
            duration={12}
            stars={2}
            sparkle={true}
            glow={0.5}
            thickness={1}
            hover="lap"
            clickPulse={true}
            className={`hidden md:flex items-center gap-1.5 rounded-full transition-all duration-300 ${isScrolled
              ? "bg-slate-950/85 border border-white/15 backdrop-blur-xl shadow-2xl"
              : "bg-slate-950/70 border border-white/10 backdrop-blur-md"
              }`}
            style={
              {
                "--star-border-padding": "0.5rem 1.25rem",
                "--star-border-surface": "transparent",
                "--star-border-track": "transparent",
              } as React.CSSProperties
            }
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                    ? "text-white bg-white/10 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </StarBorder>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="hidden lg:inline-block text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign in / Register
            </Link>

            <SpecularButton
              href="/contact"
              variant="primary"
              size="sm"
              radius={14}
              starBorder={false}
              proximity={200}
              className="hidden sm:inline-flex"
            >
              Get Started
            </SpecularButton>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        currentPath={pathname}
      />
    </>
  );
};
