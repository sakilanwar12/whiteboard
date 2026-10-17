import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, MessageCircle, User } from "lucide-react";
import ContactForm from "@/components/site/contact-form";
import { SOCIALS, WhatsAppIcon } from "@/components/site/brand-icons";

const WHATSAPP_URL = "https://wa.me/8801823231725";
const PROFILE_URL = "https://github.com/sakilanwar12";

export const metadata: Metadata = {
  title: "Full Applications, Built End to End",
  description:
    "Full applications, built end to end and shipped to production. School, coaching center, restaurant and gym management systems, newspaper portals, ecommerce stores, or fully custom software. Ready-made solutions available now, or tell me what you need and I’ll build it new. You’ll get a plan within a day.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Full Applications, Built End to End",
    description:
      "School, coaching center, restaurant and gym management systems, newspaper portals, ecommerce stores, or fully custom software. Ready-made solutions available now, or tell me what you need and I’ll build it new. You’ll get a plan within a day.",
    url: "/contact",
    type: "profile",
  },
};

const LINKEDIN_URL = "https://www.linkedin.com/in/md-sakil-anwar-4b6941241";

function contactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Sakil Anwar",
    about: { "@type": "Person", name: "Md. Sakil Anwar", jobTitle: "Frontend Developer" },
    mainEntity: {
      "@type": "Person",
      name: "Md. Sakil Anwar",
      jobTitle: "Frontend Developer",
      telephone: "+8801823231725",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      sameAs: [PROFILE_URL, LINKEDIN_URL],
    },
  };
}

export default function ContactPage() {
  return (
    <main className="min-h-dvh bg-white text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd()) }}
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
              <User className="size-4 text-white" />
            </span>
            Sakil Anwar
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/about"
              className="hidden rounded-xl px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 sm:block"
            >
              About
            </Link>
            <Link
              href="/contact"
              aria-current="page"
              className="hidden rounded-xl bg-neutral-100 px-3.5 py-2 text-sm font-medium text-neutral-900 sm:block"
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

      <section
        className="relative border-b border-neutral-100"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24,24,27,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.92),rgba(255,255,255,0.35)_55%,transparent)]"
        />
        <div className="relative mx-auto max-w-3xl px-6 pb-14 pt-16 sm:pt-20">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Full applications, built end to end and shipped to production
          </h1>
          <p className="mt-5 text-lg text-pretty text-neutral-600">
            School, coaching center, restaurant and gym management systems,
            newspaper portals, ecommerce stores, or fully custom software.
            Ready-made solutions available now, or tell me what you need and
            I&apos;ll build it new. You&apos;ll get a plan within a day.
          </p>
          <ul className="mt-5 flex flex-wrap gap-4 text-sm font-medium text-neutral-600">
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-neutral-400" />
              Dhaka, Bangladesh
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Clock3 className="size-4 text-neutral-400" />
              GMT+6 · replies within ~24h
            </li>
          </ul>

          {/* WhatsApp card */}
          <div className="mt-8 rounded-3xl border border-green-200 bg-green-50/60 p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]"
                >
                  <WhatsAppIcon className="size-6 text-white" />
                </span>
                <div>
                  <h2 className="text-base font-bold tracking-tight text-green-950">
                    WhatsApp — fastest way to reach me
                  </h2>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block font-mono text-lg font-semibold text-green-800 underline-offset-4 hover:underline"
                  >
                    +880 1823 232 1725
                  </a>
                  <p className="mt-1 text-sm text-green-800/80">
                    Project inquiries, quotes, quick questions — message anytime.
                  </p>
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-green-600/20 transition-colors hover:bg-[#1eb85a]"
              >
                <MessageCircle className="size-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="form-heading"
        className="mx-auto max-w-3xl px-6 py-16"
      >          <h2
            id="form-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Send a project brief
          </h2>
        <p className="mt-3 max-w-xl text-neutral-600">
              Fill this out and I&apos;ll come back with a plan, timeline and
              quote.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>

        <div
          aria-labelledby="other-channels-heading"
          className="mt-14"
        >
          <h3
            id="other-channels-heading"
            className="text-sm font-semibold uppercase tracking-wider text-neutral-400"
          >
            Other channels
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
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
            <Link
              href="/about"
              className="cursor-pointer transition-colors hover:text-neutral-900"
            >
              About
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
