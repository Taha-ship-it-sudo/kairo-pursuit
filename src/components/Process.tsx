import { process } from "@/content/site";

export function Process() {
  return (
    <section id="process" className="process">
      <div className="wrap">
        <h2 className="h2 section-title">How it works</h2>
        <p className="section-intro">
          Four steps, and you always know which one you&apos;re on.
        </p>
        <ol className="steps">
          {process.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="h4">{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
