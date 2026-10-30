import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SpecularButton } from "@/components/ui/SpecularButton";
import { companyConfig } from "@/data/siteData";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-950/70 via-slate-950 to-slate-900 border border-brand-blue/30 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-blue/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3 block">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Ready to Electrify Your Next Brand Activation?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
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

