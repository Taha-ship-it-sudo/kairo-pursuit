import Image from "next/image";

export function Work() {
  return (
    <section id="work" className="work">
      <div className="wrap">
        <h2 className="h2 section-title">Our work</h2>
        <p className="section-intro">
          Real businesses, live today. Click through and use them the way their
          customers do.
        </p>

        <article className="case case-alpha">
          <div className="case-copy">
            <h3 className="h3">Alpha Dessert Juice Cafe</h3>
            <p className="case-kind">Website for a five location cafe in Houston and Austin</p>
            <p>
              Alpha is an all day halal cafe serving burgers, falooda, fresh
              juices, and coffee across five kitchens. Every branch has its own
              menu, hours, and delivery stores, which is a lot to keep straight
              online.
            </p>
            <p>We built one site that handles all five:</p>
            <ul className="ticks">
              <li>A page for every branch with its own menu, hours, phone, and directions</li>
              <li>A location picker that remembers each visitor&apos;s branch</li>
              <li>A live open or closed status from each branch&apos;s real hours</li>
              <li>Ordering for pickup, DoorDash, or Uber Eats from the right store</li>
              <li>Catering and party tray requests in one place</li>
            </ul>
            <a
              href="https://www.alphacafeusa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Visit alphacafeusa.com
            </a>
          </div>

          <div className="case-shot">
            <Image
              src="/case-studies/alpha-cafe-usa.webp"
              alt="Homepage of Alpha Dessert Juice Cafe showing the open now status and branch picker"
              width={1000}
              height={460}
              sizes="(min-width: 960px) 520px, 100vw"
            />
          </div>
        </article>

        <article className="case case-coastal">
          <div className="case-shot">
            <Image
              src="/case-studies/coastal-chiropractic-slo.png"
              alt="Homepage of Coastal Chiropractic SLO"
              width={1894}
              height={829}
              sizes="(min-width: 960px) 560px, 100vw"
            />
          </div>
          <div className="case-copy">
            <h3 className="h3">Coastal Chiropractic SLO</h3>
            <p className="case-kind">Website for a local practice in San Luis Obispo</p>
            <p>
              A complete web presence built around getting new patients in the
              door: clear service breakdowns, patient reviews, an FAQ that
              answers the usual questions before anyone calls, and online
              booking on every page.
            </p>
            <a
              href="https://coastalchiroslo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Visit coastalchiroslo.com
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
