"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const GALLERY_ITEMS = [
  { id: 1, label: "Studio", aspect: "landscape" },
  { id: 2, label: "Formation", aspect: "portrait" },
  { id: 3, label: "Reformer", aspect: "square" },
  { id: 4, label: "Groupe", aspect: "landscape" },
  { id: 5, label: "Pratique", aspect: "portrait" },
  { id: 6, label: "Piscine", aspect: "square" },
];

export function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-beige)]">
      <Container>
        <SectionHeading
          eyebrow="Notre environnement"
          title="Galerie Photos"
          description="Découvrez le Studio Revive aux Almadies et son cadre exceptionnel."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, index) => (
            <AnimateOnScroll
              key={item.id}
              animation="scale"
              delay={index * 100}
              duration={500}
              className={`
                ${item.aspect === "landscape" ? "col-span-2 md:col-span-1" : ""}
              `}
            >
              <div
                className={`
                  relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/40 group cursor-pointer
                  ${item.aspect === "landscape" ? "aspect-video" : ""}
                  ${item.aspect === "portrait" ? "aspect-[3/4]" : ""}
                  ${item.aspect === "square" ? "aspect-square" : ""}
                `}
              >
                {/* Placeholder with label */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <span className="text-white/60 font-medium text-sm">
                    {item.label}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/30 transition-colors duration-300" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <p className="text-center text-sm text-[var(--color-dark)]/50 mt-8">
          Photos à venir - Studio aux Almadies avec piscine, restaurant et bar
        </p>
      </Container>
    </section>
  );
}
