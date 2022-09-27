require('dotenv').config()

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Kalychain',
    url: 'https://docs.kalychain.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'kalycoinproject',
    projectName: 'documents',
    themes: [
        [
          require.resolve("@easyops-cn/docusaurus-search-local"),
          {
            hashed: true,
            language: ["en"],
          },
        ],
    ],
    themeConfig: {
        colorMode: {
            defaultMode: 'dark'
        },
        prism: {
            defaultLanguage: 'go'
        },
        navbar: {
            hideOnScroll: true,
            title: 'Kalychain',
            logo: {
                alt: 'Kalychain Logo',
                src: 'img/logo.png',
                href: 'docs/overview'
            },
            items: [
                {
                    to: 'docs/overview',
                    activeBasePath: 'docs/',
                    label: 'Developers',
                    position: 'left'
                },
                {
                    to: 'docs/tokenomics/overview',
                    activeBasePath: 'docs/',
                    label: 'Tokenomics',
                    position: 'left'
                },
                {
                    href: 'https://github.com/kalycoinproject/kalychain',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ]
        },
        footer: {
            style: 'dark',
            copyright: `Made with ❤ by the humans at <a href='https://trapesys.io'>Trapesys</a>`
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: false
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
};
