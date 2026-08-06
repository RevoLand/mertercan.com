import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import { projects } from '@/data/projects';
import { buildMakingJsonLd, siteName, siteUrl } from '@/lib/seo';

const description = 'Things I have made — small and larger, tools and products, quiet and continuing.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Making',
  description,
  alternates: {
    canonical: '/making',
  },
  openGraph: {
    title: 'Making — Mert Ercan',
    description,
    url: '/making',
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
    title: 'Making — Mert Ercan',
    description,
    images: ['/opengraph-image'],
  },
};

const largerProjects = projects.filter((p) => p.group === 'larger');
const smallProjects = projects.filter((p) => p.group === 'small');
const makingJsonLd = buildMakingJsonLd([...largerProjects, ...smallProjects], description);

export default function Making() {
  return (
    <main className='min-h-screen'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(makingJsonLd) }} />
      <section className='container-base pt-14 pb-24 md:pt-20 md:pb-[150px]'>
        <h1 className='mb-3'>Making</h1>
        <p className='text-ink/70 mt-0! mb-16 text-sm! italic md:mb-20'>
          Things I have made — small and larger, tools and products, quiet and continuing.
        </p>

        <div className='max-w-[620px] space-y-14 md:space-y-16'>
          {/* Larger things */}
          <div>
            <h2 className='text-ink/70 mt-0! mb-8! text-sm! font-medium tracking-wide uppercase'>larger things</h2>
            <div className='space-y-8 md:space-y-10'>
              {largerProjects.map((project) => (
                <div key={project.slug}>
                  <h3 className='mb-1.5'>
                    <Link href={`/making/${project.slug}`} className='text-ink hover:text-ink/70 no-underline'>
                      {project.title}
                    </Link>
                    {project.status === 'private build' && (
                      <span className='text-ink/70 ml-2 text-sm font-normal'>private</span>
                    )}
                  </h3>
                  <p className='text-ink/75 mt-0! text-sm!'>{project.context}</p>
                  <p className='text-ink/70 mt-1.5! text-xs!'>{project.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Small tools */}
          <div>
            <h2 className='text-ink/70 mt-0! mb-8! text-sm! font-medium tracking-wide uppercase'>small tools</h2>
            <div className='space-y-6'>
              {smallProjects.map((project) => (
                <div key={project.slug}>
                  <h3 className='mb-1.5'>
                    <Link
                      href={`/making/${project.slug}`}
                      className='text-ink hover:text-ink/70 text-base! font-normal no-underline'
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className='text-ink/75 mt-0! text-sm!'>{project.context}</p>
                  <p className='text-ink/70 mt-1.5! text-xs!'>{project.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
