"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-slate-900/80 border-brand-blue/40 shadow-sm"
                : "bg-slate-950/60 border-white/10 hover:border-white/20"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left text-white font-semibold text-base focus:outline-none"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                  isOpen ? "rotate-180 text-brand-cyan" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm text-slate-400 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

