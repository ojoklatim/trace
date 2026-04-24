import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Nav } from "@/components/trace/Nav";
import { Reveal } from "@/components/trace/Reveal";
import { ContourTerrain } from "@/components/trace/MotionGraphics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRACE — Terrain Runoff Analysis & City Engineering" },
      {
        name: "description",
        content:
          "TRACE is an AI-powered smart drainage intelligence platform for Kampala — 3D terrain modeling, water-flow simulation, and drainage recommendations built entirely on open data.",
      },
      { property: "og:title", content: "TRACE — Terrain Runoff Analysis & City Engineering" },
      {
        property: "og:description",
        content:
          "Product brief: a zero-cost, open-source platform combining AI-driven 3D terrain modeling, IoT sensor simulation, and smart drainage analysis for Kampala.",
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
      <Summary />
      <Problem />
      <Incidents />
      <RootCauses />
      <Solution />
      <Features />
      <TechStack />
      <DataFlow />
      <GamePlan />
      <Scope />
      <GovResponse />
      <Gap />
      <Scalability />
      <Constraints />
      <Metrics />
      <Vision />
      <Footer />
    </div>
  );
}

/* ───────── Reusable section frame ───────── */
function Section({
  id,
  index,
  label,
  title,
  children,
  tone = "paper",
}: {
  id?: string;
  index?: string;
  label?: string;
  title?: ReactNode;
  children: ReactNode;
  tone?: "paper" | "tan";
}) {
  const bg = tone === "tan" ? "bg-[var(--tan-soft)]/30" : "bg-[var(--paper)]";
  return (
    <section id={id} className={`${bg} border-t border-[var(--forest)]/10`}>
      <div className="mx-auto max-w-3xl px-6 py-28 md:py-40">
        {(label || index) && (
          <Reveal>
            <p className="mb-12 font-sans text-xs uppercase tracking-[0.22em] text-[var(--forest)]/70">
              {index && <span className="mr-3 text-[var(--forest-deep)]/40">{index}</span>}
              {label}
            </p>
          </Reveal>
        )}
        {title && (
          <Reveal delay={0.05}>
            <h2 className="mb-12 text-balance text-3xl leading-[1.15] tracking-tight md:text-5xl">
              {title}
            </h2>
          </Reveal>
        )}
        <Reveal delay={0.1}>{children}</Reveal>
      </div>
    </section>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [0.7, 0]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-40 pb-32 md:pt-56 md:pb-44">
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <ContourTerrain className="absolute inset-0 h-full w-full" />
      </motion.div>

      <div className="mx-auto max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 font-sans text-xs uppercase tracking-[0.22em] text-[var(--forest)]/70"
        >
          Product Brief · Kampala, Uganda · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-balance text-5xl leading-[1.05] tracking-tight md:text-7xl"
        >
          TRACE
        </motion.h1>

        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-[var(--forest-deep)]/70 md:text-xl"
        >

          Terrain Runoff Analysis &amp; City Engineering. An AI-powered smart drainage
          intelligence platform for Kampala.
        </motion.p>
      </div>
    </section>
  );
}

/* ───────── EXECUTIVE SUMMARY ───────── */
function Summary() {
  return (
    <Section id="summary" index="01" label="Executive Summary">
      <div className="space-y-6 font-sans text-lg leading-relaxed text-[var(--forest-deep)]/80">
        <p>
          Kampala, Uganda faces a severe and growing urban flooding crisis. Roads overflow during
          heavy rains, infrastructure is damaged, and lives are lost — all due to an outdated and
          poorly understood drainage system.
        </p>
        <p>
          TRACE is a zero-cost, open-source platform combining AI-driven 3D terrain modeling,
          real-time IoT sensor simulation, and smart drainage analysis to help city authorities
          understand, predict, and improve Kampala's drainage infrastructure. The platform is
          designed to be built entirely for free using Google Colab and open data sources, making
          it viable for teams with no budget.
        </p>
      </div>
    </Section>
  );
}

