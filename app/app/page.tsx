import type { Metadata } from "next";
import Whiteboard from "@/components/board/Whiteboard";

export const metadata: Metadata = {
  title: "Open the Whiteboard",
  description:
    "The Graphics Board canvas: pressure-sensitive pen for Wacom, Huion, XP-Pen and Apple Pencil, highlighter, shapes, laser pointer, graph paper backgrounds, infinite pan & zoom, and instant PNG export. Free and open source.",
  keywords: [
    "online whiteboard",
    "graphics tablet whiteboard",
    "pen tablet drawing app",
    "drawing app",
    "graph paper canvas",
    "free whiteboard no signup",
  ],
  alternates: {
    canonical: "/app",
  },
  openGraph: {
    title: "Open the Whiteboard — Graphics Board",
    description:
      "Pressure-sensitive whiteboard for your pen tablet in the browser. No sign-up, no tracking — start drawing right away.",
    url: "/app",
    type: "website",
  },
};

export default function AppPage() {
  return (
    <div className="h-dvh w-full overflow-hidden">
      <Whiteboard />
    </div>
  );
}
