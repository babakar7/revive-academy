"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Devenez Coach de Pilates Certifié",
    subtitle: "La seule formation au Sénégal avec encadrement médical",
    image: "/gallery/formation.jpg",
    flag: "🇸🇳",
  },
  {
    id: 2,
    title: "Vous êtes passionné(e) par le Pilates...",
    subtitle:
      "Mais les formations certifiantes sont en Europe, coûteuses, et loin de chez vous.",
    image: null,
    gradient: "from-[#1a1a2e] to-[#16213e]",
  },
  {
    id: 3,
    title: "Revive Académie",
    subtitle: "Formation complète à Dakar",
    bullets: [
      "Certification reconnue",
      "Standards internationaux",
      "Cadre exceptionnel aux Almadies",
    ],
    image: "/gallery/studio.jpg",
  },
  {
    id: 4,
    title: "Votre formatrice",
    subtitle: "Christine",
    bullets: [
      "Certifiée Balanced Body (référence mondiale)",
      "15+ ans d'expérience",
      "Formatrice d'instructeurs confirmée",
    ],
    image: "/gallery/groupe.jpg",
  },
  {
    id: 5,
    title: "Encadrement médical unique",
    subtitle:
      "Un médecin dans l'équipe pédagogique pour une approche sécurisée et scientifique du mouvement.",
    image: "/gallery/pratique.jpg",
  },
  {
    id: 6,
    title: "Un cadre premium",
    bullets: ["Studio haut de gamme", "Piscine", "Restaurant & Bar"],
    subtitle: "Accès illimité pendant 4 mois",
    image: "/gallery/piscine.jpg",
  },
  {
    id: 7,
    title: "Nos formations",
    programs: [
      { name: "MAT 1", price: "820 000 FCFA", icon: "📘" },
      { name: "REFORMER 1", price: "1 250 000 FCFA", icon: "📗" },
      { name: "PACK CARRIÈRE", price: "1 860 000 FCFA", icon: "⭐", badge: "-10%" },
    ],
    image: null,
    gradient: "from-[#2d3436] to-[#636e72]",
  },
  {
    id: 8,
    title: "Prêt(e) à transformer votre passion en métier ?",
    contact: {
      email: "contact@revive-academy.com",
      phone: "+221 78 464 43 29",
    },
    cta: "Lien en bio",
    image: "/gallery/studio.jpg",
  },
];

export default function CarouselPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const slide = SLIDES[currentSlide];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-2xl font-bold mb-2">
        Instagram Carousel Preview
      </h1>
      <p className="text-gray-400 mb-6">
        Slide {currentSlide + 1} / {SLIDES.length}
      </p>

      {/* Instagram Post Container */}
      <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-[400px] w-full">
        {/* Header */}
        <div className="flex items-center gap-3 p-3 border-b">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B7355] to-[#6B5344] flex items-center justify-center text-white text-xs font-bold">
            R
          </div>
          <span className="font-semibold text-sm">revive_academy</span>
        </div>

        {/* Slide Content - 1:1 aspect ratio */}
        <div className="relative aspect-square bg-gray-100">
          {/* Background Image or Gradient */}
          {slide.image ? (
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradient || "from-[#8B7355] to-[#6B5344]"}`}
            />
          )}

          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
            {slide.flag && <span className="text-4xl mb-4">{slide.flag}</span>}

            <h2 className="text-2xl font-bold mb-3 leading-tight">
              {slide.title}
            </h2>

            {slide.subtitle && (
              <p className="text-sm opacity-90 mb-4">{slide.subtitle}</p>
            )}

            {slide.bullets && (
              <ul className="space-y-2 text-left">
                {slide.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {slide.programs && (
              <div className="space-y-3 w-full max-w-[250px]">
                {slide.programs.map((program, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white/10 backdrop-blur rounded-lg px-4 py-2"
                  >
                    <span className="flex items-center gap-2">
                      <span>{program.icon}</span>
                      <span className="font-medium">{program.name}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span>{program.price}</span>
                      {program.badge && (
                        <span className="bg-green-500 text-xs px-2 py-0.5 rounded-full">
                          {program.badge}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {slide.contact && (
              <div className="space-y-2 text-sm">
                <p>📩 {slide.contact.email}</p>
                <p>📞 {slide.contact.phone}</p>
                {slide.cta && (
                  <p className="mt-4 bg-white text-gray-900 px-6 py-2 rounded-full font-semibold">
                    🔗 {slide.cta}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 transition"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 transition"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === currentSlide ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Instagram Actions */}
        <div className="p-3 border-t">
          <div className="flex gap-4 mb-2">
            <span className="text-2xl">♡</span>
            <span className="text-2xl">💬</span>
            <span className="text-2xl">➤</span>
          </div>
          <p className="text-sm">
            <span className="font-semibold">revive_academy</span>{" "}
            <span className="text-gray-600">
              Devenez Coach de Pilates Certifié à Dakar 🧘‍♀️
            </span>
          </p>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(i)}
            className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition ${
              i === currentSlide ? "border-white" : "border-transparent"
            }`}
          >
            {s.image ? (
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className={`w-full h-full bg-gradient-to-br ${s.gradient || "from-[#8B7355] to-[#6B5344]"}`}
              />
            )}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="text-white text-xs font-bold">{i + 1}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-8 text-center text-gray-400 text-sm max-w-md">
        <p className="mb-2">
          Use arrow keys or click arrows to navigate. Click thumbnails to jump
          to a slide.
        </p>
        <p>
          To create the actual images, you can screenshot each slide or use a
          design tool like Canva/Figma.
        </p>
      </div>

      {/* Back to site */}
      <a
        href="/"
        className="mt-6 text-[#8B7355] hover:underline flex items-center gap-2"
      >
        ← Retour au site
      </a>
    </div>
  );
}
