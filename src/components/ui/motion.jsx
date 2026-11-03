'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// Deteksi in-view yang ANDAL dengan fallback timeout, agar konten tidak
// pernah "stuck" tersembunyi (masalah umum whileInView).
function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    const t = setTimeout(() => setInView(true), 1200);
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, [ref]);
  return inView;
}

export function Reveal({ children, className = '', variants = fadeUp, delay = 0, as = 'div' }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

export function StaggerGroup({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

/**
 * Item ber-variants untuk dipakai di dalam StaggerGroup. Komponen client
 * sendiri, jadi AMAN dipakai dari Server Component (tidak seperti meng-import
 * objek `motion` mentah ke halaman server, yang menyebabkan error manifest).
 */
export function MotionItem({ children, className = '', variants = fadeUp }) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
