import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import { buildWritingEntryJsonLd, getWritingEntryUrl, getWritingSeoDescription, siteName, siteUrl } from '@/lib/seo';
import { getWritingByPath, getWritingNavigation, writings } from '@/lib/writing/registry';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const writingBodyClassNames = {
  dialogue: 'essay-dialogue',
  poem: 'writing-poem',
  article: 'writing-prose',
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return writings.map((writing) => ({ slug: writing.path }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const writing = getWritingByPath(slug);

  if (!writing) {
    return { title: 'Not Found' };
  }

  const description = getWritingSeoDescription(writing);
  const writingUrl = getWritingEntryUrl(writing);

  return {
    metadataBase: new URL(siteUrl),
    title: writing.title,
    description,
    alternates: {
      canonical: writingUrl,
    },
    openGraph: {
      title: `${writing.title} — Mert Ercan`,
      description,
      url: writingUrl,
      siteName,
      locale: 'tr_TR',
      type: 'article',
      publishedTime: writing.date,
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
      title: `${writing.title} — Mert Ercan`,
      description,
      images: ['/opengraph-image'],
    },
  };
}

export default async function WritingEntryPage({ params }: Props) {
  const { slug } = await params;
  const writing = getWritingByPath(slug);

  if (!writing) {
    notFound();
  }

  const writingJsonLd = buildWritingEntryJsonLd(writing);
  const navigation = getWritingNavigation(writing);

  return (
    <main className='min-h-screen'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(writingJsonLd) }} />
      <article className='container-base pt-14 pb-24 md:pt-20 md:pb-[150px]'>
        <div data-nosnippet='' className='mb-10 md:mb-14'>
          <Link href='/writing' className='text-ink/70 hover:text-ink/85 text-sm no-underline transition-colors'>
            ← writing
          </Link>
        </div>

        <p className='text-ink/70 mb-3 text-sm!'>
          {writing.kind} · {writing.displayDate}
        </p>
        <h1 className='mb-4 max-w-[680px] text-[2.2rem]! md:text-[3.1rem]!'>{writing.title}</h1>
        <p className='text-ink/70 mt-0! max-w-[620px] text-sm! italic'>{writing.description}</p>

        <div
          className={writingBodyClassNames[writing.format]}
          dangerouslySetInnerHTML={{ __html: writing.contentHtml }}
        />

        {writing.group === 'denemeler' && (
          <nav
            data-nosnippet=''
            className='border-ink/8 flex max-w-[680px] flex-col gap-5 border-t pt-8 md:flex-row md:items-start md:justify-between'
          >
            <div>
              {navigation.previous && (
                <Link
                  href={`/writing/${navigation.previous.path.join('/')}`}
                  className='text-ink/70 hover:text-ink text-sm no-underline transition-colors'
                >
                  ← {navigation.previous.title}
                </Link>
              )}
            </div>
            <div className='md:text-right'>
              {navigation.next && (
                <Link
                  href={`/writing/${navigation.next.path.join('/')}`}
                  className='text-ink/70 hover:text-ink text-sm no-underline transition-colors'
                >
                  {navigation.next.title} →
                </Link>
              )}
            </div>
          </nav>
        )}
      </article>

      <Footer />
    </main>
  );
}
