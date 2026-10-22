import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <h2 className="h2">Book a 15 minute call</h2>
          <p>
            Tell us where the day gets stuck. We&apos;ll reply within one
            business day, and if we&apos;re not the right fit we&apos;ll say so.
          </p>
          <dl className="contact-direct">
            <div>
              <dt>Call or text</dt>
              <dd>
                <a href={site.phoneHref}>{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{site.location}</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
