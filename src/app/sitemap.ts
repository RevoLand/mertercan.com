import { MetadataRoute } from 'next';
import { essays } from '@/data/essays';
import { projects } from '@/data/projects';
import { siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

const metadataLastModified = '2026-06-26';

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
    ...essays.map((essay) => ({
      url: `${siteUrl}/writing/denemeler/${essay.slug}`,
      lastModified: essay.date,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ];
}
