import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mathboard — Free Open-Source Whiteboard for Math Videos",
    short_name: "Mathboard",
    description:
      "Pressure-sensitive whiteboard for writing math by hand. Graph paper, shapes, laser pointer, and instant PNG export.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    categories: ["education", "productivity"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
