import { ServiceItem, ProjectItem, BlogPostItem, TestimonialItem, TeamMember, PricingPlan } from "@/types";

export const companyConfig = {
  name: "Cruxeo",
  legalName: "Cruxeo LLC",
  tagline: "Experiential Marketing & Creative Technology Agency",
  motto: "Transforming events with immersive technology and interactive brand experiences.",
  description:
    "Cruxeo is Dubai's leading experiential marketing agency delivering drone light shows, 3D holograms, AR/VR, AI photo booths, robotics, and immersive brand activations across UAE and the GCC.",
  location: "Dubai Silicon Oasis & Business Bay, Dubai, United Arab Emirates",
  phone: "+971 54 545 4891",
  whatsapp: "971545454891",
  email: "info@cruxeo.com",
  socials: {
    instagram: "https://www.instagram.com/cruxeoexperience",
    facebook: "https://www.facebook.com/share/1G3ZpqwkTm/",
    youtube: "https://youtube.com/@cruxeoexperience",
    linkedin: "https://linkedin.com/company/cruxeo",
    twitter: "https://x.com/cruxeoexperience",
  },
};

export const heroTickerItems = [
  "Ignispectra Drone Shows",
  "Nexplay AI Photobooths",
  "Lumen Lab 3D Holograms",
  "Touch & Gesture Kiosks",
  "AR / VR Experiences",
  "Projection Mapping",
  "Kinetic Activations",
  "Robotic Camera Arms",
  "LED Displays & Interactive Games",
  "Phygital Brand Activations",
  "Experiential Marketing UAE",
];

