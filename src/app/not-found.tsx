import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import { siteUrl } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Not Found',
  description: 'This page could not be found on mertercan.com.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col'>
      <section className='container-base flex-grow pt-32 pb-24 md:pt-[200px] md:pb-[150px]'>
        <h1 className='text-ink/20 mb-4'>404</h1>
        <p className='text-ink/75 mb-8 italic'>Nothing here yet. Maybe soon.</p>
        <Link href='/' className='text-ink/70 hover:text-ink/85 text-sm no-underline transition-colors'>
          → return home
        </Link>
      </section>

      <Footer />
    </main>
  );
}
