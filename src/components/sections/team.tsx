"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { COACHES } from "@/constants";
import type { Coach } from "@/types";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();
  const animate = prefersReduced || isInView ? "visible" : "hidden";

  return (
    <section
      ref={ref}
      id="team"
      className="bg-black"
      aria-label="Conoce al Team — Cuerpo técnico Arena B-PRO"
    >
      {/* Banner full-width */}
      <div className="w-full overflow-hidden">
        <Image
          src="/imgs/img4.png"
          alt="Conoce al Team — Arena B-PRO"
          width={1920}
          height={640}
          className="w-full h-auto object-cover object-center"
          priority
        />
      </div>

      {/* Coach cards */}
      <div className="bg-[#080808] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={animate}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {COACHES.map((coach) => (
              <motion.div key={coach.id} variants={fadeUp}>
                <CoachCard coach={coach} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CoachCard({ coach }: { coach: Coach }) {
  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#111111] hover:border-brand/40 transition-colors duration-300">
      {/* Photo */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={coach.imageUrl}
          alt={`${coach.name} — ${coach.role}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />

        {/* Name + role over photo (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
          <p
            className="text-brand text-xs uppercase tracking-widest font-semibold mb-1"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            {coach.role}
          </p>
          <h3
            className="text-white leading-tight"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
            }}
          >
            {coach.name}
          </h3>
        </div>
      </div>

      {/* Trajectory as clean tags */}
      <div className="px-6 py-6 flex flex-col gap-3 flex-1">
        <ul className="flex flex-col gap-2">
          {coach.trajectory.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              <span
                className="text-[#A3A3A3] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
