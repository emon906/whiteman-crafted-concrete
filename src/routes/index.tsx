import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Reveal, useParallax } from "@/components/site/Reveal";
import { LazyVideo } from "@/components/site/LazyVideo";
import { BeforeAfter } from "@/components/site/BeforeAfter";

import heroDriveway from "@/assets/hero-driveway.jpg";
import serviceFlatwork from "@/assets/service-flatwork.jpg";
import servicePatio from "@/assets/service-patio.jpg";
import serviceGarage from "@/assets/service-garage.jpg";
import serviceWalkway from "@/assets/service-walkway.jpg";
import storyCrew from "@/assets/story-crew.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import detailEdge from "@/assets/detail-edge.jpg";
import pourTruck from "@/assets/pour-truck.jpg";
import projectAerial from "@/assets/project-aerial.jpg";
import projectStamped from "@/assets/project-stamped.jpg";

import videoPour from "@/assets/video-pour.mp4.asset.json";
import videoFinish from "@/assets/video-finish.mp4.asset.json";
import videoAerial from "@/assets/video-aerial.mp4.asset.json";

const TITLE = "Whiteman Concrete Construction LLC | Fruitport, MI Flatwork";
const DESC =
  "Quality residential concrete flatwork in Fruitport and West Michigan. Licensed, insured, 10+ years of experience and 100% recommended. Free quotes: (231) 327-8861.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "Licensed", label: "State Certified" },
  { value: "Insured", label: "Fully Covered" },
  { value: "100%", label: "Recommended" },
];

const services = [
  {
    title: "Driveways",
    copy: "Poured, jointed and finished to shed Michigan winters without cracking or heaving.",
    image: heroDriveway,
    w: 1408,
    h: 1760,
  },
  {
    title: "Patios & Slabs",
    copy: "Clean-edged outdoor living slabs with true drainage and crisp control joints.",
    image: servicePatio,
    w: 1200,
    h: 900,
  },
  {
    title: "Sidewalks & Steps",
    copy: "Safe, level approaches and steps that make the front of your home look new.",
    image: serviceWalkway,
    w: 1200,
    h: 900,
  },
  {
    title: "Garage & Shop Floors",
    copy: "Hard-troweled interior floors with a smooth, dust-free finish built for daily use.",
    image: serviceGarage,
    w: 1200,
    h: 900,
  },
];

const reasons = [
  { n: "01", t: "Owner on every pour", c: "Cody is on site start to finish — no subcontracted crews, no surprises." },
  { n: "02", t: "Prep done right", c: "Proper base, grade and reinforcement before a single yard of concrete arrives." },
  { n: "03", t: "Straight, clean lines", c: "Forms, joints and edges snapped tight. The details are what people notice." },
  { n: "04", t: "Honest, upfront pricing", c: "Detailed written quotes with no padded line items or day-of add-ons." },
  { n: "05", t: "Site left spotless", c: "Grade restored, forms pulled, driveway swept. We leave it better than we found it." },
  { n: "06", t: "Local accountability", c: "Fruitport based and serving West Michigan — your neighbors are our references." },
];

const reviews = [
  {
    q: "Cody poured our driveway and it is flawless. Straight lines, perfect finish, and the crew cleaned up every bit of mess.",
    n: "Sarah M.",
    l: "Fruitport, MI",
  },
  {
    q: "Fair quote, showed up when they said, and the patio looks better than the one our neighbor paid twice for.",
    n: "Dan R.",
    l: "Spring Lake, MI",
  },
  {
    q: "Replaced a cracked slab and garage floor. Ten years from now it will still look this good. Highly recommend.",
    n: "Kristin B.",
    l: "Muskegon, MI",
  },
];

