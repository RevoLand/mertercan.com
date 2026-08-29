import { getWritingEntryUrl, siteName, siteUrl } from '@/lib/seo';
import { getWritingLastModified, getWritingSeries } from '@/lib/writing/registry';

export const dynamic = 'force-static';

const arenaSeries = getWritingSeries('arena');
const feedUrl = `${siteUrl}${arenaSeries.hubPath}/feed.xml`;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822Date(date: string): string {
  return new Date(`${date}T00:00:00Z`).toUTCString();
}

export function GET(): Response {
  const latestLastModified = arenaSeries.entries.map(getWritingLastModified).sort().at(-1);
  const lastBuildDate = latestLastModified
    ? `<lastBuildDate>${escapeXml(toRfc822Date(latestLastModified))}</lastBuildDate>`
    : '';
  const items = [...arenaSeries.entries]
    .reverse()
    .map((story) => {
      const storyUrl = getWritingEntryUrl(story);
      const publishedDate = getWritingLastModified(story);

      return `<item>
        <title>${escapeXml(story.title)}</title>
        <link>${escapeXml(storyUrl)}</link>
        <guid isPermaLink="true">${escapeXml(storyUrl)}</guid>
        <description>${escapeXml(story.description)}</description>
        <pubDate>${escapeXml(toRfc822Date(publishedDate))}</pubDate>
      </item>`;
    })
    .join('\n');
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(arenaSeries.title)} — ${escapeXml(siteName)}</title>
    <link>${escapeXml(`${siteUrl}${arenaSeries.hubPath}`)}</link>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(arenaSeries.description)}</description>
    <language>${escapeXml(arenaSeries.inLanguage)}-${escapeXml(arenaSeries.inLanguage.toUpperCase())}</language>
    ${lastBuildDate}
    ${items}
  </channel>
</rss>
`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
