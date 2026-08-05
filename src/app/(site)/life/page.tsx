import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import { siteName, siteUrl } from '@/lib/seo';

const description = 'A quiet record of how this site — and I — grow.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Life',
  description,
  alternates: {
    canonical: '/life',
  },
  openGraph: {
    title: 'Life — Mert Ercan',
    description,
    url: '/life',
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
    title: 'Life — Mert Ercan',
    description,
    images: ['/opengraph-image'],
  },
};

type Entry = {
  date: string;
  intro?: string;
  notes: LifeNote[];
};

type LifeNote = {
  text: string;
  relatedLink?: {
    href: string;
    label: string;
  };
};

const entries: Entry[] = [
  {
    date: 'August 2026',
    intro: 'The conversation continued. This time, it turned toward responsibility.',
    notes: [
      {
        text: 'Added Sorumluluk as the seventh part of the Turkish Denemeler series.',
        relatedLink: { href: '/writing/denemeler/sorumluluk', label: 'Sorumluluk' },
      },
      {
        text: 'The next conversation will be about healthy boundaries.',
      },
    ],
  },
  {
    date: 'July 2026',
    intro:
      'Writing changed shape this month. One piece became a public tool. A few essays found their place on the site, and the conversation continued.',
    notes: [
      {
        text: 'Built and launched Dizgi, a browser-based tool that turns long-form writing into carefully paginated images and PDFs without rewriting the text.',
        relatedLink: { href: '/making/dizgi', label: 'Dizgi' },
      },
      {
        text: 'The first usable version went from idea to a live product in one day, with rendered-layout pagination, intentional page breaks, typography and background controls, previews, and image and PDF export.',
      },
      {
        text: 'Added Dizgi to Selected Work and gave it a dedicated /making page.',
      },
      {
        text: 'Added /writing as a quieter place for notes, essays, and small conversations.',
        relatedLink: { href: '/writing', label: 'Writing' },
      },
      {
        text: 'Brought the Turkish Denemeler series into the site without turning the whole site multilingual.',
      },
      {
        text: 'Added Dostluk 2 as the next part of the Turkish Denemeler series.',
        relatedLink: { href: '/writing/denemeler/dostluk-2', label: 'Dostluk 2' },
      },
    ],
  },
  {
    date: 'June 2026',
    intro:
      'A lot had been building quietly. Projects existed but the site had not caught up yet. This update was mostly about closing that gap.',
    notes: [
      {
        text: 'Added BugJar, Haklısın!, Kombin.dev, Project Canon, and two ESLint plugins to Selected Work. Built dedicated /making pages for each, and stripped away the "marketing" voice in favor of a calm, structural record.',
        relatedLink: { href: '/making', label: 'Selected Work' },
      },
      {
        text: "The creative characters (Toffee, Rozi, Fluffy) moved into the background. The approach stayed; the names didn't need to.",
      },
      {
        text: '"How I Grow" got a second paragraph. It needed more room.',
      },
      {
        text: 'This page — as a place to remember what was here and what changed.',
      },
    ],
  },
];

export default function Life() {
  return (
    <main className='min-h-screen'>
      <section className='container-base pt-14 pb-24 md:pt-20 md:pb-[150px]'>
        <h1 className='mb-3'>Life</h1>
        <p className='text-ink/70 mt-0! mb-16 text-sm! italic md:mb-20'>
          A quiet record of how this site — and I — grow.
        </p>

        <div className='max-w-[620px] space-y-14 md:space-y-16'>
          {entries.map((entry) => (
            <div key={entry.date}>
              <p className='text-ink/70 mb-4 text-sm! font-medium tracking-wide uppercase'>{entry.date}</p>
              {entry.intro && <p className='text-ink/75 mb-6 italic'>{entry.intro}</p>}
              <ul className='space-y-2.5'>
                {entry.notes.map((note, i) => (
                  <li key={i} className="before:text-ink/30 text-ink/80 list-none before:mr-3 before:content-['-']">
                    {note.text}
                    {note.relatedLink && (
                      <Link
                        href={note.relatedLink.href}
                        className='text-ink/70 hover:text-ink/90 decoration-ink/40 ml-2 text-sm underline underline-offset-2 transition-colors'
                      >
                        {note.relatedLink.label} →
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
