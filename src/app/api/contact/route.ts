import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  businessName?: string;
  email?: string;
  interest?: string;
  notes?: string;
};

const INTEREST_LABELS: Record<string, string> = {
  tasked: "tasked for dispatch",
  website: "A new website",
  other: "Another manual process",
  "not-sure": "Not sure yet",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim().slice(0, 200) ?? "";
  const businessName = body.businessName?.trim().slice(0, 200) ?? "";
  const email = body.email?.trim().slice(0, 200) ?? "";
  const interest = body.interest?.trim() ?? "";
  const notes = body.notes?.trim().slice(0, 4000) ?? "";

  if (!name || !businessName || !EMAIL_RE.test(email) || !interest) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "tahaashraf@kairopursuit.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json({ ok: false, error: "Email delivery is not configured" }, { status: 500 });
  }

  const text = [
    "New consult request from kairopursuit.com",
    "",
    `Name: ${name}`,
    `Business: ${businessName}`,
    `Email: ${email}`,
    `Looking for: ${INTEREST_LABELS[interest] ?? interest}`,
    `Notes: ${notes || "(none)"}`,
    "",
    `Received: ${new Date().toISOString()}`,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Kairo Pursuit <${fromEmail}>`,
      to: [toEmail],
      reply_to: email,
      subject: `New consult request: ${businessName}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
