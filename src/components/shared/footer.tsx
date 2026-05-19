import Link from "next/link";
import Image from "next/image";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_LOCATION,
  FOOTER_LINKS,
  SOCIAL_LINKS,
} from "@/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 6.5s-.3-1.9-1-2.7c-1-1.1-2.1-1.1-2.6-1.1C16.6 2.5 12 2.5 12 2.5s-4.6 0-7.4.2c-.5 0-1.6 0-2.6 1.1-.7.8-1 2.7-1 2.7S.8 8.6.8 10.7v2c0 2.1.2 4.2.2 4.2s.3 1.9 1 2.7c1 1.1 2.3 1.1 2.9 1.1C6.8 21 12 21 12 21s4.6 0 7.4-.2c.5-.1 1.6-.1 2.6-1.1.7-.8 1-2.7 1-2.7s.2-2.1.2-4.2v-2c0-2.1-.2-4.2-.2-4.3zm-13.6 8.5V9.1l7 3-7 2.9z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}


const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
  TikTok: TikTokIcon,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0A0A0A] border-t border-border pt-16 pb-10"
      aria-label="Pie de página Arena B-PRO"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-flex mb-4"
              aria-label="Arena B-PRO — inicio"
            >
              <Image
                src="/imgs/logo.png"
                alt="Arena B-PRO"
                width={180}
                height={54}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p
              className="text-text-secondary text-sm mb-6 leading-relaxed"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              {SITE_TAGLINE}
            </p>
            <address
              className="not-italic text-text-muted text-sm"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              {SITE_LOCATION}
            </address>
          </div>

          <nav aria-label="Enlaces del footer" className="md:col-span-1">
            <p
              className="text-white text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Navegación
            </p>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-white text-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-1">
            <p
              className="text-white text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Síguenos
            </p>
            <ul className="space-y-4" role="list">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIconMap[social.label] ?? InstagramIcon;
                return (
                  <li key={social.href}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors duration-200 group"
                      aria-label={`${social.label} — ${social.handle}`}
                    >
                      <Icon className="w-4 h-4 text-brand group-hover:scale-110 transition-transform duration-200" />
                      <span
                        className="text-sm"
                        style={{ fontFamily: "var(--font-barlow-condensed)" }}
                      >
                        {social.handle}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-text-muted text-xs"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            © {currentYear} {SITE_NAME}. Todos los derechos reservados.
          </p>
          <p
            className="text-text-muted text-xs"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Hecho con fuego en Puebla, México.
          </p>
        </div>
      </div>
    </footer>
  );
}
