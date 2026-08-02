import { footer, navLinks, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface px-5 py-14 sm:px-8 lg:px-12">
      <div className="container-site grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">
            {footer.blurb}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-ink uppercase">Links</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-ink uppercase">Contact</p>
          <ul className="mt-4 space-y-2 text-base text-muted">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              {siteConfig.location}
              <br />
              Serving {siteConfig.serviceAreas}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site mt-12 border-t border-line pt-6">
        <p className="text-sm text-muted">{footer.copyright}</p>
      </div>
    </footer>
  );
}
