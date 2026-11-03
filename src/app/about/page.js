import { company } from '@/lib/data';
import Section from '@/components/ui/section';
import SectionHeader from '@/components/ui/section-header';
import Button from '@/components/ui/button';
import { Reveal, StaggerGroup, MotionItem } from '@/components/ui/motion';
import { FiArrowUpRight } from 'react-icons/fi';

export const metadata = {
  title: 'About',
  description: `Learn about ${company.name}, an independent software studio focused on reliable, fast, and well-crafted digital products.`,
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeader label="About us" title={`We are ${company.name}`} />
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7" delay={0.1}>
            <p className="text-xl leading-relaxed text-content lg:text-2xl">{company.about}</p>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Founded in {company.foundedYear}, we work with clients across the globe, remotely and
              reliably. Whether you need a brand-new product or help improving an existing one, we
              bring the same standard of care to every engagement.
            </p>
            <div className="mt-8">
              <Button href="/contact">
                Work with us <FiArrowUpRight />
              </Button>
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <StaggerGroup className="grid grid-cols-2 gap-4">
              {company.stats.map((s) => (
                <MotionItem key={s.label} className="rounded-xl border border-line bg-white p-6 shadow-soft">
                  <div className="font-display text-3xl font-bold tracking-tight2 text-accent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{s.label}</div>
                </MotionItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader label="Our values" title="How we work" />
        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {company.values.map((v, i) => (
            <MotionItem
              key={v.title}
              className="rounded-2xl border border-line bg-white p-7 shadow-soft"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft font-mono text-sm font-semibold text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-content">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
            </MotionItem>
          ))}
        </StaggerGroup>
      </Section>
    </>
  );
}
