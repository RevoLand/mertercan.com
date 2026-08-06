import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteUrl } from '@/lib/seo';
import { writings } from '@/lib/writing/registry';

export const dynamic = 'force-static';

const metadataLastModified = [
  ...projects.map((project) => project.updatedAt),
  ...writings.map((writing) => writing.date),
].reduce((latest, date) => (date > latest ? date : latest));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: metadataLastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/life`,
      lastModified: metadataLastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/making`,
      lastModified: metadataLastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/writing`,
      lastModified: metadataLastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...projects.map((p) => ({
      url: `${siteUrl}/making/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...writings.map((writing) => ({
      url: `${siteUrl}/writing/${writing.path.join('/')}`,
      lastModified: writing.date,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ];
}
