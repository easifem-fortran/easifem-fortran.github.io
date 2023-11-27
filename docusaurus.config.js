// require('dotenv').config();
// const math = require('remark-math');
// const katex = require('rehype-katex');
import math from 'remark-math';
import katex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'EASIFEM',
  tagline:
    'Expandable And Scalable Infrastructure for Finite Element Methods 🚀',
  url: 'https://www.easifem.com',
  baseUrl: '/',
  favicon: '/favicon.ico',
  organizationName: 'vickysharma0812',
  // The GitHub user or organization that owns the deployment repository.
  projectName: 'vickysharma0812.github.io',
  // The name of the deployment repository.
  deploymentBranch: 'gh-pages',
  // The name of the deployment branch. 
  // It defaults to 'gh-pages' for non-organization GitHub Pages repos 
  // (projectName not ending in .github.io). 
  // Otherwise, it needs to be explicit as a 
  // config field or environment variable.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: 'cli',
    path: 'docs/cli',
    routeBasePath: '/cli',
  },
  {
    id: 'about',
    path: 'docs/about',
    routeBasePath: '/about',
    versions: {
      current: {
        label: '23.10.0',
      },
    },
  },
  {
    id: 'docs-api',
    path: 'docs/docs-api',
    routeBasePath: '/docs-api',
    versions: {
      current: {
        label: '23.10.0',
      },
    },
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  editUrl:
    'https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/',
  showLastUpdateTime: true,
  sidebarPath: require.resolve('./sidebars-default.js'),
  remarkPlugins: [math],
  rehypePlugins: [katex],
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
  ['drawio', {}],
  // [
  //   'docusaurus-plugin-content-gists',
  //   {
  //     enabled: true,
  //     verbose: true,
  //     personalAccessToken: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  //   },
  // ],
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,
  trailingSlash: false,

  presets: [
    [
      // 'classic',
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
        // googleTagManager: {
        //   containerId: 'GTM-5FDFFSS',
        // },
      }),
    ],
  ],

  // math-support
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/dyte-docs-card.png',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'EASIFEM docs',
          height: '40px',
          width: '101px',
        },
        items: [
          {
            label: 'About',
            to: 'about',
          },
          {
            label: 'Guides',
            to: 'guides',
          },
          {
            label: 'Docs',
            to: 'docs-api',
          },
          // {
          //   to: '/gists',
          //   label: 'Gists',
          //   position: 'left',
          // },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'EASIFEM Docs',
          height: '36px',
        },
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'easifemBase',
                href: 'https://www.easifem.com/guides/getting-started/easifemBase',
              },
              {
                label: 'easifemClasses',
                href: 'https://www.easifem.com/guides/getting-started/easifemClasses',
              },
              {
                label: 'easifemMaterials',
                href: 'https://www.easifem.com/guides/getting-started/easifemMaterials',
              },
              {
                label: 'easifemKernels',
                href: 'https://www.easifem.com/guides/getting-started/easifemKernels',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Installation',
                href: 'https://www.easifem.com/guides/install',
              },
              {
                label: 'Docs for dev',
                href: 'https://www.easifem.com/docs-api',
              },
              {
                label: 'Docs for users',
                href: 'https://www.easifem.com/guides/programming-fem',
              },
              {
                label: 'Examples',
                href: 'https://www.easifem.com/guides/learn-by-examples',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: 'https://www.easifem.com/about',
              },
              {
                label: 'Contact Us',
                href: 'https://www.easifem.com/contact',
              },
            ],
          },
          {
            title: 'EASIFEM Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/vickysharma0812/easifem',
              },
              {
                label: 'Join Slack Community',
                href: 'https://join.slack.com/t/easifem/shared_invite/zt-27juumyaa-Cg0uty_UJDNp81Gq5HdFRA',
              },
            ],
          },
        ],
        copyright: 'Copyright © Vikas Sharma since 2023. All rights reserved.',
      },
      prism: {
        additionalLanguages: ['fortran', 'bash', 'python'],
        theme: require('./src/plugins/prism_themes/github'),
        darkTheme: require('./src/plugins/prism_themes/tokyonight_night'),
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      // algolia: {
      //   appId: 'HL0HSV62RK',
      //   apiKey: '72ebf02146698733b7114c7b36da0945',
      //   indexName: 'docs',
      //   contextualSearch: true,
      //   searchParameters: {},
      // },
    }),

  // webpack: {
  //   jsLoader: (isServer) => ({
  //     loader: require.resolve('swc-loader'),
  //     options: {
  //       jsc: {
  //         parser: {
  //           syntax: 'typescript',
  //           tsx: true,
  //         },
  //         target: 'es2017',
  //       },
  //       module: {
  //         type: isServer ? 'commonjs' : 'es6',
  //       },
  //     },
  //   }),
  // },
};

module.exports = config;
