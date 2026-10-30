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
    <div className="pt-32 pb-20 bg-background text-slate-100 relative overflow-hidden">
      {/* Background Ambient Unified Cruxeo Blue & Violet Glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/12 blur-[150px] pointer-events-none" />
      <div className="absolute top-60 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[160px] pointer-events-none" />

      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-16 relative z-10">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 block">
          Thoughts & Research // Lab Dispatches
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          Insights on the Future of Experiential Tech
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
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

