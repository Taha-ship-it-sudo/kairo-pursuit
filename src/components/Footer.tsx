import Image from "next/image";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <Image src="/brand/kairo-logo-light.png" alt="Kairo" width={305} height={103} className="footer-logo" />
          <p>Software for trades and service businesses.</p>
        </div>
        <nav aria-label="Footer" className="footer-links">
          {nav.map((item) => (
            <a key={item.href} href={`/${item.href}`}>
              {item.label}
            </a>
          ))}
          <a href="/privacy">Privacy</a>
        </nav>
        <div className="footer-contact">
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.location}</span>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} Kairo Pursuit LLC</p>
      </div>
    </footer>
  );
}
