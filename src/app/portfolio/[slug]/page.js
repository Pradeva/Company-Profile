import Link from 'next/link';
import { notFound } from 'next/navigation';
import { portfolios, getPortfolioBySlug, company } from '@/lib/data';
import Section from '@/components/ui/section';
import Button from '@/components/ui/button';
import { Reveal } from '@/components/ui/motion';
import { FiArrowLeft, FiArrowUpRight, FiCheck } from 'react-icons/fi';

// Pre-render semua halaman detail saat build (SSG) -> cepat & SEO-friendly.
export function generateStaticParams() {
  return portfolios.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getPortfolioBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${company.name}`,
      description: project.summary,
    },
  };
}

export default function PortfolioDetailPage({ params }) {
  const project = getPortfolioBySlug(params.slug);
  if (!project) notFound();

  return (
    <article>
      <Section>
        <Reveal>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <FiArrowLeft /> Back to portfolio
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="rounded-full border border-line px-3 py-1 text-xs text-accent">
              {project.category}
            </span>
            <span>{project.client}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold tracking-tight2 text-content sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mt-10 h-64 rounded-3xl border border-line sm:h-80"
            style={{ background: `linear-gradient(135deg, ${project.cover}, #0b1b33)` }}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-8" delay={0.05}>
            <h2 className="font-display text-2xl font-semibold text-content">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-content">Results</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {project.results.map((r) => (
                <li key={r} className="flex items-start gap-3 text-muted">
                  <FiCheck className="mt-1 shrink-0 text-accent" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <aside className="lg:col-span-4">
            <Reveal delay={0.1} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Tech &amp; tools
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span key={t} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t border-line pt-6">
                <p className="text-sm text-muted">Want something similar?</p>
                <div className="mt-3">
                  <Button href="/contact" className="w-full">
                    Start a project <FiArrowUpRight />
                  </Button>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>
    </article>
  );
}
