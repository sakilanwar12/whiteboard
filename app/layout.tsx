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
    default: "Mathboard — Free Open-Source Whiteboard for Math Videos",
    template: "%s | Mathboard",
  },
  description:
    "Mathboard is a free, open-source whiteboard for writing math by hand. Pressure-sensitive pen, graph paper, shapes, laser pointer, infinite pan & zoom, and instant PNG export. No sign-up, works in the browser.",
  keywords: [
    "whiteboard",
    "math whiteboard",
    "open source whiteboard",
    "online whiteboard",
    "digital whiteboard",
    "math videos",
    "graphics tablet writing",
    "pressure sensitive pen",
    "graph paper whiteboard",
    "draw math equations online",
    "free whiteboard app",
    "excalidraw alternative",
    "teaching whiteboard",
  ],
  authors: [{ name: "Mathboard Contributors" }],
  creator: "Mathboard",
  publisher: "Mathboard",
  category: "Education",
  classification: "Free open-source whiteboard for math teaching and videos",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mathboard",
    title: "Mathboard — Free Open-Source Whiteboard for Math Videos",
    description:
      "Write math by hand with a pressure-sensitive pen. Graph paper, shapes, laser pointer, infinite canvas, and one-click PNG export. Free, open source, no sign-up.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathboard — Free Open-Source Whiteboard for Math Videos",
    description:
      "Pressure-sensitive whiteboard for math teachers & YouTubers. Graph paper, shapes, laser pointer, PNG export. Free & open source.",
    creator: "@mathboard",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
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
    name: "Mathboard",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free, open-source whiteboard for writing math by hand with a graphics tablet. Pressure-sensitive pen, graph paper, shapes, laser pointer, and PNG export.",
    url: siteUrl,
    license: "https://opensource.org/licenses/MIT",
    author: { "@type": "Organization", name: "Mathboard Contributors" },
    featureList: [
      "Pressure-sensitive pen",
      "Highlighter",
      "Shapes: line, arrow, rectangle, ellipse, triangle",
      "Laser pointer",
      "Infinite pan and zoom",
      "Graph, dotted, ruled and axes backgrounds",
      "PNG export and copy to clipboard",
      "Autosave in browser",
      "Zen mode",
    ],
  };
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${patrickHand.variable} h-full antialiased`}
    >
      <body className="h-full overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}</body>
    </html>
  );
}
