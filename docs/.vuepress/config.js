module.exports = {
    lang: 'zh-CN',
    title: 'Journey',
    description: 'vuepress 2.0',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    dest: 'dist',
    // // plugins: ['@vuepress/blog'],
    // plugins: [
    //     [
    //       'vuepress-plugin-comment',
    //       {
    //         choosen: 'valine', 
    //         // options选项中的所有参数，会传给Valine的配置
    //         options: {
    //           el: '#valine-vuepress-comment',
    //           appId: 'ftWiQN6qAmslTonErANg8x2o-gzGzoHsz',// your appId
    //           appKey: 'gJdazhgVsHC0kYTg8Il5eApA', // your appKey
    //         }
    //       }
    //     ]
    //   ],
    themeConfig: {
        contributors: false,
        lastUpdatedText:'上次更新',
        repo: 'https://github.com/18437951091/vuepress-starter',
        docsRepo: 'https://github.com/18437951091/vuepress-starter',
        docsBranch: 'main',
        docsDir: 'docs',
        editLink: true,
        editLinkText:'在Github中编辑此页',
        // https://github.com/18437951091/vuepress-starter/edit/main/docs/guide/README.md
        editLinkPattern: ':repo/edit/:branch/:path',
        // type: 'blog',
        logo: '/images/logo.png',
        sidebar:require('./sidebar.js'),
        navbar: require('./navbar.js'),
    },
}