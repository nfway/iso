---
title : 事件
---

## 侧边栏不自动展开

侧边栏代码使用的对象模式，分组过程中，<code>children</code>元素刚开始是这样写的：

``` javascript
'/guide/': [{
    text: 'guide',
    children: [{
            text： 'intro',
            link: '/guide/README.md'
        },
        {
            text： 'about',
            link: '/guide/about.md'
        },
        {
            text： 'connect',
            link: '/guide/connect.md'
        }
    ]
}]

```

这导致了除<code>README</code>文档外，其他文档既不能自动展开侧边栏，也不能自动生成<code>next</code>的链接。

翻了下官网描述，把代码更改为：

``` javascript
'/guide/': [{
    text: 'guide',
    children: [
        '/guide/README.md',
        '/guide/about.md',
        '/guide/connect.md'
    ]
}]
```

自动展开的功能就正常了，这种写法叫 “字符串 - 页面文件路径” ，会根据<code>.md</code>文档的一级标题或者<code>Frontmatter</code>中的<code>title</code>属性生成侧边栏的链接名称。