export const servicesData: ServiceItem[] = [
  {
    id: "nexplay",
    slug: "event-technology-interactive-experiences",
    title: "Event Technology & Interactive Experiences",
    suite: "NEXPLAY by CRUXEO",
    tagline: "Play. Interact. Connect.",
    description:
      "Interactive event activations, AI photo booths, gesture kiosks, and robotic camera rigs engineered to immerse audiences and spark viral social sharing.",
    iconName: "Bot",
    features: [
      "AI & glambot booths with branded output",
      "Interactive radar touch walls & kiosks",
      "Branded digital games & simulators",
      "RFID badge tracking & live leaderboards",
    ],
    metrics: "<15ms Interaction Latency",
    badge: "Interactive & Event Tech",
    image: "/assets/images/nexplay.jpg",
    video: "/assets/videos/nexplay.mp4",
    accentColor: "#a855f7",
    gradient: "linear-gradient(90deg, #8b5cf6 0%, #d946ef 100%)",
  },
  {
    id: "lumen-lab",
    slug: "audiovisual-systems-creative-production",
    title: "Audiovisual Systems & Creative Production",
    suite: "LUMEN LAB by CRUXEO",
    tagline: "Imagine. Create. Illuminate.",
    description:
      "Broadcast-grade curved LED walls, floating holographic fan arrays, architectural projection mapping, and bespoke 3D anamorphic brand CGI.",
    iconName: "Box",
    features: [
      "Curved & transparent ultra-fine LED walls",
      "Holographic fan matrices & 3D showcases",
      "Architectural facade projection mapping",
      "CGI, VFX & anamorphic brand spectacles",
    ],
    metrics: "7680Hz Broadcast Refresh",
    badge: "Audiovisual & Production",
    image: "/assets/images/lumen-lab.jpg",
    video: "/assets/videos/lumen-lab.mp4",
    accentColor: "#00f5d4",
    gradient: "linear-gradient(90deg, #00c2ff 0%, #00f5d4 100%)",
  },
  {
    id: "ignispectra",
    slug: "drone-shows-live-spectacles",
    title: "Drone Shows & Live Spectacles",
    suite: "IGNISPECTRA by CRUXEO",
    tagline: "Ignite. Illuminate. Astonish.",
    description:
      "Synchronized drone light swarms, pyromusical fireworks, and high-power architectural lasers combined into one seamless celestial show.",
    iconName: "Sparkles",
    features: [
      "Dynamic 3D aerial drone formations (100–1,500+ UAVs)",
      "Synchronized pyrotechnics & pyromusicals",
      "High-power laser beam arrays & effects",
      "Airspace feasibility & full civil aviation permits",
    ],
    metrics: "500+ Drones in Formation",
    badge: "Drones & Live Shows",
    image: "/assets/images/ignispectra.jpg",
    video: "/assets/videos/ignispectra.mp4",
    accentColor: "#ffb12b",
    gradient: "linear-gradient(90deg, #e96a16 0%, #ffb12b 100%)",
  },
  {
    id: "synapse",
    slug: "ai-design-custom-software",
    title: "AI, Design & Custom Software",
    suite: "SYNAPSE by CRUXEO",
    tagline: "Think. Build. Evolve.",
    description:
      "Proprietary enterprise AI assistants, automated workflow pipelines, bespoke operation dashboards, and intelligent digital platforms.",
    iconName: "Touchpad",
    features: [
      "Enterprise knowledge & quotation AI assistants",
      "Automated CRM, messaging & WhatsApp pipelines",
      "Custom portals, analytics & event scheduling",
      "Rapid phased pilots & secure private hosting",
    ],
    metrics: "100% Approved Accuracy",
    badge: "AI & Software",
    image: "/assets/images/synapse.jpg",
    video: "/assets/videos/synapse.mp4",
    accentColor: "#38b58b",
    gradient: "linear-gradient(90deg, #009b83 0%, #38b58b 100%)",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "aerial-symphony-spectacle",
    slug: "aerial-symphony-spectacle",
    title: "Aerial Symphony Spectacle",
    category: "Drone Shows",
    client: "Global Tech Summit & UAE Authority",
    location: "Dubai Marina & Bluewaters Island",
    year: "2026",
    summary:
      "500+ synchronized drones choreographing 3D brand logos and kinetic constellations in sync with architectural searchlights and musical pyrotechnics.",
    impactMetrics: [
      { label: "Drones in Formation", value: "500+" },
      { label: "Aviation Safety", value: "100% GCAA" },
      { label: "Live Spectators", value: "85,000+" },
    ],
    image: "/assets/images/work-aerial-symphony.jpg",
    video: "/assets/videos/work-aerial-symphony.mp4",
    technologies: ["Ignispectra Swarm Core", "RTK-GPS Precision", "Timecode Sound Sync"],
    division: "IGNISPECTRA",
    divisionAccent: "#ffb12b",
  },
  {
    id: "immersive-hologram-pavilion",
    slug: "immersive-hologram-pavilion",
    title: "Immersive Hologram Pavilion",
    category: "Holograms & AR",
    client: "Cultural & Tourism Authority",
    location: "Al Fahidi Historical District, Dubai",
    year: "2026",
    summary:
      "Ultra-fine pitch curved LED wall paired with floating holographic fan arrays and 3D volumetric show content for a high-traffic visitor pavilion.",
    impactMetrics: [
      { label: "Broadcast Refresh", value: "7680Hz" },
      { label: "Color Accuracy", value: "DCI-P3" },
      { label: "Visitor Satisfaction", value: "99.4%" },
    ],
    image: "/assets/images/work-immersion-led.jpg",
    video: "/assets/videos/work-immersion-led.mp4",
    technologies: ["Lumen Lab Volumetric Fans", "Spatial Audio Array", "LiDAR Audience Triggering"],
    division: "LUMEN LAB",
    divisionAccent: "#00f5d4",
  },
  {
    id: "interactive-radar-touch-arena",
    slug: "interactive-radar-touch-arena",
    title: "Interactive Radar-Touch Arena",
    category: "AI & Robotics",
    client: "Tier-1 Cloud Provider",
    location: "Dubai World Trade Centre (DWTC)",
    year: "2025",
    summary:
      "Multi-touch video wall and motion-tracking interactive floor with custom branded challenges, handling thousands of guests with zero queue bottleneck.",
    impactMetrics: [
      { label: "Interaction Latency", value: "<15ms" },
      { label: "Concurrent Players", value: "64+" },
      { label: "Lead Capture Rate", value: "98.2%" },
    ],
    image: "/assets/images/work-radar-arena.jpg",
    video: "/assets/videos/work-radar-arena.mp4",
    technologies: ["Nexplay AI Engine", "Localized Diffusion Models", "Instant WhatsApp Pipeline"],
    division: "NEXPLAY",
    divisionAccent: "#a855f7",
  },
  {
    id: "enterprise-ai-knowledge-assistant",
    slug: "enterprise-ai-knowledge-assistant",
    title: "Enterprise AI Knowledge Assistant",
    category: "Interactive Kiosks",
    client: "Enterprise Financial Group",
    location: "Dubai International Financial Centre (DIFC)",
    year: "2025",
    summary:
      "Private enterprise AI assistant and automated qualification system answering inquiries, capturing briefs, and instantly dispatching qualified leads.",
    impactMetrics: [
      { label: "Approved Content", value: "100%" },
      { label: "Response Latency", value: "<1.2s" },
      { label: "Direct Leads", value: "1,240+" },
    ],
    image: "/assets/images/work-enterprise-ai.jpg",
    video: "/assets/videos/work-enterprise-ai.mp4",
    technologies: ["Synapse Core AI", "Enterprise Vector Store", "Automated CRM Dispatch"],
    division: "SYNAPSE",
    divisionAccent: "#38b58b",
  },
];

