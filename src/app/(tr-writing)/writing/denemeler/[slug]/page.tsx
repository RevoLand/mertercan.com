import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import { essays, getEssayBySlug, getEssayNavigation } from '@/data/essays';
import { buildEssayJsonLd, getEssaySeoDescription, siteName, siteUrl } from '@/lib/seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    return { title: 'Not Found' };
  }

  return {
    metadataBase: new URL(siteUrl),
    title: essay.title,
    description: getEssaySeoDescription(essay),
    alternates: {
      canonical: `/writing/denemeler/${essay.slug}`,
    },
    openGraph: {
      title: `${essay.title} — Mert Ercan`,
      description: getEssaySeoDescription(essay),
      url: `/writing/denemeler/${essay.slug}`,
      siteName,
      locale: 'tr_TR',
      type: 'article',
      publishedTime: essay.date,
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
      title: `${essay.title} — Mert Ercan`,
      description: getEssaySeoDescription(essay),
      images: ['/opengraph-image'],
    },
  };
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  const essayJsonLd = buildEssayJsonLd(essay);
  const { previous, next } = getEssayNavigation(essay.slug);

  return (
    <main className='min-h-screen'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(essayJsonLd) }} />
      <article className='container-base pt-14 pb-24 md:pt-20 md:pb-[150px]'>
        <div className='mb-10 md:mb-14'>
          <Link href='/writing' className='text-ink/70 hover:text-ink/85 text-sm no-underline transition-colors'>
            ← writing
          </Link>
        </div>

        <p className='text-ink/70 mb-3 text-sm!'>
          {essay.position}. deneme · {essay.displayDate}
        </p>
        <h1 className='mb-4 text-[2.2rem]! md:text-[3.1rem]!'>{essay.title}</h1>
        <p className='text-ink/70 mt-0! max-w-[620px] text-sm! italic'>{essay.description}</p>

        <div className='essay-dialogue'>
          {essay.body.map((line, index) => (
            <p key={`${essay.slug}-${index}`}>{line}</p>
          ))}
        </div>

        <nav className='border-ink/8 flex max-w-[680px] flex-col gap-5 border-t pt-8 md:flex-row md:items-start md:justify-between'>
          <div>
            {previous && (
              <Link
                href={`/writing/denemeler/${previous.slug}`}
                className='text-ink/70 hover:text-ink text-sm no-underline transition-colors'
              >
                ← {previous.title}
              </Link>
            )}
          </div>
          <div className='md:text-right'>
            {next && (
              <Link
                href={`/writing/denemeler/${next.slug}`}
                className='text-ink/70 hover:text-ink text-sm no-underline transition-colors'
              >
                {next.title} →
              </Link>
            )}
          </div>
        </nav>
      </article>

      <Footer />
    </main>
  );
}
