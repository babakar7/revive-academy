"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const GALLERY_ITEMS = [
  { id: 1, label: "Studio", aspect: "landscape", src: "/gallery/studio.jpg" },
  { id: 2, label: "Formation", aspect: "portrait", src: "/gallery/formation.jpg" },
  { id: 3, label: "Pratique", aspect: "square", src: "/gallery/pratique.jpg" },
  { id: 4, label: "Groupe", aspect: "landscape", src: "/gallery/groupe.jpg" },
  { id: 5, label: "Piscine", aspect: "square", src: "/gallery/piscine.jpg" },
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
                  relative rounded-2xl overflow-hidden group cursor-pointer
                  ${item.aspect === "landscape" ? "aspect-video" : ""}
                  ${item.aspect === "portrait" ? "aspect-[3/4]" : ""}
                  ${item.aspect === "square" ? "aspect-square" : ""}
                `}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/30 transition-colors duration-300" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </Container>
    </section>
  );
}