export const deliveryProcessData = [
  {
    step: "01 / 04",
    title: "Brief",
    description:
      "You tell us the goal, date, venue, and audience. We evaluate site feasibility, space, power, and regulatory requirements.",
    deliverables: [
      "Brief evaluation",
      "Site & airspace feasibility",
      "Initial division scoping",
      "Clear next steps",
    ],
  },
  {
    step: "02 / 04",
    title: "Concept and Scope",
    description:
      "We propose the creative idea, the technology, visual previs, and a transparent, itemized quotation.",
    deliverables: [
      "Creative concept proposal",
      "Previs & simulation",
      "Technical rider review",
      "Fixed-scope quote",
    ],
  },
  {
    step: "03 / 04",
    title: "Design and Production",
    description:
      "Content, hardware, and software are custom-built, programmed, and bench-tested before shipping to the venue.",
    deliverables: [
      "Content & CGI production",
      "Hardware bench testing",
      "Timecode synchronization",
      "Rehearsal verification",
    ],
  },
  {
    step: "04 / 04",
    title: "Delivery and Support",
    description:
      "Our dedicated technical crew installs, operates, and supports the experience on site from doors open to strike.",
    deliverables: [
      "On-site setup & calibration",
      "Live show execution",
      "Dedicated technician crew",
      "Strike & wrap-up",
    ],
  },
];

export const clientLogos = [
  { name: "Partner 1", logo: "/assets/images/partner-1.svg" },
  { name: "Partner 2", logo: "/assets/images/partner-2.svg" },
  { name: "Partner 3", logo: "/assets/images/partner-3.svg" },
  { name: "Partner 4", logo: "/assets/images/partner-4.svg" },
  { name: "Partner 5", logo: "/assets/images/partner-5.svg" },
  { name: "Partner 6", logo: "/assets/images/partner-6.svg" },
  { name: "Partner 7", logo: "/assets/images/partner-7.svg" },
  { name: "Partner 8", logo: "/assets/images/partner-8.svg" },
  { name: "Partner 9", logo: "/assets/images/partner-9.svg" },
  { name: "Partner 10", logo: "/assets/images/partner-10.svg" },
];

