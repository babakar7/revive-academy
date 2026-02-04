import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-[var(--color-cream)]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="FAQ"
          description="Trouvez les réponses aux questions les plus fréquemment posées sur nos formations."
        />

        <div className="bg-[var(--color-white)] rounded-2xl p-6 md:p-8 shadow-sm border border-[var(--color-beige)]">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </Container>
    </section>
  );
}