function Home() {
  const heroImg = useParallax(0.06);

  return (
    <div id="top" className="overflow-x-hidden bg-background">
      <Nav />

      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[100svh] w-full overflow-hidden pt-28 pb-16 md:pt-36">
        <div className="absolute inset-0 -z-10 surface-sky" />
        <LazyVideo
          src={videoPour.url}
          poster={pourTruck}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.28]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/55 to-background" />

        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] text-ink uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Fruitport, MI · West Michigan
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 font-display text-[clamp(2.9rem,8.2vw,7rem)] leading-[0.9] font-extrabold text-ink">
                Built to Last.
                <span className="block text-gradient-blue">Finished With Pride.</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Quality residential flatwork from a licensed, insured crew with more than a decade
                of West Michigan pours behind them.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#quote"
                  className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-1 hover:bg-ink"
                >
                  Request a Free Quote
                </a>
                <a
                  href="#work"
                  className="rounded-full border border-border bg-background/70 px-8 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  View Our Work
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={200}>
              <div ref={heroImg} className="relative ml-auto w-full max-w-md lg:translate-x-6">
                <img
                  src={heroDriveway}
                  alt="Freshly finished residential concrete driveway in West Michigan"
                  width={1408}
                  height={1760}
                  className="aspect-4/5 w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
                />
                <div className="glass-card absolute -bottom-8 -left-6 w-56 rounded-2xl p-5 md:-left-16">
                  <p className="font-display text-4xl font-extrabold text-ink">10+</p>
                  <p className="mt-1 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Years of pours
                  </p>
                </div>
                <div className="glass-card absolute -top-6 -left-4 rounded-2xl px-5 py-3 md:-left-12">
                  <p className="text-xs font-bold tracking-[0.16em] text-primary uppercase">
                    100% Recommended
                  </p>
                  <p className="text-xs text-muted-foreground">10 verified reviews</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- TRUST STATS ---------- */}
      <section className="border-y border-border bg-concrete">
        <div className="mx-auto grid max-w-[88rem] grid-cols-2 gap-px px-5 md:px-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="py-12 text-center lg:py-16">
                <p className="font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-none font-extrabold text-ink">
                  {s.value}
                </p>
                <p className="mt-3 text-[0.7rem] font-bold tracking-[0.24em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section id="services" className="mx-auto max-w-[88rem] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <div>
              <p className="eyebrow">Residential Concrete</p>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.95] font-extrabold text-ink">
                Flatwork done
                <br />
                the right way.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground lg:ml-auto">
              Every project starts with the base and finishes with the edge. That discipline is why
              our slabs still look sharp a decade later.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article
                className={`hover-lift group overflow-hidden rounded-[1.75rem] border border-border bg-card ${
                  i % 3 === 0 ? "md:row-span-1" : ""
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={s.w}
                    height={s.h}
                    className="h-72 w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 md:h-96"
                  />
                </div>
                <div className="flex items-start justify-between gap-6 p-7">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {s.copy}
                    </p>
                  </div>
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- FULL-WIDTH VIDEO ONLY ---------- */}
      <section className="relative h-[62vh] min-h-[420px] w-full overflow-hidden md:h-[78vh]">
        <LazyVideo
          src={videoFinish.url}
          poster={serviceFlatwork}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/40" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[88rem] px-5 pb-12 md:px-10 md:pb-16">
          <Reveal>
            <p className="font-display text-[clamp(1.6rem,4.5vw,3.6rem)] leading-[1] font-extrabold text-ink">
              Poured, floated, troweled, edged.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- STORY ---------- */}
      <section id="story" className="mx-auto max-w-[88rem] px-5 py-24 md:px-10 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={storyCrew}
                alt="Whiteman Concrete crew finishing a residential slab"
                loading="lazy"
                width={1200}
                height={1400}
                className="aspect-4/5 w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
              />
              <img
                src={detailEdge}
                alt="Hand edging a fresh concrete slab"
                loading="lazy"
                width={900}
                height={1200}
                className="absolute -right-4 -bottom-10 hidden w-40 rounded-2xl border-4 border-background object-cover shadow-[var(--shadow-glass)] md:block md:w-52"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="eyebrow">Our Story</p>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-extrabold text-ink">
                A Decade of Quality
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                Whiteman Concrete Construction LLC was built on a simple standard: pour it like it's
                going in front of your own house. For more than ten years we've handled residential
                flatwork across Fruitport, Muskegon, Spring Lake and the wider West Michigan area.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Fully licensed and insured, we keep our crews small and our standards high — which
                is why every review we've received recommends us.
              </p>
              <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
                {[
                  ["10+", "Years"],
                  ["100%", "Recommended"],
                  ["West MI", "Service Area"],
                ].map(([v, l]) => (
                  <div key={l} className="bg-card px-6 py-6">
                    <p className="font-display text-2xl font-extrabold text-ink">{v}</p>
                    <p className="mt-1 text-[0.68rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- BEFORE / AFTER ---------- */}
      <section className="bg-concrete py-24 md:py-32">
        <div className="mx-auto max-w-[88rem] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow">Transformations</p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-extrabold text-ink">
              Before &amp; After
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal delay={80}>
              <BeforeAfter before={before1} after={after1} label="Driveway replacement — Fruitport" />
            </Reveal>
            <Reveal delay={160}>
              <BeforeAfter before={before2} after={after2} label="Backyard patio rebuild — Muskegon" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- MASONRY MIX ---------- */}
      <section id="work" className="mx-auto max-w-[88rem] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-extrabold text-ink">
              The work, up close.
            </h2>
            <p className="max-w-sm text-muted-foreground">
              A mix of finished projects and jobsite moments from around West Michigan.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <Reveal className="col-span-2 row-span-2" delay={0}>
            <img
              src={projectAerial}
              alt="Aerial view of a finished concrete driveway"
              loading="lazy"
              width={1400}
              height={900}
              className="h-full w-full rounded-2xl object-cover transition-transform duration-[900ms] hover:scale-[1.02]"
            />
          </Reveal>
          <Reveal className="row-span-2" delay={80}>
            <LazyVideo
              src={videoFinish.url}
              poster={serviceFlatwork}
              className="h-full w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={140}>
            <img
              src={projectStamped}
              alt="Stamped concrete detail"
              loading="lazy"
              width={1000}
              height={1000}
              className="h-full w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-[image:var(--gradient-blue)] p-6">
              <p className="text-[0.65rem] font-bold tracking-[0.22em] text-primary-foreground/80 uppercase">
                Jobsite
              </p>
              <p className="font-display text-2xl leading-tight font-extrabold text-primary-foreground">
                Clean lines, every pour.
              </p>
            </div>
          </Reveal>
          <Reveal className="col-span-2" delay={120}>
            <LazyVideo
              src={videoAerial.url}
              poster={projectAerial}
              className="h-full w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={180}>
            <img
              src={serviceWalkway}
              alt="Concrete walkway and steps"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={240}>
            <img
              src={detailEdge}
              alt="Edging tool on fresh concrete"
              loading="lazy"
              width={900}
              height={1200}
              className="h-full w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- FEATURED PROJECTS ---------- */}
      <section className="border-y border-border bg-concrete py-24 md:py-32">
        <div className="mx-auto max-w-[88rem] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow">Featured Projects</p>
          </Reveal>
          <div className="mt-10 divide-y divide-border border-t border-border">
            {[
              { t: "Three-Car Driveway", l: "Fruitport, MI", d: "1,850 sq ft · broom finish", i: heroDriveway },
              { t: "Rear Patio & Walk", l: "Spring Lake, MI", d: "620 sq ft · sawn joints", i: servicePatio },
              { t: "Garage Slab Replacement", l: "Muskegon, MI", d: "980 sq ft · hard trowel", i: serviceGarage },
              { t: "Slab Pour & Prep", l: "Norton Shores, MI", d: "Reinforced · 6\" base", i: pourTruck },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 70}>
                <a
                  href="#quote"
                  className="group flex items-center gap-6 py-7 transition-colors hover:bg-background/60"
                >
                  <span className="w-10 shrink-0 font-display text-sm font-bold text-muted-foreground">
                    0{i + 1}
                  </span>
                  <img
                    src={p.i}
                    alt={p.t}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="h-16 w-24 shrink-0 rounded-lg object-cover transition-all duration-500 group-hover:h-20 group-hover:w-32"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl font-bold text-ink md:text-3xl">
                      {p.t}
                    </span>
                    <span className="block text-sm text-muted-foreground">{p.d}</span>
                  </span>
                  <span className="hidden text-sm font-semibold text-muted-foreground sm:block">
                    {p.l}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FULL WIDTH VIDEO + FLOATING CTA ---------- */}
      <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
        <LazyVideo
          src={videoAerial.url}
          poster={projectAerial}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/20 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-[88rem] items-center px-5 md:px-10">
          <Reveal>
            <div className="glass-card max-w-md rounded-[1.75rem] p-8 md:p-10">
              <p className="eyebrow">Free Estimates</p>
              <p className="mt-4 font-display text-3xl leading-tight font-extrabold text-ink md:text-4xl">
                Know your number before you commit.
              </p>
              <p className="mt-4 text-muted-foreground">
                Send us the details and we'll come measure, talk options and give you an honest
                written quote.
              </p>
              <a
                href="#quote"
                className="mt-7 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-ink"
              >
                Request a Free Quote
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHY CHOOSE ---------- */}
      <section className="mx-auto max-w-[88rem] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <h2 className="max-w-2xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-extrabold text-ink">
            Why homeowners choose Whiteman Concrete.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.n} delay={i * 70}>
              <div className="h-full bg-card p-8 transition-colors duration-500 hover:bg-sky-soft">
                <p className="font-display text-sm font-bold text-accent">{r.n}</p>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{r.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- REVIEWS ---------- */}
      <section id="reviews" className="surface-sky py-24 md:py-32">
        <div className="mx-auto max-w-[88rem] px-5 md:px-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-extrabold text-ink">
                100% Recommended
              </h2>
              <p className="text-sm font-bold tracking-[0.18em] text-muted-foreground uppercase">
                10 reviews · West Michigan
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.n} delay={i * 90}>
                <figure className="hover-lift h-full rounded-[1.5rem] border border-border bg-card p-8">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="m12 2 2.9 6.2 6.6.9-4.8 4.6 1.2 6.6L12 17.2 6.1 20.3l1.2-6.6L2.5 9.1l6.6-.9z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-6 text-lg leading-relaxed text-ink">"{r.q}"</blockquote>
                  <figcaption className="mt-7 text-sm">
                    <span className="font-bold text-ink">{r.n}</span>
                    <span className="block text-muted-foreground">{r.l}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section id="quote" className="mx-auto max-w-[88rem] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[image:var(--gradient-blue)] px-7 py-20 text-center md:px-16 md:py-28">
            <p className="text-[0.7rem] font-bold tracking-[0.28em] text-primary-foreground/80 uppercase">
              Free Estimate
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.92] font-extrabold text-primary-foreground">
              Start Your Project
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-primary-foreground/85">
              Call, text or email Cody. We'll walk the site, talk through the options and get you a
              clear quote — no pressure.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+12313278861"
                className="rounded-full bg-background px-8 py-4 text-sm font-bold text-primary transition-transform duration-300 hover:-translate-y-1"
              >
                Call (231) 327-8861
              </a>
              <a
                href="mailto:codyjwhiteman2@gmail.com"
                className="rounded-full border border-primary-foreground/40 px-8 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground/10"
              >
                Email Us
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-border bg-concrete">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-16 md:grid-cols-4 md:px-10">
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-extrabold text-ink">
              Whiteman Concrete Construction LLC
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Quality residential flatwork for Fruitport and West Michigan. Licensed, insured and
              recommended by every customer who's reviewed us.
            </p>
          </div>
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.24em] text-muted-foreground uppercase">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="tel:+12313278861" className="font-semibold text-ink hover:text-primary">
                  +1 231-327-8861
                </a>
              </li>
              <li>
                <a
                  href="mailto:codyjwhiteman2@gmail.com"
                  className="font-semibold text-ink hover:text-primary"
                >
                  codyjwhiteman2@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">Fruitport, MI 49415</li>
            </ul>
          </div>
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.24em] text-muted-foreground uppercase">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {["services", "work", "story", "reviews"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="capitalize text-muted-foreground hover:text-primary">
                    {id === "story" ? "About" : id}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-[88rem] flex-wrap justify-between gap-3 px-5 py-6 text-xs text-muted-foreground md:px-10">
            <p>© {new Date().getFullYear()} Whiteman Concrete Construction LLC</p>
            <p>Licensed &amp; Insured · Serving West Michigan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
