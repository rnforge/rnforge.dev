import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'RNForge',
  tagline: 'Forging the native layer for React Native.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://rnforge.dev',
  baseUrl: '/',
  organizationName: 'rnforge',
  projectName: 'rnforge.dev',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: undefined,
          showLastUpdateTime: true,
        },
        blog: {
          routeBasePath: 'updates',
          path: 'updates',
          showReadingTime: false,
          blogTitle: 'Updates',
          blogDescription: 'RNForge release notes and updates.',
          blogSidebarCount: 0,
          feedOptions: {
            type: [],
          },
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        language: 'en',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'RNForge',
      logo: {
        alt: 'RNForge Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs', label: 'Docs', position: 'left'},
        {to: '/updates', label: 'Updates', position: 'left'},
        {
          href: 'https://github.com/rnforge',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'In-App Updates',
              to: '/docs/packages/react-native-in-app-updates',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Updates',
              to: '/updates',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rnforge',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RNForge.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
