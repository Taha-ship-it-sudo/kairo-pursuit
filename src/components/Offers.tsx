import { site } from "@/content/site";

export function Offers() {
  return (
    <section className="offers" aria-label="What we build">
      <div className="wrap offers-grid">
        <article id="tasked" className="offer offer-tasked">
          <h2 className="h2">tasked</h2>
          <p className="offer-sub">Dispatch that knows your crew.</p>
          <p>
            When a call comes in, someone has to decide who goes. Usually that
            lives in one dispatcher&apos;s head, and a wrong guess means a
            second truck roll, a callback, or an upset customer.
          </p>
          <p>
            tasked knows each tech&apos;s skills and experience. Enter the job
            and it ranks who should go, with the reason next to every name.
          </p>
          <ul className="ticks">
            <li>Your dispatcher still makes the call</li>
            <li>Works next to the field software you already use</li>
            <li>Helps new hires get matched to the right work while they ramp up</li>
            <li>Free two week pilot on real jobs for early customers</li>
          </ul>

          <div className="video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${site.demoVideoId}?rel=0`}
              title="tasked two minute demo"
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <a href="#contact" className="btn btn-signal">
            Ask about a pilot
          </a>
        </article>

        <article id="websites" className="offer offer-web">
          <h2 className="h2">Websites</h2>
          <p className="offer-sub">For when your reviews are stronger than your site.</p>
          <p>
            Most of the businesses we work with are great at the work and
            have the reviews to prove it. Their website hasn&apos;t kept up.
          </p>
          <ul className="ticks">
            <li>Built for phones first, where your customers look you up</li>
            <li>Clear services, real photos, and one tap to call or book</li>
            <li>Set up so Google shows the right hours, menu, and location</li>
            <li>Optional care plan so updates never sit in your inbox</li>
          </ul>
          <a href="#work" className="text-link">
            See sites we&apos;ve built
          </a>
        </article>
      </div>
    </section>
  );
}
