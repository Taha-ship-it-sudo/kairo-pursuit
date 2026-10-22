import { site } from "@/content/site";
import { DispatchTicket } from "./DispatchTicket";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-place">
            {site.location}. Working with teams in {site.serving}.
          </p>
          <h1 className="display">
            The right tech on every job. A website as good as your reviews.
          </h1>
          <p className="lede">
            Kairo builds software for trades and service businesses. tasked
            tells your dispatcher who should take each job and why. Our
            websites make you as easy to find and book as you are to recommend.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-ink">
              Book a 15 minute call
            </a>
            <a href="#tasked" className="btn btn-line">
              See how tasked works
            </a>
          </div>
        </div>

        <DispatchTicket />
      </div>
    </section>
  );
}
