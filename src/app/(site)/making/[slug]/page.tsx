import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Footer from '@/app/components/Footer';
import { projects, getProjectBySlug } from '@/data/projects';
import { buildProjectJsonLd, getProjectDescription, siteName, siteUrl } from '@/lib/seo';
import MakingDetail from './MakingDetail';

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { metadataBase: new URL(siteUrl), title: 'Not Found' };
  }

  const description = getProjectDescription(project);

  return {
    metadataBase: new URL(siteUrl),
    title: project.title,
    description,
    alternates: {
      canonical: `/making/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Mert Ercan`,
      description,
      url: `/making/${project.slug}`,
      siteName,
      locale: 'en_US',
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
      title: `${project.title} — Mert Ercan`,
      description,
      creator: '@Mert_Ercan',
      images: ['/opengraph-image'],
    },
  };
}

export default async function MakingPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = buildProjectJsonLd(project);

  return (
    <main className='min-h-screen'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }} />
      <MakingDetail project={project} />
      <Footer />
    </main>
  );
}
