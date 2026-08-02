export const siteConfig = {
  name: "Kairo Pursuit",
  tagline: "Consulting & AI automation for small businesses",
  email: "tahaashraf@kairopursuit.com",
  location: "San Luis Obispo, CA",
  serviceAreas: "California, Texas, and Colorado",
  url: "https://kairopursuit.com",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Case Study", href: "#case-study" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  brand: "Kairo Pursuit",
  headline: "We help local businesses win more work and waste less time on it.",
  subhead:
    "From strategy and web presence to targeted AI tooling and full systems management — three clear tiers so you only buy what you need.",
  primaryCta: { label: "See How We Help", href: "#services" },
  secondaryCta: { label: "View Our Work", href: "#case-study" },
} as const;

export const services = {
  id: "services",
  eyebrow: "Services",
  title: "Three ways to work together",
  description:
    "Start with direction, add automation where it hurts, or hand us the whole stack. Every engagement is scoped to your bandwidth.",
  tiers: [
    {
      id: "tier-1",
      tier: "Tier 1",
      name: "Consulting",
      shortDescription:
        "Direction before tools — website strategy, marketing plans, and a clear digital presence.",
      includes: [
        "Website & media strategy",
        "Marketing plans and brand positioning",
        "Digital presence audits",
        "Prioritized recommendations you can act on",
      ],
      bestFor:
        "Best for: owners who need a clear plan before investing in new tools or a rebuild.",
    },
    {
      id: "tier-2",
      tier: "Tier 2",
      name: "AI Tooling",
      shortDescription:
        "Targeted automation that cuts a specific bottleneck — not a generic chatbot bolted on.",
      includes: [
        "RFQ / RFP response workflows",
        "Scheduling and client follow-up",
        "Lead intake and routing",
        "Procurement and ops automation",
      ],
      bestFor:
        "Best for: teams that already know where time is leaking and want it fixed.",
    },
    {
      id: "tier-3",
      tier: "Tier 3",
      name: "Full Build & Management",
      shortDescription:
        "End-to-end ownership — we design, build, and manage your AI and automation stack ongoing.",
      includes: [
        "System design and implementation",
        "Ongoing monitoring and iteration",
        "Tooling updates as your ops change",
        "A single point of contact for the stack",
      ],
      bestFor:
        "Best for: businesses that want this handled entirely off their plate.",
    },
  ],
} as const;

export const howItWorks = {
  id: "how-it-works",
  eyebrow: "How it works",
  title: "Simple process. Clear next steps.",
  description:
    "No long discovery theater. We learn enough to be useful, propose a plan, build it, and stay available after launch.",
  steps: [
    {
      number: "01",
      title: "Discovery call",
      description:
        "A focused conversation about how work gets done today and where time or revenue is getting stuck.",
    },
    {
      number: "02",
      title: "Plan & proposal",
      description:
        "A scoped recommendation — consulting only, a specific tool, or a fuller build — with timeline and cost.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "We execute against the plan with regular check-ins so you're never guessing what's happening.",
    },
    {
      number: "04",
      title: "Launch & support",
      description:
        "Go live, train your team if needed, and keep support available so the system keeps earning its keep.",
    },
  ],
} as const;

export const caseStudy = {
  id: "case-study",
  eyebrow: "Case study",
  title: "Coastal Chiropractic SLO",
  tierLabel: "Tier 1 — Consulting & web presence",
  writeUp:
    "We built Coastal Chiropractic SLO's complete web presence — a clean, conversion-focused site with service breakdowns, patient reviews, and an integrated booking flow.",
  liveUrl: "https://coastalchiroslo.com/",
  liveLabel: "Visit coastalchiroslo.com",
  imageSrc: "/case-studies/coastal-chiropractic-slo.png",
  imageAlt: "Homepage of Coastal Chiropractic SLO",
  outcomes: [
    "Clear service breakdown reduced booking friction",
    "Structured FAQ section cut down repetitive patient questions",
  ],
} as const;

export const whyUs = {
  id: "why-us",
  eyebrow: "Why Kairo Pursuit",
  title: "Built for owners who run the business themselves",
  items: [
    {
      title: "Ops first, not code first",
      description:
        "Built by someone who understands small business operations — not just frameworks and demos.",
    },
    {
      title: "Start small, scale up",
      description:
        "Tiered engagement so you can begin with consulting and add tooling when you're ready.",
    },
    {
      title: "Direct communication",
      description:
        "No account managers, no agency bloat. You work with the person doing the work.",
    },
    {
      title: "Your workflow, not a template",
      description:
        "AI and automation shaped around how your team actually operates — not a one-size-fits-all bot.",
    },
  ],
} as const;

export const faq = {
  id: "faq",
  eyebrow: "FAQ",
  title: "Questions owners usually ask",
  items: [
    {
      question: "How is this different from hiring an agency?",
      answer:
        "Smaller scope, direct contact, and a focus on outcomes you can measure — not retainers packed with unused deliverables.",
    },
    {
      question: "Do I need to know anything about AI to work with you?",
      answer:
        "No. You need to know your business. We translate that into tools and systems that fit.",
    },
    {
      question: "What does a typical engagement cost / look like?",
      answer:
        "Depends on the tier. Consulting engagements are scoped projects; tooling and management are quoted after discovery based on complexity.",
    },
    {
      question: "Can I start with just the website and add automation later?",
      answer:
        "Yes. Tier 1 is designed as an entry point — many clients add Tier 2 once the foundation is solid.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Consulting and web projects often land in a few weeks; tooling depends on the workflow. Timelines are locked in the proposal.",
    },
  ],
} as const;

export const contact = {
  id: "contact",
  eyebrow: "Contact",
  title: "Book a free consult",
  description:
    "Tell us what you're dealing with. We'll reply with a clear next step — no hard sell.",
  locationLine: `${siteConfig.location} — serving ${siteConfig.serviceAreas}`,
  email: siteConfig.email,
  form: {
    tiers: [
      { value: "tier-1", label: "Tier 1 — Consulting" },
      { value: "tier-2", label: "Tier 2 — AI Tooling" },
      { value: "tier-3", label: "Tier 3 — Full Build & Management" },
      { value: "not-sure", label: "Not sure yet" },
    ],
    submitLabel: "Book a Free Consult",
  },
} as const;

export const footer = {
  blurb: "Consulting and AI automation for small businesses.",
  copyright: `© ${new Date().getFullYear()} Kairo Pursuit. All rights reserved.`,
} as const;
