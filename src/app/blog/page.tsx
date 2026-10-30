import React from "react";
import { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { blogPostsData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Insights & Industry Articles | Blog",
  description:
    "Read the latest thought leadership and experiential technology trends from Cruxeo's Dubai lab: drone shows, AI generative photobooths, and spatial computing.",
};

export default function BlogIndexPage() {
  return (
    <div className="pt-32 pb-20 bg-background text-slate-100">
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3 block">
          Thoughts & Research
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Insights on the Future of Experiential Tech
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Deep dives into autonomous drone swarm choreographies, real-time diffusion models, and phygital retail architectures.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

