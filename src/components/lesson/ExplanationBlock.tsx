'use client';
// src/components/lesson/ExplanationBlock.tsx
// ─────────────────────────────────────────────────────────────
// EXPLANATION BLOCK
//
// Renders the Explain tab content for a lesson.
// Handles the markdown-like format from course data:
//   # h1, ## h2, ### h3
//   **bold**, `code`, *italic*
//   - bullet lists
//   | table | cells |
//   ```code blocks```
//
// Kept as a pure presentational component —
// all formatting logic lives here, not in pages.
// ─────────────────────────────────────────────────────────────

import { ReactNode, memo } from 'react';

// ── Inline formatter ──────────────────────────────────────────
// Applies bold, inline-code, and italic formatting to a text string.
// Returns HTML string (used with dangerouslySetInnerHTML).
function formatInline(text: string): string {
  return text
    // Bold: **text**
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#E2E8F0] font-semibold">$1</strong>')
    // Inline code: `code`
    .replace(/`(.+?)`/g, '<code class="bg-[#1E1E2E] text-yellow-400 px-1.5 py-0.5 rounded text-[13px] font-mono leading-none">$1</code>')
    // Italic: *text*
    .replace(/\*(.+?)\*/g, '<em class="text-[#94A3B8]">$1</em>');
}

// ── Block parsers ─────────────────────────────────────────────
type ParsedBlock =
  | { type: 'h1';         text: string }
  | { type: 'h2';         text: string }
  | { type: 'h3';         text: string }
  | { type: 'p';          text: string }
  | { type: 'bullet';     text: string }
  | { type: 'code';       lang: string; lines: string[] }
  | { type: 'table_row';  cells: string[]; isHeader: boolean }
  | { type: 'blank' }

function parseContent(content: string): ParsedBlock[] {
  const lines   = content.split('\n');
  const blocks: ParsedBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith('```')) {
      const lang       = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      blocks.push({ type: 'code', lang, lines: codeLines });
      i++;
      continue;
    }

    // Headings
    if (line.startsWith('# '))   { blocks.push({ type: 'h1', text: line.slice(2) }); i++; continue; }
    if (line.startsWith('## '))  { blocks.push({ type: 'h2', text: line.slice(3) }); i++; continue; }
    if (line.startsWith('### ')) { blocks.push({ type: 'h3', text: line.slice(4) }); i++; continue; }

    // Bullets
    if (line.startsWith('- ') || line.startsWith('* ')) {
      blocks.push({ type: 'bullet', text: line.slice(2) });
      i++;
      continue;
    }

    // Table rows
    if (line.startsWith('|')) {
      const cells     = line.split('|').filter(c => c.trim());
      const isSep     = cells.every(c => /^[-:\s]+$/.test(c));
      if (!isSep) {
        const isHeader  = blocks.length === 0 || blocks[blocks.length - 1].type !== 'table_row';
        blocks.push({ type: 'table_row', cells: cells.map(c => c.trim()), isHeader });
      }
      i++;
      continue;
    }

    // Blank line
    if (!line.trim()) { blocks.push({ type: 'blank' }); i++; continue; }

    // Paragraph
    blocks.push({ type: 'p', text: line });
    i++;
  }

  return blocks;
}

// ── Renderer ──────────────────────────────────────────────────
function renderBlock(block: ParsedBlock, idx: number): ReactNode {
  switch (block.type) {
    case 'h1':
      return (
        <h1 key={idx} className="font-display font-bold text-xl text-[#E2E8F0] mb-3 mt-6 first:mt-0">
          {block.text}
        </h1>
      );

    case 'h2':
      return (
        <h2 key={idx} className="font-display font-bold text-base text-blue-400 mb-2 mt-5">
          {block.text}
        </h2>
      );

    case 'h3':
      return (
        <h3 key={idx} className="font-display font-bold text-sm text-green-400 mb-2 mt-4">
          {block.text}
        </h3>
      );

    case 'p':
      return (
        <p
          key={idx}
          className="text-sm text-[#94A3B8] leading-relaxed mb-2"
          dangerouslySetInnerHTML={{ __html: formatInline(block.text) }}
        />
      );

    case 'bullet':
      return (
        <div key={idx} className="flex gap-2 mb-1.5">
          <span className="text-green-500 flex-shrink-0 mt-[3px] text-xs">●</span>
          <span
            className="text-sm text-[#94A3B8] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatInline(block.text) }}
          />
        </div>
      );

    case 'code':
      return (
        <div key={idx} className="my-3 bg-[#0D1117] border border-[#1E1E2E] rounded-xl overflow-hidden">
          {block.lang && (
            <div className="px-4 py-1.5 bg-[#161B22] border-b border-[#1E1E2E]">
              <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">
                {block.lang}
              </span>
            </div>
          )}
          <pre className="p-4 overflow-x-auto text-xs leading-relaxed font-mono text-[#E2E8F0] whitespace-pre">
            <code>{block.lines.join('\n')}</code>
          </pre>
        </div>
      );

    case 'table_row':
      return (
        <div key={idx} className="flex border-b border-[#1E1E2E] last:border-0">
          {block.cells.map((cell, ci) => (
            <div
              key={ci}
              className={`
                flex-1 px-3 py-2 text-xs
                ${block.isHeader
                  ? 'font-bold text-[#E2E8F0] bg-[#1E1E2E]'
                  : 'text-[#94A3B8]'
                }
              `}
              dangerouslySetInnerHTML={{ __html: formatInline(cell) }}
            />
          ))}
        </div>
      );

    case 'blank':
      return <div key={idx} className="h-2" />;

    default:
      return null;
  }
}

// ── Main Component ────────────────────────────────────────────
interface ExplanationBlockProps {
  title:   string;
  content: string;   // markdown-like string from course data
}

export const ExplanationBlock = memo(function ExplanationBlock({
  title,
  content,
}: ExplanationBlockProps) {
  const blocks = parseContent(content);

  // Wrap consecutive table_rows in a bordered container
  const grouped: ReactNode[] = [];
  let tableRows: ParsedBlock[] = [];
  let tableStart = -1;

  blocks.forEach((block, idx) => {
    if (block.type === 'table_row') {
      if (tableRows.length === 0) tableStart = idx;
      tableRows.push(block);
    } else {
      if (tableRows.length > 0) {
        grouped.push(
          <div key={`table-${tableStart}`} className="my-3 border border-[#1E1E2E] rounded-xl overflow-hidden">
            {tableRows.map((r, ri) => renderBlock(r, ri))}
          </div>
        );
        tableRows = [];
      }
      grouped.push(renderBlock(block, idx));
    }
  });

  // Flush any remaining table rows
  if (tableRows.length > 0) {
    grouped.push(
      <div key="table-end" className="my-3 border border-[#1E1E2E] rounded-xl overflow-hidden">
        {tableRows.map((r, ri) => renderBlock(r, ri))}
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      {grouped}
    </div>
  );
});
