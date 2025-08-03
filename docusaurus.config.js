// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Better CX is powered by Augmented AI',
  tagline: 'Crescendo provides the world\'s first all-included service of AI technology and CX experts that increases customer engagement while reducing costs.\n',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.enegel.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'enegelai', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/crescendo-hero3.png',
      navbar: {
        title: '',
        logo: {
          alt: 'crescendo.ai',
          src: 'img/crescendo_logo_purple.svg',
        },
        items: [
          /*{
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Get Started',
          },*/
          // {to: '/docs/category/tutorials', label: 'Tutorials', position: 'left'},
          {to: '/docs/category/documentation', label: 'Documentation', position: 'left'},
          // {to: '/blog', label: 'Changelog', position: 'left'},
          /* {
            href: 'https://github.com/enegelai/documentation',
            label: 'GitHub',
            position: 'right',
          }, */
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
