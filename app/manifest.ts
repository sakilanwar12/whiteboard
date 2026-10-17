import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Graphics Board — Free Whiteboard for Graphics-Tablet Videos",
    short_name: "Graphics Board",
    description:
      "Pressure-sensitive whiteboard for graphics tablets. Graph paper, shapes, laser pointer, and instant PNG export.",
    id: "/",
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
    shortcuts: [
      {
        name: "Open the whiteboard",
        short_name: "Whiteboard",
        description: "Jump straight into the Graphics Board canvas and start drawing.",
        url: "/app",
      },
    ],
  };
}
