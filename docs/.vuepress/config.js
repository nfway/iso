module.exports = {
    lang: 'zh-CN',
    title: 'Journey',
    description: 'vuepress 2.0',

    themeConfig: {

        repo: 'https://github.com/18437951091/vuepress-starter',
        logo: '/images/logo.png',
        editLink: true,
        navbar: [
            // NavbarItem
            {
                text: 'Foo',
                link: '/foo/',
            },
            // NavbarGroup
            {
                text: 'Group',
                children: [{
                        text: 'foo',
                        link: '/group/foo.md'
                    },
                    '/group/bar.md'
                ],
            },
            // 字符串 - 页面文件路径
            // '/bar/README.md',
        ],
    },
}