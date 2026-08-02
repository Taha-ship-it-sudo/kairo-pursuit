import { Reveal } from "@/components/Reveal";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <section id={howItWorks.id} className="section-pad bg-navy text-white">
      <div className="container-site">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-warm uppercase">
            {howItWorks.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            {howItWorks.description}
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {howItWorks.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06}>
              <li className="relative h-full">
                {index < howItWorks.steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute top-5 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-1rem)] bg-white/15 lg:block"
                  />
                ) : null}
                <div className="relative">
                  <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.16em] text-accent">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/65">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
