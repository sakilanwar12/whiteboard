import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Download,
  Monitor,
  Pencil,
  Play,
  Star,
} from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

const REPO_URL = "https://github.com/sakilanwar12/white-board";

const DESKTOP_REPO_URL = "https://github.com/sakilanwar12/graphics-board-desktop";
const DESKTOP_DEB_URL = `${DESKTOP_REPO_URL}/releases/latest/download/graphics-board-amd64.deb`;
const DESKTOP_APPIMAGE_URL = `${DESKTOP_REPO_URL}/releases/latest/download/graphics-board-x86_64.AppImage`;
const DESKTOP_RELEASES_URL = `${DESKTOP_REPO_URL}/releases`;

const DESKTOP_BULLETS = [
  "Runs fully offline — no browser tab, no internet needed",
  "Built-in recorder: screen + microphone voice-over in MP4",
  "One-command APT install, or a portable single-file AppImage",
];

export const metadata: Metadata = {
  title: "Free Whiteboard for Graphics Tablets & Explainer Videos | Graphics Board",
  description:
    "A free, open-source whiteboard built for graphics tablets. Pressure-sensitive ink for Wacom, Huion, XP-Pen and Apple Pencil, graph paper, laser pointer, infinite canvas and PNG export — made for recording explainer videos by hand. No sign-up.",
  keywords: [
    "whiteboard for graphics tablet",
    "pen tablet whiteboard",
    "whiteboard for wacom",
    "whiteboard for huion",
    "apple pencil whiteboard",
    "drawing tablet whiteboard app",
    "whiteboard for video recording",
    "explainer video whiteboard",
    "handwriting video app",
    "online teaching whiteboard",
    "open source whiteboard",
    "free whiteboard app",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Graphics Board — Free Whiteboard for Graphics Tablets & Explainer Videos",
    description:
      "Pressure-sensitive ink for your Wacom, Huion, XP-Pen or Apple Pencil. Graph paper, shapes, laser pointer, infinite canvas, PNG export. Free & open source.",
    url: "/",
    type: "website",
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is Graphics Board really free?",
    a: "Yes. Graphics Board is MIT-licensed open source with no sign-up, no paywall and no premium tier. Every feature in the app is free for personal and commercial use.",
  },
  {
    q: "Which drawing tablets does it work with?",
    a: "Any pen tablet or pen display that draws into a browser: Wacom, Huion, XP-Pen, Veikk, Gaomon and the iPad with Apple Pencil are all common choices. No drivers needed — pen pressure is read natively by the browser, so your handwriting keeps its natural line variation.",
  },
  {
    q: "Can I record explainer videos with it?",
    a: "Yes — that's the main use case. Pair Graphics Board with OBS Studio, Zoom or any screen recorder, press Z for zen mode that hides the entire UI, and use the laser pointer to guide your viewers. Your export stays clean and ready for editing.",
  },
  {
    q: "Do my drawings get uploaded anywhere?",
    a: "No. Graphics Board runs entirely in your browser with zero backend. Your board is saved to your device's localStorage only, so nothing is transmitted or stored on a server.",
  },
  {
    q: "What pen tools and backgrounds does it include?",
    a: "A pressure-sensitive pen, translucent highlighter, line, arrow, rectangle, ellipse and triangle shapes, handwritten-style text and a fading laser pointer — over plain, graph, dotted, ruled and coordinate-axes backgrounds.",
  },
  {
    q: "Can I contribute to the project?",
    a: "Absolutely — Graphics Board is beginner-friendly open source. Star the repo, open issues or send a pull request on GitHub; contributions are welcome.",
  },
];

const STEPS: { title: string; body: string }[] = [
  {
    title: "Open the whiteboard",
    body: "Click “Open whiteboard” — no account, no download. The canvas launches instantly in your browser.",
  },
  {
    title: "Pick a tool & start writing",
    body: "Choose pen, highlighter, shapes or text from the left toolbar. Tablet pens work automatically — pressure is detected the moment you draw.",
  },
  {
    title: "Teach with the extras",
    body: "Switch to graph or axes paper, point with the fading laser tool, and hold Space to pan around the infinite canvas.",
  },
  {
    title: "Export or copy your board",
    body: "Press ⌘/Ctrl+S to download a high-resolution PNG, or copy it to the clipboard and paste straight into your slides or video editor.",
  },
];

