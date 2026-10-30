import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { ShieldCheck, Cpu, Zap, Award } from "lucide-react";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { teamData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Us | Experiential Technology Pioneers",
  description:
    "Learn about Cruxeo's journey as Dubai's leading experiential marketing and creative technology agency, combining robotics, autonomous drone swarms, and neural AI.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2021",
      title: "Founding in Dubai",
      description: "Established in Dubai Silicon Oasis with a mission to replace passive event booths with interactive technology.",
    },
    {
      year: "2023",
      title: "Launch of Ignispectra Swarm Core",
      description: "Deployed our first 500-drone synchronized aerial light show over Dubai Harbour with full GCAA certification.",
    },
    {
      year: "2024",
      title: "Nexplay Neural Diffusion Engine",
      description: "Introduced on-premise zero-latency AI photobooths, deployed across 40+ premier summits in the UAE and Saudi Arabia.",
    },
    {
      year: "2026",
      title: "Next-Gen Volumetric Optics & Robotics",
      description: "Pioneering high-speed 6-axis robotic cinematography rigs and spatial holographic pedestals across the GCC.",
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-background text-slate-100">
      {/* Page Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-24">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3 block">
          About Cruxeo
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Architects of Wonder at the Intersection of Art & Robotics
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Headquartered in Dubai, Cruxeo is an experiential marketing and creative technology agency. We transform ordinary corporate gatherings and brand milestones into electrifying, multi-sensory memories.
        </p>
      </section>

      {/* Visual Break */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-slate-950">
          <Image
            src="/assets/images/about-creative-studio.jpg"
            alt="Cruxeo Innovation Philosophy"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Core Pillars / Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3 block">
            Our DNA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Built on Rigor, Driven by Magic
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-brand-blue flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Technical Mastery</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We engineer our own hardware arrays, calibrate RTK GPS swarm radios, and run localized AI models on dedicated GPU racks.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Zero-Latency Engagement</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              In live events, seconds matter. Our systems deliver AI morphing in under 8 seconds and gesture response within 16 milliseconds.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Dual Redundancy</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every major activation features failover ground control stations, backup power generators, and secondary hardware spares on-site.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">GCAA Certified</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fully compliant with UAE aviation regulations, airspace approvals, and safety protocols for flawless night sky execution.
            </p>
          </div>
        </div>
      </section>

      {/* Milestone Journey */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3 block">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Evolution in the UAE
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-white/10">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 pl-10 md:pl-0"
            >
              <div
                className={`w-full md:w-1/2 ${
                  idx % 2 === 0 ? "md:text-right" : "md:order-2 md:text-left"
                }`}
              >
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider block mb-1">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Center Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-blue border-4 border-slate-950 shadow-glow" />

              <div
                className={`hidden md:block w-1/2 ${
                  idx % 2 === 0 ? "order-2" : "order-1"
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ce8ec4] mb-3 block">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            The Visionaries Behind Cruxeo
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineers, creative technologists, and roboticists with deep roots in Dubai&apos;s innovation ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl bg-slate-950/80 border border-white/10 p-8 text-center backdrop-blur-xl hover:border-[#ce8ec4]/40 transition-all hover:shadow-glow"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-[#ce8ec4]/30 bg-slate-900">
                <Image src={member.avatar} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-xs font-medium text-[#00f5d4] uppercase tracking-wider mb-4">
                {member.role}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <CtaBanner />
    </div>
  );
}

