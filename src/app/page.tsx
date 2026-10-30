import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/hero/HeroSection";
import { ScrollExpandMedia } from "@/components/ui/scroll-expansion-hero";
import { ConnectionShowcase } from "@/components/hero/ConnectionShowcase";
import { BentoGrid } from "@/components/services/BentoGrid";
import { PricingPlans } from "@/components/services/PricingPlans";
import { TestimonialsSection } from "@/components/hero/TestimonialsSection";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { FlexCarousel, FlexCarouselItem } from "@/components/ui/FlexCarousel";
import { projectsData, blogPostsData } from "@/data/siteData";

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 2);
  const featuredBlogs = blogPostsData.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* 1. High-Impact Hero with AeroShards Interactive Wind Sculpture & Ticker */}
      <HeroSection />

      {/* 2. Interactive Scroll-Expanding Video Reel */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/assets/videos/hero-1080.webm"
        posterSrc="/assets/images/hero-poster.webp"
        bgImageSrc="/assets/images/contact-dubai-nightscape.jpg"
        title="Experiential Spectacle"
        date="Dubai · GCC"
        scrollToExpand="Scroll to Expand Video"
        textBlend
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00f5d4] mb-3 block">
            Proprietary Live Productions
          </span>
          <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Engineering Awe at Massive Scale
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From autonomous night-sky drone swarms to ultra-fine pitch LED pavilions, we fuse custom hardware, synchronized software, and on-site directorial mastery across the UAE and the GCC.
          </p>
        </div>
      </ScrollExpandMedia>


      {/* 3. Core Capabilities Bento Grid (Ignispectra, Nexplay, Synapse, Lumen Lab) */}
      <BentoGrid />

      {/* 4. Interactive Live Activation Gallery & Featured Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00f5d4] mb-3 block">
                Selected Work & Live Gallery
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Real Projects, Coordinated Delivery
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Explore our landmark experiential deployments across Dubai and the GCC. Drag to bend the fluid liquid lens or click any piece to inspect.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00f5d4] hover:text-white transition-colors shrink-0"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">


          {/* WebGL FlexCarousel Gallery Display */}
          <div className="relative w-full h-[540px] sm:h-[620px] rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl p-2 sm:p-4 shadow-2xl overflow-hidden mb-14">
            <FlexCarousel
              preset="liquid"
              intro="rise"
              cardHeight={0.54}
              gap={16}
              radius={20}
              fit="landscape"
              squeeze={0.2}
              focusOnClick
              captions
              autoplay
              interval={4.5}
            />
          </div>


        </div>
      </section>

      {/* 5. Pricing & Activation Packages */}
      <PricingPlans />

      {/* 6. Client Voices & Testimonials */}
      <TestimonialsSection />

      {/* 7. Industry Insights & Thoughts */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3 block">
                Knowledge & Trends
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Latest Insights from Our Lab
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-cyan-400 transition-colors"
            >
              <span>Read all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Conversion CTA Banner */}
      <CtaBanner />
    </div>
  );
}

