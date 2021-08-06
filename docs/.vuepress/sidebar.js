module.exports = {
    '/system/': [{
            text: '体系大纲',
            children: [{
                text: '资料导航',
                link: '/system/',
            }, ],
        }, 
        {
            text: '管理体系基础',
            children: [{
                    text: '介绍',
                    link: '/system/management/',
                },
                {
                    text: '简答题库',
                    link: '/system/management/shortAnswer',
                },
            ],
        },
        {
            text: '质量管理体系',
            children: [{
                    text: '总则',
                    link: '/system/qms/',
                },
                {
                    text: '手册',
                    link: '/system/qms/handbook.md',
                },
                {
                    text: '知识点',
                    link: '/system/qms/knowledge.md',
                },
            ],
        },
        {
            text: '职业健康与安全管理体系',
            children: [{
                text: '资料导航',
                link: '/system/ohsms',
            }, ],
        },
    ],
    '/guide/': [{
            text: 'Guide',
            children: [
                // SidebarItem
                {
                    text: '介绍',
                    link: '/guide/',
                },
                {
                    text: 'foo',
                    link: '/guide/foo.md',
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


    ]
}