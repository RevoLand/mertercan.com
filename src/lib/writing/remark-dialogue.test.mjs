import assert from 'node:assert/strict';
import test from 'node:test';
import { remark } from 'remark';
import html from 'remark-html';
import remarkDialogue from './remark-dialogue.ts';

function renderStory(source) {
  const processor = remark().use(remarkDialogue).use(html);

  return String(processor.processSync(source));
}

test('renders consecutive story dialogue lines as separate paragraphs', () => {
  const source = `\\- "Birinci replik."
\\- "İkinci replik."`;

  assert.equal(renderStory(source), '<p>- "Birinci replik."</p>\n<p>- "İkinci replik."</p>\n');
});

test('renders dialogue lines with speaker attribution as separate paragraphs', () => {
  const source = `\\- "Birinci replik," diye sordu kadın.
\\- "İkinci replik," dedi adam.`;

  assert.equal(
    renderStory(source),
    '<p>- "Birinci replik," diye sordu kadın.</p>\n<p>- "İkinci replik," dedi adam.</p>\n'
  );
});

test('keeps narrative and dialogue as separate blocks when they share a markdown paragraph', () => {
  const source = `Karşısındakine döndü:
\\- "Burada ne işin var?"
\\- "Hükmünüz için geldim."`;

  assert.equal(
    renderStory(source),
    '<p>Karşısındakine döndü:</p>\n<p>- "Burada ne işin var?"</p>\n<p>- "Hükmünüz için geldim."</p>\n'
  );
});

test('preserves inline markdown inside a dialogue line', () => {
  const source = '\\- "Bu *önemli*."\n\\- "İkinci."';

  assert.equal(renderStory(source), '<p>- "Bu <em>önemli</em>."</p>\n<p>- "İkinci."</p>\n');
});

test('leaves ordinary prose and unquoted dash lines in their original paragraph', () => {
  const source = `Birinci anlatı satırı.
İkinci anlatı satırı.
\\- sıradan bir satır`;

  assert.equal(renderStory(source), '<p>Birinci anlatı satırı.\nİkinci anlatı satırı.\n- sıradan bir satır</p>\n');
});
