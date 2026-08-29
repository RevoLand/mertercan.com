import 'server-only';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkDialogue from './remark-dialogue';

export type WritingGroup = 'denemeler' | 'siirler' | 'konusmalar' | 'hikayeler';
export type WritingFormat = 'dialogue' | 'poem' | 'article' | 'story';

export type WritingSeriesDefinition = Readonly<{
  slug: string;
  title: string;
  description: string;
  hubPath: `/${string}`;
  inLanguage: string;
}>;

const writingSeriesDefinitions: Record<string, WritingSeriesDefinition> = {
  arena: {
    slug: 'arena',
    title: 'Arena',
    description: 'Birbirini yıllar sonra bulan kısa hikâyeler.',
    hubPath: '/arena',
    inLanguage: 'tr',
  },
  denemeler: {
    slug: 'denemeler',
    title: 'Denemeler',
    description:
      'Bu serinin ilk beş denemesini yazarlığa giriş eğitimleri sırasında karaladım: düşünce, ölüm, özgecilik, insan doğası ve dostluk. Zamanla bunlara anlaşılmak, güvenmek, sorumluluk, sağlıklı sınırlar ve öznellik üzerine dört yeni diyalog eklendi.',
    hubPath: '/writing#denemeler',
    inLanguage: 'tr',
  },
};

function getWritingSeriesDefinition(series: string): WritingSeriesDefinition {
  const definition = writingSeriesDefinitions[series];

  if (!Object.prototype.hasOwnProperty.call(writingSeriesDefinitions, series) || !definition) {
    throw new Error(`Unknown writing series: ${series}`);
  }

  if (definition.slug !== series) {
    throw new Error(`Writing series definition slug does not match its key: ${series}`);
  }

  return definition;
}

type WritingBase = {
  slug: string;
  path: string[];
  title: string;
  date: string;
  siteAddedAt: string;
  updatedAt?: string;
  displayDate: string;
  description: string;
  seoDescription: string;
  keywords: string[];
  series?: string;
  kind: string;
  contentHtml: string;
};

export type DialogueWriting = WritingBase & {
  group: 'denemeler';
  format: 'dialogue';
  position: number;
};

export type ArticleWriting = WritingBase & {
  group: 'konusmalar';
  format: 'article';
};

export type StoryWriting = WritingBase & {
  group: 'hikayeler';
  format: 'story';
  position: number;
};

export type PoemWriting = WritingBase & {
  group: 'siirler';
  format: 'poem';
};

export type WritingEntry = DialogueWriting | PoemWriting | ArticleWriting | StoryWriting;

type WritingTaxonomy = {
  label: string;
  section: string;
};

const writingTaxonomyByGroup: Record<WritingGroup, WritingTaxonomy> = {
  denemeler: { label: 'Deneme', section: 'Denemeler' },
  hikayeler: { label: 'Hikâye', section: 'Hikâyeler' },
  konusmalar: { label: 'Konuşma', section: 'Konuşmalar' },
  siirler: { label: 'Şiir', section: 'Şiirler' },
};

export function getWritingTypeLabel(writing: Pick<WritingEntry, 'group'>): string {
  return writingTaxonomyByGroup[writing.group].label;
}

export function getWritingSection(writing: Pick<WritingEntry, 'group'>): string {
  return writingTaxonomyByGroup[writing.group].section;
}

export function getWritingKicker(writing: WritingEntry): string {
  if (writing.group === 'denemeler') {
    return `${getWritingTypeLabel(writing)} · ${writing.position}`;
  }

  return getWritingTypeLabel(writing);
}

const contentDirectory = path.join(process.cwd(), 'content/writing');
const markdownProcessor = remark().use(html);
const storyMarkdownProcessor = remark().use(remarkDialogue).use(html);
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

type MarkdownNode = {
  type: string;
  children?: MarkdownNode[];
};

function requiredString(value: unknown, field: string, filePath: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${filePath}: ${field} must be a non-empty string.`);
  }

  return value;
}

function optionalString(value: unknown, fallback: string, field: string, filePath: string): string {
  return value === undefined ? fallback : requiredString(value, field, filePath);
}

function optionalStringValue(value: unknown, field: string, filePath: string): string | undefined {
  return value === undefined ? undefined : requiredString(value, field, filePath);
}

function parseKeywords(value: unknown, filePath: string): string[] {
  if (value === undefined) {
    return [];
  }

  if (!Array.isArray(value) || value.some((keyword) => typeof keyword !== 'string' || keyword.trim().length === 0)) {
    throw new Error(`${filePath}: keywords must be a list of non-empty strings.`);
  }

  return value;
}

function requiredIsoDate(value: unknown, field: string, filePath: string): string {
  const date = requiredString(value, field, filePath);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00Z`))) {
    throw new Error(`${filePath}: ${field} must use the YYYY-MM-DD format.`);
  }

  return date;
}

