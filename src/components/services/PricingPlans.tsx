import React from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { pricingPlansData } from "@/data/siteData";

export const PricingPlans: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-4 backdrop-blur-xl shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-blue-400">Tailored GCC Engagement Models</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
            Activation Packages. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
              For Every Stage & Scale.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            From single-booth trade show installations to city-wide synchronized drone light shows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingPlansData.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-[24px] sm:rounded-[28px] p-5 sm:p-8 flex flex-col justify-between relative backdrop-blur-xl transition-all duration-300 ${
                plan.isPopular
                  ? "bg-slate-900/90 border-2 border-blue-500 shadow-glow-lg lg:-translate-y-2"
                  : "bg-slate-950/80 border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold tracking-wide uppercase shadow-md flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Popular Suite</span>
                </div>
              )}

              <div>
                <span className="text-xs font-mono font-bold text-blue-400 tracking-wider uppercase block mb-1">
                  {plan.tier}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{plan.description}</p>

                <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-blue-500/20 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                href="/contact"
                variant={plan.isPopular ? "primary" : "outline"}
                size="md"
                className="w-full"
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

