"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/constants";
import type { Testimonial } from "@/types";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const animate = prefersReduced || isInView ? "visible" : "hidden";

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-surface"
      aria-label="Testimonios de jugadores y familias"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p
            className="text-brand text-sm uppercase tracking-widest mb-3 font-semibold"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Lo que dicen de nosotros
          </p>
          <h2
            className="text-white leading-tight"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            La cancha habla por sí sola.
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4
            md:overflow-x-visible md:snap-none md:pb-0 md:mx-0 md:px-0
            md:grid md:grid-cols-2 lg:grid-cols-4
            scrollbar-none
          "
          style={{ scrollbarWidth: "none" }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.article
      variants={cardVariant}
      className="
        snap-start shrink-0 w-[85vw] sm:w-[70vw]
        md:w-auto md:shrink
        flex flex-col gap-5 rounded-2xl border border-border bg-card p-7
        hover:border-brand/20 hover:shadow-[0_8px_32px_rgba(82,240,1,0.08)] transition-all duration-300
      "
      aria-label={`Testimonio de ${testimonial.author}`}
    >
      <div className="flex gap-0.5" aria-label={`${testimonial.rating} de 5 estrellas`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-brand fill-brand" aria-hidden="true" />
        ))}
      </div>

      <blockquote className="flex-1">
        <p
          className="text-text-secondary leading-relaxed text-sm lg:text-base"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
        <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden border border-border">
          <Image
            src={testimonial.avatarUrl}
            alt={testimonial.author}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div>
          <p
            className="text-white text-sm font-semibold"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            {testimonial.author}
          </p>
          <p
            className="text-text-muted text-xs"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            {testimonial.role}
          </p>
        </div>
      </footer>
    </motion.article>
  );
}
