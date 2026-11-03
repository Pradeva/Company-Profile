import Link from 'next/link';
import { company, services, portfolios } from '@/lib/data';
import Section from '@/components/ui/section';
import SectionHeader from '@/components/ui/section-header';
import Button from '@/components/ui/button';
import ServiceIcon from '@/components/ui/service-icon';
import { Reveal, StaggerGroup, MotionItem } from '@/components/ui/motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const featuredWork = portfolios.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-base-muted">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 pb-20 pt-28 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:pb-28 lg:pt-36">
          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Software Studio
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight2 text-content sm:text-5xl lg:text-[3.5rem]">
                {company.tagline}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
                {company.shortDesc}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/contact">
                  Start a project <FiArrowRight />
                </Button>
                <Button href="/portfolio" variant="outline">
                  View our work
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                {['Reliable delivery', 'Clear communication', 'Global clients'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <FiCheck className="text-accent" /> {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Panel visual: kartu stats rapi */}
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-line bg-white p-8 shadow-card">
              <p className="text-sm font-medium text-muted">Trusted by teams to deliver</p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {company.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-bold text-content">{s.value}</div>
                    <div className="mt-1 text-sm text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-base-muted p-5">
                <p className="text-sm leading-relaxed text-muted">
                  &ldquo;From idea to launch, we bring engineering discipline and design care to
                  every project.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-content">— {company.name} Team</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <Section id="services">
        <SectionHeader
          label="What we do"
          title="Services built to deliver"
          description="End-to-end product engineering, from strategy to launch and beyond."
        />
        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <MotionItem
              key={s.id}
              className="group rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <ServiceIcon name={s.icon} size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-content">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            </MotionItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-10" delay={0.1}>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-strong">
            All services <FiArrowRight />
          </Link>
        </Reveal>
      </Section>

      {/* FEATURED WORK */}
      <Section id="work" variant="muted">
        <SectionHeader
          label="Selected work"
          title="Projects we're proud of"
          description="A snapshot of products we've designed and engineered for our clients."
        />
        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((p) => (
            <MotionItem key={p.slug}>
              <Link
                href={`/portfolio/${p.slug}`}
                className="group block overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-40 items-end p-5" style={{ background: `linear-gradient(135deg, ${p.cover}, #0b1b33)` }}>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-content transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{p.summary}</p>
                </div>
              </Link>
            </MotionItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-10" delay={0.1}>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-strong">
            View all projects <FiArrowRight />
          </Link>
        </Reveal>
      </Section>

      {/* CTA band (dark navy untuk kontras korporat) */}
      <Section variant="dark">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight2 text-content-invert sm:text-4xl">
            Ready to start your next project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-invert">
            Tell us about your goals and we&apos;ll get back to you within one business day.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="onDark">
              Get in touch <FiArrowRight />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
