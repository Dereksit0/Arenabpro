"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/constants";
import type { StatItem } from "@/types";

export default function Stats() {
  return (
    <section
      className="bg-surface py-20 lg:py-24 border-y border-border"
      aria-label="Estadísticas Arena B-PRO"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {STATS.map((stat) => (
            <StatCard key={stat.value} stat={stat} />
          ))}
        </dl>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setDisplayValue(stat.numericValue);
      return;
    }

    const duration = 1600;
    const startTime = performance.now();
    const target = stat.numericValue;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(progress < 1 ? Math.floor(eased * target) : target);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, stat.numericValue, prefersReduced]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-surface flex flex-col items-center justify-center text-center px-6 py-12 lg:py-16 gap-2"
    >
      <dt className="order-2 text-text-secondary text-sm sm:text-base font-medium uppercase tracking-widest mt-1"
        style={{ fontFamily: "var(--font-barlow-condensed)" }}
      >
        {stat.label}
      </dt>
      <dd
        className="order-1 text-brand leading-none"
        style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
        aria-label={`${stat.value} — ${stat.label}`}
      >
        {stat.numericValue === 1 ? "#" : ""}{displayValue}
        <span className="text-brand">{stat.suffix}</span>
      </dd>
    </motion.div>
  );
}
