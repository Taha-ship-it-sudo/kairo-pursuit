import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { caseStudy } from "@/content/site";

export function CaseStudy() {
  return (
    <section id={caseStudy.id} className="section-pad bg-surface">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
              {caseStudy.eyebrow}
            </p>
            <p className="mt-3 text-sm font-medium text-muted">{caseStudy.tierLabel}</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {caseStudy.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{caseStudy.writeUp}</p>

            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              {caseStudy.liveLabel}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M4 12L12 4M12 4H6.5M12 4V9.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <div className="mt-8 border-t border-line pt-6">
              <ul className="space-y-2">
                {caseStudy.outcomes.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-muted">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-line bg-navy shadow-[0_24px_60px_-28px_rgba(7,21,33,0.45)]"
            >
              <Image
                src={caseStudy.imageSrc}
                alt={caseStudy.imageAlt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
