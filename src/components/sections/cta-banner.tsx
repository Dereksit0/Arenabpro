import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA_BANNER } from "@/constants";

export default function CtaBanner() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#52F001" }}
      aria-label="Inscríbete a Arena B-PRO"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-black leading-none mb-5"
          style={{
            fontFamily: "var(--font-bebas-neue)",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
          }}
        >
          {CTA_BANNER.headline}
        </h2>

        <p
          className="text-black/70 text-xl lg:text-2xl mb-10 font-semibold"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          {CTA_BANNER.text}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="xl" variant="black">
            <Link href="https://wa.me/525566885425" target="_blank" rel="noopener noreferrer">{CTA_BANNER.ctaPrimary}</Link>
          </Button>

          <Link
            href="https://wa.me/525566885425"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-black font-semibold text-lg hover:gap-3 transition-all duration-200"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            {CTA_BANNER.ctaSecondary}
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
