"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/content/site";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      businessName: String(data.get("businessName") || ""),
      email: String(data.get("email") || ""),
      interest: String(data.get("interest") || ""),
      notes: String(data.get("notes") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage("Thanks — we received your note and will follow up shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Email us directly and we'll get back to you.");
    }
  }

  return (
    <section id={contact.id} className="section-pad bg-navy-deep text-white">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-warm uppercase">
            {contact.eyebrow}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
            {contact.description}
          </p>

          <div className="mt-8 space-y-4 text-base text-white/75">
            <p>
              <span className="block text-sm font-semibold tracking-wide text-white/45 uppercase">
                Email
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1 inline-block font-medium text-white transition-colors hover:text-warm"
              >
                {contact.email}
              </a>
            </p>
            <p>
              <span className="block text-sm font-semibold tracking-wide text-white/45 uppercase">
                Location
              </span>
              <span className="mt-1 block">{contact.locationLine}</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-white/80">Name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="w-full rounded-md border border-white/15 bg-navy-deep/60 px-3.5 py-3 text-white outline-none transition focus:border-accent"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-white/80">
                  Business name
                </span>
                <input
                  required
                  name="businessName"
                  autoComplete="organization"
                  className="w-full rounded-md border border-white/15 bg-navy-deep/60 px-3.5 py-3 text-white outline-none transition focus:border-accent"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-white/80">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-md border border-white/15 bg-navy-deep/60 px-3.5 py-3 text-white outline-none transition focus:border-accent"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-white/80">
                  What you&apos;re looking for
                </span>
                <select
                  required
                  name="interest"
                  defaultValue=""
                  className="w-full rounded-md border border-white/15 bg-navy-deep/60 px-3.5 py-3 text-white outline-none transition focus:border-accent"
                >
                  <option value="" disabled>
                    Select a tier
                  </option>
                  {contact.form.tiers.map((tier) => (
                    <option key={tier.value} value={tier.value} className="text-ink">
                      {tier.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-white/80">
                  Anything else? <span className="text-white/45">(optional)</span>
                </span>
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full resize-y rounded-md border border-white/15 bg-navy-deep/60 px-3.5 py-3 text-white outline-none transition focus:border-accent"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "loading" ? "Sending…" : contact.form.submitLabel}
            </button>

            {message ? (
              <p
                role="status"
                className={`mt-4 text-sm ${
                  status === "success" ? "text-accent-soft" : "text-warm"
                }`}
              >
                {message}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
