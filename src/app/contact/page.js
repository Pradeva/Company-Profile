import Link from 'next/link';
import { company } from '@/lib/data';
import Section from '@/components/ui/section';
import SectionHeader from '@/components/ui/section-header';
import ContactForm from '@/components/contact-form';
import { Reveal } from '@/components/ui/motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export const metadata = {
  title: 'Contact',
  description: `Get in touch with ${company.name}. Tell us about your project and we'll respond within one business day.`,
};

export default function ContactPage() {
  return (
    <Section>
      <SectionHeader
        label="Contact"
        title="Let's start a conversation"
        description="Tell us about your project. We usually respond within one business day."
      />

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5" delay={0.05}>
          <div className="flex flex-col gap-6">
            <a href={`mailto:${company.email}`} className="group flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-accent transition-colors group-hover:border-accent">
                <FiMail size={18} />
              </span>
              <span className="text-content transition-colors group-hover:text-accent">
                {company.email}
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-accent">
                <FiPhone size={18} />
              </span>
              <span className="text-content">{company.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-accent">
                <FiMapPin size={18} />
              </span>
              <span className="text-content">{company.address}</span>
            </div>

            <div className="mt-4 flex items-center gap-5 border-t border-line pt-6 text-sm">
              <Link href={company.socials.github} target="_blank" className="text-muted transition-colors hover:text-accent">
                GitHub
              </Link>
              <Link href={company.socials.linkedin} target="_blank" className="text-muted transition-colors hover:text-accent">
                LinkedIn
              </Link>
              <Link href={company.socials.instagram} target="_blank" className="text-muted transition-colors hover:text-accent">
                Instagram
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
