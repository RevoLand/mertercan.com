export type ProjectStatus = 'live' | 'in progress' | 'private build' | 'paused' | 'maintenance' | 'archived';
export type ProjectKind = 'product' | 'tool' | 'creative' | 'system';
export type ProjectSchemaType = 'SoftwareApplication' | 'WebApplication' | 'SoftwareSourceCode' | 'CreativeWork';

export type Project = {
  slug: string;
  title: string;
  context: string;
  metaDescription?: string;
  year: string;
  publishedAt?: string;
  updatedAt: string;
  type: string;
  status: ProjectStatus;
  schemaType: ProjectSchemaType;
  role?: string;
  group: 'larger' | 'small';
  kind: ProjectKind;
  story: string[];
  visual?: {
    src: string;
    alt: string;
    caption?: string;
  };
  reflections: string[];
  proofPoints?: string[];
  links?: {
    label: string;
    href: string;
  }[];
  tags?: string[];
};

export const projects = [
  {
    slug: 'bugjar',
    title: 'BugJar',
    context: 'A local-first browser session recorder that preserves what happened within a scope the user defines.',
    metaDescription:
      'BugJar is a browser extension by Mert Ercan for recording scoped browser sessions locally, without background telemetry or cloud uploads.',
    year: '2026',
    updatedAt: '2026-06-26',
    type: 'Browser extension',
    status: 'in progress',
    schemaType: 'SoftwareApplication',
    role: 'Product direction and development',
    group: 'larger',
    kind: 'product',
    story: [
      'BugJar began with the gap between a reported issue and the context needed to understand it. I wanted a browser session to carry its own evidence: console logs, network activity, DOM changes, and the sequence that connected them, instead of leaving the investigation to memory and guesswork.',
      'The recorder only runs where the user allows it to. Sessions stay on the local machine unless they are deliberately exported; there is no background telemetry or cloud upload built into the recording flow.',
      'The harder problem was not capture alone, but trust. Every boundary had to remain visible: where recording can happen, when it is active, and what is allowed to leave the device.',
    ],
    reflections: [
      'Trust grows when a tool behaves consistently and makes its limits visible.',
      'Data sovereignty means little unless the architecture enforces it.',
    ],
    proofPoints: [
      'A capture preserves console logs, network activity, DOM changes, and the sequence that led to an issue.',
      'Recordings stay on the device unless the user explicitly exports them.',
    ],
    links: [{ label: 'bugjar.dev', href: 'https://bugjar.dev' }],
    tags: ['extension', 'architecture', 'tooling'],
  },
  {
    slug: 'dizgi',
    title: 'Dizgi',
    context:
      'A writing tool that turns long-form text into carefully paginated images and PDFs without rewriting the words.',
    metaDescription:
      'Dizgi is a browser-based writing tool by Mert Ercan for turning long-form text into carefully paginated, shareable images and PDFs.',
    year: '2026',
    publishedAt: '2026-07-04',
    updatedAt: '2026-07-05',
    type: 'Writing and export tool',
    status: 'live',
    schemaType: 'WebApplication',
    role: 'Concept, product design, and development',
    group: 'larger',
    kind: 'tool',
    story: [
      'Dizgi began while I was reading a long piece of writing shared as a series of screenshots. It felt like a small window into another person’s inner world; the writing held my attention, while the format kept interrupting it. I had felt the same friction while preparing my own writing in Canva, where every page break and layout adjustment had to be handled manually.',
      'I built the first usable version in a day around a simple boundary: the tool should shape the text, not rewrite it. Dizgi measures the rendered layout, flows writing across pages, respects intentional page breaks, and updates the result as the format, typography, spacing, and background change.',
      'The finished pages can be previewed and exported as images or a PDF. The aim is not to turn writing into content strategy, but to make the original words easier to read, share, and keep.',
    ],
    reflections: [
      'Formatting can support a voice without becoming another voice.',
      'Automatic layout is most useful when the writer can still decide where a page should end.',
      'A small reading friction can become a useful tool once it is made visible.',
    ],
    proofPoints: [
      'Pagination responds to the rendered layout rather than relying on a fixed character count.',
      'Writers can combine automatic flow with intentional page breaks and adjust format, typography, spacing, and background before exporting.',
      'Pages can be previewed and exported individually or together as images and a PDF.',
      'Dizgi preserves the source text instead of rewriting it or adding hooks, summaries, and calls to action.',
    ],
    links: [{ label: 'dizgi.app', href: 'https://dizgi.app' }],
    tags: ['writing', 'pagination', 'typography'],
  },
  {
    slug: 'haklisin',
    title: 'Haklısın!',
    context:
      'A small ritual for turning everyday "haklısın" moments into symbolic coins kept in a personal digital jar.',
    metaDescription:
      'Haklısın! is a small web ritual by Mert Ercan for keeping everyday "haklısın" moments as symbolic coins in a personal digital jar.',
    year: '2026',
    updatedAt: '2026-06-26',
    type: 'Digital ritual',
    status: 'live',
    schemaType: 'WebApplication',
    role: 'Concept and development',
    group: 'larger',
    kind: 'product',
    story: [
      'Some ideas do not begin as problems. Haklısın! began as a small inside joke: the brief satisfaction of hearing "haklısın" after being right about something ordinary.',
      'Each moment becomes a symbolic coin in a personal digital jar. The count is part of the joke; the point is to give a passing "I told you so" somewhere to stay.',
      'Building it reminded me that software can be carefully made without becoming serious. Sometimes a tiny absurdity only needs enough structure to turn into a ritual.',
    ],
    reflections: [
      'Play needs structure too; the joke works because the product stays light.',
      'A ritual gives a passing moment somewhere to remain.',
      'Not every product has to solve a large problem. Some only need to preserve a small, shared feeling.',
    ],
    proofPoints: [
      'Each moment becomes a symbolic coin in the user’s own jar, with the unit and symbol left for them to choose.',
    ],
    links: [{ label: 'haklisin.app', href: 'https://haklisin.app' }],
    tags: ['digital ritual', 'fun', 'product'],
  },
  {
    slug: 'kombin',
    title: 'Kombin.dev',
    context:
      'A personal wardrobe system that builds and evaluates outfits from the clothes already there, without reducing the decision to a single score.',
    metaDescription:
      'Kombin.dev is a private wardrobe and outfit-planning system by Mert Ercan that evaluates real combinations across technical harmony, daily practicality, context, and perceived impact.',
    year: '2026',
    updatedAt: '2026-06-26',
    type: 'Wardrobe and outfit system',
    status: 'private build',
    schemaType: 'WebApplication',
    role: 'Concept, system design, and development',
    group: 'larger',
    kind: 'product',
    story: [
      'Choosing what to wear feels intuitive, but a wardrobe still contains structure: colors that interact, silhouettes that shift proportion, materials that behave differently through the day, and pieces that quietly fall into repetition.',
      'Kombin.dev works only with the clothes already in the wardrobe. It builds and compares possible outfits, then reads each one across four separate dimensions: technical harmony, real-life practicality, contextual fit, and the impression it creates from the outside.',
      'The central distinction is between what belongs to the outfit and what belongs to the day. Color, silhouette, and seasonal construction form the technical reading; weather, comfort, context, repeat history, and carrying needs refine the recommendation without rewriting that foundation.',
      'The system can suggest and explain, but it cannot invent a missing piece or collapse taste into one final verdict. The trade-offs become visible; the choice remains personal.',
    ],
    reflections: [
      'A useful recommendation is not a verdict. It is a clearer view of the trade-offs.',
      'The same outfit can remain technically strong while becoming impractical for a particular day.',
      'Taste stays personal even when the reasoning around it becomes structured.',
    ],
    proofPoints: [
      'Suggestions use only items already present in the wardrobe; missing pieces, colors, and accessories are never invented.',
      'Each outfit is evaluated separately for technical harmony, real-life practicality, contextual fit, and the impression it creates from the outside.',
      'Saved outfits keep their pieces, score breakdown, reasoning, color summary, and styling notes together in one readable record.',
    ],
    links: [{ label: 'kombin.dev', href: 'https://kombin.dev' }],
    tags: ['wardrobe', 'outfit planning', 'analysis'],
  },
  {
    slug: 'project-canon',
    title: 'Project Canon',
    context: 'A private system for keeping character work coherent from first idea through review and publishing.',
    metaDescription:
      'Project Canon is a private creative system by Mert Ercan for preserving continuity across character ideation, review, and publishing.',
    year: '2026',
    updatedAt: '2026-06-26',
    type: 'System',
    status: 'private build',
    schemaType: 'CreativeWork',
    role: 'System design and creative direction',
    group: 'larger',
    kind: 'system',
    story: [
      'Project Canon grew from a practical need: character work was spreading across ideas, references, prompts, revisions, and publishing steps, while continuity still depended on memory.',
      'The system brings those parts into one workflow. It keeps character history close, helps new directions remain consistent, and moves approved concepts into a clear review and publishing path.',
      'AI is present as a working layer, not the identity of the project. The system does not replace judgment; it keeps repetitive work from obscuring it.',
    ],
    reflections: [
      'Creative work becomes lighter when memory is reliable.',
      'A good system removes friction without quietly taking over the decisions.',
      'AI is most useful here when it supports the work without becoming the point.',
    ],
    proofPoints: [
      'Character history, prompts, review, and publishing sit in one workflow, making continuity easier to preserve.',
    ],
    links: [],
    tags: ['memory', 'workflow', 'publishing'],
  },
  {
    slug: 'steam-library-manager',
    title: 'Steam Library Manager',
    context:
      'A Windows utility for moving and maintaining game libraries, built around one friend’s repeated trips between home and university.',
    metaDescription:
      'Steam Library Manager is an open-source Windows utility by Mert Ercan for moving, restoring, and maintaining game libraries.',
    year: '2015–2025',
    updatedAt: '2026-06-26',
    type: 'Open source desktop utility',
    status: 'maintenance',
    schemaType: 'SoftwareApplication',
    role: 'Creator and maintainer',
    group: 'larger',
    kind: 'tool',
    story: [
      'Steam Library Manager did not begin with a market or a feature list. A close friend spent much of university away from home, carrying games from his desktop to his laptop before leaving and moving them back when he returned.',
      'Steam’s backup flow made that routine slower and more repetitive than it needed to be. I built SLM around that specific friction: installed games and backups became libraries that could be moved, updated, restored, and managed without rebuilding everything from scratch.',
      'The project grew far beyond that first use case. It added drag-and-drop transfers, open backups, Workshop and mod preservation, compression, cleanup tools, task management, localization, and support for Origin and Uplay.',
      'What began as a tool for one friend became a public open-source project shaped by years of issues, requests, and real use. It grew through more than fifty releases, hundreds of stars, and a decade of maintenance.',
      'SLM is no longer under active feature development. The repository and releases remain available, and I still return when an important compatibility or safety fix needs attention.',
    ],
    reflections: [
      'I did not begin with a user segment. I began with one friend and a workaround that kept repeating.',
      'A small personal friction can travel much further once the structure around it becomes useful.',
      'Once people rely on a tool, maintenance becomes part of the product.',
    ],
    proofPoints: [
      'SLM grew from game transfers into open backups, mod preservation, compression, cleanup, localization, and support for multiple stores.',
      'The public project has remained available through more than fifty releases and over a decade of fixes.',
    ],
    links: [
      {
        label: 'github',
        href: 'https://github.com/mertcreates/Steam-Library-Manager',
      },
      {
        label: 'latest release',
        href: 'https://github.com/mertcreates/Steam-Library-Manager/releases/latest',
      },
    ],
    tags: ['windows', 'open source', 'game libraries'],
  },
  {
    slug: 'eslint-next-pages-router',
    title: 'eslint-plugin-next-pages-router',
    context: 'An ESLint plugin that catches invalid Pages Router routes before they reach the browser.',
    metaDescription:
      'eslint-plugin-next-pages-router is an ESLint plugin by Mert Ercan for validating Next.js Pages Router routes against the project’s actual pages tree.',
    year: '2026',
    updatedAt: '2026-06-26',
    type: 'Open source tool',
    status: 'live',
    schemaType: 'SoftwareSourceCode',
    role: 'Creator and maintainer',
    group: 'small',
    kind: 'tool',
    story: [
      'The plugin began with a routing mistake in a real Next.js project.',
      'The bug came from comparing the wrong Pages Router value. The difference between `route`, `pathname`, and `asPath` had stayed invisible until QA surfaced a mismatch in one of the navigation flows.',
      'Instead of adding another convention for the team to remember, I turned the distinction into an ESLint rule.',
      'The first version checked route comparisons and navigation calls against the actual `pages/` tree. Version 1.1 extended the same model to `next/link`, static `next.config.mjs` files, faster dynamic-route lookup, and more reliable cache invalidation.',
      'In a real-project benchmark, the mixed rules averaged 2.26 ms of overhead across 80 files and a 48-route Pages Router tree.',
    ],
    reflections: [
      'Good tooling shortens the distance between a mistake and its correction.',
      'Static checks are most helpful when they understand the shape of the project.',
    ],
    proofPoints: [
      'The rules validate route comparisons and navigation calls against the project’s actual `pages/` tree.',
      'A real-project benchmark averaged 2.26 ms across 80 files and 48 routes.',
    ],
    links: [
      {
        label: 'npm',
        href: 'https://npmjs.com/package/@mertcreates/eslint-plugin-next-pages-router',
      },
      {
        label: 'github',
        href: 'https://github.com/mertcreates/eslint-plugin-next-pages-router',
      },
    ],
    tags: ['eslint', 'next.js', 'routing'],
  },
  {
    slug: 'eslint-mv3',
    title: 'eslint-plugin-mv3',
    context:
      'An ESLint plugin that catches outer-scope references inside Manifest V3 `executeScript` functions before runtime.',
    metaDescription:
      'eslint-plugin-mv3 is an ESLint plugin by Mert Ercan for catching Manifest V3 `executeScript` closure traps before runtime.',
    year: '2026',
    updatedAt: '2026-06-26',
    type: 'Open source tool',
    status: 'live',
    schemaType: 'SoftwareSourceCode',
    role: 'Creator and maintainer',
    group: 'small',
    kind: 'tool',
    story: [
      'Manifest V3 has a small trap that is easy to miss: a function passed to `scripting.executeScript` is serialized before it runs. Values from the outer scope do not come with it.',
      'I wrote the plugin to make that boundary visible before runtime. It rejects injected functions that depend on outer-scope values, requires parameters to travel through `args`, and keeps the call shape statically analyzable.',
      'It is a small tool for one sharp edge: not to make extension development feel clever, but to make a fragile runtime boundary easier to trust.',
    ],
    reflections: [
      'A linter can protect architecture, not just style.',
      'The best checks are often the ones that make hidden boundaries visible.',
    ],
    proofPoints: [
      'The rule catches injected functions that depend on values unavailable after serialization.',
      'Parameters remain explicit through `args`, and call shapes the linter cannot verify are rejected.',
    ],
    links: [
      {
        label: 'npm',
        href: 'https://npmjs.com/package/@mertcreates/eslint-plugin-mv3',
      },
      {
        label: 'github',
        href: 'https://github.com/mertcreates/eslint-plugin-mv3',
      },
    ],
    tags: ['eslint', 'mv3', 'extension'],
  },
] satisfies Project[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
