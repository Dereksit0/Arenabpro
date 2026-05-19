"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CONOCENOS_VIDEOS } from "@/constants";
import type { VideoItem } from "@/types";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Conocenos() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const animate = prefersReduced || isInView ? "visible" : "hidden";

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-black"
      aria-label="Conócenos — Arena B-PRO en acción"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-brand text-sm uppercase tracking-widest mb-3 font-semibold"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Nuestro mundo
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-white leading-tight"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Conócenos
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[#A3A3A3] text-base sm:text-lg mt-4 max-w-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Conoce nuestras instalaciones — cancha reglamentaria, iluminación profesional y el ambiente que solo Arena B-PRO puede ofrecerte.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4
            lg:overflow-x-visible lg:snap-none lg:pb-0 lg:mx-0 lg:px-0
            lg:grid lg:grid-cols-3
          "
          style={{ scrollbarWidth: "none" }}
        >
          {CONOCENOS_VIDEOS.map((video) => (
            <motion.div key={video.id} variants={fadeUp}>
              <VideoCard video={video} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function VideoCard({ video }: { video: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        snap-start shrink-0 w-[78vw] sm:w-[55vw]
        lg:w-auto lg:shrink
        relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#111111] border border-[#2A2A2A]
        hover:border-brand/50 hover:shadow-[0_0_32px_rgba(82,240,1,0.18)]
        transition-[border-color,box-shadow] duration-300 group
      "
    >
      <video
        ref={videoRef}
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-label={video.title}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

      {/* Play overlay — visible on hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-brand/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_24px_rgba(82,240,1,0.5)]">
          <Play className="w-7 h-7 text-black fill-black translate-x-0.5" aria-hidden="true" />
        </div>
      </div>

      {/* Video title bottom */}
      <div className="absolute bottom-14 left-4 right-4 pointer-events-none">
        <p className="text-white/80 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
          {video.title}
        </p>
      </div>

      <button
        onClick={toggleMute}
        className="
          absolute bottom-4 right-4 z-10
          w-10 h-10 rounded-full
          bg-black/60 backdrop-blur-sm border border-white/10
          flex items-center justify-center
          text-white hover:bg-brand hover:text-black hover:border-brand
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
        "
        aria-label={muted ? "Activar sonido" : "Silenciar video"}
      >
        {muted ? (
          <VolumeX className="w-4 h-4" aria-hidden="true" />
        ) : (
          <Volume2 className="w-4 h-4" aria-hidden="true" />
        )}
      </button>
    </motion.div>
  );
}
