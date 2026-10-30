"use client";

import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/data/siteData";
import { StarBorder } from "@/components/ui/StarBorder";

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Drone Shows",
    "AI & Robotics",
    "Interactive Kiosks",
    "Holograms & AR",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <StarBorder
              key={category}
              as="button"
              radius={9999}
              stars={1}
              duration={8}
              color={isActive ? "#ffffff" : "#ce8ec4"}
              trailColor={isActive ? "#60a5fa" : "#ce8ec4"}
              glow={0.5}
              sparkle={true}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none ${
                isActive
                  ? "bg-brand-blue text-white shadow-glow border border-blue-400/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
              style={
                {
                  "--star-border-padding": "0.5rem 1.25rem",
                  "--star-border-surface": "transparent",
                  "--star-border-track": "transparent",
                } as React.CSSProperties
              }
            >
              {category}
            </StarBorder>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

