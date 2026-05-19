"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Star, Flame, Zap, ArrowRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ACADEMY_LEVELS, ACADEMY_DETAIL } from "@/constants";
import type { AcademyLevel } from "@/types";

const iconMap: Record<string, LucideIcon> = { Star, Flame, Zap };

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function AcademyDetail() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const animate = prefersReduced || isInView ? "visible" : "hidden";

  return (
    <section
      id="academia"
      ref={ref}
      className="py-24 lg:py-32 bg-[#0A0A0A]"
      aria-label="Academia B-PRO — niveles de formación"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="mb-16 max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-brand text-sm uppercase tracking-widest mb-3 font-semibold"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            La academia
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-white leading-tight mb-4"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            {ACADEMY_DETAIL.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-brand text-2xl lg:text-3xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            {ACADEMY_DETAIL.subheadline}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-text-secondary text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            {ACADEMY_DETAIL.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {ACADEMY_LEVELS.map((level, index) => (
            <LevelCard key={level.id} level={level} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={animate}
          className="flex flex-col lg:flex-row items-center gap-8 rounded-2xl border border-border bg-card p-8 lg:p-10"
        >
          <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-brand/40">
            <Image
              src={ACADEMY_DETAIL.coachImageUrl}
              alt={`${ACADEMY_DETAIL.coachName} — ${ACADEMY_DETAIL.coachRole}`}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <div className="text-center lg:text-left flex-1">
            <p
              className="text-brand text-sm uppercase tracking-widest mb-1 font-semibold"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Coach destacado
            </p>
            <p
              className="text-white text-2xl lg:text-3xl mb-1"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              {ACADEMY_DETAIL.coachName}
            </p>
            <p
              className="text-text-secondary"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              {ACADEMY_DETAIL.coachRole}
            </p>
          </div>
          <div className="shrink-0">
            <Button asChild size="lg" variant="primary">
              <Link href="https://wa.me/525566885425" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                {ACADEMY_DETAIL.ctaLabel}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LevelCard({ level, index }: { level: AcademyLevel; index: number }) {
  const Icon = iconMap[level.iconName] ?? Star;
  const accentColors = [
    "border-blue-500/20 bg-blue-500/5",
    "border-brand/20 bg-brand/5",
    "border-purple-500/20 bg-purple-500/5",
  ];
  const iconColors = ["text-blue-400", "text-brand", "text-purple-400"];
  const iconBg = ["bg-blue-500/10", "bg-brand/10", "bg-purple-500/10"];

  return (
    <motion.article
      variants={fadeUp}
      className={`rounded-2xl border p-8 flex flex-col gap-4 ${accentColors[index]}`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg[index]}`}
      >
        <Icon className={`w-5 h-5 ${iconColors[index]}`} aria-hidden="true" />
      </div>
      <div>
        <h3
          className="text-white tracking-wide mb-1"
          style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.6rem" }}
        >
          {level.name}
        </h3>
        <p
          className={`text-sm font-semibold uppercase tracking-widest mb-3 ${iconColors[index]}`}
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          {level.ageRange}
        </p>
        <p
          className="text-text-secondary leading-relaxed"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          {level.description}
        </p>
      </div>
    </motion.article>
  );
}