/* ───────── PROBLEM ───────── */
function Problem() {
  return (
    <Section
      id="problem"
      index="02"
      label="Problem Statement"
      title="Drainage built for a smaller, slower city."
      tone="tan"
    >
      <div className="space-y-10 font-sans text-base leading-relaxed text-[var(--forest-deep)]/80">
        <p>
          Uganda — and Kampala in particular — suffers from chronic poor drainage. When heavy
          rainfall occurs, roads flood, properties are damaged, and transportation networks
          collapse. The root cause is not just the volume of rainfall, but the lack of intelligent
          infrastructure planning that accounts for Kampala's complex and hilly terrain.
        </p>
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--forest)]/70">
            Why existing solutions fail
          </h3>
          <ul className="space-y-3">
            {[
              "Drainage systems were built without a full understanding of water flow dynamics across Kampala's varied topography.",
              "There is no real-time monitoring of water levels at critical drainage points.",
              "City planners lack tools to simulate the impact of adding or removing drainage infrastructure.",
              "Hilly and low-lying areas require different drainage strategies, which current systems ignore.",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <span className="mt-3 h-px w-4 shrink-0 bg-[var(--forest)]/40" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ───────── INCIDENTS TIMELINE ───────── */
function Incidents() {
  const incidents = [
    {
      date: "March 2025",
      title: "Kampala Flash Floods",
      body:
        "Torrential rainfall killed at least 6–7 people including two minors. Areas affected: Clock Tower, Kawempe, Natete, Kamwokya, Northern Bypass, Banda, Kyambogo, Kinawataka, Sonde. The KCCA Executive Director called it a 'once-in-50-years storm' citing 80mm of rainfall — but experts noted flooding occurs with almost every significant downpour. The Nsobe river overflowed; hundreds of travelers stranded; businesses shut down.",
      src: "The Independent Uganda · GDACS · Daily Monitor, March 26–30, 2025",
    },
    {
      date: "November 2024",
      title: "Bulambuli Landslides & Eastern Uganda Floods",
      body:
        "Heavy rains triggered landslides across six villages in Bulambuli District, 280km from Kampala. At least 20 confirmed dead; 113 reported missing. 40 homes buried under mud, 125 destroyed. The Sironko–Kapchorwa and Muyembe–Nakapiripit roads were cut off; a bridge swept away; River Simu burst its banks.",
      src: "Al Jazeera · PBS NewsHour · Washington Times, Nov 28–29, 2024",
    },
    {
      date: "September 2024",
      title: "Kasese — River Nyamwamba",
      body:
        "Two killed; 1,469 households affected across thirteen villages; more than 120 homes lost.",
      src: "ReliefWeb · IFRC GO, 2024",
    },
    {
      date: "May 2024",
      title: "Nationwide Floods",
      body:
        "18,323 people affected; 1,129 houses completely destroyed; significant cropland and infrastructure damage; thousands of families displaced.",
      src: "IFRC GO · ReliefWeb, May 2024",
    },
    {
      date: "October 2025",
      title: "CBD Flooding",
      body:
        "Business in downtown Kampala came to a standstill when heavy rain flooded shopping arcades and commercial buildings in the central business district.",
      src: "Daily Monitor, October–November 2025",
    },
  ];
  return (
    <Section index="03" label="Recent Major Incidents (2024–2025)">
      <div className="divide-y divide-[var(--forest)]/10 border-y border-[var(--forest)]/10">
        {incidents.map((it, i) => (
          <Reveal
            key={i}
            delay={i * 0.05}
            className="grid gap-4 py-10 md:grid-cols-[160px_1fr] md:gap-10"
          >
            <div className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest)]/70">
              {it.date}
            </div>
            <div>
              <h3 className="text-2xl tracking-tight">{it.title}</h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-[var(--forest-deep)]/75">
                {it.body}
              </p>
              <p className="mt-4 font-sans text-xs uppercase tracking-wider text-[var(--forest-deep)]/40">
                {it.src}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────── ROOT CAUSES ───────── */
function RootCauses() {
  const causes = [
    {
      t: "Destruction of wetlands",
      d: "Makerere University research found that approximately 50% of Kampala's wetlands have been lost to urban development. Factories, industrial parks, and housing developments have been built on swamps. Developers have encroached on drainage channels, often with political backing. A 2024 NEMA audit flagged multiple sites for non-compliance, though enforcement has been weak.",
      src: "Makerere University · NEMA 2024 Audit · Watchdog Uganda",
    },
    {
      t: "Outdated and blocked drainage",
      d: "Kampala's drainage system was built decades ago and was never designed to handle the city's current population or rainfall intensity. NEMA reports around 60% of urban waste is improperly disposed of — much of it ends up blocking drains. The Nakivubo Channel, the main drainage artery running through all five city divisions, handles more than half of Kampala's stormwater. KCCA's annual budget of UGX 827 billion had zero allocation for new drainage channels at one point.",
      src: "Daily Monitor · Watchdog Uganda · NEMA Report, 2025",
    },
    {
      t: "Rapid and unplanned urbanization",
      d: "Informal settlements in low-lying flood-prone areas like Bwaise, Kalerwe, Kinawataka, Kisenyi, and Katwe are particularly vulnerable. Paved road surfaces increase runoff and reduce natural water absorption. Building in road reserves and flood plains is common, with inadequate enforcement. Makerere academic Denis Arinabo notes that colonial planning legacies, weak governance, and contested urban development have created a 'dangerous flooding cocktail'.",
      src: "Daily Monitor · AfriCGE · Laudato Youth Initiative",
    },
    {
      t: "Climate change",
      d: "The IPCC has linked human-induced global warming to a 20% increase in rainfall intensity in some regions of East Africa over recent decades. Uganda's National Meteorological Authority regularly forecasts above-normal rainfall seasons.",
      src: "IPCC 2021 · Uganda National Meteorological Authority",
    },
  ];
  return (
    <Section index="04" label="Root Causes" tone="tan">
      <div className="space-y-12">
        {causes.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.05}>
            <h3 className="text-xl tracking-tight md:text-2xl">{c.t}</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-[var(--forest-deep)]/75">
              {c.d}
            </p>
            <p className="mt-3 font-sans text-xs uppercase tracking-wider text-[var(--forest-deep)]/40">
              {c.src}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────── SOLUTION ───────── */
function Solution() {
  return (
    <Section
      id="solution"
      index="05"
      label="Proposed Solution"
      title="A two-component platform: software intelligence and a sensor network."
    >
      <div className="space-y-12 font-sans text-base leading-relaxed text-[var(--forest-deep)]/80">
        <div>
          <h3 className="text-xl tracking-tight text-[var(--forest-deep)] md:text-2xl">
            Software layer
          </h3>
          <div className="mt-6 space-y-6">
            <Detail
              k="3D Terrain Modeling"
              v="Using freely available satellite imagery and elevation data (USGS, Google Earth, Copernicus), TRACE builds a high-resolution 3D digital model of Kampala's terrain — capturing slopes, valleys, hills, and existing drainage infrastructure."
            />
            <Detail
              k="AI Water Flow Simulation"
              v="An AI model trained using physics-based water flow principles and terrain data simulates how water moves across Kampala during rainfall. It accounts for gravity, slope gradients, soil absorption, road surfaces, and existing pipe capacity."
            />
            <Detail
              k="Drainage Intelligence Engine"
              v="The AI analyzes the 3D model and water-flow simulation to identify bottlenecks, pipes that should be added in flood-prone zones, infrastructure that should be removed or rerouted, and priority zones for immediate intervention."
            />
            <Detail
              k="Visualization Dashboard"
              v="A web-based dashboard built with free tools lets city authorities view the 3D terrain model, see real-time and simulated flow patterns, explore AI recommendations, and compare before-and-after scenarios for proposed infrastructure changes."
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl tracking-tight text-[var(--forest-deep)] md:text-2xl">
            Hardware layer (simulated for hackathon)
          </h3>
          <p className="mt-4">
            In the full production version, low-cost IoT water-level sensors are placed at key
            drainage points across Kampala. For the hackathon, this hardware layer is simulated
            digitally within the 3D model.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Sensors placed at road intersections, low-lying areas, and known flood hotspots.",
              "Data transmitted via cellular and radio mesh networks for coverage in low-connectivity areas.",
              "Real-time alerts sent to the dashboard when water levels approach critical thresholds.",
              "Authorities can dispatch response teams to problem areas directly from the app.",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <span className="mt-3 h-px w-4 shrink-0 bg-[var(--forest)]/40" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Detail({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest)]/70">
        {k}
      </div>
      <p className="mt-2 leading-relaxed text-[var(--forest-deep)]/80">{v}</p>
    </div>
  );
}

/* ───────── FEATURES + TARGET USERS ───────── */
function Features() {
  const users = [
    ["City Planners", "Kampala Capital City Authority", "Understand where to invest in drainage infrastructure"],
    ["Emergency Responders", "Flood response teams", "Real-time alerts on flood risk zones"],
    ["Civil Engineers", "Infrastructure design teams", "AI recommendations for pipe placement and routing"],
    ["Government Officials", "Policy and budget decision makers", "Evidence-based investment priorities"],
  ];
  const features = [
    ["3D Terrain Model", "3D map of Kampala built from open satellite and elevation data", "P0 — Must Have"],
    ["Water Flow Simulation", "AI model simulating water movement across terrain", "P0 — Must Have"],
    ["Drainage Recommendations", "AI suggestions for pipe additions, removals, and rerouting", "P0 — Must Have"],
    ["Sensor Visualization", "Simulated sensor placement shown on the 3D model", "P1 — Should Have"],
    ["Web Dashboard", "Interactive UI for viewing terrain, flow, and recommendations", "P1 — Should Have"],
    ["Flood Risk Alerts", "Threshold-based alerts for high-risk drainage zones", "P2 — Nice to Have"],
  ];
  return (
    <Section index="06" label="Target Users & Key Features" tone="tan">
      <div className="space-y-16">
        <div>
          <h3 className="mb-6 font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest)]/70">
            Target users
          </h3>
          <div className="divide-y divide-[var(--forest)]/10 border-y border-[var(--forest)]/10">
            {users.map(([u, r, n], i) => (
              <Reveal
                key={u}
                delay={i * 0.04}
                className="grid gap-2 py-6 md:grid-cols-[200px_220px_1fr] md:gap-8"
              >
                <div className="text-base tracking-tight">{u}</div>
                <div className="font-sans text-sm text-[var(--forest-deep)]/70">{r}</div>
                <div className="font-sans text-sm text-[var(--forest-deep)]/80">{n}</div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest)]/70">
            Core features (Hackathon MVP)
          </h3>
          <div className="divide-y divide-[var(--forest)]/10 border-y border-[var(--forest)]/10">
            {features.map(([f, d, p], i) => (
              <Reveal
                key={f}
                delay={i * 0.04}
                className="grid gap-2 py-6 md:grid-cols-[220px_1fr_180px] md:gap-8"
              >
                <div className="text-base tracking-tight">{f}</div>
                <div className="font-sans text-sm text-[var(--forest-deep)]/70">{d}</div>
                <div className="font-sans text-xs uppercase tracking-wider text-[var(--forest)]/70">
                  {p}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ───────── TECH STACK ───────── */
function TechStack() {
  const stack: [string, string, string][] = [
    ["Compute", "Google Colab (Free)", "Run all AI and data processing — no local hardware needed"],
    ["Terrain Data", "USGS, Copernicus, Google Earth Engine", "Free satellite imagery and elevation data for Kampala"],
    ["Mapping", "QGIS (Free)", "Process and analyze geographic data"],
    ["AI / ML", "TensorFlow, PyTorch, NumPy (Free)", "Water flow simulation and drainage analysis models"],
    ["3D Visualization", "Plotly, Pydeck, or Three.js (Free)", "Render 3D terrain and flow models in the browser"],
    ["Dashboard", "Streamlit or Gradio (Free)", "Web interface for the platform — zero hosting cost"],
    ["Hardware Sim", "Python simulation layer", "Simulate IoT sensor data within the model"],
  ];
  return (
    <Section
      id="system"
      index="07"
      label="Technical Architecture"
      title="100% free. End to end."
    >
      <div className="divide-y divide-[var(--forest)]/10 border-y border-[var(--forest)]/10">
        {stack.map(([layer, tool, purpose], i) => (
          <Reveal
            key={layer}
            delay={i * 0.04}
            className="grid gap-2 py-6 md:grid-cols-[160px_1fr_1fr] md:gap-8"
          >
            <div className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest)]/70">
              {layer}
            </div>
            <div className="text-base tracking-tight">{tool}</div>
            <div className="font-sans text-sm text-[var(--forest-deep)]/70">{purpose}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────── DATA FLOW ───────── */
function DataFlow() {
  const steps = [
    "Pull elevation and satellite data for Kampala from open data sources.",
    "Build 3D terrain model in QGIS and export to Python.",
    "Run AI water flow simulation on the terrain model in Google Colab.",
    "AI engine analyzes bottlenecks and generates drainage recommendations.",
    "Results are visualized on the web dashboard with before/after comparisons.",
    "(Simulated) sensor data feeds into the dashboard to show real-time monitoring capability.",
  ];
  return (
    <Section index="08" label="Data Flow" tone="tan">
      <ol className="space-y-8">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 0.04} as="li" className="grid grid-cols-[40px_1fr] gap-6">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest)]/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-sans text-base leading-relaxed text-[var(--forest-deep)]/85">
              {s}
            </span>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/* ───────── HACKATHON GAME PLAN ───────── */
function GamePlan() {
  const days: [string, string, string, string][] = [
    ["Day 1", "Collect terrain and elevation data for one Kampala neighborhood", "USGS, Google Earth Engine, QGIS", "Raw elevation dataset ready for modeling"],
    ["Day 2", "Build 3D terrain model and run basic water flow simulation", "Google Colab, Python, NumPy", "Working simulation showing water movement"],
    ["Day 3", "Train/configure AI model to identify drainage bottlenecks", "TensorFlow / PyTorch on Colab", "AI recommendations for pipe placement"],
    ["Day 4", "Build web dashboard with 3D visualization and sensor simulation", "Streamlit, Plotly, Pydeck", "Interactive demo ready to show"],
    ["Day 5", "Polish demo, prepare pitch, rehearse presentation", "Slides + live demo", "Hackathon-ready presentation"],
  ];
  return (
    <Section index="09" label="Hackathon Game Plan" title="Five days to a working demo.">
      <div className="divide-y divide-[var(--forest)]/10 border-y border-[var(--forest)]/10">
        {days.map(([d, task, tools, out], i) => (
          <Reveal
            key={d}
            delay={i * 0.04}
            className="grid gap-2 py-6 md:grid-cols-[80px_1fr_1fr_1fr] md:gap-6"
          >
            <div className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest)]/70">
              {d}
            </div>
            <div className="text-base tracking-tight">{task}</div>
            <div className="font-sans text-sm text-[var(--forest-deep)]/70">{tools}</div>
            <div className="font-sans text-sm text-[var(--forest-deep)]/85">{out}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────── SCOPE ───────── */
function Scope() {
  return (
    <Section index="10" label="Proof of Concept Scope" tone="tan">
      <div className="space-y-6 font-sans text-base leading-relaxed text-[var(--forest-deep)]/80">
        <p>
          For the hackathon, the team will focus on one specific neighborhood in Kampala rather
          than the entire city. This is intentional — a focused, working demo is more compelling
          than a broad, broken one. The pitch will clearly articulate how the system scales
          city-wide.
        </p>
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--forest)]/70">
            Recommended starting area
          </h3>
          <p className="mt-3">
            Choose a neighborhood known for flooding, such as Bwaise, Nakivubo, or Katanga, where
            the terrain and flooding patterns are well documented. This makes the AI recommendations
            immediately credible and relatable to judges.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ───────── GOVERNMENT RESPONSE ───────── */
function GovResponse() {
  const items = [
    {
      t: "KCCA Drainage Upgrade Works (2025–2026)",
      d:
        "Constructed 16 crossing culverts along Allen Road and Sebana Road. In March 2026, flood water in the CBD drained in just 7 minutes instead of the usual 3+ hours. 7 of 18 planned drainage crossings completed by December 2025; remaining 11 targeted within 30 days. Longitudinal drainage along Ben Kiwanuka Street underway. Planned major box culvert on Namirembe Road to channel stormwater into Nakivubo. KCCA plans 47.7km of new drainage across 98 parishes in FY 2025/26, with 500 manhole covers reconstructed.",
      src: "KCCA · AllAfrica, March 2026 / December 2025",
    },
    {
      t: "KCCA Council Resolution — April 3, 2025",
      d:
        "A landmark resolution approved a new model: partnering with competent local investors to upgrade and cover Kampala's open drainage channels under strict KCCA supervision. Vision: a Kampala with closed, modern underground drainage systems, free from solid waste blockages. Inspired by the success of the Nakivubo Jugula channel project by Ham Enterprises — the area remained dry during the March 2025 floods. Funding to come from public-private partnerships as government and donor funding declines.",
      src: "Watchdog Uganda · PML Daily · UG Bulletin, April 2025",
    },
    {
      t: "Kampala Sanitation and Flood Resilience Master Strategy 2025–2030",
      d:
        "A five-year master strategy built around four pillars: drainage system upgrade (Nakivubo, Lubigi, Kinawataka), waste management reform, green infrastructure (eco-friendly pavements, wetland reforestation, green corridors), and community engagement. Budget: UGX 1.3 trillion over five years, sourced from government, World Bank urban resilience grants, and green infrastructure investments.",
      src: "Kampala Express, April 2025",
    },
    {
      t: "Greater Kampala Metropolitan Urban Development Programme (GKMA-UDP)",
      d:
        "A UGX 2.2 trillion programme launched in September 2024, co-funded by the World Bank. 15 roads covering 19.85km under active construction (Phase 1 of 81.7km total). Drainage channels constructed alongside road works. China Railway Seventh Group contracted for Wakiso road works at UGX 35 billion. Cross culverts installed at 11 of 13 targeted locations as of April 2026.",
      src: "Daily Monitor · KCCA, 2024–2025",
    },
    {
      t: "Greater Kampala Integrated Flood Resilience (GKIFR) Partnership",
      d:
        "A nature-based solutions initiative by KCCA with the Ministry of Water and Environment, Uganda Manufacturers Association, and international funders (EU, German BMZ, UK DFID). Pilot rainwater harvesting at 7 sites including schools and markets — Kitebi Secondary School received an 80,000-litre tank. Focus on integrating green infrastructure into urban planning.",
      src: "KCCA, 2023–2024",
    },
  ];
  return (
    <Section index="11" label="Government & KCCA Response">
      <div className="space-y-12">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 0.04}>
            <h3 className="text-xl tracking-tight md:text-2xl">{it.t}</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-[var(--forest-deep)]/75">
              {it.d}
            </p>
            <p className="mt-3 font-sans text-xs uppercase tracking-wider text-[var(--forest-deep)]/40">
              {it.src}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────── THE GAP ───────── */
function Gap() {
  const rows: [string, string][] = [
    ["Manual culvert cleaning and drain upgrades", "Real-time water level monitoring across the city"],
    ["Reactive flood response (pumps, rescue teams)", "Predictive flood alerts before disaster strikes"],
    ["Physical drainage channel construction", "AI analysis of terrain to optimize where pipes go"],
    ["Political debate over drainage responsibility", "Data-driven evidence for infrastructure decisions"],
    ["Rainwater harvesting pilots at 7 sites", "City-wide smart drainage intelligence platform"],
  ];
  return (
    <Section
      id="impact"
      index="12"
      label="The Critical Gap"
      title="Reactive today. Predictive tomorrow."
      tone="tan"
    >
      <p className="mb-12 font-sans text-base leading-relaxed text-[var(--forest-deep)]/80">
        Despite ongoing physical infrastructure works, Uganda has no smart, data-driven system for
        monitoring, predicting, or intelligently optimizing its drainage network. Current responses
        are almost entirely reactive — authorities respond after flooding occurs, not before.
      </p>
      <div className="grid grid-cols-[1fr_1fr] gap-px overflow-hidden border border-[var(--forest)]/15 bg-[var(--forest)]/15">
        <div className="bg-[var(--paper)] p-6 font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest-deep)]/50">
          What exists now
        </div>
        <div className="bg-[var(--paper)] p-6 font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest)]/70">
          What is missing
        </div>
        {rows.map(([a, b], i) => (
          <Reveal key={i} delay={i * 0.03} className="contents">
            <div className="bg-[var(--paper)] p-6 font-sans text-sm leading-relaxed text-[var(--forest-deep)]/70">
              {a}
            </div>
            <div className="bg-[var(--paper)] p-6 font-sans text-sm leading-relaxed text-[var(--forest-deep)]">
              {b}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 space-y-6 border-l border-[var(--forest)]/30 pl-6 font-sans text-base italic leading-relaxed text-[var(--forest-deep)]/80">
        <p>
          "Every year it's the same story. Wetlands are filled, water has nowhere to go, and roads
          become rivers. Without serious reforms, we'll keep seeing this."
          <span className="ml-2 not-italic text-[var(--forest-deep)]/50">
            — Paul Senoga, environmental policy analyst
          </span>
        </p>
        <p>
          "If the government doesn't step up with some drastic, decisive interventions, Ugandans
          will continue experiencing senseless loss of lives, business and property as a result of
          extreme weather episodes."
          <span className="ml-2 not-italic text-[var(--forest-deep)]/50">
            — Joel Ssenyonyi, Opposition Leader
          </span>
        </p>
      </div>
    </Section>
  );
}

/* ───────── SCALABILITY & IMPACT ───────── */
function Scalability() {
  return (
    <Section index="13" label="Scalability & Impact">
      <div className="space-y-12 font-sans text-base leading-relaxed text-[var(--forest-deep)]/80">
        <div>
          <h3 className="text-xl tracking-tight md:text-2xl">How it scales</h3>
          <ul className="mt-6 space-y-3">
            {[
              "The 3D modeling approach works for any geographic area — expanding from one neighborhood to all of Kampala is a matter of adding more data, not redesigning the system.",
              "The AI model improves as more sensor data is added over time.",
              "The platform can be adapted for other Ugandan cities and eventually across East Africa.",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <span className="mt-3 h-px w-4 shrink-0 bg-[var(--forest)]/40" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl tracking-tight md:text-2xl">Long-term vision</h3>
          <ul className="mt-6 space-y-3">
            {[
              "Deploy physical IoT sensors at 500+ drainage points across Kampala.",
              "Integrate with Uganda's National Meteorological Authority for predictive flood alerts.",
              "Partner with Kampala Capital City Authority for city-wide drainage planning.",
              "Open-source the platform for adoption across Sub-Saharan Africa.",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <span className="mt-3 h-px w-4 shrink-0 bg-[var(--forest)]/40" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl tracking-tight md:text-2xl">Why this matters</h3>
          <p className="mt-4">
            Poor drainage in Kampala costs the economy millions of dollars annually in road damage,
            property loss, and lost productivity. TRACE gives city planners an evidence-based tool
            to make smarter infrastructure decisions — turning a reactive system into a proactive
            one.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ───────── CONSTRAINTS ───────── */
function Constraints() {
  const rows: [string, string][] = [
    ["Zero budget", "All tools are free and open-source; Google Colab eliminates hardware requirements"],
    ["4GB RAM laptop", "All heavy computation runs on Google Colab in the cloud, not the local machine"],
    ["No physical sensors", "Hardware layer is simulated digitally for the hackathon demo"],
    ["Limited connectivity in some areas", "Mesh radio networks included in the full hardware architecture plan"],
    ["One week timeline", "Scope limited to one neighborhood; city-wide scale is part of the pitch vision"],
  ];
  return (
    <Section index="14" label="Constraints & Assumptions" tone="tan">
      <div className="divide-y divide-[var(--forest)]/10 border-y border-[var(--forest)]/10">
        {rows.map(([k, v], i) => (
          <Reveal
            key={k}
            delay={i * 0.04}
            className="grid gap-2 py-6 md:grid-cols-[280px_1fr] md:gap-8"
          >
            <div className="text-base tracking-tight">{k}</div>
            <div className="font-sans text-sm leading-relaxed text-[var(--forest-deep)]/75">{v}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────── METRICS ───────── */
function Metrics() {
  return (
    <Section index="15" label="Success Metrics">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest)]/70">
            For the hackathon
          </h3>
          <ul className="mt-6 space-y-3 font-sans text-base leading-relaxed text-[var(--forest-deep)]/80">
            {[
              "Working 3D terrain model of at least one Kampala neighborhood.",
              "Demonstrable AI water flow simulation.",
              "At least 3 concrete drainage recommendations generated by the AI.",
              "Clear and compelling pitch that communicates city-wide impact.",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <span className="mt-3 h-px w-4 shrink-0 bg-[var(--forest)]/40" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest)]/70">
            For full deployment
          </h3>
          <ul className="mt-6 space-y-3 font-sans text-base leading-relaxed text-[var(--forest-deep)]/80">
            {[
              "Reduction in average flood response time by 40%.",
              "500+ sensors deployed across Kampala within 2 years.",
              "AI drainage recommendations adopted by Kampala Capital City Authority.",
              "Platform replicated in at least 2 other Ugandan cities within 3 years.",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <span className="mt-3 h-px w-4 shrink-0 bg-[var(--forest)]/40" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ───────── VISION / CLOSING ───────── */
function Vision() {
  return (
    <section id="brief" className="border-t border-[var(--forest)]/10 bg-[var(--paper)]">
      <div className="mx-auto max-w-3xl px-6 py-32 md:py-44">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-[var(--forest)]/70">
            Closing
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-10 text-balance text-3xl leading-[1.15] tracking-tight md:text-5xl">
            Built for Uganda. Designed for Africa.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 font-sans text-base leading-relaxed text-[var(--forest-deep)]/75">
            The MVP is deliberately scoped to be achievable in one week with zero budget. Focus on
            making the demo clear and impactful — judges respond to a compelling problem, a credible
            solution, and visible potential. All team members should have Google accounts to access
            Google Colab. Divide tasks as follows: one person handles data collection and terrain
            modeling, one handles the AI simulation, and one handles the dashboard and presentation.
            Daily check-ins are essential given the tight timeline.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── FOOTER ───────── */
function Footer() {
  return (
    <footer className="border-t border-[var(--forest)]/10 bg-[var(--paper)] py-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 font-sans text-xs uppercase tracking-[0.2em] text-[var(--forest-deep)]/50 md:flex-row md:items-center md:justify-between">
        <div>TRACE — Terrain Runoff Analysis &amp; City Engineering</div>
        <div>Kampala · 2026</div>
      </div>
    </footer>
  );
}
