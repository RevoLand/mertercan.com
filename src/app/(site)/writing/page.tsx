import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import { essays } from '@/data/essays';
import { buildWritingJsonLd, siteName, siteUrl } from '@/lib/seo';

const description = 'Notes, essays, and small conversations I want to keep somewhere quieter than the feed.';
const writingJsonLd = buildWritingJsonLd();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Writing',
  description,
  alternates: {
    canonical: '/writing',
  },
  openGraph: {
    title: 'Writing — Mert Ercan',
    description,
    url: '/writing',
    siteName,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Mert Ercan — frontend developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writing — Mert Ercan',
    description,
    images: ['/opengraph-image'],
  },
};

export default function Writing() {
  return (
    <main className='min-h-screen'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(writingJsonLd) }} />
      <section className='container-base pt-14 pb-24 md:pt-20 md:pb-[150px]'>
        <h1 className='mb-3'>Writing</h1>
        <p lang='en' className='text-ink/55 mt-0! mb-16 max-w-[620px] text-sm! italic md:mb-20'>
          Notes, essays, and small conversations I want to keep somewhere quieter than the feed.
        </p>

        <section className='max-w-[620px]'>
          <h2 className='mb-4 text-[1.45rem]! md:text-[1.75rem]!'>Denemeler</h2>
          <p lang='tr' className='text-ink/70 mb-12 max-w-[58ch] md:mb-14'>
            Düşünce, ölüm, özgecilik, insan doğası ve dostluk üzerine; zamanında yazarlığa giriş eğitimleri sırasında
            karaladığım beş küçük diyalog denemesi.
          </p>

          <div className='space-y-7 md:space-y-8'>
            {essays.map((essay) => (
              <article key={essay.slug}>
                <p className='text-ink/30! mb-1.5 text-sm!'>
                  {essay.position}. deneme · {essay.displayDate}
                </p>
                <h3 className='mb-1.5'>
                  <Link href={`/writing/denemeler/${essay.slug}`} className='text-ink hover:text-ink/70 no-underline'>
                    {essay.title}
                  </Link>
                </h3>
                <p className='text-ink/55 mt-0! text-sm!'>{essay.description}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
