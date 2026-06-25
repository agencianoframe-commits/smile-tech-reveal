import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ScanLine,
  Cpu,
  Sparkles,
  Target,
  Eye,
  Feather,
  Layers,
  Repeat,
  ShieldCheck,
  Plus,
  Minus,
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import heroTeeth from "@/assets/hero-teeth.jpg";
import smileBefore from "@/assets/smile-before.jpg";
import smileAfter from "@/assets/smile-after.jpg";

const NAV = [
  { label: "Technology", href: "#technology" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Benefits", href: "#benefits" },
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
];

export function LuminaSite() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <Hero />
      <Logos />
      <Technology />
      <Process />
      <Benefits />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* -------------------- Background -------------------- */
function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-1/3 left-1/2 h-[900px] w-[1200px] -translate-x-1/2 rounded-full opacity-60"
           style={{ background: "radial-gradient(ellipse at center, oklch(0.83 0.14 208 / 0.18), transparent 60%)" }} />
      <div className="absolute inset-0 grid-bg opacity-[0.35]" style={{ maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)" }} />
    </div>
  );
}

/* -------------------- Nav -------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-background/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:border-primary/40 hover:bg-primary/10 sm:inline-flex"
            >
              Book Evaluation
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className="h-px w-4 bg-foreground" />
                <span className="h-px w-4 bg-foreground" />
              </div>
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-background/90 p-4 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <div className="relative">
        <div className="absolute inset-0 rounded-md bg-primary/40 blur-md" />
        <svg viewBox="0 0 24 24" className="relative h-6 w-6 text-primary" fill="none">
          <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill="currentColor" />
        </svg>
      </div>
      <div className="leading-none">
        <div className="font-display text-base font-bold tracking-tight">LUMINA</div>
        <div className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground">
          INVISIBLE ORTHODONTICS
        </div>
      </div>
    </a>
  );
}

/* -------------------- Hero -------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ x: x * 14, y: y * -10 });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="top" className="relative z-10 pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Visual first on mobile */}
          <div ref={ref} className="order-first lg:order-last">
            <HeroVisual tilt={tilt} />
          </div>

          {/* Text */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-primary">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              NEXT GENERATION INVISIBLE ORTHODONTICS
            </div>

            <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
              The smile you want.
              <br />
              <span className="text-gradient-cyan">Powered by</span>{" "}
              <span className="text-gradient">precision technology.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Advanced 3D scanning and custom invisible aligners designed to create
              predictable, comfortable and precise results — engineered with the rigor
              of a technology company.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-6px_oklch(0.83_0.14_208/0.7)] transition-transform hover:scale-[1.02]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Book Evaluation
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#technology"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                Learn More
              </a>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
              {[
                { k: "3D", v: "High-precision scanning" },
                { k: "AI", v: "Treatment planning" },
                { k: "100%", v: "Custom aligners" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display text-2xl font-semibold text-foreground">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual({ tilt }: { tilt: { x: number; y: number } }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      {/* Glow rings */}
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.83 0.14 208 / 0.45), transparent 60%)",
        }}
      />
      <div className="absolute inset-6 rounded-full border border-primary/20" />
      <div className="absolute inset-16 rounded-full border border-primary/10" />

      {/* Orbiting dots */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <span
          key={deg}
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_2px_oklch(0.83_0.14_208/0.8)]"
          style={{
            transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-44%)`,
          }}
        />
      ))}

      {/* Image card */}
      <div
        className="relative h-full w-full transition-transform duration-300 ease-out animate-float"
        style={{ transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
      >
        <div className="absolute inset-[8%] overflow-hidden rounded-[32px] border border-white/10 bg-surface/40 shadow-[0_30px_120px_-20px_oklch(0.83_0.14_208/0.45)] backdrop-blur">
          <img
            src={heroTeeth}
            alt="Digital orthodontic scan"
            width={1280}
            height={1280}
            className="h-full w-full object-cover"
          />
          {/* Scan line */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute left-0 right-0 h-24 animate-scan"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, oklch(0.83 0.14 208 / 0.35) 50%, transparent 100%)",
              }}
            />
          </div>
          {/* Holographic tag */}
          <div className="absolute right-3 top-3 flex flex-col gap-1.5">
            {["AI SIMULATION", "3D SCAN", "ALIGNMENT", "PREDICTABLE"].map((t) => (
              <div
                key={t}
                className="flex items-center gap-2 rounded-md border border-primary/30 bg-background/60 px-2.5 py-1.5 text-[10px] font-medium tracking-wider text-primary backdrop-blur"
              >
                <span className="h-1 w-1 rounded-full bg-primary" />
                {t}
              </div>
            ))}
          </div>
          <div className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-background/60 px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground backdrop-blur">
            LUMINA · v3.2 · live
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/70 animate-drift"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 31) % 100}%`,
              animationDelay: `${(i % 6) * 0.8}s`,
              boxShadow: "0 0 8px oklch(0.83 0.14 208 / 0.9)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------- Logo strip -------------------- */
function Logos() {
  const items = ["3SHAPE", "iTero", "ClearCorrect", "Invisalign", "Medit", "Exocad"];
  return (
    <section className="relative z-10 border-y border-white/5 bg-surface/30 py-8 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground/70">
            Powered by industry leading technology
          </span>
          {items.map((i) => (
            <span key={i} className="font-display text-base font-semibold tracking-tight text-muted-foreground/80">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Technology cards -------------------- */
function Technology() {
  const cards = [
    {
      icon: ScanLine,
      title: "3D Scanning",
      desc: "Intraoral scanners capture every detail of your smile at micron precision — no impressions, no discomfort.",
    },
    {
      icon: Cpu,
      title: "Digital Planning",
      desc: "AI-assisted treatment plans simulate every tooth movement before you start. See your result first.",
    },
    {
      icon: Layers,
      title: "Invisible Aligners",
      desc: "Custom-fabricated, ultra-thin aligners engineered for comfort, clarity, and continuous progress.",
    },
    {
      icon: Target,
      title: "Predictable Results",
      desc: "Data-driven sequencing makes every visit count. Predictable outcomes by design, not by chance.",
    },
  ];
  return (
    <section id="technology" className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Technology"
          title={
            <>
              Designed with{" "}
              <span className="text-gradient-cyan">digital precision.</span>
            </>
          }
          subtitle="A complete digital workflow — from scan to smile — engineered to deliver outcomes you can predict."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "oklch(0.83 0.14 208 / 0.4)" }}
              />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground/70">
                  0{i + 1} / 04
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Process timeline -------------------- */
function Process() {
  const steps = [
    {
      n: "01",
      title: "Digital Scan",
      desc: "A 3D intraoral scan captures your smile in minutes — every angle, every micron.",
    },
    {
      n: "02",
      title: "Treatment Planning",
      desc: "Our specialists design a personalized movement plan, simulated end-to-end.",
    },
    {
      n: "03",
      title: "Custom Aligners",
      desc: "Your aligners are 3D-printed and finished to fit only you, comfortably.",
    },
    {
      n: "04",
      title: "Smile Transformation",
      desc: "Wear, swap, and watch your smile evolve — with reviews at every milestone.",
    },
  ];

  return (
    <section id="process" className="relative z-10 border-t border-white/5 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="How it works"
          title={
            <>
              From scan to smile,{" "}
              <span className="text-gradient-cyan">in four steps.</span>
            </>
          }
          subtitle="A modern, transparent workflow. No guesswork — just engineering."
        />
        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="relative z-10 flex h-[88px] w-[88px] items-center justify-center rounded-2xl border border-primary/30 bg-background">
                  <div className="absolute inset-1 rounded-xl bg-primary/5" />
                  <span className="relative font-display text-2xl font-bold text-gradient-cyan">
                    {s.n}
                  </span>
                  <div className="absolute -inset-1 -z-10 rounded-2xl bg-primary/20 blur-xl" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Benefits -------------------- */
function Benefits() {
  const items = [
    { icon: Eye, title: "Invisible", desc: "Transparent aligners no one notices." },
    { icon: Feather, title: "Comfortable", desc: "Soft, smooth, custom to your bite." },
    { icon: Repeat, title: "Removable", desc: "Eat, brush and live without limits." },
    { icon: Sparkles, title: "Personalized", desc: "Designed exclusively around your smile." },
    { icon: ShieldCheck, title: "Predictable", desc: "Simulated results before treatment starts." },
  ];

  return (
    <section id="benefits" className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Benefits"
          title={
            <>
              Built for your life,{" "}
              <span className="text-gradient-cyan">designed for you.</span>
            </>
          }
          subtitle="A superior experience in every detail — from the first scan to the final result."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((b) => (
            <div
              key={b.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 p-6 transition-all duration-500 hover:border-primary/40 hover:bg-surface/60"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, oklch(0.83 0.14 208 / 0.2), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-primary transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/10">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Before / After Reveal -------------------- */
function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => dragging.current && updateFromX(e.clientX);
    const onTouch = (e: TouchEvent) =>
      dragging.current && updateFromX(e.touches[0].clientX);
    const onUp = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <section id="results" className="relative z-10 border-t border-white/5 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Results"
              title={
                <>
                  We design the result,{" "}
                  <span className="text-gradient-cyan">then transform smiles.</span>
                </>
              }
              subtitle="Drag the handle to reveal the power of digital planning and invisible orthodontics — engineered, not estimated."
            />
            <a
              href="#cta"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
            >
              See more cases <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-surface select-none"
            onMouseDown={(e) => {
              dragging.current = true;
              updateFromX(e.clientX);
            }}
            onTouchStart={(e) => {
              dragging.current = true;
              updateFromX(e.touches[0].clientX);
            }}
          >
            <img
              src={smileAfter}
              alt="Smile after"
              loading="lazy"
              width={1280}
              height={720}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={smileBefore}
                alt="Smile before"
                loading="lazy"
                width={1280}
                height={720}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
              />
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/15 bg-background/60 px-3 py-1 font-mono text-[10px] tracking-[0.22em] text-muted-foreground backdrop-blur">
              BEFORE
            </div>
            <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-primary/30 bg-background/60 px-3 py-1 font-mono text-[10px] tracking-[0.22em] text-primary backdrop-blur">
              AFTER
            </div>

            {/* Handle */}
            <div
              className="absolute inset-y-0 z-10 w-px bg-primary/80 shadow-[0_0_20px_2px_oklch(0.83_0.14_208/0.6)]"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background/80 backdrop-blur shadow-[0_0_30px_-4px_oklch(0.83_0.14_208/0.9)]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Testimonials -------------------- */
function Testimonials() {
  const items = [
    {
      name: "Martina R.",
      meta: "Age 28 · 9-month treatment",
      quote:
        "I never thought it would be this easy. The aligners are so comfortable and no one notices I'm wearing them.",
    },
    {
      name: "Tomás L.",
      meta: "Age 34 · 11-month treatment",
      quote:
        "Seeing the 3D simulation before starting was incredible. I knew exactly what I was going to get.",
    },
    {
      name: "Sofía M.",
      meta: "Age 31 · 8-month treatment",
      quote:
        "My smile changed completely and the process was so much simpler than I imagined.",
    },
  ];

  return (
    <section id="stories" className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Stories"
          title={
            <>
              Real people,{" "}
              <span className="text-gradient-cyan">real results.</span>
            </>
          }
          subtitle="Hundreds of smiles transformed with the same digital precision."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-surface to-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="absolute -top-12 -right-8 font-display text-[160px] leading-none text-primary/[0.06] select-none">
                "
              </div>
              <div className="relative">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <svg key={k} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                      <path d="M10 1.5l2.7 5.5 6 .9-4.4 4.3 1 6L10 15.4 4.7 18.2l1-6L1.3 7.9l6-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-lg leading-snug text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.meta}</div>
                  </div>
                  <div className="ml-auto font-mono text-[10px] text-muted-foreground/70">
                    0{i + 1}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */
function FAQ() {
  const faqs = [
    {
      q: "How long does the treatment take?",
      a: "Most treatments take between 6 and 18 months, depending on complexity. Your custom plan will give you an exact timeline up front.",
    },
    {
      q: "Are the aligners really invisible?",
      a: "Yes. The aligners are made from a transparent, medical-grade material that's virtually undetectable — even up close.",
    },
    {
      q: "Does it hurt?",
      a: "There's mild pressure during the first few days of each new aligner. Most patients describe it as comfortable compared to traditional braces.",
    },
    {
      q: "Can I eat and drink normally?",
      a: "Absolutely. You remove the aligners to eat, drink and brush — then put them back in. No food restrictions.",
    },
    {
      q: "How is it different from other clear aligners?",
      a: "Our entire workflow is digital and predictive: 3D scans, AI-assisted planning, and milestone reviews. You see the result before treatment begins.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 border-t border-white/5 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Questions, answered{" "}
              <span className="text-gradient-cyan">clearly.</span>
            </>
          }
        />
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary"
                >
                  <span className="font-display text-lg font-semibold sm:text-xl">{f.q}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 ${
                      isOpen ? "border-primary/40 bg-primary/10 text-primary rotate-180" : "text-muted-foreground"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pb-7 pr-12 text-base leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Final CTA -------------------- */
function FinalCTA() {
  return (
    <section id="cta" className="relative z-10 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] border border-primary/20 bg-surface/60 p-10 sm:p-16">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 80% 20%, oklch(0.83 0.14 208 / 0.25), transparent 60%), radial-gradient(ellipse at 10% 90%, oklch(0.88 0.10 208 / 0.18), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-[0.4]" style={{ maskImage: "radial-gradient(ellipse at center, black, transparent 75%)" }} />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                READY WHEN YOU ARE
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                Your future smile{" "}
                <span className="text-gradient-cyan">starts today.</span>
              </h2>
              <p className="mt-5 max-w-lg text-muted-foreground">
                Book a digital evaluation or chat with our team on WhatsApp. We'll guide you through every step.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="group inline-flex items-center justify-between rounded-2xl bg-primary px-6 py-5 text-base font-semibold text-primary-foreground shadow-[0_0_50px_-6px_oklch(0.83_0.14_208/0.7)] transition-transform hover:scale-[1.01]"
              >
                Book Evaluation
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-6 py-5 text-base font-semibold text-foreground backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  WhatsApp Consultation
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Footer -------------------- */
function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-surface/40 px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Next-generation invisible orthodontics. Powered by 3D precision and built around you.
            </p>
          </div>

          <FooterCol
            title="Explore"
            items={[
              { label: "Technology", href: "#technology" },
              { label: "Process", href: "#process" },
              { label: "Results", href: "#results" },
              { label: "Benefits", href: "#benefits" },
            ]}
          />
          <FooterCol
            title="Company"
            items={[
              { label: "Stories", href: "#stories" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#cta" },
              { label: "Press", href: "#" },
            ]}
          />
          <div>
            <div className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
              Contact
            </div>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" /> hello@luminaortodoncia.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" /> +54 11 1234 5678
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> Av. Libertador 1234, CABA
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2">
              {[Instagram, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Lumina Ortodoncia Invisible. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
        {title}
      </div>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="text-muted-foreground transition hover:text-foreground">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------- Shared header -------------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-primary" />
        {eyebrow.toUpperCase()}
      </div>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base text-muted-foreground sm:text-lg ${align === "center" ? "mx-auto max-w-xl" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}