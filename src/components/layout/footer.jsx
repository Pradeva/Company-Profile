import Link from 'next/link';
import { company } from '@/lib/data';

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-invert">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-sm font-bold text-white">
                {company.name.charAt(0)}
              </span>
              <span className="font-display text-lg font-bold text-content-invert">
                {company.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-invert">
              {company.shortDesc}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-invert">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-content-invert/90 transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-invert">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a href={`mailto:${company.email}`} className="text-content-invert/90 transition-colors hover:text-accent">
                  {company.email}
                </a>
              </li>
              <li className="text-muted-invert">{company.phone}</li>
              <li className="text-muted-invert">{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-muted-invert sm:flex-row sm:items-center">
          <p>© {year} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href={company.socials.github} target="_blank" className="transition-colors hover:text-accent">GitHub</Link>
            <Link href={company.socials.linkedin} target="_blank" className="transition-colors hover:text-accent">LinkedIn</Link>
            <Link href={company.socials.instagram} target="_blank" className="transition-colors hover:text-accent">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
