import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cruxeo | Experiential Technology & Brand Activations",
    short_name: "Cruxeo",
    description:
      "Premier experiential technology studio in Dubai delivering drone light swarms, volumetric hologram pavilions, and kinetic AI arenas.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#38bdf8",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
