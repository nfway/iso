module.exports = [
    // NavbarItem
    {
        text: '体系',
        children: [
            '/README.md',
            {
                text: '认证通用基础',
                children: [
                    '/common/README.md',
                    '/common/termsAndDefinitions.md',
                    '/common/shortAnswer.md',
                ],
            },
            {
                text: '管理体系认证基础',
                children: [
                    '/management/README.md',
                    '/management/shortAnswer.md',
                ],
            },
            {
                text: '质量管理体系',
                children: [
                    '/qms/README.md',
                    '/qms/handbook.md',
                ],
            },
            {
                text: '职业健康与安全',
                children: [
                    '/ohsms/README.md',
                    '/ohsms/handbook.md',
            ],
            },
        ],
    },
    // NavbarGroup
    //{
    //    text: '记录',
    //    children: [{
    //            text: '关于',
    //            link: '/record/README.md'
    //        },
    //        {
    //            text: '事件',
    //            link: '/record/thing.md'
    //        },
    //    ],
    //},
    //{
    //    text: '练习',
    //    link: 'http://test.yangmn.com'
    //},


]