function optionalIsoDate(value: unknown, field: string, filePath: string): string | undefined {
  return value === undefined ? undefined : requiredIsoDate(value, field, filePath);
}

function requiredPositiveInteger(value: unknown, field: string, filePath: string): number {
  if (!Number.isInteger(value) || (value as number) < 1) {
    throw new Error(`${filePath}: ${field} must be a positive integer.`);
  }

  return value as number;
}

function containsRawHtml(node: MarkdownNode): boolean {
  return node.type === 'html' || node.children?.some(containsRawHtml) === true;
}

function parseGroup(value: unknown, filePath: string): WritingGroup {
  if (value !== 'denemeler' && value !== 'siirler' && value !== 'konusmalar' && value !== 'hikayeler') {
    throw new Error(`${filePath}: group must be denemeler, siirler, konusmalar, or hikayeler.`);
  }

  return value;
}

function parseFormat(value: unknown, filePath: string): WritingFormat {
  if (value !== 'dialogue' && value !== 'poem' && value !== 'article' && value !== 'story') {
    throw new Error(`${filePath}: format must be dialogue, poem, article, or story.`);
  }

  return value;
}

function loadWriting(relativeFilePath: string): WritingEntry {
  const filePath = path.join(contentDirectory, relativeFilePath);
  const source = readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);
  const publicPath = relativeFilePath.replace(/\.md$/, '').split(path.sep);
  const group = parseGroup(data.group, relativeFilePath);
  const format = parseFormat(data.format, relativeFilePath);
  const processor = format === 'story' ? storyMarkdownProcessor : markdownProcessor;
  const markdownTree = processor.parse(content);

  if (publicPath.some((segment) => !slugPattern.test(segment))) {
    throw new Error(`${relativeFilePath}: path segments must use lowercase kebab-case.`);
  }

  if (containsRawHtml(markdownTree)) {
    throw new Error(`${relativeFilePath}: raw HTML is not allowed.`);
  }

  const description = requiredString(data.description, 'description', relativeFilePath);

  const common = {
    slug: publicPath.at(-1)!,
    path: publicPath,
    title: requiredString(data.title, 'title', relativeFilePath),
    date: requiredIsoDate(data.date, 'date', relativeFilePath),
    siteAddedAt: requiredIsoDate(data.siteAddedAt, 'siteAddedAt', relativeFilePath),
    updatedAt: optionalIsoDate(data.updatedAt, 'updatedAt', relativeFilePath),
    displayDate: requiredString(data.displayDate, 'displayDate', relativeFilePath),
    description,
    seoDescription: optionalString(data.seoDescription, description, 'seoDescription', relativeFilePath),
    keywords: parseKeywords(data.keywords, relativeFilePath),
    series: optionalStringValue(data.series, 'series', relativeFilePath),
    contentHtml: String(processor.processSync(content)),
  };

  if (group === 'denemeler') {
    if (format !== 'dialogue' || publicPath.length !== 2 || publicPath[0] !== 'denemeler') {
      throw new Error(`${relativeFilePath}: denemeler require a denemeler/slug path and dialogue format.`);
    }

    const position = requiredPositiveInteger(data.position, 'position', relativeFilePath);

    return {
      ...common,
      group,
      format,
      kind: `${position}. deneme`,
      position,
    };
  }

  if (group === 'hikayeler') {
    if (format !== 'story' || publicPath.length !== 2 || publicPath[0] !== 'hikayeler') {
      throw new Error(`${relativeFilePath}: hikayeler require a hikayeler/slug path and story format.`);
    }

    const position = requiredPositiveInteger(data.position, 'position', relativeFilePath);

    return {
      ...common,
      group,
      format,
      kind: `${position}. hikâye`,
      position,
    };
  }

  if (group === 'siirler') {
    if (format !== 'poem' || publicPath.length !== 2 || publicPath[0] !== 'siirler') {
      throw new Error(`${relativeFilePath}: siirler require a siirler/slug path and poem format.`);
    }

    return {
      ...common,
      group,
      format,
      kind: 'Şiir',
    };
  }

  if (format !== 'article' || publicPath.length !== 1) {
    throw new Error(`${relativeFilePath}: konusmalar require a flat path and article format.`);
  }

  return {
    ...common,
    group,
    format,
    kind: requiredString(data.kind, 'kind', relativeFilePath),
  };
}

type PositionedWriting = DialogueWriting | StoryWriting;

function getWritingPositionScope(writing: PositionedWriting): string {
  return writing.series ? `series:${writing.series}` : `group:${writing.group}`;
}

