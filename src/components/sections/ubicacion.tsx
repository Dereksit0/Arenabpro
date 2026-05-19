"use client";

import { useRef } from "react";
import Link from "next/link";
import { MapPin, Clock, ExternalLink, Navigation } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const MAPS_SHORT_URL = "https://maps.app.goo.gl/rYEvtXE3ZC96LxXZ8";
const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Arena+B-PRO+San+Andres+Cholula+Puebla+Mexico&output=embed&z=16";

const SCHEDULE = [
  { days: "Lunes — Viernes", hours: "8:00 AM — 8:00 PM" },
  { days: "Sábado — Domingo", hours: "8:00 AM — 8:00 PM" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Ubicacion() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();
  const animate = prefersReduced || isInView ? "visible" : "hidden";

  return (
    <section
      ref={ref}
      id="ubicacion"
      className="py-20 lg:py-28 bg-[#080808]"
      aria-label="Ubicación y horarios — Arena B-PRO"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Info column ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={animate}
            className="flex flex-col gap-8"
          >
            {/* Heading */}
            <div>
              <motion.p
                variants={fadeUp}
                className="text-brand text-sm uppercase tracking-widest mb-3 font-semibold"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Encuéntranos
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-white leading-tight"
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                Nuestra{" "}
                <span className="text-brand">ubicación</span>
              </motion.h2>
            </div>

            {/* Address card */}
            <motion.div
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-brand" aria-hidden="true" />
              </div>
              <div>
                <p
                  className="text-white font-semibold mb-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "1.05rem" }}
                >
                  Arena B-PRO
                </p>
                <p
                  className="text-[#A3A3A3] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  San Andrés Cholula, Puebla, México
                </p>
              </div>
            </motion.div>

            {/* Schedule card */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand" aria-hidden="true" />
                </div>
                <p
                  className="text-white font-semibold"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "1.05rem" }}
                >
                  Horarios de atención
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {SCHEDULE.map(({ days, hours }) => (
                  <div
                    key={days}
                    className="flex items-center justify-between gap-4 py-3 border-b border-[#2A2A2A] last:border-0 last:pb-0 first:pt-0"
                  >
                    <span
                      className="text-[#A3A3A3] text-sm"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {days}
                    </span>
                    <span
                      className="text-brand font-semibold text-sm shrink-0"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <Link
                href={MAPS_SHORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2.5
                  rounded-xl bg-brand text-black font-bold
                  px-6 py-3.5 text-sm uppercase tracking-wide
                  hover:bg-brand-dark transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-black
                "
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Cómo llegar
                <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Map column ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={animate}
            className="w-full rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-2xl"
            style={{ minHeight: "380px" }}
          >
            <iframe
              src={MAPS_EMBED_URL}
              title="Ubicación Arena B-PRO — San Andrés Cholula, Puebla"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
