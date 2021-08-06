module.exports = [
    // NavbarItem
    {
        text: '体系',
        children: [{
                text: '资料整合',
                children: ['/system/README.md'],
            },
            {
                text: '管理体系认证基础',
                children: [
                    '/system/management/README.md',
                    '/system/management/shortAnswer.md',
                ],
            },
            {
                text: '质量管理体系',
                children: [
                    '/system/qms/README.md',
                    '/system/qms/handbook.md',
                    '/system/qms/knowledge.md',
                ],
            },
            {
                text: '职业健康与安全',
                children: [
                    '/system/ohsms/README.md',
                    '/system/ohsms/handbook.md',
                    '/system/ohsms/knowledge.md',
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

]