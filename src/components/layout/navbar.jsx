'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { company } from '@/lib/data';
import Button from '@/components/ui/button';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? 'border-line bg-white/90 shadow-soft backdrop-blur' : 'border-transparent bg-white'
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-sm font-bold text-white">
              {company.name.charAt(0)}
            </span>
            <span className="font-display text-lg font-bold tracking-tight2 text-content">
              {company.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === l.href ? 'text-accent' : 'text-muted hover:text-content'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button href="/contact" className="px-5 py-2.5">
              Contact us
            </Button>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-content md:hidden"
          >
            <FiMenu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-white md:hidden"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <span className="font-display text-lg font-bold text-content">{company.name}</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-content"
              >
                <FiX size={18} />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-4">
              {[...LINKS, { href: '/contact', label: 'Contact' }].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 text-lg font-medium text-content hover:text-accent"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
