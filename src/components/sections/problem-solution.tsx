"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import { PROBLEM_SOLUTION, PAIN_POINTS } from "@/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ProblemSolution() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();
  const animate = !prefersReduced && isInView ? "visible" : prefersReduced ? "visible" : "hidden";

  return (
    <section
      id="instalaciones"
      ref={ref}
      className="py-24 lg:py-32 bg-[#0A0A0A]"
      aria-label="Problema y solución"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={animate}
          className="text-text-muted text-sm uppercase tracking-widest mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Por qué existimos
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={animate}
          className="text-white mb-16 leading-tight"
          style={{
            fontFamily: "var(--font-bebas-neue)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          {PROBLEM_SOLUTION.problemHeadline}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={animate}
            className="rounded-2xl border border-red-900/30 bg-red-950/10 p-8 lg:p-10"
          >
            <p
              className="text-red-400/80 text-sm uppercase tracking-widest mb-6 font-semibold"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              El problema
            </p>
            <p
              className="text-text-secondary text-lg mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              {PROBLEM_SOLUTION.problemSubtitle}
            </p>
            <ul className="space-y-4" role="list">
              {PAIN_POINTS.map((point) => (
                <motion.li
                  key={point.id}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <XCircle
                    className="w-5 h-5 text-red-500/70 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span
                    className="text-text-secondary leading-snug"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {point.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={animate}
            className="rounded-2xl border border-brand/20 bg-brand/5 p-8 lg:p-10"
          >
            <p
              className="text-brand text-sm uppercase tracking-widest mb-6 font-semibold"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              La solución
            </p>
            <motion.h3
              variants={fadeUp}
              className="text-white mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              }}
            >
              {PROBLEM_SOLUTION.solutionHeadline}
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-lg leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              {PROBLEM_SOLUTION.solutionText}
            </motion.p>
            <motion.ul variants={stagger} className="space-y-4" role="list">
              {[
                "Cancha reglamentaria en perfectas condiciones",
                "Coaches con certificación y metodología probada",
                "Programa por niveles con objetivos claros",
                "Comunidad, valores y mentalidad ganadora",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-brand shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span
                    className="text-text-secondary leading-snug"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
