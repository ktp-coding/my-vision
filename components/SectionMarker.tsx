type Props = {
  index: string;
  label: string;
  title: string;
  emphasis?: string;
  align?: 'left' | 'center';
};

export function SectionMarker({ index, label, title, emphasis, align = 'left' }: Props) {
  return (
    <div className={`pt-20 md:pt-28 pb-8 md:pb-10 ${align === 'center' ? 'text-center' : ''}`}>
      <div
        className={`gold-label mb-6 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="tabular">{index}</span>
        <span>{label}</span>
      </div>
      <h2
        className="font-display font-normal text-text tracking-[-0.02em] leading-[1.02] m-0"
        style={{ fontSize: 'clamp(38px, 6vw, 82px)', textWrap: 'balance' }}
      >
        {title}
        {emphasis && (
          <>
            {' '}
            <em className="italic text-brass-hi font-light">{emphasis}</em>
          </>
        )}
      </h2>
    </div>
  );
}
