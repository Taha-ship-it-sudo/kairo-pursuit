"use client";

import { useEffect, useState } from "react";

const techs = [
  { name: "Marco R.", fit: 94, reason: "Water heater certified, 23 similar jobs, 12 min away" },
  { name: "Dana K.", fit: 71, reason: "9 similar jobs, finishing a call at 2:10" },
  { name: "Luis P.", fit: 48, reason: "Second year apprentice, 2 similar jobs" },
];

/**
 * A sample dispatch ticket. On load it plays once: the job arrives, the
 * techs are ranked, and the best fit is marked. Reduced motion shows the
 * finished ticket immediately.
 */
export function DispatchTicket() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(4);
      return;
    }
    const timers = [400, 1100, 1700, 2300, 3100].map((ms, i) =>
      window.setTimeout(() => setStep(i + 1), ms),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <figure className="ticket" aria-label="Example of tasked ranking techs for a job">
      <div className="ticket-head">
        <span className="ticket-id">Job 4127</span>
        <span className="ticket-time">Today, 2:30 PM</span>
      </div>

      <div className="ticket-job">
        <p className="ticket-title">No hot water, 40 gallon gas tank</p>
        <p className="ticket-meta">Residential, Laguna Lake, San Luis Obispo</p>
      </div>

      <ol className="ticket-list" aria-label="Recommended techs">
        {techs.map((t, i) => {
          const shown = step >= i + 1;
          const picked = step >= 4 && i === 0;
          return (
            <li
              key={t.name}
              className={`ticket-row${shown ? " is-shown" : ""}${picked ? " is-picked" : ""}`}
            >
              <div className="ticket-row-top">
                <span className="ticket-name">{t.name}</span>
                <span className="ticket-fit">{t.fit}% fit</span>
              </div>
              <div className="ticket-bar" aria-hidden="true">
                <span style={{ width: shown ? `${t.fit}%` : "0%" }} />
              </div>
              <p className="ticket-reason">{t.reason}</p>
            </li>
          );
        })}
      </ol>

      <figcaption className={`ticket-foot${step >= 4 ? " is-shown" : ""}`}>
        Recommended: Marco R. Your dispatcher confirms the assignment.
      </figcaption>
    </figure>
  );
}
