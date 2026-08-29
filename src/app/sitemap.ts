import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteUrl } from '@/lib/seo';
import { getWritingLastModified, getWritingSeries, type WritingEntry, writings } from '@/lib/writing/registry';

export const dynamic = 'force-static';

function getLatestWritingLastModified(entries: readonly WritingEntry[]): string | undefined {
  return entries.reduce<string | undefined>((latest, writing) => {
    const lastModified = getWritingLastModified(writing);

    return latest === undefined || lastModified > latest ? lastModified : latest;
  }, undefined);
}

const arenaSeries = getWritingSeries('arena');
const writingLastModified = getLatestWritingLastModified(writings);
const arenaLastModified = getLatestWritingLastModified(arenaSeries.entries);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/life`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/making`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/writing`,
      lastModified: writingLastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/arena`,
      lastModified: arenaLastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...projects.map((p) => ({
      url: `${siteUrl}/making/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...writings.map((writing) => ({
      url: `${siteUrl}/writing/${writing.path.join('/')}`,
      lastModified: getWritingLastModified(writing),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ];
}
