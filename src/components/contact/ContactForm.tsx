"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Send, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { companyConfig } from "@/data/siteData";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please provide a valid contact number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select an activation category"),
  eventDate: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Please provide at least 10 characters describing your project"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "Drone Light Shows (Ignispectra)",
      eventDate: "",
      budget: "$10,000 - $30,000",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate network submission to CRM endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl bg-slate-950/80 border border-emerald-500/30 p-8 sm:p-12 text-center backdrop-blur-xl animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received Successfully</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
          Thank you for reaching out to Cruxeo. Our creative engineering directors in Dubai will review your activation specifications and respond within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
            Submit Another Request
          </Button>
          <a
            href={`https://wa.me/${companyConfig.whatsapp}?text=Hi%20Cruxeo,%20I%20just%20submitted%20an%20RFP%20on%20your%20website.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl bg-slate-950/80 border border-white/10 p-6 sm:p-10 backdrop-blur-xl space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-2">
            Full Name <span className="text-rose-400">*</span>
          </label>
          <input
            {...register("fullName")}
            placeholder="e.g. Sarah Mansour"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
          />
          {errors.fullName && (
            <p className="text-rose-400 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Corporate Email */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-2">
            Work Email <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="sarah@agency.ae"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
          />
          {errors.email && (
            <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone / WhatsApp */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-2">
            Phone / WhatsApp Number <span className="text-rose-400">*</span>
          </label>
          <input
            {...register("phone")}
            placeholder="+971 50 123 4567"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
          />
          {errors.phone && (
            <p className="text-rose-400 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Company / Agency */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-2">
            Company or Event Agency
          </label>
          <input
            {...register("company")}
            placeholder="e.g. Apex Events Dubai"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Service Category */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-2">
            Primary Technology of Interest <span className="text-rose-400">*</span>
          </label>
          <select
            {...register("service")}
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
          >
            <option value="Drone Light Shows (Ignispectra)">Drone Light Shows (Ignispectra)</option>
            <option value="AI Photobooths & Avatars (Nexplay)">AI Photobooths & Avatars (Nexplay)</option>
            <option value="Interactive Touch & Gesture Kiosks (Synapse)">Interactive Touch & Gesture Kiosks (Synapse)</option>
            <option value="3D Holographic Projections (Lumen Lab)">3D Holographic Projections (Lumen Lab)</option>
            <option value="Robotic Camera Rig / Service Bots">Robotic Camera Rig / Service Bots</option>
            <option value="Custom Comprehensive Phygital Suite">Custom Comprehensive Phygital Suite</option>
          </select>
        </div>

        {/* Estimated Budget */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-2">
            Estimated Budget Range
          </label>
          <select
            {...register("budget")}
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
          >
            <option value="$10,000 - $30,000">$10,000 - $30,000 (Trade Show / Kiosk)</option>
            <option value="$30,000 - $75,000">$30,000 - $75,000 (Flagship Experience)</option>
            <option value="$75,000 - $150,000+">$75,000 - $150,000+ (Major Drone Spectacle)</option>
            <option value="Enterprise / Retainer">Enterprise Retainer / Multi-City Tour</option>
          </select>
        </div>
      </div>

      {/* Message / Project Brief */}
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-2">
          Project Brief / Event Details <span className="text-rose-400">*</span>
        </label>
        <textarea
          rows={4}
          {...register("message")}
          placeholder="Please describe your event location, expected dates, audience profile, and creative vision..."
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
        />
        {errors.message && (
          <p className="text-rose-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            <span>Transmitting Request...</span>
          </>
        ) : (
          <>
            <span>Submit Activation Request</span>
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
};

