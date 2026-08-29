import { useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [pos, setPos] = useState(52);
  const wrap = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div className="group">
      <div
        ref={wrap}
        className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-concrete shadow-[var(--shadow-soft)]"
        onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
        onPointerDown={(e) => move(e.clientX)}
      >
        <img
          src={after}
          alt={`${label} after`}
          loading="lazy"
          width={1000}
          height={750}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={before}
            alt={`${label} before`}
            loading="lazy"
            width={1000}
            height={750}
            className="h-full w-full object-cover"
            style={{ width: wrap.current ? `${wrap.current.clientWidth}px` : "100%" }}
          />
          <span className="absolute top-4 left-4 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
            Before
          </span>
        </div>
        <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-bold tracking-[0.2em] text-primary-foreground uppercase">
          After
        </span>
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-background/90"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-primary shadow-[var(--shadow-glass)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold text-foreground">{label}</p>
      <p className="text-sm text-muted-foreground">Drag to compare</p>
    </div>
  );
}
