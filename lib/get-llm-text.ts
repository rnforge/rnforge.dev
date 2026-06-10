import { source } from '@/lib/source';
import { renderPlaceholder } from 'fumadocs-core/mdx-plugins/remark-llms.runtime';
import { readFileSync } from 'fs';

export async function getLLMText(page: (typeof source)['$inferPage']) {
  const processed = await page.data.getText('processed');

  const rendered = await renderPlaceholder(processed, {
    async AutoTypeTable({ attributes }) {
      const path = attributes.path as string;
      const name = attributes.name as string;

      if (!path || !name) {
        return `[Type table: ${name || 'unknown'}]`;
      }

      try {
        const typeInfo = extractTypeInfo(path, name);
        return typeInfo;
      } catch (error) {
        return `[Type table: ${name} - could not extract]`;
      }
    },
  });

  return `# ${page.data.title} (${page.url})\n\n${rendered}`;
}

function extractTypeInfo(filePath: string, typeName: string): string {
  const content = readFileSync(filePath, 'utf-8');

  const typeStartRegex = new RegExp(
    `export\\s+type\\s+${typeName}\\s*=\\s*`,
  );
  const startMatch = content.match(typeStartRegex);

  if (!startMatch) {
    return `**${typeName}** (type definition not found)`;
  }

  const startIndex = startMatch.index! + startMatch[0].length;

  let braceCount = 0;
  let endIndex = startIndex;
  let inType = false;

  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];
    if (char === '{') {
      braceCount++;
      inType = true;
    } else if (char === '}') {
      braceCount--;
      if (inType && braceCount === 0) {
        endIndex = i + 1;
        break;
      }
    } else if (!inType && char === '\n') {
      const lineContent = content.substring(startIndex, i).trim();
      if (lineContent.length > 0 && !lineContent.endsWith('|')) {
        endIndex = i;
        break;
      }
    }
  }

  const typeBody = content.substring(startIndex, endIndex).trim();

  return `**${typeName}**\n\n\`\`\`typescript\ntype ${typeName} = ${typeBody}\n\`\`\``;
}
