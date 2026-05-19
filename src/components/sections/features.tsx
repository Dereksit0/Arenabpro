"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Trophy,
  CalendarCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FEATURES } from "@/constants";
import type { Feature } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Building2,
  Trophy,
  CalendarCheck,
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const animate = prefersReduced || isInView ? "visible" : "hidden";

  return (
    <section
      id="torneos"
      ref={ref}
      className="py-24 lg:py-32 bg-surface"
      aria-label="Servicios Arena B-PRO"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p
            className="text-brand text-sm uppercase tracking-widest mb-3 font-semibold"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Nuestros servicios
          </p>
          <h2
            className="text-white leading-tight"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Todo lo que necesitas,<br />en un solo lugar.
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr"
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = iconMap[feature.iconName] ?? GraduationCap;
  const isWide = feature.colSpan === "2";
  const isRenta = feature.id === "f4";

  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      className={cn(
        "group relative rounded-2xl border border-border bg-card p-8 lg:p-10 flex gap-5 cursor-default overflow-hidden",
        isWide ? "flex-row items-center" : "flex-col",
        "hover:border-brand/30 hover:shadow-[0_8px_32px_rgba(82,240,1,0.12)]",
        "transition-colors duration-300",
        isWide && "sm:col-span-2"
      )}
    >
      {/* Content */}
      <div className={cn("flex flex-col gap-5", isWide && "flex-1")}>
        <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-brand/20">
          <Icon className="w-6 h-6 text-brand" aria-hidden="true" />
        </div>

        <div>
          <h3
            className="text-white mb-3 tracking-wide"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            }}
          >
            {feature.title}
          </h3>
          <p
            className="text-text-secondary leading-relaxed text-base lg:text-lg"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            {feature.description}
          </p>
        </div>

        {isRenta && (
          <Link
            href="https://wa.me/525566885425"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand font-semibold text-base hover:gap-3 transition-all duration-200 mt-1"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Reservar ahora <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        )}
      </div>

      {/* Court diagram for wide Renta card */}
      {isRenta && (
        <div className="hidden sm:flex items-center justify-center flex-shrink-0 w-64 lg:w-80 h-40 lg:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500" aria-hidden="true">
          <svg viewBox="0 0 320 200" className="w-full h-full" fill="none" stroke="#52F001" strokeWidth="2">
            {/* Court outline */}
            <rect x="10" y="10" width="300" height="180" rx="4" />
            {/* Center line */}
            <line x1="160" y1="10" x2="160" y2="190" />
            {/* Center circle */}
            <circle cx="160" cy="100" r="30" />
            {/* Center dot */}
            <circle cx="160" cy="100" r="3" fill="#52F001" />
            {/* Left paint */}
            <rect x="10" y="65" width="60" height="70" />
            {/* Right paint */}
            <rect x="250" y="65" width="60" height="70" />
            {/* Left basket */}
            <circle cx="40" cy="100" r="12" />
            {/* Right basket */}
            <circle cx="280" cy="100" r="12" />
            {/* Left 3pt arc */}
            <path d="M 10 50 Q 100 100 10 150" />
            {/* Right 3pt arc */}
            <path d="M 310 50 Q 220 100 310 150" />
          </svg>
        </div>
      )}

      <div
        className="absolute inset-x-0 bottom-0 h-px rounded-b-2xl bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />
    </motion.article>
  );
}
