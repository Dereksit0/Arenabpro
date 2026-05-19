"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO } from "@/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — Arena B-PRO"
    >
      <Image
        src={HERO.imageUrl}
        alt={HERO.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand/40 bg-brand/10"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span
              className="text-brand text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Academia de Basquetbol · Puebla, MX
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="leading-none tracking-tight mb-6"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            <span className="block text-[clamp(4rem,12vw,9rem)] text-brand drop-shadow-[0_2px_32px_rgba(82,240,1,0.45)]">
              {HERO.headline1}
            </span>
            <span className="block text-[clamp(4rem,12vw,9rem)] text-white -mt-2 lg:-mt-4">
              {HERO.headline2}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-lg sm:text-xl lg:text-2xl max-w-2xl mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button asChild size="xl" variant="primary">
              <Link href="https://wa.me/525566885425" target="_blank" rel="noopener noreferrer">{HERO.ctaPrimary}</Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="#instalaciones">{HERO.ctaSecondary}</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <SocialProofPill
              icon={<Trophy className="w-4 h-4 text-brand" />}
              text="+200 jugadores formados"
            />
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <SocialProofPill
              icon={<Star className="w-4 h-4 text-brand fill-brand" />}
              text="Coaches certificados"
            />
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <SocialProofPill
              icon={<MapPin className="w-4 h-4 text-brand" />}
              text="Puebla, MX"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 8 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span
          className="text-text-muted text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}

function SocialProofPill({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span
        className="text-text-secondary text-sm font-medium"
        style={{ fontFamily: "var(--font-barlow-condensed)" }}
      >
        {text}
      </span>
    </div>
  );
}
