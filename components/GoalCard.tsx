import type { GoalItem } from "@/lib/content";

type Props = {
  item: GoalItem;
  reversed?: boolean;
};

export default function GoalCard({ item, reversed }: Props) {
  return (
    <article
      className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16 ${
        reversed ? "" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative col-span-1 md:col-span-6 ${
          reversed ? "md:order-2 md:col-start-7" : "md:order-1"
        }`}
      >
        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-night-2 shadow-2xl shadow-black/40">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
          />
          {/* subtle dark gradient for text legibility if overlaying */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>

      {/* Text */}
      <div
        className={`col-span-1 md:col-span-5 ${
          reversed ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-8"
        }`}
      >
        {item.subtitle && (
          <span className="gold-rule text-[11px] uppercase tracking-overline text-gold">
            {item.subtitle}
          </span>
        )}

        <h3 className="mt-4 font-display text-3xl leading-tight text-white md:text-4xl">
          {item.title}
        </h3>

        {item.price && (
          <p className="mt-3 font-display text-lg italic text-gold-soft">
            {item.price}
          </p>
        )}

        <p className="mt-5 text-sm font-light leading-relaxed text-white/75 md:text-[15px]">
          {item.description}
        </p>

        {item.bullets && (
          <ul className="mt-6 space-y-2 text-sm font-light text-white/70">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-[7px] inline-block h-[5px] w-[5px] flex-none rounded-full bg-gold" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {item.href && (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow mt-8 inline-flex text-xs uppercase tracking-overline text-gold hover:text-gold-soft"
          >
            อ่านรายละเอียด
          </a>
        )}
      </div>
    </article>
  );
}
