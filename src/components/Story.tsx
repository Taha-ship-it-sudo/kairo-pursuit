const founders = [
  { name: "Taha Ashraf", role: "Cofounder", focus: "Product and customers", place: "San Luis Obispo, CA" },
  { name: "Darwan Barzani", role: "Cofounder and CTO", focus: "Builds tasked and the plan set tool", place: "Austin, TX" },
  { name: "Jeremy Tai", role: "Cofounder and COO", focus: "Sales and operations", place: "Seattle, WA" },
];

export function Story() {
  return (
    <section id="story" className="story">
      <div className="wrap story-grid">
        <div>
          <h2 className="h2 section-title">Why Kairo</h2>
          <p className="lede">
            We started at Cal Poly with one rule: talk to the people doing the
            work before writing any code.
          </p>
          <p>
            That rule killed our first idea, a bidding tool for general
            contractors who mostly didn&apos;t need it. It also pointed us to the
            problems we work on now: who goes on which job, and what slips
            between the schedules and the plans.
          </p>
          <p>
            We take on a few customers at a time and build alongside them,
            because the people who do the work know exactly where it breaks.
          </p>
        </div>

        <ul className="founders">
          {founders.map((f) => (
            <li key={f.name} className="founder">
              <p className="founder-name">{f.name}</p>
              <p className="founder-role">{f.role}</p>
              <p className="founder-focus">
                {f.focus}. {f.place}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
