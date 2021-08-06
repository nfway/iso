module.exports = {
    '/system/': [{
            text: '体系大纲',
            children: [
                '/system/',
            ]
        },
        {
            text: '管理体系基础',
            children: [
                '/system/management/',
                '/system/management/shortAnswer',
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
            text: '职业健康与安全管理体系',
            children: [
                '/system/ohsms/',
                '/system/ohsms/handbook.md',
                '/system/ohsms/knowledge.md',
            ],
        },
    ],
    '/record/': [{
        text: '记录',
        children: [
            'README.md',
            'thing.md'
        ],
    }, ]

}