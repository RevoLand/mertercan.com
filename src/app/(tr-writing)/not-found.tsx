import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Sayfa bulunamadı',
  description: 'Bu sayfa mertercan.com üzerinde bulunamadı.',
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
        <p className='text-ink/75 mb-8 italic'>Burada henüz bir şey yok. Belki yakında.</p>
        <Link href='/' className='text-ink/70 hover:text-ink/85 text-sm no-underline transition-colors'>
          → ana sayfaya dön
        </Link>
      </section>

      <Footer />
    </main>
  );
}
