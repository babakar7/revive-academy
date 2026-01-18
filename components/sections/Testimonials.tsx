"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--color-cream)]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Temoignages"
          title="Ce Que Disent Nos Eleves"
          description="Decouvrez les retours de nos anciens eleves sur leur experience de formation."
        />

        <AnimateOnScroll animation="fade-up" duration={600}>
          <div className="relative">
            {/* Quote Icon */}
            <Quote
              size={48}
              className="absolute -top-4 left-4 text-[var(--color-primary)]/10"
            />

            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[var(--color-beige)] text-center overflow-hidden">
              <div
                key={currentIndex}
                className="animate-fade-in"
                style={{ animation: "fade-in 0.4s ease-out" }}
              >
                <p className="text-lg md:text-xl text-[var(--color-dark)] leading-relaxed italic mb-8">
                  &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                </p>

                <div>
                  <p className="font-semibold text-[var(--color-dark)]">
                    {TESTIMONIALS[currentIndex].author}
                  </p>
                  <p className="text-sm text-[var(--color-primary)]">
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-white border border-[var(--color-beige)] flex items-center justify-center text-[var(--color-dark)] hover:bg-[var(--color-beige)] transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Temoignage precedent"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentIndex
                      ? "bg-[var(--color-primary)] w-6"
                      : "bg-[var(--color-beige)] hover:bg-[var(--color-primary)]/50"
                  )}
                  aria-label={`Aller au temoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white border border-[var(--color-beige)] flex items-center justify-center text-[var(--color-dark)] hover:bg-[var(--color-beige)] transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Temoignage suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
