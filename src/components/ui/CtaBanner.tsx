import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SpecularButton } from "@/components/ui/SpecularButton";
import { companyConfig } from "@/data/siteData";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto rounded-[32px] bg-gradient-to-b from-slate-950/90 via-slate-900/70 to-slate-950/90 border border-white/10 hover:border-blue-500/40 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl backdrop-blur-2xl transition-all duration-500">
        {/* Unified Ambient Glow Orbs */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[220px] bg-blue-600/15 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[450px] h-[220px] bg-violet-600/15 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-6 backdrop-blur-xl shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-blue-400">Direct GCC Engagements & Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Ready to Electrify. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
              Your Next Brand Activation?
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-normal">
            Whether you need a 1,000-drone aerial light show or a high-impact AI booth for GITEX, our Dubai creative engineering team is ready to deliver.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <SpecularButton
              href={`https://wa.me/${companyConfig.whatsapp}`}
              size="lg"
              radius={18}
              tint="#10b981"
              tintOpacity={0.12}
              textColor="#34d399"
              lineColor="#6ee7b7"
              baseColor="#065f46"
              intensity={1.1}
              idleIntensity={0.3}
              glow={1.1}
              followMouse
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Instant WhatsApp Inquiry</span>
            </SpecularButton>
          </div>
        </div>
      </div>
    </section>
  );
};

