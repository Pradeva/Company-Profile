import Link from 'next/link';
import { company, portfolios } from '@/lib/data';
import Section from '@/components/ui/section';
import SectionHeader from '@/components/ui/section-header';
import { StaggerGroup, MotionItem } from '@/components/ui/motion';

export const metadata = {
  title: 'Portfolio',
  description: `Selected projects and case studies by ${company.name}.`,
};

export default function PortfolioPage() {
  return (
    <Section>
      <SectionHeader
        label="Portfolio"
        title="Selected work & case studies"
        description="A closer look at products we've designed, engineered, and shipped."
      />
      <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {portfolios.map((p) => (
          <MotionItem key={p.slug}>
            <Link
              href={`/portfolio/${p.slug}`}
              className="group block overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div
                className="flex h-52 items-end p-6"
                style={{ background: `linear-gradient(135deg, ${p.cover}, #0b1b33)` }}
              >
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-content transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <span className="shrink-0 text-xs text-muted">{p.year}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tools.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </MotionItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
