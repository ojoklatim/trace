import { motion, useScroll, useTransform } from "framer-motion";

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(245, 240, 225, 0)", "rgba(245, 240, 225, 0.85)"]
  );
  const border = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(60,80,55,0.12)"]);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-sans text-sm font-semibold tracking-tight text-[var(--forest-deep)]">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--forest)] animate-pulse-soft" />
            TRACE
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-sans text-sm text-[var(--forest-deep)]/70 md:flex">
          <a href="#problem" className="hover:text-[var(--forest)]">Problem</a>
          <a href="#solution" className="hover:text-[var(--forest)]">Solution</a>
          <a href="#system" className="hover:text-[var(--forest)]">System</a>
          <a href="#impact" className="hover:text-[var(--forest)]">Impact</a>
        </nav>
        <a
          href="#brief"
          className="rounded-full bg-[var(--forest-deep)] px-4 py-2 font-sans text-xs font-medium text-[var(--paper)] transition hover:bg-[var(--forest)]"
        >
          Read brief
        </a>
      </div>
    </motion.header>
  );
}
