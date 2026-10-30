import React from "react";
import Link from "next/link";
import { ArrowRight, Film } from "lucide-react";
import { HeroSection } from "@/components/hero/HeroSection";
import { ScrollExpandMedia } from "@/components/ui/scroll-expansion-hero";
import { CinematicReelGrid } from "@/components/hero/CinematicReelGrid";
import { TechHardwareShowcase } from "@/components/tech/TechHardwareShowcase";
import { BentoGrid } from "@/components/services/BentoGrid";
import { VisualShowcaseGrid } from "@/components/hero/VisualShowcaseGrid";
import { PricingPlans } from "@/components/services/PricingPlans";
import { TestimonialsSection } from "@/components/hero/TestimonialsSection";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { FlexCarousel } from "@/components/ui/FlexCarousel";
import { projectsData, blogPostsData } from "@/data/siteData";

export default function HomePage() {
  const allProjects = projectsData.slice(0, 4);
  const featuredBlogs = blogPostsData.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* 1. High-Impact Hero with ShapeGrid Matrix & Specular Actions */}
      <HeroSection />

      {/* 2. Interactive Scroll-Expanding 1080p Video Reel */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/assets/videos/hero-1080.webm"
        posterSrc="/assets/images/hero-poster.webp"
        bgImageSrc="/assets/images/contact-dubai-nightscape.jpg"
        title="Live Production Reel"
        date="Dubai · GCC"
        scrollToExpand="Scroll to Expand Video"
        textBlend
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-2 block">
            Dubai · UAE
          </span>
          <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-2">
            Engineering Awe at Massive Scale
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm font-mono">
            1,200 UAVs · 6-Axis Robotics · Volumetric 3D Holograms · Zero-Latency Spatial Tech
          </p>
        </div>
      </ScrollExpandMedia>

      {/* 3. Live Deployment 4K Video Reels (Ignispectra, Nexplay, Lumen Lab, Synapse) */}
      <CinematicReelGrid />

      {/* 4. Interactive Tech & Robotics Command Deck (Drones, Robotic Arms, Holograms, Radar) */}
      {/* <TechHardwareShowcase /> */}

      {/* 5. Four Specialist Divisions Bento Grid */}
      <BentoGrid />

      {/* 7. Landmark Activations: 4 Flagship Projects with 4K Video Reels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#38bdf8] bg-blue-500/10 border border-blue-500/25 mb-3">
                <Film className="w-3.5 h-3.5 text-[#38bdf8]" />
                Field Repertoire
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Featured Deployments
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#38bdf8] hover:text-white transition-colors shrink-0"
            >
              <span>View all 4 projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. WebGL Liquid Refraction Gallery Display */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative w-full h-[520px] sm:h-[600px] rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl p-2 sm:p-4 shadow-2xl overflow-hidden">
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

      {/* 9. Pricing & Engagement Packages */}
      <PricingPlans />

      {/* 10. Client Voices & Testimonials */}
      <TestimonialsSection />

      {/* 11. Industry Insights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#38bdf8] mb-3 block font-mono">
                Knowledge & Trends
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Latest Field Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#38bdf8] hover:text-white transition-colors"
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

      {/* 12. Conversion CTA Banner */}
      <CtaBanner />
    </div>
  );
}
