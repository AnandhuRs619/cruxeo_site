export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  suite: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  metrics: string;
  badge: string;
  image: string;
  video?: string;
  accentColor?: string;
  gradient?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Drone Shows" | "AI & Robotics" | "Interactive Kiosks" | "Holograms & AR" | "Live Spectacles" | "AI & Software";
  client: string;
  location: string;
  year: string;
  summary: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  image: string;
  video?: string;
  technologies: string[];
  division?: "NEXPLAY" | "LUMEN LAB" | "IGNISPECTRA" | "SYNAPSE";
  divisionAccent?: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatar: string;
  event: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tier: "Starter" | "Flagship" | "Spectacle";
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

