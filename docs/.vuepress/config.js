module.exports = {
    lang: 'zh-CN',
    title: 'Journey',
    description: 'vuepress 2.0',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    dest: '${sourceDir}/dist',
    // plugins: ['@vuepress/blog'],
    themeConfig: {

        repo: 'https://github.com/18437951091/vuepress-starter',
        docsRepo: 'https://github.com/18437951091/vuepress-starter',
        docsBranch: 'main',
        docsDir: 'docs',
        // https://github.com/18437951091/vuepress-starter/edit/main/docs/guide/README.md
        editLinkPattern: ':repo/edit/:branch/:path',
        // type: 'blog',
        logo: '/images/logo.png',
        editLink: true,
        sidebar: [
            // SidebarItem
            {
                text: 'Foo',
                link: '/foo/',
                children: [],
            },
            {
                text: 'Guide',
                link: '/guide/',
                children: [
                    // SidebarItem
                    {
                        text: 'foo',
                        link: '/guide/',
                    },
                    {
                        text: 'bar',
                        link: '/guide/bar.md',
                    },
                    {
                        text: 'alpha',
                        link: '/guide/alpha.md',
                    },
                    // 字符串 - 页面文件路径
                ],
            }
        ],
        navbar: [
            // NavbarItem
            {
                text: 'Foo',
                link: '/foo/',
            },
            // NavbarGroup
            {
                text: 'Guide',
                children: [{
                        text: 'foo',
                        link: '/guide/foo.md'
                    },
                    {
                        text: 'bar',
                        link: '/guide/bar.md'
                    },
                ],
            },
            // 字符串 - 页面文件路径
            // '/bar/README.md',
        ],
    },
}