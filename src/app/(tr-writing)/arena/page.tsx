import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import { getWritingSeries } from '@/lib/writing/registry';
import { siteName, siteUrl } from '@/lib/seo';

const description = 'Birbirini yıllar sonra bulan kısa hikâyeler.';
const arenaStories = getWritingSeries('arena');

type ArenaStory = (typeof arenaStories)[number];

function requireArenaStory(story: ArenaStory | undefined): ArenaStory {
  if (!story) {
    throw new Error('Arena series must contain at least one story.');
  }

  return story;
}

const firstStory = requireArenaStory(arenaStories[0]);
const latestStory = requireArenaStory(arenaStories.at(-1));

function getStoryHref(story: ArenaStory): string {
  return `/writing/${story.path.join('/')}`;
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Arena',
  description,
  alternates: {
    canonical: '/arena',
  },
  openGraph: {
    title: `Arena — ${siteName}`,
    description,
    url: '/arena',
    siteName,
    locale: 'tr_TR',
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
    title: `Arena — ${siteName}`,
    description,
    creator: '@Mert_Ercan',
    images: ['/opengraph-image'],
  },
};

export default function Arena() {
  return (
    <main className='min-h-screen'>
      <section className='writing-content container-base pt-14 pb-24 md:pt-20 md:pb-[150px]' lang='tr'>
        <div className='mb-10 md:mb-14'>
          <Link href='/writing' className='text-ink/70 hover:text-ink/85 text-sm no-underline transition-colors'>
            ← writing
          </Link>
        </div>

        <header className='max-w-[620px]'>
          <h1 className='mb-3'>Arena</h1>
          <p className='text-ink/70 mt-0! max-w-[620px] text-sm! italic'>{description}</p>
          <p className='text-ink/70 mt-3 text-sm!'>{arenaStories.length} hikâye</p>

          <nav aria-label='Arena bağlantıları' className='mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm'>
            <Link href={getStoryHref(firstStory)} className='text-ink hover:text-ink/70 font-medium no-underline'>
              Seriye başla →
            </Link>
            <Link href={getStoryHref(latestStory)} className='text-ink/70 hover:text-ink no-underline'>
              En yeni hikâye →
            </Link>
          </nav>
        </header>

        <section aria-label='Arena hikâyeleri' className='mt-12 max-w-[620px] md:mt-16'>
          <ol className='space-y-7 md:space-y-8'>
            {arenaStories.map((story) => (
              <li key={story.slug}>
                <article>
                  <h2 className='mb-1.5'>
                    <Link href={getStoryHref(story)} className='text-ink hover:text-ink/70 no-underline'>
                      {story.title}
                    </Link>
                  </h2>
                  <p className='text-ink/70! mb-1.5 text-sm!'>
                    Arena · {story.position} · <time dateTime={story.date}>{story.displayDate}</time>
                  </p>
                  <p className='text-ink/70 mt-0! text-sm!'>{story.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>
      </section>

      <Footer />
    </main>
  );
}
