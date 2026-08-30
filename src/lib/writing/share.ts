export type WritingShareChannel = 'threads' | 'linkedin' | 'x' | 'whatsapp' | 'telegram';

export type WritingShareLinks = Readonly<{
  nativeUrl: string;
  threads: string;
  linkedin: string;
  x: string;
  whatsapp: string;
  telegram: string;
}>;

const romanNumerals: readonly [number, string][] = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

type WritingShareInput = Readonly<{
  canonicalUrl: string;
  title: string;
  slug: string;
  series?: Readonly<{
    slug: string;
    position: number;
  }>;
}>;

function toRomanNumeral(value: number): string {
  if (!Number.isInteger(value) || value < 1) {
    throw new RangeError('Series position must be a positive integer.');
  }

  let remaining = value;
  let numeral = '';

  for (const [unit, symbol] of romanNumerals) {
    while (remaining >= unit) {
      numeral += symbol;
      remaining -= unit;
    }
  }

  return numeral;
}

function addQueryParameters(urlValue: string, parameters: readonly (readonly [string, string])[]): string {
  const url = new URL(urlValue);

  for (const [key, value] of parameters) {
    url.searchParams.set(key, value);
  }

  return url.toString();
}

function getWritingShareIdentifier({ slug, series }: WritingShareInput): string {
  if (!series) {
    return slug;
  }

  return `${series.slug.toLowerCase()}-${toRomanNumeral(series.position).toLowerCase()}`;
}

function getTrackedWritingUrl(
  canonicalUrl: string,
  source: WritingShareChannel,
  campaign: string,
  content: string
): string {
  return addQueryParameters(canonicalUrl, [
    ['utm_source', source],
    ['utm_medium', 'social'],
    ['utm_campaign', campaign],
    ['utm_content', content],
  ]);
}

export function buildWritingShareLinks(input: WritingShareInput): WritingShareLinks {
  const { canonicalUrl, title, series } = input;
  const writingShareIdentifier = getWritingShareIdentifier(input);
  const campaign = series?.slug ?? 'writing';
  const readerShareUrl = addQueryParameters(canonicalUrl, [
    ['utm_source', 'reader_share'],
    ['utm_medium', 'referral'],
    ['utm_campaign', campaign],
    ['utm_content', writingShareIdentifier],
  ]);
  const readerShareChannelContent = `${writingShareIdentifier}-reader-share`;
  const threadsUrl = getTrackedWritingUrl(canonicalUrl, 'threads', campaign, readerShareChannelContent);
  const linkedinUrl = getTrackedWritingUrl(canonicalUrl, 'linkedin', campaign, readerShareChannelContent);
  const xUrl = getTrackedWritingUrl(canonicalUrl, 'x', campaign, readerShareChannelContent);
  const whatsappUrl = getTrackedWritingUrl(canonicalUrl, 'whatsapp', campaign, readerShareChannelContent);
  const telegramUrl = getTrackedWritingUrl(canonicalUrl, 'telegram', campaign, readerShareChannelContent);

  return {
    nativeUrl: readerShareUrl,
    threads: addQueryParameters('https://www.threads.com/intent/post', [
      ['url', threadsUrl],
      ['text', title],
    ]),
    linkedin: addQueryParameters('https://www.linkedin.com/sharing/share-offsite/', [['url', linkedinUrl]]),
    x: addQueryParameters('https://x.com/intent/post', [
      ['url', xUrl],
      ['text', title],
    ]),
    whatsapp: addQueryParameters('https://wa.me/', [['text', `${title}\n${whatsappUrl}`]]),
    telegram: addQueryParameters('https://t.me/share/url', [
      ['url', telegramUrl],
      ['text', title],
    ]),
  };
}
