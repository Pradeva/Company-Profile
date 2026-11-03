import { Reveal } from './motion';

// onDark=true untuk header di atas section gelap.
export default function SectionHeader({ label, title, description, align = 'left', onDark = false }) {
  const center = align === 'center';
  const titleColor = onDark ? 'text-content-invert' : 'text-content';
  const descColor = onDark ? 'text-muted-invert' : 'text-muted';

  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {label && (
        <div className={`flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
          <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {label}
          </span>
        </div>
      )}
      <h2 className={`mt-4 font-display text-3xl font-bold tracking-tight2 sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      {description && <p className={`mt-4 text-base leading-relaxed ${descColor}`}>{description}</p>}
    </Reveal>
  );
}
