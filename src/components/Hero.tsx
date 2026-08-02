import { hero, siteConfig } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-deep text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_15%_20%,rgba(31,122,108,0.28),transparent_55%),radial-gradient(ellipse_70%_50%_at_85%_10%,rgba(196,165,116,0.14),transparent_50%),linear-gradient(180deg,#0c1e2e_0%,#071521_55%,#0a1824_100%)]"
      />
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface to-transparent"
      />

      <div className="container-site relative z-10 section-pad w-full pb-24 pt-32 sm:pb-28 sm:pt-36">
        <Reveal>
          <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-warm uppercase sm:text-base">
            {hero.brand}
          </p>
          <p className="mt-3 max-w-xl text-sm text-white/65 sm:text-base">
            {siteConfig.location} · Serving {siteConfig.serviceAreas}
          </p>
          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
