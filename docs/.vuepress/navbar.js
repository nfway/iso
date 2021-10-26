module.exports = [
    // NavbarItem
    {
        text: '体系',
        children: [
            '/system/README.md',
            {
                text: '认证通用基础',
                children: [
                    '/system/common/README.md',
                    '/system/common/termsAndDefinitions.md',
                    '/system/common/2021_5_common.md',
                    '/system/common/shortAnswer.md',
                ],
            },
            {
                text: '管理体系认证基础',
                children: [
                    '/system/management/README.md',
                    '/system/management/shortAnswer.md',
                    '/system/management/2021_5_management.md',
                ],
            },
            {
                text: '质量管理体系',
                children: [
                    '/system/qms/README.md',
                    '/system/qms/handbook.md',
                    '/system/qms/2021_5_qms.md',
                ],
            },
            {
                text: '职业健康与安全',
                children: [
                    '/system/ohsms/README.md',
                    '/system/ohsms/handbook.md',
                    '/system/ohsms/2021_5_ohsms.md',
            ],
            },
        ],
    },
    // NavbarGroup
    {
        text: '记录',
        children: [{
                text: '关于',
                link: '/record/README.md'
            },
            {
                text: '事件',
                link: '/record/thing.md'
            },
        ],
    },
    {
        text: '练习',
        link: 'http://test.yangmn.com'
    },


]