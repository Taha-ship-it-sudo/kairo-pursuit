import { Reveal } from "@/components/Reveal";
import { whyUs } from "@/content/site";

const icons = [
  <svg key="ops" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    <path
      d="M4 16.5V5.5h14v11M7 16.5v-4h8v4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="scale" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    <path
      d="M4 17h14M6 17V9l5-4 5 4v8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="direct" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    <path
      d="M4 6.5h14v9H4V6.5Zm0 0 7 5.5 7-5.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="workflow" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    <path
      d="M5 6h5v5H5V6Zm7 5h5v5h-5v-5ZM7.5 11v2.5H12"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

export function WhyUs() {
  return (
    <section id={whyUs.id} className="section-pad bg-accent-soft/60">
      <div className="container-site">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            {whyUs.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {whyUs.title}
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {whyUs.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-accent">
                  {icons[index]}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
