import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: {
        mdxAsPlaceholder: ['AutoTypeTable'],
      },
    },
  },
});

export default defineConfig();
