import Image from "next/image";
import { cn } from "@/lib/utils";
import { GALLERY_IMAGES } from "@/constants";

export default function Gallery() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#0A0A0A]"
      aria-label="Galería — La Arena en acción"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2
            className="text-white leading-tight"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            La Arena,{" "}
            <span className="text-brand">en acción.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className={cn(
                "relative overflow-hidden rounded-xl bg-card group",
                img.className
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