const SHORTCUTS: { keys: string[]; action: string }[] = [
  { keys: ["V", "H", "P", "M", "E"], action: "Select / Pan / Pen / Highlighter / Eraser" },
  { keys: ["L", "A", "R", "O", "Y"], action: "Line / Arrow / Rect / Ellipse / Triangle" },
  { keys: ["T", "X"], action: "Text / Laser pointer" },
  { keys: ["Space"], action: "Hold to pan the canvas" },
  { keys: ["Shift", "drag"], action: "Constrain shapes" },
  { keys: ["⌘/Ctrl", "Z"], action: "Undo" },
  { keys: ["⌘/Ctrl", "⇧", "Z"], action: "Redo" },
  { keys: ["⌘/Ctrl", "S"], action: "Export board as PNG" },
  { keys: ["⌘/Ctrl", "+ / −"], action: "Zoom in / out" },
  { keys: ["⌘/Ctrl", "0"], action: "Reset zoom (100%)" },
  { keys: ["Z"], action: "Toggle zen mode (hide UI)" },
  { keys: ["Del", "Esc"], action: "Delete selected / Deselect" },
];

const ROWS: {
  title: string;
  body: string;
  bullets: string[];
  reverse?: boolean;
}[] = [
  {
    title: "Pressure-sensitive ink that feels like paper",
    body: "Draw with your pen tablet — stroke width follows your pressure, like a real brush. Wacom, Huion, XP-Pen, Veikk and Apple Pencil work out of the box, no drivers needed.",
    bullets: [
      "Pen pressure read natively by the browser",
      "Coalesced pointer events — smooth ink at any frame rate",
      "Flip your stylus — the barrel-eraser just erases",
    ],
  },
  {
    title: "Teaching tools, one click away",
    body: "Graph paper, coordinate axes, shapes and handwritten-style text — everything a math or science creator sets up in seconds, not screenshots.",
    bullets: [
      "5 backgrounds: plain, graph, dots, ruled, axes",
      "Lines, arrows, rects, ellipses, triangles + handwritten text",
      "Fading laser pointer to guide your viewer's eye",
    ],
    reverse: true,
  },
  {
    title: "Record clean videos, export crisp PNGs",
    body: "Zen mode hides the entire UI so your recording shows only ink. Export the board as a 2× PNG in one keystroke — or paste it straight into your editor.",
    bullets: [
      "Zen mode (Z) — UI-free screen recordings",
      "⌘/Ctrl+S export at 2× resolution, or copy to clipboard",
      "Autosave in your browser — close the tab, come back later",
    ],
  },
];

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function howToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use the Graphics Board online whiteboard",
    description:
      "Get started with Graphics Board's free whiteboard in four steps: open the canvas, pick a tool, teach with the extras, and export your board.",
    step: STEPS.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
}

/* ---------- Board mock illustrations ---------- */

const GRID_BG: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, rgba(24,24,27,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.05) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

function BoardStage({
  label,
  chip,
  children,
}: {
  label: string;
  chip?: ReactNode;
  children: ReactNode;
}) {
  return (
    <figure
      role="img"
      aria-label={label}
      className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl shadow-neutral-900/5"
      style={GRID_BG}
    >
      <div className="p-6 sm:p-10">{children}</div>
      {chip}
    </figure>
  );
}

function ToolbarChip() {
  return (
    <div className="absolute left-4 top-4 flex items-center gap-1 rounded-xl border border-neutral-200 bg-white/90 p-1 shadow-sm backdrop-blur">
      {[
        ["#141414", 3],
        ["#6366f1", 5],
        ["#ef4444", 3],
        ["#fbbf24", 7],
      ].map(([color, size], i) => (
        <span
          key={i}
          className="flex size-7 items-center justify-center"
        >
          <span
            className="rounded-full"
            style={{ width: size, height: size, background: color }}
          />
        </span>
      ))}
    </div>
  );
}

/** Builds a pressure-tapered stroke out of overlapping dots along a quadratic curve. */
function strokeDots(
  p0: [number, number],
  pc: [number, number],
  p1: [number, number],
  r0: number,
  r1: number,
  color: string,
  n = 34
) {
  const dots = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x =
      (1 - t) * (1 - t) * p0[0] + 2 * (1 - t) * t * pc[0] + t * t * p1[0];
    const y =
      (1 - t) * (1 - t) * p0[1] + 2 * (1 - t) * t * pc[1] + t * t * p1[1];
    const r = r0 + (r1 - r0) * t;
    dots.push(
      <circle key={`${p0[0]}-${p1[0]}-${i}`} cx={x} cy={y} r={r} fill={color} />
    );
  }
  return dots;
}

