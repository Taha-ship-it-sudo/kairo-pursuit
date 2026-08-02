import { AccordionItem } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { faq } from "@/content/site";

export function FAQ() {
  return (
    <section id={faq.id} className="section-pad bg-surface">
      <div className="container-site max-w-3xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            {faq.eyebrow}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {faq.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 overflow-hidden rounded-xl border border-line bg-surface-elevated px-5 sm:px-8">
          {faq.items.map((item) => (
            <AccordionItem key={item.question} title={item.question}>
              <p>{item.answer}</p>
            </AccordionItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
