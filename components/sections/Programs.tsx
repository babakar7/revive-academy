"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PROGRAMS } from "@/lib/constants";
import { Check, Clock, Sparkles } from "lucide-react";

export function Programs() {
  return (
    <section id="formations" className="py-20 md:py-28 bg-[var(--color-cream)]">
      <Container>
        <SectionHeading
          eyebrow="Nos parcours"
          title="Formations Certifiantes"
          description="Trois parcours conçus pour répondre à vos ambitions professionnelles. Chaque programme inclut un accès illimité au studio pendant 4 mois."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROGRAMS.map((program, index) => (
            <AnimateOnScroll
              key={program.id}
              animation="fade-up"
              delay={index * 100}
              duration={600}
            >
            <Card
              highlighted={program.highlighted}
              className="flex flex-col relative h-full"
            >
              {/* Discount Badge */}
              {program.discount && (
                <div className="absolute -top-3 -right-3 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {program.discount}
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                {program.highlighted && (
                  <div className="flex items-center gap-1 text-[var(--color-primary)] text-xs font-medium uppercase tracking-wider mb-2">
                    <Sparkles size={14} />
                    Recommandé
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[var(--color-dark)]">
                  {program.name}
                </h3>
                <p className="text-sm text-[var(--color-dark)]/60 mt-1">
                  {program.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[var(--color-dark)]">
                    {program.price}
                  </span>
                  <span className="text-[var(--color-dark)]/60">
                    {program.currency}
                  </span>
                </div>
                {program.originalPrice && (
                  <span className="text-sm text-[var(--color-dark)]/40 line-through">
                    {program.originalPrice} {program.currency}
                  </span>
                )}
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-sm text-[var(--color-dark)]/70 mb-6 pb-6 border-b border-[var(--color-beige)]">
                <Clock size={16} />
                <span>{program.duration}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--color-dark)]/70 mb-6">
                {program.description}
              </p>

              {/* Content List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {program.content.slice(0, 4).map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-[var(--color-dark)]/80"
                  >
                    <Check
                      size={18}
                      className="shrink-0 text-[var(--color-primary)] mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={program.highlighted ? "primary" : "outline"}
                className="w-full mt-auto"
                onClick={() => {
                  window.history.replaceState(null, "", `?program=${program.id}#contact`);
                  window.dispatchEvent(new CustomEvent("programSelected", { detail: program.id }));
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Choisir cette formation
              </Button>
            </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
