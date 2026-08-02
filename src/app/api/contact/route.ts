import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  businessName?: string;
  email?: string;
  interest?: string;
  notes?: string;
};

const INTEREST_LABELS: Record<string, string> = {
  "tier-1": "Tier 1 — Consulting",
  "tier-2": "Tier 2 — AI Tooling",
  "tier-3": "Tier 3 — Full Build & Management",
  "not-sure": "Not sure yet",
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const businessName = body.businessName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const interest = body.interest?.trim() ?? "";
  const notes = body.notes?.trim() ?? "";

  if (!name || !businessName || !email || !interest) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "tahaashraf@kairopursuit.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Email delivery is not configured" },
      { status: 500 },
    );
  }

  const interestLabel = INTEREST_LABELS[interest] ?? interest;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `Kairo Pursuit <${fromEmail}>`,
    to: [toEmail],
    replyTo: email,
    subject: `New consult request — ${businessName}`,
    text: [
      "New consult request from the website:",
      "",
      `Name: ${name}`,
      `Business: ${businessName}`,
      `Email: ${email}`,
      `Interest: ${interestLabel}`,
      `Notes: ${notes || "(none)"}`,
      "",
      `Received: ${new Date().toISOString()}`,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact] Resend error", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
