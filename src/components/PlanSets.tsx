const flags = [
  { tag: "AHU 2", status: "flag", note: "On the schedule, not found on any floor plan" },
  { tag: "VAV 3 14", status: "flag", note: "Drawn on M 201, missing from the VAV schedule" },
  { tag: "FCU 6", status: "flag", note: "Scheduled with no thermostat shown" },
  { tag: "EF 1 to EF 4", status: "ok", note: "Schedule and plans agree" },
];

/**
 * Plan set reconciliation: what Kairo is building next, and the design
 * partner ask. The exception list is sample data, not a real job.
 */
export function PlanSets() {
  return (
    <section id="plans" className="plans">
      <div className="wrap plans-grid">
        <div className="plans-copy">
          <p className="eyebrow">What we&apos;re building next</p>
          <h2 className="h2 section-title">Catch missed scope before you bid.</h2>
          <p>
            On a commercial job, the equipment schedules and the floor plans are
            supposed to agree. Often they don&apos;t. A unit that&apos;s drawn but
            never scheduled, or scheduled without its controls, turns into a
            change order the contractor eats.
          </p>
          <p>
            We&apos;re building a tool that reads a PDF plan set, pulls every
            piece of equipment off the schedules and the plans, and flags
            anything that doesn&apos;t match. Your estimator checks each flag, so
            nothing changes without a person looking at it.
          </p>
          <ul className="ticks">
            <li>Every unit on the schedules matched against the floor plans</li>
            <li>A short list of mismatches instead of a full recount</li>
            <li>A marked up PDF your team can open in Bluebeam</li>
            <li>Built for controls, mechanical, HVAC, electrical, and plumbing contractors</li>
          </ul>

          <div className="partner">
            <p className="partner-title">Now in testing with a commercial controls contractor in California.</p>
            <p>
              We&apos;re looking for two or three more specialty contractors to
              build it with. Send us one past plan set where you already know
              the final count. We run it free and show you what it catches.
            </p>
            <a href="#contact" className="btn btn-signal">
              Become a design partner
            </a>
          </div>
        </div>

        <figure className="ticket plans-sheet" aria-label="Sample exception list from a plan set check">
          <div className="ticket-head">
            <span>Plan set check</span>
            <span className="ticket-time">Sample job, 14 sheets</span>
          </div>
          <div className="ticket-job">
            <p className="ticket-title">3 items need a look</p>
            <p className="ticket-meta">Schedules on M 001 compared to plans M 101 to M 204</p>
          </div>
          <ul className="ticket-list">
            {flags.map((f) => (
              <li key={f.tag} className={`plans-row is-${f.status}`}>
                <span className="plans-tag">{f.tag}</span>
                <span className="plans-note">{f.note}</span>
              </li>
            ))}
          </ul>
          <p className="ticket-foot is-shown">Your estimator reviews each flag before the bid goes out.</p>
        </figure>
      </div>
    </section>
  );
}
