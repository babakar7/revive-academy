import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { ProgramDetails } from "@/components/sections/ProgramDetails";
import { Team } from "@/components/sections/Team";
import { WhyChoose } from "@/components/sections/WhyChoose";
// import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Programs />
        <ProgramDetails />
        <Team />
        <WhyChoose />
        {/* <Testimonials /> */}
        <Gallery />
        <PracticalInfo />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