function InkIllustration() {
  return (
    <BoardStage
      label="Illustration of the whiteboard showing pressure-sensitive ink strokes with varying thickness"
      chip={<ToolbarChip />}
    >
      <svg viewBox="0 0 360 210" className="h-auto w-full" fill="none">
        {strokeDots([18, 176], [110, 190], [200, 96], 1.2, 5.5, "#141414", 40)}
        {strokeDots([200, 96], [268, 30], [342, 42], 5.5, 2.2, "#141414", 24)}
        {strokeDots([24, 116], [120, 60], [216, 60], 1, 4.5, "#6366f1", 36)}
        {strokeDots([216, 60], [286, 60], [340, 108], 4.5, 1.6, "#6366f1", 22)}
        <text
          x="126"
          y="26"
          fill="#6366f1"
          fontSize="17"
          fontFamily="'Patrick Hand', cursive"
        >
          pressure = line width
        </text>
      </svg>
    </BoardStage>
  );
}

function ToolsIllustration() {
  return (
    <BoardStage
      label="Illustration of the whiteboard showing graph paper, a drawn curve, an arrow, a triangle and a handwritten formula"
    >
      <svg viewBox="0 0 320 180" className="h-auto w-full" fill="none">
        <rect
          x="10"
          y="10"
          width="300"
          height="160"
          rx="12"
          fill="none"
          stroke="rgba(24,24,27,0.12)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <text
          x="150"
          y="28"
          fill="#6366f1"
          fontSize="16"
          fontFamily="'Patrick Hand', cursive"
        >
          f(x)
        </text>
        <path d="M20 150 C 60 150, 90 40, 130 40 S 200 150, 240 150 S 290 60, 305 55" stroke="#141414" strokeWidth="3" opacity="0.9" />
        <circle cx="63" cy="120" r="7" fill="none" stroke="#ef4444" strokeWidth="3" />
        <path d="M100 70 L 160 110" stroke="#141414" strokeWidth="2" />
        <path d="M160 110 L 149 104 L 152 112 Z" fill="#141414" />
        <rect x="228" y="96" width="52" height="40" rx="6" fill="none" stroke="#22c55e" strokeWidth="2.5" />
        <text
          x="205"
          y="80"
          fill="#52525b"
          fontSize="15"
          fontFamily="'Patrick Hand', cursive"
        >
          ∫ f(x) dx = A
        </text>
      </svg>
    </BoardStage>
  );
}

function RecordIllustration() {
  return (
    <BoardStage
      label="Illustration of zen mode during a screen recording with a 2x-resolution PNG export card"
    >
      <div className="relative">
        <span className="absolute -top-2 right-2 flex items-center gap-1.5 rounded-full bg-neutral-900 px-2.5 py-1 text-[11px] font-semibold text-white shadow-md">
          <span className="size-2 animate-pulse rounded-full bg-red-500" />
          REC
        </span>
        <svg viewBox="0 0 320 170" className="h-auto w-full" fill="none">
          <path d="M16 140 C 60 140, 92 38, 132 38 S 200 136, 240 136 S 288 58, 304 54" stroke="#141414" strokeWidth="3" opacity="0.9" />
          <circle cx="266" cy="44" r="9" fill="#fbbf24" opacity="0.55" />
          <text
            x="120"
            y="28"
            fill="#52525b"
            fontSize="15"
            fontFamily="'Patrick Hand', cursive"
          >
            a² + b² = c²
          </text>
        </svg>
        <div className="mt-2 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-lg shadow-neutral-900/10">
          <span
            aria-hidden
            className="flex size-9 items-center justify-center rounded-xl bg-neutral-100 text-[10px] font-bold text-neutral-500"
          >
            PNG
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate font-mono text-xs text-neutral-700">
              graphics-board-2026-10-17.png
            </span>
            <span className="block text-[11px] text-neutral-400">
              Exported at 2× resolution · cropped + padding
            </span>
          </span>
          <Check className="size-4 shrink-0 text-green-600" />
        </div>
      </div>
    </BoardStage>
  );
}

