import type { GoalSectionData } from "@/lib/content";
import GoalCard from "./GoalCard";
import Reveal from "./Reveal";
import Parallax from "./Parallax";

type Props = {
  section: GoalSectionData;
  index: number;
  reversed?: boolean;
};

export default function GoalSection({ section, index, reversed }: Props) {
  const num = String(index).padStart(2, "0");

  return (
    <section id={section.id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section header */}
        <div
          className={`relative mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:gap-16 ${
            reversed ? "md:flex-row-reverse md:text-right" : ""
          }`}
        >
          <div className="relative">
            {/* ghost number floats with parallax */}
            <Parallax
              speed={0.18}
              className="pointer-events-none absolute -top-16 -left-4 md:-top-20 md:-left-8"
            >
              <span className="ghost-number block text-[180px] md:text-[260px]">
                {num}
              </span>
            </Parallax>

            <div className="relative">
              <Reveal className="block">
                <span className="gold-rule text-xs uppercase tracking-overline text-gold">
                  {section.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={120} className="block">
                <h2 className="mt-4 whitespace-pre-line font-display text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl">
                  {section.headline}
                </h2>
              </Reveal>
            </div>
          </div>

          <Reveal delay={220} className="max-w-md">
            <p className="text-sm font-light leading-relaxed text-white/70 md:text-base">
              {section.intro}
            </p>
          </Reveal>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-20 md:gap-28">
          {section.items.map((item, i) => (
            <GoalCard
              key={item.title}
              item={item}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
