"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

const IMAGES = [
  { src: "/imgs/comunidad1.jpg", alt: "Comunidad B-PRO — momento 1", wide: true },
  { src: "/imgs/comunidad2.jpg", alt: "Comunidad B-PRO — momento 2", wide: false },
  { src: "/imgs/comunidad3.jpg", alt: "Comunidad B-PRO — momento 3", wide: false },
  { src: "/imgs/comunidad4.jpg", alt: "Comunidad B-PRO — momento 4", wide: false },
  { src: "/imgs/comunidad5.jpg", alt: "Comunidad B-PRO — momento 5", wide: false },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Comunidad() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();
  const animate = prefersReduced || isInView ? "visible" : "hidden";

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-black"
      aria-label="Comunidad B-PRO"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <p
            className="text-brand text-sm uppercase tracking-widest mb-3 font-semibold"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Comunidad
          </p>
          <h2
            className="text-white leading-tight"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            La familia{" "}
            <span className="text-brand">B-PRO</span>
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3"
        >
          {/* img1 — wide: 2 cols on mobile, 2 cols on desktop */}
          <motion.div
            variants={fadeIn}
            className="col-span-2 relative overflow-hidden rounded-xl bg-[#111111] group aspect-[16/9] md:aspect-[2/1]"
          >
            <Image
              src={IMAGES[0].src}
              alt={IMAGES[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
          </motion.div>

          {/* img2 — 1 col, row 1 right (desktop only, on mobile it shifts to row 2) */}
          <motion.div
            variants={fadeIn}
            className="col-span-1 relative overflow-hidden rounded-xl bg-[#111111] group aspect-square"
          >
            <Image
              src={IMAGES[1].src}
              alt={IMAGES[1].alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
          </motion.div>

          {/* img3, img4, img5 — 1 col each */}
          {IMAGES.slice(2).map((img) => (
            <motion.div
              key={img.src}
              variants={fadeIn}
              className="col-span-1 relative overflow-hidden rounded-xl bg-[#111111] group aspect-square"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
