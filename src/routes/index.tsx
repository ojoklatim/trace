import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/trace/Nav";
import { Reveal, StaggerWords } from "@/components/trace/Reveal";
import {
  ContourTerrain,
  FlowLines,
  RainField,
  TerrainMesh,
} from "@/components/trace/MotionGraphics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRACE — Terrain Runoff Analysis & City Engineering" },
      {
        name: "description",
        content:
          "TRACE is an AI-powered smart drainage intelligence platform that turns Kampala's terrain into evidence — predicting floods before they happen.",
      },
      { property: "og:title", content: "TRACE — Terrain Runoff Analysis & City Engineering" },
      {
        property: "og:description",
        content:
          "Predictive flood intelligence for Kampala. Built on open terrain data, AI runoff simulation, and a vision for sensor-driven cities.",
      },
    ],
  }),
  component: TracePage,
});

function TracePage() {
  return (
    <div id="top" className="relative min-h-screen bg-[var(--paper)] text-[var(--forest-deep)]">
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <CrisisFigures />
      <Solution />
      <SystemDiagram />
      <Pillars />
      <Architecture />
      <Impact />
      <Vision />
      <Footer />
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-32 pb-32 md:pt-44 md:pb-48">
      {/* ambient terrain backdrop */}
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <ContourTerrain className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--paper)] to-transparent" />
      </motion.div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--forest)]/20 bg-[var(--paper)]/60 px-3 py-1 font-sans text-xs uppercase tracking-[0.18em] text-[var(--forest)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--forest)]" />
          Product Brief · Kampala, Uganda · 2026
        </motion.p>

        <h1 className="max-w-4xl text-balance text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
          <StaggerWords text="Terrain becomes evidence." />
          <br />
          <motion.span
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-[var(--forest)] italic"
          >
            Floods become forecasts.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-10 max-w-2xl text-pretty font-sans text-lg leading-relaxed text-[var(--forest-deep)]/75 md:text-xl"
        >
          TRACE — <em className="not-italic text-[var(--forest)]">Terrain Runoff Analysis &amp;
          City Engineering</em> — is an AI-driven drainage intelligence platform.
          It models the slopes, valleys, and pipes of a city in three dimensions, then simulates
          where the next storm will go before it arrives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#problem"
            className="rounded-full bg-[var(--forest-deep)] px-6 py-3 font-sans text-sm font-medium text-[var(--paper)] transition hover:bg-[var(--forest)]"
          >
            See why it matters ↓
          </a>
          <a
            href="#system"
            className="rounded-full border border-[var(--forest)]/30 px-6 py-3 font-sans text-sm font-medium text-[var(--forest-deep)] transition hover:bg-[var(--forest)]/5"
          >
            How the system works
          </a>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-sans text-xs uppercase tracking-[0.3em] text-[var(--forest)]/50"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
        >
          scroll
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ───────────────────────── MARQUEE ───────────────────────── */
function Marquee() {
  const items = [
    "March 2025 · 7 lives lost",
    "November 2024 · 20 dead in Bulambuli landslides",
    "May 2024 · 18,323 people affected nationwide",
    "September 2024 · 1,469 households displaced in Kasese",
    "October 2025 · CBD shutdown",
    "50% of Kampala's wetlands gone",
  ];
  return (
    <section className="border-y border-[var(--forest)]/15 bg-[var(--tan-soft)]/40 py-6">
      <div className="flex gap-12 overflow-hidden">
        <motion.div
          className="flex shrink-0 gap-12 whitespace-nowrap font-sans text-sm uppercase tracking-[0.18em] text-[var(--forest-deep)]/70"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...items, ...items, ...items].map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              {t}
              <span className="text-[var(--forest)]">◆</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── PROBLEM ───────────────────────── */
function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-32 md:py-44">
      <RainField count={50} />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--forest)]">
            01 — The problem
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-balance text-4xl leading-tight tracking-tight md:text-6xl">
            When it rains in Kampala,
            <span className="text-[var(--forest-soft)] italic"> roads become rivers.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-[var(--forest-deep)]/75">
            The city sits on hills and valleys. Drainage was designed decades ago, for a smaller,
            slower city. Today, half of Kampala's wetlands are paved over, sixty percent of urban
            waste blocks the channels, and a single 80mm storm can submerge the central business
            district for hours.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-[var(--forest)]/15 bg-[var(--forest)]/15 md:grid-cols-3">
          {[
            {
              n: "50%",
              t: "of Kampala's wetlands lost to development",
              s: "Makerere University · NEMA 2024",
            },
            {
              n: "60%",
              t: "of urban waste blocks city drainage",
              s: "NEMA Environmental Audit",
            },
            {
              n: "20%",
              t: "increase in East African rainfall intensity",
              s: "IPCC, 2021",
            },
          ].map((item, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              className="flex flex-col gap-4 bg-[var(--paper)] p-10"
            >
              <div className="font-sans text-6xl font-light tracking-tight text-[var(--forest)]">
                {item.n}
              </div>
              <p className="text-lg leading-snug text-[var(--forest-deep)]">{item.t}</p>
              <p className="mt-auto font-sans text-xs uppercase tracking-wider text-[var(--forest-deep)]/50">
                {item.s}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CRISIS FIGURES ───────────────────────── */
function CrisisFigures() {
  const incidents = [
    {
      date: "March 2025",
      title: "Kampala Flash Floods",
      body: "At least seven lives lost, including two children. Clock Tower, Kawempe, Natete and the Northern Bypass submerged. Officials called it a once-in-50-years storm — but flooding now follows nearly every heavy rain.",
    },
    {
      date: "November 2024",
      title: "Bulambuli Landslides",
      body: "Twenty confirmed dead, 113 reported missing. Forty homes buried, 125 destroyed, the River Simu burst its banks. Roads to South Sudan were severed; a rescuer drowned when his boat capsized.",
    },
    {
      date: "September 2024",
      title: "Kasese — River Nyamwamba",
      body: "Two killed, 1,469 households affected across thirteen villages, more than 120 homes lost.",
    },
    {
      date: "May 2024",
      title: "Nationwide Floods",
      body: "18,323 people affected, 1,129 houses completely destroyed, thousands displaced.",
    },
  ];
  return (
    <section className="bg-[var(--forest-deep)] py-32 text-[var(--paper)] md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--tan-warm)]">
            A timeline written in water
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl leading-tight tracking-tight md:text-5xl">
            Each row is a storm the city was not ready for.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-[var(--paper)]/10 border-y border-[var(--paper)]/10">
          {incidents.map((it, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="grid gap-6 py-10 md:grid-cols-[180px_220px_1fr] md:items-baseline"
            >
              <div className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--tan-warm)]">
                {it.date}
              </div>
              <div className="text-2xl tracking-tight">{it.title}</div>
              <p className="font-sans text-base leading-relaxed text-[var(--paper)]/75">
                {it.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SOLUTION ───────────────────────── */
function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden py-32 md:py-44">
      <FlowLines className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[420px] w-full opacity-60" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--forest)]">
            02 — The solution
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-balance text-4xl leading-tight tracking-tight md:text-6xl">
            A digital twin of the city —
            <span className="italic text-[var(--forest)]"> simulating every drop</span> before
            it falls.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-[var(--forest-deep)]/75">
            TRACE pulls open elevation and satellite data — USGS, Copernicus, Google Earth Engine —
            and reconstructs Kampala's terrain in three dimensions. A physics-aware AI then
            simulates how rainfall moves across that terrain: gravity, slope, soil absorption, road
            surface, pipe capacity. The output is a living map of where water wants to go.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── SYSTEM DIAGRAM ───────────────────────── */
function SystemDiagram() {
  return (
    <section id="system" className="relative overflow-hidden bg-[var(--tan-soft)]/50 py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--forest)]">
            03 — The system
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl leading-tight tracking-tight md:text-5xl">
            Terrain. Sensors. Intelligence.
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-16 overflow-hidden rounded-3xl border border-[var(--forest)]/20 bg-[var(--paper)] p-8 md:p-12">
          <TerrainMesh className="h-[280px] w-full md:h-[360px]" />
          <div className="mt-8 grid gap-8 font-sans text-sm md:grid-cols-3">
            <div>
              <div className="mb-2 flex items-center gap-2 text-[var(--forest)]">
                <span className="h-2 w-2 rounded-full bg-[var(--forest)]" />
                3D terrain layer
              </div>
              <p className="text-[var(--forest-deep)]/70 leading-relaxed">
                High-resolution digital elevation model of slopes, valleys, ridges and existing
                drainage channels.
              </p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 text-[var(--forest)]">
                <span className="h-2 w-2 animate-pulse-soft rounded-full bg-[var(--forest)]" />
                Simulated sensor mesh
              </div>
              <p className="text-[var(--forest-deep)]/70 leading-relaxed">
                Low-cost IoT water-level sensors at intersections, low-lying zones, and known
                hotspots — meshed by cellular and radio.
              </p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 text-[var(--forest)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                AI runoff engine
              </div>
              <p className="text-[var(--forest-deep)]/70 leading-relaxed">
                Identifies bottlenecks, recommends pipes to add, remove or reroute, and ranks
                priority zones for intervention.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── PILLARS ───────────────────────── */
function Pillars() {
  const pillars = [
    {
      n: "I",
      t: "Terrain Modeling",
      d: "Open satellite imagery and elevation data, processed in QGIS, lifted into a 3D model of the city.",
    },
    {
      n: "II",
      t: "Runoff Simulation",
      d: "Physics-informed AI computes water movement across topography, soil and infrastructure.",
    },
    {
      n: "III",
      t: "Drainage Intelligence",
      d: "The engine highlights where to add pipes, what to reroute, and which neighborhoods need help first.",
    },
    {
      n: "IV",
      t: "Live Dashboard",
      d: "City planners explore the model, compare before/after scenarios, and dispatch responders before water rises.",
    },
  ];
  return (
    <section className="py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--forest)]">
            Four pillars
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl leading-tight tracking-tight md:text-5xl">
            From open data to a city that listens to the rain.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 0.08}
              className="group relative overflow-hidden rounded-2xl border border-[var(--forest)]/15 bg-[var(--paper)] p-10 transition hover:border-[var(--forest)]/40"
            >
              <div className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--forest)]/60">
                Pillar {p.n}
              </div>
              <h3 className="mt-3 text-3xl tracking-tight">{p.t}</h3>
              <p className="mt-4 font-sans text-base leading-relaxed text-[var(--forest-deep)]/70">
                {p.d}
              </p>
              <div className="absolute -bottom-px left-10 right-10 h-px origin-left scale-x-0 bg-[var(--forest)] transition-transform duration-700 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── ARCHITECTURE ───────────────────────── */
function Architecture() {
  const stack = [
    ["Compute", "Google Colab — zero hardware footprint"],
    ["Terrain data", "USGS · Copernicus · Google Earth Engine"],
    ["Geospatial", "QGIS — open mapping and analysis"],
    ["AI / ML", "TensorFlow · PyTorch · NumPy"],
    ["3D visualization", "Plotly · Pydeck · Three.js"],
    ["Dashboard", "Streamlit / Gradio — instant web UI"],
    ["Hardware", "Cellular + radio mesh IoT sensor network"],
  ];
  return (
    <section className="bg-[var(--forest-deep)] py-32 text-[var(--paper)] md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--tan-warm)]">
            Architecture
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl leading-tight tracking-tight md:text-5xl">
            Built entirely on open source. Designed to scale from a neighborhood to a continent.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-[var(--paper)]/10 border-y border-[var(--paper)]/10">
          {stack.map(([k, v], i) => (
            <Reveal
              key={k}
              delay={i * 0.05}
              className="grid grid-cols-[140px_1fr] items-baseline gap-6 py-6 md:grid-cols-[260px_1fr]"
            >
              <div className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--tan-warm)]">
                {k}
              </div>
              <div className="font-sans text-lg text-[var(--paper)]/90">{v}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── IMPACT ───────────────────────── */
function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden py-32 md:py-44">
      <ContourTerrain className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-30" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--forest)]">
            04 — The impact
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-balance text-4xl leading-tight tracking-tight md:text-6xl">
            What exists today is reactive.
            <br />
            <span className="italic text-[var(--forest)]">TRACE makes the city predictive.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--forest)]/15 bg-[var(--forest)]/15 md:grid-cols-2">
          <div className="bg-[var(--paper)] p-10">
            <div className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest-deep)]/50">
              What exists now
            </div>
            <ul className="mt-6 space-y-4 font-sans text-base text-[var(--forest-deep)]/70">
              {[
                "Manual culvert cleaning and drain upgrades",
                "Reactive flood response — pumps and rescue teams",
                "Physical channel construction without runoff modeling",
                "Political debate over drainage responsibility",
                "Rainwater harvesting pilots at seven sites",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-[var(--forest-deep)]/30" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--forest-deep)] p-10 text-[var(--paper)]">
            <div className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--tan-warm)]">
              What TRACE adds
            </div>
            <ul className="mt-6 space-y-4 font-sans text-base text-[var(--paper)]/85">
              {[
                "Real-time water-level monitoring across the city",
                "Predictive flood alerts before disaster strikes",
                "AI analysis of terrain to optimize where pipes go",
                "Data-driven evidence for infrastructure decisions",
                "A city-wide smart drainage intelligence platform",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-[var(--tan-warm)]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── VISION ───────────────────────── */
function Vision() {
  return (
    <section id="brief" className="bg-[var(--tan-soft)]/50 py-32 md:py-44">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--forest)]">
            The long view
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-balance text-4xl leading-tight tracking-tight md:text-6xl">
            500 sensors. 47.7 km of new drainage.
            <br />
            <span className="italic text-[var(--forest)]">One intelligent map of the storm.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 font-sans text-lg leading-relaxed text-[var(--forest-deep)]/75">
            TRACE begins as a focused demo on a single Kampala neighborhood — Bwaise, Nakivubo or
            Katanga — and scales to the full city, then to other Ugandan cities, then across
            Sub-Saharan Africa. Open data in. Lives saved out.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#top"
            className="rounded-full bg-[var(--forest-deep)] px-6 py-3 font-sans text-sm font-medium text-[var(--paper)] transition hover:bg-[var(--forest)]"
          >
            Back to the top
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-[var(--forest)]/15 bg-[var(--paper)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest-deep)]/60 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--forest)]" />
          TRACE — Terrain Runoff Analysis &amp; City Engineering
        </div>
        <div>Built for Uganda · Designed for Africa · 2026</div>
      </div>
    </footer>
  );
}
