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
import { StarBurst } from "@/components/ui/StarBurst";
import { projectsData, blogPostsData } from "@/data/siteData";

export default function HomePage() {
  const allProjects = projectsData.slice(0, 4);
  const featuredBlogs = blogPostsData.slice(0, 3);

  return (
    <div className="flex flex-col w-full relative">
      {/* Dynamic Cosmic StarBurst Background across Entire Home Page */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <StarBurst
          speed={0.4}
          density={0.7}
          starCount={150}
          color="#38bdf8"
          starSize={0.4}
          brightness={1.3}
          opacity={0.8}
          centerX={0.5}
          centerY={0.4}
          flowerIntensity={0.35}
          twinkleSpeed={0.3}
          wobbleAmount={0.8}
          fadeHeight={4.0}
        />
      </div>

      {/* 1. High-Impact Hero with ShapeGrid Matrix & Specular Actions */}
      <HeroSection />

      {/* 2. Interactive Scroll-Expanding 1080p Video Reel */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/assets/video/IMG_7784.mp4"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-4 backdrop-blur-xl shadow-lg">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-mono text-blue-400">GCC Production Repertoire</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 leading-[1.15]">
                Landmark Activations. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
                  Engineered with Precision.
                </span>
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative w-full h-[380px] sm:h-[500px] lg:h-[600px] rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl p-2 sm:p-4 shadow-2xl overflow-hidden">
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
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/5 border border-white/10 mb-4 backdrop-blur-xl shadow-lg">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-mono text-blue-400">Engineering Knowledge & Trends</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 leading-[1.15]">
                Field Insights. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-violet-400">
                  Frontiers of Experience Tech.
                </span>
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
