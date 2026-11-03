import { company, services } from '@/lib/data';
import Section from '@/components/ui/section';
import SectionHeader from '@/components/ui/section-header';
import Button from '@/components/ui/button';
import ServiceIcon from '@/components/ui/service-icon';
import { StaggerGroup, Reveal, MotionItem } from '@/components/ui/motion';
import { FiArrowUpRight } from 'react-icons/fi';

export const metadata = {
  title: 'Services',
  description: `Services offered by ${company.name}: web development, back-end & APIs, mobile apps, computer vision, UI/UX design, and maintenance.`,
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <SectionHeader
          label="Services"
          title="What we can build for you"
          description="Full-cycle product engineering tailored to your goals and budget."
        />
        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
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
      </Section>

      <Section variant="dark">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight2 text-content-invert sm:text-4xl">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-invert">
            Tell us your goals and we&apos;ll recommend the right approach.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="onDark">
              Let&apos;s talk <FiArrowUpRight />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
