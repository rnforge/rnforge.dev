import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      id: 'index',
      label: 'Docs Home',
    },
    {
      type: 'category',
      label: 'Packages',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: '@rnforge/react-native-in-app-updates',
          link: {
            type: 'doc',
            id: 'packages/react-native-in-app-updates/index',
          },
          items: [
            'packages/react-native-in-app-updates/install',
            'packages/react-native-in-app-updates/quickstart',
            'packages/react-native-in-app-updates/api',
            'packages/react-native-in-app-updates/api-generated',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
