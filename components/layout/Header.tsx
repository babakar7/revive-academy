"use client";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--color-cream)]/95 backdrop-blur-lg border-b border-[var(--color-beige)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <span className="text-xl font-semibold text-[var(--color-dark)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
              REVIVE
            </span>
            <span className="text-xl font-light text-[var(--color-primary)] ml-1 transition-transform duration-300 group-hover:translate-x-0.5">
              ACADEMY
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-[var(--color-dark)]/80 hover:text-[var(--color-primary)] transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Postuler
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--color-dark)] transition-transform duration-200 active:scale-90 hover:text-[var(--color-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span className={`transition-transform duration-300 block ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-[var(--color-cream)]",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-base font-medium text-[var(--color-dark)]/80 hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full mt-4"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Postuler
          </Button>
        </nav>
      </div>
    </header>
  );
}
