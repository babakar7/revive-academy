"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { WHY_CHOOSE } from "@/lib/constants";
import {
  Globe,
  Heart,
  Users,
  Building,
  Key,
  Monitor,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  Heart,
  Users,
  Building,
  Key,
  Monitor,
  Briefcase,
  TrendingUp,
};

export function WhyChoose() {
  return (
    <section id="avantages" className="py-20 md:py-28 bg-[var(--color-beige)]">
      <Container>
        <SectionHeading
          eyebrow="Nos avantages"
          title="Pourquoi Choisir Revive Academy ?"
          description="Découvrez ce qui fait la différence de notre formation Pilates."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE.map((item, index) => {
            const Icon = iconMap[item.icon] || Globe;
            return (
              <AnimateOnScroll
                key={item.title}
                animation="fade-up"
                delay={index * 75}
                duration={500}
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-cream)] transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-dark)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-dark)]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