export const blogPostsData: BlogPostItem[] = [
  {
    id: "future-of-drone-shows",
    slug: "future-of-drone-shows-replacing-fireworks",
    title: "The Celestial Revolution: Why Drone Light Shows are Replacing Pyrotechnics in 2026",
    excerpt:
      "How eco-conscious enterprise events and smart cities in the GCC are turning to synchronized aerial drone swarms for zero-emission, story-driven nighttime spectacles.",
    content: `
### The New Era of Night Sky Storytelling

For over a millennium, fireworks served as the global standard for celebratory spectacles. Yet in today's era of environmental sustainability, noise reduction, and brand precision, drone light shows—powered by autonomous swarm algorithms—have rapidly surpassed traditional pyrotechnics.

#### 1. Infinite Visual Flexibility
Unlike single-burst fireworks, a fleet of 500 to 1,500 drones acts as a three-dimensional volumetric display. Each drone represents a programmable voxel (3D pixel) capable of rendering intricate corporate logos, geometric mandalas, kinetic portraits, and multi-language typography with centimeter-level precision.

#### 2. Environmental & Safety Supremacy
In regions like Dubai and Abu Dhabi, where innovation meets strict safety mandates:
- **Zero Carbon Smoke**: No hazardous smoke particulates or sulfur fallout.
- **Noise Friendly**: Ideal for waterfronts, residential communities, and wildlife preserves.
- **Reusable Assets**: Drones return safely to land pads, ready for immediate subsequent flights.

#### 3. Integrated Audio & Real-Time Timecoding
Cruxeo's **Ignispectra** platform synchronizes aerial drone formations to millisecond-accurate musical scores and laser projection arrays, creating a truly cinematic multi-sensory journey for thousands of live viewers.
    `,
    category: "Drone Technology",
    readTime: "5 min read",
    publishDate: "October 2026",
    author: {
      name: "Tariq Al-Mansoor",
      role: "Head of Flight Choreography",
      avatar: "/assets/images/avatars/avatar1.svg",
    },
    tags: ["Drones", "UAE Events", "Sustainability", "Ignispectra"],
  },
  {
    id: "ai-photobooths-viral-reach",
    slug: "ai-photobooths-viral-social-reach",
    title: "How AI Neural Style Photobooths Drive 400% Higher Social Conversions",
    excerpt:
      "Moving beyond static photobooths: how real-time generative diffusion and robotic cinematography transform exhibition visitors into viral brand ambassadors.",
    content: `
### The Death of the Generic Photo Op

At major exhibitions like GITEX or global motor shows, attendees walk past dozens of traditional photo backdrops without stopping. Passive marketing is dead. Today's digital natives demand transformation.

#### Real-Time Neural Morphing
With **Nexplay**, attendees stand in front of high-speed lenses. Within under 8 seconds:
- High-definition face geometry is mapped across 68 anatomical points.
- Localized neural models restyle the participant into custom brand characters (e.g., futuristic astronauts, cybernetic architects, or royal figures).
- The output is seamlessly branded with event watermarks and sent straight to their phone via automated WhatsApp dispatch.

#### High-Speed Robotic Cinematography
When paired with 6-axis robotic camera arms, visitors receive 120fps slow-motion cinematic video cuts rendered in real-time, resulting in immediate Instagram Reels and TikTok uploads that amplify event sponsor reach exponentially.
    `,
    category: "AI & Experience",
    readTime: "4 min read",
    publishDate: "September 2026",
    author: {
      name: "Elena Rostova",
      role: "Creative Director of Generative Tech",
      avatar: "/assets/images/avatars/avatar2.svg",
    },
    tags: ["AI", "Photobooth", "Social Marketing", "Nexplay"],
  },
  {
    id: "spatial-computing-phygital-retail",
    slug: "spatial-computing-phygital-brand-activations",
    title: "Phygital Architecture: Blending Spatial Computing with Luxury Event Spaces",
    excerpt:
      "Exploring how touchless gesture kiosks, volumetric holograms, and spatial audio are redefining luxury customer engagement in the Middle East.",
    content: `
### Bridging Physical Spaces and Digital Worlds

The term 'phygital' is no longer a buzzword; it is the cornerstone of luxury flagship retail and high-end automotive reveals.

#### Touchless Intuitive Interaction
In a post-touch world, **Synapse** kiosks utilize advanced radar and optical gesture sensors. Users can pinch, rotate, and interact with complex 3D engineering models without ever making physical contact with the glass.

#### The Magic of Volumetric Optics
Holographic displays create the sensation of objects floating mid-air. When combined with targeted directional sound emitters, a visitor can examine a luxury timepiece or new jet engine design from 360 degrees, driving deeper emotional connection and unparalleled retention rates.
    `,
    category: "Spatial Tech",
    readTime: "6 min read",
    publishDate: "August 2026",
    author: {
      name: "Marcus Vance",
      role: "Director of Interactive Systems",
      avatar: "/assets/images/avatars/avatar3.svg",
    },
    tags: ["Holograms", "Gestures", "Luxury Events", "Synapse"],
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "Cruxeo's Ignispectra drone show was the undisputed highlight of our global launch in Dubai. Synchronizing 800 drones over the gulf while flawlessly rendering our brand emblem was nothing short of miraculous.",
    clientName: "Sultan Al-Hashimi",
    clientRole: "Executive Director of Major Events",
    company: "Dubai Tourism & Commerce Authority",
    avatar: "/assets/images/avatars/avatar1.svg",
    event: "Dubai Global Tourism Summit",
  },
  {
    id: "2",
    quote:
      "The Nexplay AI booth achieved a 98% lead capture rate across all 5 days of GITEX. Our booth line stretched down the hall, generating over 15,000 direct WhatsApp interactions.",
    clientName: "Sarah Jenkins",
    clientRole: "VP of Global Marketing",
    company: "Apex Cloud Technologies",
    avatar: "/assets/images/avatars/avatar2.svg",
    event: "GITEX Global Technology Week",
  },
  {
    id: "3",
    quote:
      "Working with Cruxeo gives our agency a massive competitive edge. Their technical precision, on-site redundancy, and ability to deliver jaw-dropping hardware activations is unmatched in the GCC.",
    clientName: "Karim Mansour",
    clientRole: "Managing Director",
    company: "Momentum Experiential Group",
    avatar: "/assets/images/avatars/avatar3.svg",
    event: "VIP Automotive Reveal",
  },
];

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "Zaid Al-Hassan",
    role: "Founder & Chief Technology Officer",
    bio: "Pioneering creative technology and robotics in the UAE for over a decade. Former aerospace robotics researcher.",
    avatar: "/assets/images/team-nexplay-lead.jpg",
  },
  {
    id: "team-2",
    name: "Elena Rostova",
    role: "Director of AI & Neural Media",
    bio: "Specializing in real-time diffusion models, generative cinematography, and multi-modal visitor engagement.",
    avatar: "/assets/images/team-lumenlab-lead.jpg",
  },
  {
    id: "team-3",
    name: "Marcus Vance",
    role: "Head of Swarm Engineering & Robotics",
    bio: "Leads a team of certified drone pilots and software architects delivering world-record autonomous drone light shows.",
    avatar: "/assets/images/team-3.jpg",
  },
];

