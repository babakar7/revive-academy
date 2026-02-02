"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { PROGRAMS } from "@/lib/constants";
import { useState, useEffect } from "react";
import { CheckCircle, Send } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  program?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check URL params on mount
    const params = new URLSearchParams(window.location.search);
    const programId = params.get("program");
    if (programId && PROGRAMS.some((p) => p.id === programId)) {
      setFormData((prev) => ({ ...prev, program: programId }));
    }

    // Listen for program selection from Programs section
    const handleProgramSelected = (e: CustomEvent<string>) => {
      setFormData((prev) => ({ ...prev, program: e.detail }));
    };

    window.addEventListener("programSelected", handleProgramSelected as EventListener);
    return () => {
      window.removeEventListener("programSelected", handleProgramSelected as EventListener);
    };
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    }

    if (!formData.program) {
      newErrors.program = "La formation est requise";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("fullName", formData.fullName);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("program", formData.program);
      form.append("message", formData.message);

      const response = await fetch("https://formbold.com/s/3ZQgR", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      alert("Erreur de connexion. Vérifiez votre connexion internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-[var(--color-cream)]">
        <Container size="narrow">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[var(--color-beige)] text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-4">
              Candidature envoyée !
            </h3>
            <p className="text-[var(--color-dark)]/70">
              Merci pour votre intérêt. Nous reviendrons vers vous rapidement
              pour planifier votre entretien motivationnel.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-[var(--color-cream)]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Postuler"
          title="Prêt à Transformer Votre Passion en Métier ?"
          description="Remplissez le formulaire ci-dessous pour démarrer votre candidature. Nous vous contacterons pour planifier votre entretien."
        />

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-[var(--color-beige)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="fullName"
                name="fullName"
                label="Nom complet *"
                placeholder="Votre nom et prénom"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
              />
              <Input
                id="email"
                name="email"
                type="email"
                label="Email *"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="phone"
                name="phone"
                type="tel"
                label="Téléphone *"
                placeholder="+221 XX XXX XX XX"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
              <div className="w-full">
                <label
                  htmlFor="program"
                  className="block text-sm font-medium text-[var(--color-dark)] mb-2"
                >
                  Formation souhaitée *
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-[var(--color-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 ${
                    errors.program ? "border-red-500" : "border-[var(--color-beige)]"
                  }`}
                >
                  <option value="">Sélectionnez une formation</option>
                  {PROGRAMS.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.name} - {program.price} {program.currency}
                    </option>
                  ))}
                </select>
                {errors.program && (
                  <p className="mt-1 text-sm text-red-500">{errors.program}</p>
                )}
              </div>
            </div>

            <Textarea
              id="message"
              name="message"
              label="Motivation *"
              placeholder="Pourquoi souhaitez vous suivre cette formation?"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Envoi en cours..."
              ) : (
                <span className="inline-flex items-center">
                  <Send size={18} className="mr-2" />
                  Envoyer ma candidature
                </span>
              )}
            </Button>

            <p className="text-xs text-center text-[var(--color-dark)]/50">
              En soumettant ce formulaire, vous acceptez d&apos;être contacté par
              Revive Académie concernant votre candidature.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
