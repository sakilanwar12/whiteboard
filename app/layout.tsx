import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Patrick_Hand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-hand",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://white-board.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Graphics Board — Free Whiteboard for Graphics Tablets & Explainer Videos",
    template: "%s | Graphics Board",
  },
  description:
    "Graphics Board is a free, open-source whiteboard built for graphics tablets. Pressure-sensitive pen for Wacom, Huion, XP-Pen and Apple Pencil, graph paper, shapes, laser pointer, infinite canvas, and instant PNG export. Perfect for teaching by hand on camera. No sign-up.",
  keywords: [
    "whiteboard",
    "graphics tablet whiteboard",
    "pen tablet whiteboard",
    "whiteboard for wacom",
    "whiteboard for huion",
    "apple pencil whiteboard",
    "drawing tablet app",
    "whiteboard for video recording",
    "explainer video whiteboard",
    "handwriting video app",
    "online teaching whiteboard",
    "digital whiteboard",
    "open source whiteboard",
    "free whiteboard app",
    "pressure sensitive pen app",
    "chalkboard app for youtube",
  ],
  authors: [{ name: "Graphics Board Contributors" }],
  creator: "Graphics Board",
  publisher: "Graphics Board",
  category: "Education",
  classification:
    "Free open-source whiteboard for graphics tablets and explainer videos",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Graphics Board",
    title:
      "Graphics Board — Free Whiteboard for Graphics Tablets & Explainer Videos",
    description:
      "Pressure-sensitive ink for your Wacom, Huion, XP-Pen or Apple Pencil. Graph paper, shapes, laser pointer, infinite canvas, PNG export. Free & open source.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Graphics Board — Free Whiteboard for Graphics Tablets & Explainer Videos",
    description:
      "Open your pen tablet, hit record, start teaching. Free open-source whiteboard with pressure-sensitive ink, laser pointer and PNG export.",
    creator: "@graphicsboard",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Graphics Board",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free, open-source whiteboard for graphics tablets and explainer videos. Pressure-sensitive pen for Wacom, Huion, XP-Pen and Apple Pencil, graph paper, shapes, laser pointer, and PNG export.",
    url: siteUrl,
    license: "https://opensource.org/licenses/MIT",
    author: { "@type": "Organization", name: "Graphics Board Contributors" },
    featureList: [
      "Pressure-sensitive pen",
      "Highlighter",
      "Shapes: line, arrow, rectangle, ellipse, triangle",
      "Laser pointer",
      "Infinite pan and zoom",
      "Graph, dotted, ruled and axes backgrounds",
      "PNG export and copy to clipboard",
      "Screen recording with microphone voice-over",
      "Autosave in browser",
      "Zen mode for screen recording",
    ],
  };
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${patrickHand.variable} h-full antialiased`}
    >
      <body className="h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
