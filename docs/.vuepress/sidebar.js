module.exports = {
    '/': [{
            text: '审核员考试',
            children: [
                '/',
            ]
        },
        {
            text: '认证通用基础',
            children: [
                '/common/',
                '/common/termsAndDefinitions',
                '/common/shortAnswer',
            ],
        },
        {
            text: '管理体系基础',
            children: [
                '/management/',
                '/management/shortAnswer',
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
            text: '职业健康与安全管理体系',
            children: [
                '/ohsms/',
                '/ohsms/handbook.md',
                '/ohsms/termsAndDefinitions',
            ],
        },
    ]

}