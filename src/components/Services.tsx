import { AccordionItem } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/site";

export function Services() {
  return (
    <section id={services.id} className="section-pad bg-surface">
      <div className="container-site">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            {services.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {services.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {services.description}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12 overflow-hidden rounded-xl border border-line bg-surface-elevated">
          <div className="divide-y divide-line px-5 sm:px-8">
            {services.tiers.map((tier, index) => (
              <AccordionItem
                key={tier.id}
                defaultOpen={index === 0}
                title={
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-sm font-semibold tracking-wide text-accent uppercase">
                      {tier.tier}
                    </span>
                    <span>{tier.name}</span>
                  </span>
                }
                summary={tier.shortDescription}
              >
                <ul className="space-y-2">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-line pt-4 text-sm font-medium text-ink">
                  {tier.bestFor}
                </p>
              </AccordionItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
