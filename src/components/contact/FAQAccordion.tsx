"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData } from "@/data/siteData";

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-slate-900/90 border-blue-500/40 shadow-[0_0_25px_-5px_rgba(11,92,255,0.2)]"
                : "bg-slate-950/60 border-white/10 hover:border-white/20 hover:bg-slate-950/80"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left text-white font-semibold text-sm sm:text-base focus:outline-none transition-colors"
            >
              <span className="flex items-center gap-3">
                <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? "text-blue-400" : "text-slate-500"}`} />
                <span>{faq.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                  isOpen ? "rotate-180 text-blue-400" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200 font-light">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
