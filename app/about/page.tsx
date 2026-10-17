import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Code2,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { SOCIALS } from "@/components/site/brand-icons";

const REPO_URL = "https://github.com/sakilanwar12/white-board";
const PROFILE_URL = "https://github.com/sakilanwar12";
const QBOOK_URL = "https://qbookbd.com";

export const metadata: Metadata = {
  title: "About Sakil Anwar — Frontend Developer",
  description:
    "Md. Sakil Anwar builds full, production-ready applications in Dhaka, Bangladesh — school management, coaching center management, newspapers, ecommerce and custom software — plus scalable dashboards and UI systems. He creates Graphics Board, the open-source whiteboard for graphics tablets, and QBookBd.",
  alternates: {
    canonical: "/about",
  },    openGraph: {
    title: "Sakil Anwar — Creator of Graphics Board & QBookBd",
    description:
      "Full application development in Dhaka, Bangladesh — school management, coaching centers, newspapers, ecommerce and custom software, plus dashboards and open-source projects like Graphics Board.",
    url: "/about",
    type: "profile",
  },
};

function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Sakil Anwar",
    alternateName: "sakilanwar12",
    jobTitle: "Frontend Developer",
    worksFor: { "@type": "Organization", name: "Codeshaper" },
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    sameAs: [
      PROFILE_URL,
      "https://www.linkedin.com/in/md-sakil-anwar-4b6941241",
      "https://twitter.com/SakilAn07114100",
      "https://www.facebook.com/shakilahmed.omi.5",
      QBOOK_URL,
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "TailwindCSS",
      "Node.js",
      "HTML",
      "CSS",
      "School management software",
      "Coaching center management",
      "Ecommerce",
      "Newspaper platforms",
      "Full application development",
    ],
    knowsLanguage: ["English", "Bengali"],
  };
}

const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js", "Nuxt.js", "Alpine.js", "Node.js", "jQuery"],
  },
  {
    group: "Tools & Libraries",
    items: ["Vite", "Git & GitHub", "Markdown", "npm/pnpm"],
  },
  {
    group: "Frontend & Styling",
    items: ["HTML5", "CSS3", "TailwindCSS", "Bootstrap", "Responsive design", "Cross-browser UI"],
  },
];

const OWN_PROJECTS: {
  name: string;
  href: string;
  tag: string;
  body: string;
  external?: boolean;
}[] = [
  {
    name: "Graphics Board",
    href: "/app",
    tag: "Open source · MIT",
    body: "Free, pressure-sensitive whiteboard for graphics tablets and explainer videos — the project running on this site.",
  },
  {
    name: "QBookBd",
    href: QBOOK_URL,
    tag: "Founder / own product",
    body: "Free MCQ practice platform for BCS, bank, primary and other government job exams in Bangladesh — thousands of questions, past-year sets, model tests and guide notes.",
    external: true,
  },
  {
    name: "js-utility-method",
    href: "https://www.npmjs.com/package/js-utility-method",
    tag: "NPM package",
    body: "Lightweight JavaScript library for simplified data handling, object manipulation and rapid development.",
    external: true,
  },
];

const TEMPLATES: { name: string; note: string }[] = [
  {
    name: "Dashtail",
    note: "ThemeForest-approved multi-theme admin dashboard (Next.js & Alpine.js) with reusable components and clean UI.",
  },
  {
    name: "Dashcode",
    note: "ThemeForest-approved scalable admin dashboard (Next.js & Nuxt.js) with a consistent component system.",
  },
  {
    name: "Transco",
    note: "Responsive React template on ThemeForest, optimized for modern web projects.",
  },
];

