import type { Paragraph, PhrasingContent, Root } from 'mdast';

const dialogueLinePattern = /^-\s+".*"\s*$/u;

type PhrasingLine = PhrasingContent[];

type TreeNode = {
  type: string;
  children?: TreeNode[];
  position?: unknown;
  [key: string]: unknown;
};

function cloneWithoutPosition<T extends { position?: unknown }>(node: T): T {
  const clone = { ...node };

  delete clone.position;

  return clone;
}

function getInlineText(node: PhrasingContent): string {
  if ('value' in node && typeof node.value === 'string') {
    return node.value;
  }

  if ('children' in node) {
    return node.children.map(getInlineText).join('');
  }

  return '';
}

function splitInlineChildren(children: PhrasingContent[]): PhrasingLine[] {
  function splitInlineNode(node: PhrasingContent): PhrasingLine[] {
    if (node.type === 'text') {
      return node.value.split(/\r?\n/u).map((value) => {
        if (value.length === 0) {
          return [];
        }

        return [cloneWithoutPosition({ ...node, value })];
      });
    }

    if ('children' in node) {
      const nestedLines = splitInlineChildren(node.children);

      return nestedLines.map((nestedChildren) => {
        const clone = cloneWithoutPosition(node);

        return [{ ...clone, children: nestedChildren } as PhrasingContent];
      });
    }

    return [[cloneWithoutPosition(node)]];
  }

  const lines: PhrasingLine[] = [[]];

  for (const child of children) {
    const childLines = splitInlineNode(child);
    const currentLine = lines.at(-1)!;

    currentLine.push(...childLines[0]);
    lines.push(...childLines.slice(1));
  }

  return lines;
}

function isDialogueLine(line: PhrasingLine): boolean {
  return dialogueLinePattern.test(line.map(getInlineText).join('').trim());
}

function joinNarrativeLines(lines: PhrasingLine[]): PhrasingContent[] {
  return lines.flatMap((line, index) => {
    if (index === 0) {
      return line;
    }

    return [{ type: 'text', value: '\n' } as PhrasingContent, ...line];
  });
}

function createParagraph(children: PhrasingContent[]): Paragraph {
  return { type: 'paragraph', children };
}

function splitParagraph(paragraph: Paragraph): Paragraph[] | undefined {
  const lines = splitInlineChildren(paragraph.children);

  if (lines.length < 2 || !lines.some(isDialogueLine)) {
    return undefined;
  }

  const blocks: Paragraph[] = [];
  let narrativeLines: PhrasingLine[] = [];

  const flushNarrative = () => {
    if (narrativeLines.length === 0) {
      return;
    }

    blocks.push(createParagraph(joinNarrativeLines(narrativeLines)));
    narrativeLines = [];
  };

  for (const line of lines) {
    if (isDialogueLine(line)) {
      flushNarrative();
      blocks.push(createParagraph(line));
    } else {
      narrativeLines.push(line);
    }
  }

  flushNarrative();

  return blocks;
}

function transformTree(node: TreeNode): void {
  if (!node.children) {
    return;
  }

  const transformedChildren: TreeNode[] = [];

  for (const child of node.children) {
    if (child.type === 'paragraph') {
      const paragraphs = splitParagraph(child as unknown as Paragraph);

      transformedChildren.push(...(paragraphs ?? [child]).map((paragraph) => paragraph as unknown as TreeNode));
    } else {
      transformTree(child);
      transformedChildren.push(child);
    }
  }

  node.children = transformedChildren;
}

export default function remarkDialogue() {
  return function transformDialogue(tree: Root): void {
    transformTree(tree as unknown as TreeNode);
  };
}
