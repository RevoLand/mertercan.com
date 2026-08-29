import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteUrl } from '@/lib/seo';
import { getWritingLastModified, writings } from '@/lib/writing/registry';

export const dynamic = 'force-static';

const staticPageLastModified = {
  home: '2026-08-28',
  life: '2026-08-20',
  making: '2026-08-06',
  writing: '2026-08-21',
  arena: '2026-08-29',
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: staticPageLastModified.home,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/life`,
      lastModified: staticPageLastModified.life,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/making`,
      lastModified: staticPageLastModified.making,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/writing`,
      lastModified: staticPageLastModified.writing,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/arena`,
      lastModified: staticPageLastModified.arena,
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
