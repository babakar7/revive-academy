"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PROGRAMS } from "@/lib/constants";
import { Check, AlertCircle } from "lucide-react";

export function ProgramDetails() {
  const mat1 = PROGRAMS.find((p) => p.id === "mat1");
  const reformer1 = PROGRAMS.find((p) => p.id === "reformer1");

  if (!mat1 || !reformer1) return null;

  return (
    <section className="py-20 md:py-28 bg-[var(--color-beige)]">
      <Container>
        <SectionHeading
          eyebrow="Detail des programmes"
          title="Contenu des Formations"
          description="Decouvrez en detail le contenu pedagogique de chaque parcours de formation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* MAT 1 */}
          <AnimateOnScroll animation="fade-up" delay={0} duration={600}>
          <div className="bg-white rounded-2xl p-8 h-full">
            <div className="mb-6">
              <span className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Formation 1
              </span>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)]">
                {mat1.name}
              </h3>
              <p className="text-[var(--color-dark)]/60 mt-1">
                {mat1.subtitle} - {mat1.duration}
              </p>
            </div>

            <p className="text-[var(--color-dark)]/70 mb-6 leading-relaxed">
              {mat1.description}
            </p>

            <h4 className="font-semibold text-[var(--color-dark)] mb-4">
              Contenu de la formation
            </h4>
            <ul className="space-y-3 mb-6">
              {mat1.content.map((item, index) => (
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

            <div className="flex items-start gap-3 bg-[var(--color-beige)] rounded-xl p-4">
              <AlertCircle
                size={20}
                className="shrink-0 text-[var(--color-primary)] mt-0.5"
              />
              <div>
                <span className="font-medium text-[var(--color-dark)] text-sm">
                  Prerequis
                </span>
                <p className="text-sm text-[var(--color-dark)]/70 mt-1">
                  {mat1.prerequisite}
                </p>
              </div>
            </div>
          </div>
          </AnimateOnScroll>

          {/* REFORMER 1 */}
          <AnimateOnScroll animation="fade-up" delay={150} duration={600}>
          <div className="bg-white rounded-2xl p-8 h-full">
            <div className="mb-6">
              <span className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Formation 2
              </span>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)]">
                {reformer1.name}
              </h3>
              <p className="text-[var(--color-dark)]/60 mt-1">
                {reformer1.subtitle} - {reformer1.duration}
              </p>
            </div>

            <p className="text-[var(--color-dark)]/70 mb-6 leading-relaxed">
              {reformer1.description}
            </p>

            <h4 className="font-semibold text-[var(--color-dark)] mb-4">
              Contenu de la formation
            </h4>
            <ul className="space-y-3 mb-6">
              {reformer1.content.map((item, index) => (
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

            <div className="flex items-start gap-3 bg-[var(--color-beige)] rounded-xl p-4">
              <AlertCircle
                size={20}
                className="shrink-0 text-[var(--color-primary)] mt-0.5"
              />
              <div>
                <span className="font-medium text-[var(--color-dark)] text-sm">
                  Prerequis
                </span>
                <p className="text-sm text-[var(--color-dark)]/70 mt-1">
                  {reformer1.prerequisite}
                </p>
              </div>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
