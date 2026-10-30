import React from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { pricingPlansData } from "@/data/siteData";

export const PricingPlans: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3 block">
            Tailored Engagement Models
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Activation Packages for Every Scale
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From single-booth trade show installations to city-wide synchronized drone light shows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlansData.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative backdrop-blur-xl transition-all duration-300 ${
                plan.isPopular
                  ? "bg-slate-900/90 border-2 border-brand-blue shadow-glow-lg -translate-y-2"
                  : "bg-slate-950/80 border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue text-white text-xs font-semibold tracking-wide uppercase shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Popular Suite</span>
                </div>
              )}

              <div>
                <span className="text-xs font-semibold text-brand-cyan tracking-wider uppercase block mb-1">
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

