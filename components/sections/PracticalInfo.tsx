"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PRACTICAL_INFO } from "@/lib/constants";
import { Calendar, MapPin, Users, Award, Clock } from "lucide-react";

const infoItems = [
  { icon: Calendar, title: "Prochaine session", key: "nextSession" },
  { icon: MapPin, title: "Lieu", key: "location" },
  { icon: Clock, title: "Fréquence", key: "frequency" },
  { icon: Users, title: "Effectif", key: "maxParticipants" },
  { icon: Award, title: "Certification", key: "certification" },
] as const;

export function PracticalInfo() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-beige)]">
      <Container>
        <SectionHeading
          eyebrow="Informations pratiques"
          title="Modalités de Formation"
          description="Tout ce que vous devez savoir pour préparer votre formation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info Cards */}
          <div className="space-y-4">
            {infoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll
                  key={item.key}
                  animation="slide-right"
                  delay={index * 100}
                  duration={500}
                >
                  <div className="bg-[var(--color-white)] rounded-xl p-5 flex items-start gap-4 shadow-sm border border-[var(--color-cream)] transition-all duration-300 hover:shadow-md hover:-translate-x-1">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-dark)]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[var(--color-dark)]/70 mt-1">
                        {PRACTICAL_INFO[item.key]}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Enrollment Process */}
          <AnimateOnScroll animation="slide-left" delay={200} duration={600}>
            <div className="bg-[var(--color-white)] rounded-2xl p-8 shadow-sm border border-[var(--color-cream)] h-full">
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-6">
                Processus d&apos;inscription
              </h3>

              <div className="space-y-6">
                {PRACTICAL_INFO.enrollmentSteps.map((step, index) => (
                  <div key={step.step} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold text-sm transition-transform duration-300 group-hover:scale-110">
                        {step.step}
                      </div>
                      {index < PRACTICAL_INFO.enrollmentSteps.length - 1 && (
                        <div className="w-0.5 h-full bg-[var(--color-beige)] mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <h4 className="font-semibold text-[var(--color-dark)]">
                        {step.title}
                      </h4>
                      <p className="text-sm text-[var(--color-dark)]/70 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-[var(--color-beige)] rounded-xl">
                <p className="text-sm text-[var(--color-dark)]/80">
                  {PRACTICAL_INFO.closingNote}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
