import './globals.css';
import { company } from '@/lib/data';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const SITE_URL = 'https://nevrastudio.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} — Software Studio`,
    template: `%s — ${company.name}`,
  },
  description: company.shortDesc,
  keywords: [
    'software studio',
    'web development',
    'mobile apps',
    'computer vision',
    'Next.js',
    'React',
  ],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${company.name} — Software Studio`,
    description: company.shortDesc,
    siteName: company.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} — Software Studio`,
    description: company.shortDesc,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
