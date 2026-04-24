import { motion } from "framer-motion";

// Animated topographic contour lines (forest terrain)
export function ContourTerrain({ className = "" }: { className?: string }) {
  const lines = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <svg
      className={className}
      viewBox="0 0 800 400"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="contourFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--forest)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--forest)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {lines.map((i) => (
        <motion.path
          key={i}
          d={`M -50 ${120 + i * 30} Q 200 ${80 + i * 30}, 400 ${130 + i * 30} T 850 ${100 + i * 30}`}
          stroke="url(#contourFade)"
          strokeWidth={1}
          initial={false}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.4, delay: i * 0.12, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

// Flowing water lines that snake through terrain
export function FlowLines({ className = "" }: { className?: string }) {
  const paths = [
    "M 50 50 Q 200 100, 350 80 T 750 150",
    "M 50 150 Q 250 200, 400 180 T 750 220",
    "M 50 250 Q 200 300, 380 280 T 750 310",
  ];
  return (
    <svg className={className} viewBox="0 0 800 400" fill="none">
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="var(--forest)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeDasharray="6 8"
          initial={false}
          whileInView={{ pathLength: 1, opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

// Falling rain motion graphic
export function RainField({ count = 40 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 97) % 100;
        const delay = (i * 0.13) % 3;
        const dur = 1.6 + ((i * 7) % 10) / 10;
        return (
          <span
            key={i}
            className="absolute top-0 block h-3 w-px bg-[var(--forest)]/30"
            style={{
              left: `${left}%`,
              animation: `rain-fall ${dur}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

// Animated radial sensor pulse
export function SensorPulse({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          r="6"
          fill="none"
          stroke="var(--forest)"
          strokeWidth="1"
          style={{
            transformOrigin: "center",
            animation: `ripple 3s ease-out ${delay + i * 1}s infinite`,
          }}
        />
      ))}
      <circle r="3" fill="var(--forest)" />
    </g>
  );
}

// 3D-ish terrain mesh wireframe
export function TerrainMesh({ className = "" }: { className?: string }) {
  const rows = 8;
  const cols = 14;
  const cellW = 800 / cols;
  const cellH = 300 / rows;
  // pseudo elevation
  const h = (r: number, c: number) =>
    Math.sin(c * 0.6 + r * 0.4) * 18 + Math.cos(c * 0.3) * 10;

  const lines: string[] = [];
  for (let r = 0; r < rows; r++) {
    let d = "";
    for (let c = 0; c <= cols; c++) {
      const x = c * cellW;
      const y = r * cellH + h(r, c);
      d += (c === 0 ? "M" : "L") + ` ${x} ${y} `;
    }
    lines.push(d);
  }
  for (let c = 0; c <= cols; c++) {
    let d = "";
    for (let r = 0; r < rows; r++) {
      const x = c * cellW;
      const y = r * cellH + h(r, c);
      d += (r === 0 ? "M" : "L") + ` ${x} ${y} `;
    }
    lines.push(d);
  }

  return (
    <svg
      className={className}
      viewBox="0 0 800 320"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      {lines.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="var(--forest)"
          strokeWidth={0.8}
          strokeOpacity={0.55}
          initial={false}
          whileInView={{ pathLength: 1, opacity: 0.55 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.8, delay: (i % 12) * 0.05, ease: "easeOut" }}
        />
      ))}
      {/* sensors */}
      <SensorPulse x={180} y={90} delay={0} />
      <SensorPulse x={420} y={140} delay={0.6} />
      <SensorPulse x={620} y={70} delay={1.2} />
      <SensorPulse x={300} y={220} delay={1.8} />
    </svg>
  );
}
