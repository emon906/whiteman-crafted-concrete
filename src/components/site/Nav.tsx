import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#story", label: "About" },
  { href: "#reviews", label: "Reviews" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "glass-card border-x-0 border-t-0" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-blue)] text-sm font-black text-primary-foreground">
            W
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-extrabold tracking-tight text-ink">
              WHITEMAN CONCRETE
            </span>
            <span className="block text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
              Construction LLC
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-semibold text-foreground/75 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+12313278861"
            className="hidden text-sm font-bold text-ink transition-colors hover:text-primary md:block"
          >
            (231) 327-8861
          </a>
          <a
            href="#quote"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink sm:block"
          >
            Free Quote
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-card mx-4 mb-4 rounded-2xl p-5 lg:hidden">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-semibold text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#quote" onClick={() => setOpen(false)} className="block text-base font-bold text-primary">
                Request a Free Quote
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
