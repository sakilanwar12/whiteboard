"use client";

import { useState } from "react";
import { CircleCheck, Send } from "lucide-react";

const PROJECT_TYPES = [
  "School management system",
  "Coaching center management",
  "Restaurant management system",
  "Gym management system",
  "Ecommerce store",
  "Newspaper / media portal",
  "Dashboard / admin panel",
  "Landing page / marketing site",
  "Custom web app (like Graphics Board)",
  "Full-time / long-term role",
  "Something else",
];

const BUDGETS = [
  "Fixed budget (small)",
  "Fixed budget (medium)",
  "Long-term (retainer / salary)",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // TODO: replace with real API integration (e.g. POST /api/contact)
    await new Promise((r) => setTimeout(r, 600));
    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-green-200 bg-green-50/70 p-8 text-center"
      >
        <CircleCheck className="mx-auto size-10 text-green-600" />
        <h3 className="mt-4 text-lg font-semibold text-green-900">
          Message received — thanks!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-green-800/80">
          This form is a static demo for now and your message isn&apos;t stored
          anywhere just yet — a backend API will be integrated soon. Need a
          quick reply? Message me directly on WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/8801823231725"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1eb85a]"
          >
            WhatsApp me
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="cursor-pointer rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400"
          >
            Fill the form again
          </button>
        </div>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-neutral-900";
  const labelClass =
    "mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="project-type" className={labelClass}>
            Project type
          </label>
          <select id="project-type" name="projectType" required className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select one…
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget <span className="normal-case text-neutral-400">(optional)</span>
          </label>
          <select id="budget" name="budget" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What do you want to build? Links, scope, deadline — anything helps."
            className={`${fieldClass} resize-y`}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        <Send className="size-4" />
        {sending ? "Sending…" : "Send message"}
      </button>
      <p className="mt-3 text-xs text-neutral-400">
        Static form — submissions are demo-only until the API is integrated.
      </p>
    </form>
  );
}
