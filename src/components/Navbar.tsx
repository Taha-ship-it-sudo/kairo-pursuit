"use client";

import Image from "next/image";
import { useState } from "react";
import { nav } from "@/content/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-logo" aria-label="Kairo Pursuit, back to top">
          <Image src="/brand/kairo-logo.png" alt="Kairo" width={305} height={103} priority />
        </a>

        <nav aria-label="Main" className="nav-links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-ink nav-cta">
          Book a call
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav id="mobile-menu" aria-label="Mobile" className="mobile-menu" hidden={!open}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-ink" onClick={() => setOpen(false)}>
          Book a call
        </a>
      </nav>
    </header>
  );
}