export function validateWritingPositionScopes(entries: WritingEntry[]): void {
  const positionsByScope = new Map<string, Map<number, string>>();

  for (const entry of entries) {
    if (!('position' in entry)) {
      continue;
    }

    const writing = entry as PositionedWriting;
    const scope = getWritingPositionScope(writing);
    const positions = positionsByScope.get(scope) ?? new Map<number, string>();
    const previousPath = positions.get(writing.position);

    if (previousPath) {
      throw new Error(
        `${writing.path.join('/')}: position ${writing.position} duplicates ${previousPath} in ${scope}.`
      );
    }

    positions.set(writing.position, writing.path.join('/'));
    positionsByScope.set(scope, positions);
  }
}

function loadWritings(): WritingEntry[] {
  const markdownFiles = readdirSync(contentDirectory, { recursive: true, encoding: 'utf8' })
    .filter((filePath) => filePath.endsWith('.md'))
    .sort((first, second) => first.localeCompare(second, 'tr'));
  const entries = markdownFiles.map(loadWriting);
  const publicPaths = new Set<string>();

  for (const entry of entries) {
    if (entry.series) {
      getWritingSeriesDefinition(entry.series);

      if (!('position' in entry)) {
        throw new Error(`${entry.path.join('/')}: series entries require a position.`);
      }
    }
  }

  for (const entry of entries) {
    const publicPath = entry.path.join('/');

    if (publicPaths.has(publicPath)) {
      throw new Error(`Duplicate writing path: ${publicPath}`);
    }

    publicPaths.add(publicPath);
  }

  validateWritingPositionScopes(entries);

  return entries;
}

export const writings = loadWritings();

export function getDialogueWritings(): DialogueWriting[] {
  return writings
    .filter((writing): writing is DialogueWriting => writing.group === 'denemeler')
    .sort((first, second) => first.position - second.position);
}

export function getArticleWritings(): ArticleWriting[] {
  return writings
    .filter((writing): writing is ArticleWriting => writing.group === 'konusmalar')
    .sort((first, second) => second.date.localeCompare(first.date));
}

export function getStoryWritings(): StoryWriting[] {
  return writings
    .filter((writing): writing is StoryWriting => writing.group === 'hikayeler')
    .sort((first, second) => first.position - second.position);
}

export function getPoemWritings(): PoemWriting[] {
  return writings
    .filter((writing): writing is PoemWriting => writing.group === 'siirler')
    .sort((first, second) => second.date.localeCompare(first.date));
}

export type WritingSeriesEntry = DialogueWriting | StoryWriting;

export type WritingSeries = Readonly<
  WritingSeriesDefinition & {
    entries: readonly WritingSeriesEntry[];
  }
>;

export function getWritingSeries(series: string): WritingSeries {
  const definition = getWritingSeriesDefinition(series);
  const entries = writings
    .filter((writing): writing is WritingSeriesEntry => 'position' in writing && writing.series === series)
    .sort((first, second) => first.position - second.position);

  return {
    ...definition,
    entries,
  };
}

export function getWritingSeriesCatalog(): WritingSeries[] {
  return Object.keys(writingSeriesDefinitions).map(getWritingSeries);
}

export function getSeriesNavigation(writing: WritingEntry): {
  previous?: WritingSeriesEntry;
  next?: WritingSeriesEntry;
  index?: number;
  total?: number;
} {
  if (!writing.series || !('position' in writing)) {
    return {};
  }

  const sequence = getWritingSeries(writing.series).entries;
  const index = sequence.findIndex((entry) => entry.path.join('/') === writing.path.join('/'));

  if (index === -1) {
    return {};
  }

  return {
    previous: sequence[index - 1],
    next: sequence[index + 1],
    index: index + 1,
    total: sequence.length,
  };
}

export function getWritingByPath(pathSegments: string[]): WritingEntry | undefined {
  return writings.find(
    (writing) =>
      writing.path.length === pathSegments.length &&
      writing.path.every((segment, index) => segment === pathSegments[index])
  );
}

export function getWritingLastModified(writing: WritingEntry): string {
  return writing.updatedAt ?? writing.siteAddedAt;
}

export function getWritingNavigation(writing: WritingEntry): {
  previous?: WritingEntry;
  next?: WritingEntry;
} {
  if (writing.group !== 'denemeler' && writing.group !== 'hikayeler') {
    return {};
  }

  const sequence = writing.group === 'denemeler' ? getDialogueWritings() : getStoryWritings();
  const index = sequence.findIndex((entry) => entry.path.join('/') === writing.path.join('/'));

  if (index === -1) {
    return {};
  }

  return {
    previous: sequence[index - 1],
    next: sequence[index + 1],
  };
}
