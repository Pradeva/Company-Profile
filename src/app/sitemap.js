import { portfolios } from '@/lib/data';

const BASE = 'https://nevrastudio.com';

export default function sitemap() {
  const staticRoutes = ['', '/about', '/services', '/portfolio', '/contact'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));

  const projectRoutes = portfolios.map((p) => ({
    url: `${BASE}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