export const pricingPlansData: PricingPlan[] = [
  {
    id: "exhibition-pod",
    name: "Exhibition Activation",
    tier: "Starter",
    description: "Ideal for trade show booths, product sampling, and single-day corporate summits.",
    features: [
      "Nexplay AI Generative Photobooth",
      "Custom branded neural styles & instant WhatsApp delivery",
      "Live analytics dashboard and GDPR-compliant lead capture",
      "On-site technical director and hardware operator",
      "Setup within 24 hours anywhere in the UAE",
    ],
    ctaText: "Inquire for Trade Shows",
  },
  {
    id: "flagship-experience",
    name: "Flagship Phygital Suite",
    tier: "Flagship",
    description: "Complete experiential transformation for major brand launches and pavilion takeovers.",
    features: [
      "Synapse 8K Curved Gesture Kiosk Array",
      "High-speed 6-axis robotic camera capture rig",
      "Lumen Lab 3D Volumetric Hologram Pedestals",
      "Custom WebGL Interactive 3D application development",
      "Dedicated creative producer and redundant hardware backups",
      "Full video production recap package",
    ],
    isPopular: true,
    ctaText: "Book Flagship Activation",
  },
  {
    id: "stadium-spectacle",
    name: "Mega Spectacle / Drone Show",
    tier: "Spectacle",
    description: "Massive outdoor storytelling for city festivals, national celebrations, and stadium reveals.",
    features: [
      "300 to 1,500+ Ignispectra Swarm Drones",
      "Full 3D aerial storyboard and custom soundtrack composition",
      "Comprehensive UAE GCAA permits and aviation clearances",
      "Dual-redundant RTK ground control stations",
      "4K aerial broadcast video recording and live feed integration",
      "Turnkey VIP grandstand viewing audio synchronization",
    ],
    ctaText: "Plan Drone Spectacle",
  },
];

export const faqData = [
  {
    question: "Where does Cruxeo operate and what are the booking lead times?",
    answer:
      "Cruxeo is headquartered in Dubai, UAE, and operates across the entire GCC including Abu Dhabi, Riyadh, Doha, and Muscat. For indoor AI booths and gesture kiosks, lead times can be as short as 1 to 2 weeks. For drone light shows, we recommend 4 to 6 weeks to secure custom choreography, aviation permits, and airspace clearances.",
  },
  {
    question: "How do you handle aviation permits and safety for drone light shows in the UAE?",
    answer:
      "Cruxeo manages all end-to-end regulatory approvals with the UAE General Civil Aviation Authority (GCAA), Dubai Civil Aviation Authority (DCAA), and local security services. Our drones feature real-time RTK GPS, dual geofence safety locks, and automated return-to-home protocols.",
  },
  {
    question: "Can AI photobooths and interactive kiosks operate without internet connectivity?",
    answer:
      "Yes! All Nexplay AI systems run localized high-performance neural computing hardware on-premise without relying on cloud APIs. For visitor sharing, we provide dedicated private 5G bonded network routers or local AirDrop / QR relays.",
  },
  {
    question: "Can experiences be white-labeled with our agency or client branding?",
    answer:
      "Absolutely. Over 60% of our activations are delivered through leading event and PR agencies. All kiosk enclosures, UI screens, AI outputs, and physical equipment can be seamlessly branded with custom wraps, vinyls, and client logos.",
  },
];

