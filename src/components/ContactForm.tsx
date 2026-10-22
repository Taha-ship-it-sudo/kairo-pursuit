"use client";

import { useState } from "react";
import { interestOptions, site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          businessName: String(data.get("businessName") ?? ""),
          email: String(data.get("email") ?? ""),
          interest: String(data.get("interest") ?? ""),
          notes: String(data.get("notes") ?? ""),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(`Your request didn't go through. Try again, or email ${site.email}.`);
    }
  }

  if (status === "sent") {
    return (
      <div className="form form-done" role="status">
        <h3 className="h4">Request sent</h3>
        <p>Thanks. We&apos;ll reply within one business day.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="businessName">Business name</label>
        <input id="businessName" name="businessName" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="interest">What are you looking for?</label>
        <select id="interest" name="interest" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {interestOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="notes">
          Anything else? <span className="optional">Optional</span>
        </label>
        <textarea id="notes" name="notes" rows={4} />
      </div>
      {status === "error" && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="btn btn-ink" disabled={status === "sending"}>
        {status === "sending" ? "Sending request" : "Send request"}
      </button>
    </form>
  );
}