const CLIENT_WORK: { name: string; note: string }[] = [
  {
    name: "Fennec (Global Event Management Platform)",
    note: "Multi-role dashboards, inventory, social features and AI tools with Next.js & TypeScript.",
  },
  {
    name: "ToinPark (Crypto Platform)",
    note: "Dashboards, portfolio tracking and crypto features with Next.js & TypeScript.",
  },
];

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21c0-3.5 3.1-6 7-6s7 2.5 7 6" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-dvh bg-white text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />

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
              <PersonIcon className="size-4 text-white" />
            </span>
            Sakil Anwar
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/about"
              aria-current="page"
              className="hidden rounded-xl bg-neutral-100 px-3.5 py-2 text-sm font-medium text-neutral-900 sm:block"
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

      {/* Intro */}
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
        <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-16 sm:pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Hi, I&apos;m Sakil Anwar
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-medium text-neutral-600">
            <span className="inline-flex items-center gap-1.5">
              <Code2 className="size-4 text-neutral-400" />
              Frontend Developer @ Codeshaper
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-neutral-400" />
              Dhaka, Bangladesh
            </span>
          </div>
          <p className="mt-6 text-lg text-pretty leading-relaxed text-neutral-600">
            I&apos;m a frontend developer crafting production-ready dashboards
            and scalable UI systems — and I deliver complete applications end
            to end: school management, coaching center management, newspaper
            portals, ecommerce stores and any custom software service. I&apos;m
            also the creator of{" "}
            <strong className="font-semibold text-neutral-900">
              Graphics Board
            </strong>{" "}
            — the free, open-source whiteboard you&apos;re using right now.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/md-sakil-anwar-4b6941241"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
            >
              Connect on LinkedIn
              <ArrowRight className="size-4" />
            </a>
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900"
            >
              @sakilanwar12 on GitHub
            </a>
          </div>
          <ul className="mt-12 space-y-4" aria-label="How I work">
            {[
              "Clean, organized, reusable code with deadlines respected",
              "Fully responsive, cross-browser layouts",
              "Git & GitHub version control with continuous improvement",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-900"
                />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section
        aria-labelledby="skills-heading"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <h2
          id="skills-heading"
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Tech stack
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {SKILLS.map((s) => (
            <div
              key={s.group}
              className="rounded-2xl border border-neutral-200 p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                {s.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        aria-labelledby="projects-heading"
        className="border-y border-neutral-100 bg-neutral-50/60 py-16"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2
            id="projects-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Projects I&apos;ve shipped
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            From my own products to theme-forest approved templates and client
            platforms.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {OWN_PROJECTS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                {...(p.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex cursor-pointer flex-col rounded-2xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-neutral-900/5"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-base font-semibold">{p.name}</span>
                  <ExternalLink className="size-4 shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-900" />
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wide text-neutral-400">
                  {p.tag}
                </span>
                <span className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {p.body}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                <Briefcase className="size-4" />
                ThemeForest templates
              </h3>
              <ul className="mt-4 space-y-3">
                {TEMPLATES.map((t) => (
                  <li key={t.name} className="text-sm text-neutral-700">
                    <span className="font-semibold text-neutral-900">
                      {t.name}
                    </span>
                    <span className="block leading-relaxed text-neutral-600">
                      {t.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                <Briefcase className="size-4" />
                Client platforms
              </h3>
              <ul className="mt-4 space-y-3">
                {CLIENT_WORK.map((c) => (
                  <li key={c.name} className="text-sm text-neutral-700">
                    <span className="font-semibold text-neutral-900">
                      {c.name}
                    </span>
                    <span className="block leading-relaxed text-neutral-600">
                      {c.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hire me */}
      <section
        aria-labelledby="hire-heading"
        className="mx-auto max-w-3xl px-6 py-16 text-center"
      >
        <h2
          id="hire-heading"
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Let&apos;s build something together
        </h2>
        <p className="mt-4 text-neutral-600">
          I&apos;m open to full-time work, collaborations and freelance
          opportunities. Let&apos;s connect — I&apos;d love to join your team or
          help you build your next project.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.name} profile`}
              className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900"
            >
              <s.Icon className="size-4" />
              {s.name}
            </a>
          ))}
        </div>
      </section>

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
              href="/"
              className="cursor-pointer transition-colors hover:text-neutral-900"
            >
              Home
            </Link>
            <Link
              href="/app"
              className="cursor-pointer transition-colors hover:text-neutral-900"
            >
              Whiteboard
            </Link>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-colors hover:text-neutral-900"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
