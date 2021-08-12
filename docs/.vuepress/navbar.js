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
                    '/system/common/shortAnswer.md',
                ],
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
                ],
            },
            {
                text: '职业健康与安全',
                children: [
                    '/system/ohsms/README.md',
                    '/system/ohsms/handbook.md',
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
        text:'做题',
        link:'http://yangmn.com:8000'
    },


]