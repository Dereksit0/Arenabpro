"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label="Arena B-PRO — inicio"
        >
          <Image
            src="/imgs/logo.png"
            alt="Arena B-PRO"
            width={200}
            height={60}
            className={cn(
              "h-10 lg:h-12 w-auto object-contain transition-all duration-300",
              !scrolled && "brightness-0 invert"
            )}
            priority
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex">
          <Button asChild size="md" variant="primary">
            <Link href="https://wa.me/525566885425" target="_blank" rel="noopener noreferrer">Inscríbete</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-xl text-white hover:text-brand transition-colors duration-200 border-b border-white/5"
                    style={{ fontFamily: "var(--font-bebas-neue)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button asChild size="lg" variant="primary" className="w-full">
                  <Link href="https://wa.me/525566885425" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                    Inscríbete
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

