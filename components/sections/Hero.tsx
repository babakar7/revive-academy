"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT } from "@/lib/constants";
import { Award, Clock, Stethoscope, Building2 } from "lucide-react";

const badgeIcons = [Award, Clock, Stethoscope, Building2];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-b from-[var(--color-cream)] to-[var(--color-beige)]">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <span className="hero-animate hero-animate-1 inline-block text-sm font-medium tracking-wider uppercase text-[var(--color-primary)] mb-4">
            {HERO_CONTENT.eyebrow}
          </span>

          {/* Title */}
          <h1 className="hero-animate hero-animate-2 text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-dark)] tracking-tight leading-tight mb-6">
            {HERO_CONTENT.title}
          </h1>

          {/* Description */}
          <p className="hero-animate hero-animate-3 text-lg md:text-xl text-[var(--color-dark)]/70 leading-relaxed mb-8 max-w-3xl mx-auto">
            {HERO_CONTENT.description}
          </p>

          {/* CTAs */}
          <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("formations")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {HERO_CONTENT.primaryCta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {HERO_CONTENT.secondaryCta}
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="hero-animate hero-animate-5 flex flex-wrap justify-center gap-6 md:gap-8">
            {HERO_CONTENT.badges.map((badge, index) => {
              const Icon = badgeIcons[index];
              return (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-[var(--color-dark)]/60 transition-colors duration-300 hover:text-[var(--color-primary)]"
                >
                  <Icon size={20} className="text-[var(--color-primary)]" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-cream)] to-transparent" />
    </section>
  );
}
