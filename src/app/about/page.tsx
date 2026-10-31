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
    <div className="pt-32 pb-20 bg-transparent text-slate-100 relative overflow-hidden">
      {/* Background Ambient Unified Cruxeo Blue & Violet Glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/12 blur-[150px] pointer-events-none" />
      <div className="absolute top-60 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[160px] pointer-events-none" />

      {/* Page Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-24 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-6 backdrop-blur-xl shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-mono text-blue-400">About Cruxeo // Dubai Innovation</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Architects of Wonder. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
            At the Intersection of Art & Robotics.
          </span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Headquartered in Dubai, Cruxeo is an experiential marketing and creative technology agency. We transform ordinary corporate gatherings and brand milestones into electrifying, multi-sensory memories.
        </p>
      </section>

      {/* Visual Break */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="relative w-full h-[320px] sm:h-[450px] rounded-[32px] overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
          <Image
            src="/assets/images/about-creative-studio.jpg"
            alt="Cruxeo Innovation Philosophy"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Core Pillars / Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-6 backdrop-blur-xl shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-blue-400">Our DNA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
            Built on Rigor. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
              Driven by Creative Magic.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
            Four foundational pillars powering every robotic spectacle and neural installation we engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-[28px] bg-slate-950/80 border border-white/10 hover:border-blue-500/30 backdrop-blur-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Technical Mastery</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We engineer our own hardware arrays, calibrate RTK GPS swarm radios, and run localized AI models on dedicated GPU racks.
            </p>
          </div>

          <div className="p-8 rounded-[28px] bg-slate-950/80 border border-white/10 hover:border-blue-500/30 backdrop-blur-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Speed to Market</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              From initial creative render to live Dubai activation, our agile hardware-software sprints ensure execution without lag.
            </p>
          </div>

          <div className="p-8 rounded-[28px] bg-slate-950/80 border border-white/10 hover:border-blue-500/30 backdrop-blur-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Airspace Compliance</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fully licensed for UAE civil aviation, GCAA permits, municipal event logistics, and crowd safety protocols.
            </p>
          </div>

          <div className="p-8 rounded-[28px] bg-slate-950/80 border border-white/10 hover:border-blue-500/30 backdrop-blur-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Artistic Vision</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Technology is merely the paintbrush. Storytelling, emotional resonance, and viral memories are the true masterpiece.
            </p>
          </div>
        </div>
      </section>

      {/* Chronological Journey / Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-6 backdrop-blur-xl shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-blue-400">Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
            Our Evolution. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
              Across the Emirates.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
            From our foundation in Dubai Silicon Oasis to GCC-wide aerial and neural diffusion deployments.
          </p>
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
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Center Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 shadow-glow" />

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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-6 backdrop-blur-xl shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-blue-400">Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
            The Visionaries. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
              Behind Cruxeo Experience.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
            Engineers, creative technologists, and roboticists with deep roots in Dubai&apos;s innovation ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="rounded-[28px] bg-slate-950/80 border border-white/10 p-8 text-center backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 hover:shadow-glow"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-blue-500/30 bg-slate-900">
                <Image src={member.avatar} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider mb-4">
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
