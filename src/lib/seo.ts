import type { Project } from '@/data/projects';
import type { WritingEntry } from '@/lib/writing/registry';

export const siteUrl = 'https://mertercan.com';
export const websiteId = `${siteUrl}/#website`;
export const profilePageId = `${siteUrl}/#profile-page`;
export const personId = `${siteUrl}/#mert-ercan`;
export const siteName = 'Mert Ercan';
export const siteAlternateNames = ['mertercan.com', 'mertercan'];
export const personAlternateNames = ['mertcreates'];
export const siteTitle = 'Mert Ercan — frontend developer creating with clarity';
export const siteDescription =
  'Mert Ercan is a frontend developer exploring how small things grow into meaning, through clear structures, thoughtful work, and tiny creative worlds.';
export const socialLinks = [
  'https://www.pinterest.com/mertcreates',
  'https://github.com/mertcreates',
  'https://www.linkedin.com/in/mert-ercan',
  'https://x.com/Mert_Ercan',
];

type JsonLdNode = Record<string, unknown>;

export function buildHomeJsonLd(): { '@context': string; '@graph': JsonLdNode[] } {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: siteName,
        alternateName: siteAlternateNames,
        url: `${siteUrl}/`,
        description: siteDescription,
        inLanguage: 'en',
        publisher: {
          '@id': personId,
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': profilePageId,
        url: `${siteUrl}/`,
        name: siteName,
        description: siteDescription,
        isPartOf: {
          '@id': websiteId,
        },
        mainEntity: {
          '@id': personId,
        },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: siteName,
        alternateName: personAlternateNames,
        url: `${siteUrl}/`,
        email: 'mailto:me@mertercan.com',
        jobTitle: 'Frontend Developer',
        description: siteDescription,
        sameAs: socialLinks,
        mainEntityOfPage: {
          '@id': profilePageId,
        },
        knowsAbout: ['frontend development', 'readable UI systems', 'developer tools', 'creative systems'],
      },
    ],
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]): JsonLdNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getProjectDescription(project: Project): string {
  return project.metaDescription ?? project.context;
}

export function getProjectUrl(project: Project): string {
  return `${siteUrl}/making/${project.slug}`;
}

export function buildProjectJsonLd(project: Project): { '@context': string; '@graph': JsonLdNode[] } {
  const projectUrl = getProjectUrl(project);
  const githubLink = project.links?.find((link) => link.label.toLowerCase() === 'github');
  const npmLink = project.links?.find((link) => link.label.toLowerCase() === 'npm');
  const liveLinks =
    project.links?.filter((link) => !['github', 'npm', 'latest release'].includes(link.label.toLowerCase())) ?? [];

  const projectNode: JsonLdNode = {
    '@type': project.schemaType,
    '@id': `${projectUrl}#work`,
    name: project.title,
    description: getProjectDescription(project),
    url: projectUrl,
    creator: {
      '@id': personId,
    },
    dateModified: project.updatedAt,
    keywords: project.tags,
  };

  if (project.publishedAt) {
    projectNode.dateCreated = project.publishedAt;
  }

  if (project.schemaType === 'SoftwareSourceCode' && githubLink) {
    projectNode.codeRepository = githubLink.href;
  }

  const sameAs =
    project.schemaType === 'SoftwareSourceCode'
      ? npmLink && [npmLink.href]
      : liveLinks.length > 0 && liveLinks.map((link) => link.href);

  if (sameAs) {
    projectNode.sameAs = sameAs;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbJsonLd([
        { name: 'Home', url: siteUrl },
        { name: 'Making', url: `${siteUrl}/making` },
        { name: project.title, url: projectUrl },
      ]),
      projectNode,
    ],
  };
}

export function buildMakingJsonLd(
  projects: Project[],
  description: string
): { '@context': string; '@graph': JsonLdNode[] } {
  const itemListId = `${siteUrl}/making#items`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbJsonLd([
        { name: 'Home', url: siteUrl },
        { name: 'Making', url: `${siteUrl}/making` },
      ]),
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/making#page`,
        url: `${siteUrl}/making`,
        name: 'Making',
        description,
        inLanguage: 'en',
        isPartOf: {
          '@id': websiteId,
        },
        author: {
          '@id': personId,
        },
        mainEntity: {
          '@id': itemListId,
        },
      },
      {
        '@type': 'ItemList',
        '@id': itemListId,
        name: 'Making by Mert Ercan',
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: project.title,
          url: getProjectUrl(project),
        })),
      },
    ],
  };
}

export function getWritingEntryUrl(writing: WritingEntry): string {
  return `${siteUrl}/writing/${writing.path.join('/')}`;
}

export function buildWritingJsonLd(
  entries: WritingEntry[],
  description: string
): { '@context': string; '@graph': JsonLdNode[] } {
  const itemListId = `${siteUrl}/writing#items`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbJsonLd([
        { name: 'Home', url: siteUrl },
        { name: 'Writing', url: `${siteUrl}/writing` },
      ]),
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/writing#page`,
        url: `${siteUrl}/writing`,
        name: 'Writing',
        description,
        inLanguage: ['en', 'tr'],
        isPartOf: {
          '@id': websiteId,
        },
        author: {
          '@id': personId,
        },
        mainEntity: {
          '@id': itemListId,
        },
      },
      {
        '@type': 'ItemList',
        '@id': itemListId,
        name: 'Writing by Mert Ercan',
        numberOfItems: entries.length,
        itemListElement: entries.map((writing, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: writing.title,
          url: getWritingEntryUrl(writing),
        })),
      },
    ],
  };
}

export function getWritingSeoDescription(writing: WritingEntry): string {
  return writing.seoDescription;
}

function getWritingSection(writing: WritingEntry): string {
  if (writing.group === 'denemeler') {
    return 'Denemeler';
  }

  if (writing.group === 'siirler') {
    return 'Şiirler';
  }

  if (writing.group === 'hikayeler') {
    return 'Hikâyeler';
  }

  return 'Konuşmalar';
}

export function buildWritingEntryJsonLd(writing: WritingEntry): { '@context': string; '@graph': JsonLdNode[] } {
  const writingUrl = getWritingEntryUrl(writing);
  const writingNodeId = writing.format === 'poem' ? `${writingUrl}#creative-work` : `${writingUrl}#article`;
  const writingNode: JsonLdNode = {
    '@type': writing.format === 'poem' ? 'CreativeWork' : 'Article',
    '@id': writingNodeId,
    url: writingUrl,
    name: writing.title,
    headline: writing.title,
    description: getWritingSeoDescription(writing),
    inLanguage: 'tr',
    datePublished: writing.date,
    image: `${siteUrl}/opengraph-image`,
    author: {
      '@id': personId,
    },
    publisher: {
      '@id': personId,
    },
    isPartOf: {
      '@id': `${siteUrl}/writing#page`,
    },
    mainEntityOfPage: {
      '@id': writingUrl,
    },
  };

  if (writing.format === 'poem') {
    writingNode.genre = 'Poetry';
  } else {
    writingNode.articleSection = getWritingSection(writing);
  }

  if (writing.keywords.length > 0) {
    writingNode.keywords = writing.keywords.join(', ');
  }

  if (writing.group === 'denemeler' || writing.group === 'hikayeler') {
    writingNode.position = writing.position;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbJsonLd([
        { name: 'Home', url: siteUrl },
        { name: 'Writing', url: `${siteUrl}/writing` },
        { name: writing.title, url: writingUrl },
      ]),
      writingNode,
    ],
  };
}
