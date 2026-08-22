import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import GoalSection from "@/components/GoalSection";
import Footer from "@/components/Footer";
import { sections } from "@/lib/content";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-night text-white overflow-hidden">
      <Nav />
      <Hero />

      <div className="relative">
        {sections.map((section, idx) => (
          <GoalSection
            key={section.id}
            section={section}
            index={idx + 1}
            reversed={idx % 2 === 1}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}