const ROW_ILLUSTRATIONS = [
  <InkIllustration key="ink" />,
  <ToolsIllustration key="tools" />,
  <RecordIllustration key="record" />,
];

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-white text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqJsonLd(), howToJsonLd()]),
        }}
      />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        >
          <Link href="/" className="flex items-center gap-2.5 font-semibold">
            <span
              aria-hidden
              className="flex size-8 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-900"
            >
              <Pencil className="size-4 text-white" />
            </span>
            Graphics Board
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 sm:flex"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <Link
              href="/about"
              className="hidden rounded-xl px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 sm:block"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hidden rounded-xl px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 sm:block"
            >
              Contact
            </Link>
            <Link
              href="/app"
              className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
            >
              Open whiteboard
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24,24,27,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.92),rgba(255,255,255,0.35)_55%,transparent)]"
        />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-20 text-center sm:pt-28">
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-600 shadow-sm">
            <Star className="size-3.5 text-amber-400" />
            Open source · MIT License · Community-built
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Whiteboard built for graphics tablets &amp; explainer videos
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-pretty text-neutral-600">
            Graphics Board is a free, open-source whiteboard made for creators
            who draw with a pen tablet. Plug in your Wacom, Huion, XP-Pen or
            iPad, hit record, and teach — pressure-sensitive ink, graph paper
            and a laser pointer, right in your browser.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/app"
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-neutral-900/10 transition-colors hover:bg-neutral-700 sm:w-auto"
            >
              Start drawing — it&apos;s free
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900 sm:w-auto"
            >
              <GitHubIcon className="size-4" />
              Star on GitHub
            </a>
          </div>
          <p className="mt-4 text-xs text-neutral-400">
            No account · No tracking · Works offline on your device
          </p>
        </div>
      </section>

      {/* Feature rows: content + illustration, alternating sides */}
      <section
        aria-labelledby="features-heading"
        className="mx-auto max-w-6xl px-6 py-20 sm:py-24"
      >
        <h2
          id="features-heading"
          className="sr-only"
        >
          Everything you need to teach on camera
        </h2>
        <div className="space-y-20 sm:space-y-28">
          {ROWS.map((row, i) => (
            <div
              key={row.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={row.reverse ? "lg:order-2" : ""}>
                <span
                  aria-hidden
                  className="mb-4 inline-flex size-9 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white"
                >
                  {i + 1}
                </span>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {row.title}
                </h3>
                <p className="mt-3 max-w-lg text-neutral-600">{row.body}</p>
                <ul className="mt-6 space-y-2.5">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Check
                        aria-hidden
                        className="mt-0.5 size-4 shrink-0 text-green-600"
                      />
                      <span className="text-sm leading-relaxed text-neutral-700">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/app"
                  className="group mt-7 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline"
                >
                  <Play className="size-3.5" />
                  Try it live — no sign-up
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className={row.reverse ? "lg:order-1" : ""}>
                {ROW_ILLUSTRATIONS[i]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop app */}
      <section
        id="desktop"
        aria-labelledby="desktop-heading"
        className="border-y border-neutral-800 bg-neutral-900 py-20 text-white sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-neutral-300">
                <Monitor className="size-3.5 text-emerald-400" />
                Now available for Linux
              </p>
              <h2
                id="desktop-heading"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Take the whiteboard offline with the desktop app
              </h2>
              <p className="mt-4 max-w-lg text-neutral-400">
                Graphics Board for Ubuntu and Debian runs the full canvas
                natively — with a built-in screen recorder that captures your
                screen and microphone as an MP4, no browser in the way.
              </p>
              <ul className="mt-7 space-y-2.5">
                {DESKTOP_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-emerald-400"
                    />
                    <span className="text-sm leading-relaxed text-neutral-300">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={DESKTOP_DEB_URL}
                  className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200"
                >
                  <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
                  Download .deb — Ubuntu &amp; Debian
                </a>
                <a
                  href={DESKTOP_APPIMAGE_URL}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  <Download className="size-4" />
                  Portable AppImage
                </a>
              </div>
              <p className="mt-4 text-xs text-neutral-500">
                64-bit Linux · Free &amp; open source ·{" "}
                <a
                  href={DESKTOP_RELEASES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-neutral-300"
                >
                  All releases
                </a>
              </p>
            </div>
            <div>
              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6 shadow-2xl shadow-black/40 sm:p-8">
                <div className="mb-5 flex items-center gap-1.5" aria-hidden>
                  <span className="size-2.5 rounded-full bg-neutral-700" />
                  <span className="size-2.5 rounded-full bg-neutral-700" />
                  <span className="size-2.5 rounded-full bg-neutral-700" />
                  <span className="ml-2 font-mono text-[11px] text-neutral-500">
                    ~/Downloads
                  </span>
                </div>
                <div className="space-y-2 overflow-x-auto font-mono text-[13px] leading-relaxed whitespace-nowrap">
                  <p className="text-neutral-300">
                    <span className="text-emerald-400">$</span> sudo apt install
                    ./graphics-board-amd64.deb
                  </p>
                  <p className="text-neutral-500">
                    Setting up graphics-board-desktop ...
                  </p>
                  <p className="text-emerald-400">
                    ✓ Graphics Board is ready
                  </p>
                  <p className="pt-2 text-neutral-300">
                    <span className="text-emerald-400">$</span>{" "}
                    graphics-board-desktop
                  </p>
                  <p className="text-neutral-500">
                    Launching whiteboard — ready to draw.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-neutral-500">
                The .deb installs a launcher with icons; the AppImage runs from
                anywhere with a single file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section
        aria-labelledby="how-to-heading"
        className="border-y border-neutral-100 bg-neutral-50/60 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2
            id="how-to-heading"
            className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
          >
            How to use the Graphics Board whiteboard
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            From a fresh tab to an exported PNG in under a minute.
          </p>
          <ol className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="relative rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <span
                  aria-hidden
                  className="mb-4 flex size-9 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white"
                >
                  {i + 1}
                </span>
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>

          <div
            aria-labelledby="shortcuts-heading"
            className="mt-16 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10"
          >
            <h3
              id="shortcuts-heading"
              className="text-center text-xl font-bold tracking-tight sm:text-2xl"
            >
              Keyboard shortcuts
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-neutral-600">
              Keep your hand on the tablet — every tool is one keypress away.
              The in-app help dialog (question-mark button) lists these too.
            </p>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
              {SHORTCUTS.map((s) => (
                <div
                  key={s.action}
                  className="flex items-center justify-between gap-4 border-b border-neutral-200/80 py-2.5 last:border-b-0 sm:last:border-b-0"
                >
                  <span className="text-sm text-neutral-700">{s.action}</span>
                  <span className="flex shrink-0 items-center gap-1">
                    {s.keys.map((k) => (
                      <kbd
                        key={k}
                        className="rounded-md border border-neutral-300 border-b-2 bg-neutral-50 px-1.5 py-0.5 font-mono text-[11px] font-medium text-neutral-600 shadow-sm"
                      >
                        {k}
                      </kbd>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open source banner */}
      <section
        aria-labelledby="oss-heading"
        className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-24"
      >
        <h2
          id="oss-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Free forever, MIT licensed
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-neutral-600">
          Graphics Board is a community project. Self-host it, fork it, build on
          it. If it helps your teaching or your channel, a GitHub star helps
          others discover it.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
          >
            <GitHubIcon className="size-4" />
            sakilanwar12/white-board
          </a>
          <a
            href={`${REPO_URL}/stargazers`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900"
          >
            <Star className="size-4" />
            Give it a star
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="border-t border-neutral-100 bg-neutral-50/60 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2
            id="faq-heading"
            className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <div className="mt-12 divide-y divide-neutral-200 *:py-5">
            {FAQS.map((f) => (
              <details key={f.q} className="group cursor-pointer">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p className="text-sm text-neutral-500">
            © 2026 Graphics Board Contributors · MIT License
          </p>
          <nav
            aria-label="Footer"
            className="flex items-center gap-6 text-sm text-neutral-500"
          >
            <Link
              href="/app"
              className="cursor-pointer transition-colors hover:text-neutral-900"
            >
              Whiteboard
            </Link>
            <a
              href="#desktop"
              className="cursor-pointer transition-colors hover:text-neutral-900"
            >
              Desktop app
            </a>
            <Link
              href="/about"
              className="cursor-pointer transition-colors hover:text-neutral-900"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="cursor-pointer transition-colors hover:text-neutral-900"
            >
              Contact
            </Link>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-colors hover:text-neutral-900"
            >
              GitHub
            </a>
            <a
              href={REPO_URL + "/issues"}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-colors hover:text-neutral-900"
            >
              Report issue
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
