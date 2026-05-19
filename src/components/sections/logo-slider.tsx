import Image from "next/image";
import { LOGO_PARTNERS } from "@/constants";

export default function LogoSlider() {
  const doubled = [...LOGO_PARTNERS, ...LOGO_PARTNERS];

  return (
    <section
      className="py-10 bg-[#111111] border-y border-[#2A2A2A] overflow-hidden"
      aria-label="Torneos y ligas con los que hemos participado"
    >
      <p
        className="text-center text-[#6B6B6B] text-xs uppercase tracking-widest mb-8"
        style={{ fontFamily: "var(--font-barlow-condensed)" }}
      >
        Presentes en torneos y ligas de todo México
      </p>

      <div className="logo-slider relative">
        <div
          className="logo-slider-inner flex w-max items-center gap-12 pr-12 animate-marquee-reverse"
          aria-hidden="true"
        >
          {doubled.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="shrink-0 flex items-center justify-center w-40 h-14"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={56}
                className="object-contain max-h-14 w-auto h-14 transition-all duration-300 hover:scale-105 grayscale-[60%] opacity-70 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-10"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
