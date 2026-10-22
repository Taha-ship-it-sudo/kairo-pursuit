import { faq } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="wrap faq-grid">
        <div>
          <h2 className="h2 section-title">Questions owners ask</h2>
          <p className="section-intro">
            Something else on your mind? Call or text us and you&apos;ll get a
            straight answer.
          </p>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
