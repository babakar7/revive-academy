"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { TEAM } from "@/lib/constants";
import { Award } from "lucide-react";

export function Team() {
  return (
    <section id="equipe" className="py-20 md:py-28 bg-[var(--color-cream)]">
      <Container>
        <SectionHeading
          eyebrow="Notre equipe"
          title="Une Equipe Pedagogique d'Exception"
          description="L'excellence de notre formation repose sur la complementarite de deux expertes, garantissant une approche a la fois technique et scientifique."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TEAM.map((member, index) => (
            <AnimateOnScroll
              key={member.name}
              animation={index === 0 ? "slide-right" : "slide-left"}
              delay={index * 150}
              duration={600}
            >
            <div
              className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-beige)] h-full transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center mb-6">
                <span className="text-3xl font-semibold text-white">
                  {member.name.charAt(0)}
                </span>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-[var(--color-dark)]">
                {member.name}
              </h3>
              <p className="text-[var(--color-primary)] font-medium text-sm mb-4">
                {member.role}
              </p>

              <p className="text-[var(--color-dark)]/70 leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Credentials */}
              <div className="border-t border-[var(--color-beige)] pt-6">
                <h4 className="text-sm font-semibold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                  <Award size={16} className="text-[var(--color-primary)]" />
                  Certifications et Experience
                </h4>
                <ul className="space-y-2">
                  {member.credentials.map((credential, index) => (
                    <li
                      key={index}
                      className="text-sm text-[var(--color-dark)]/70 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0 mt-1.5" />
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
