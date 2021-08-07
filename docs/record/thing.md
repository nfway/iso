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

表现为除<code>README</code>文档外，其他文档既不能自动展开侧边栏，也不能自动生成<code>next</code>的链接。

翻了下<code>github</code>及官方文档描述，把代码更改为：

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

## 自定义组件

<code>vuepress</code> 文档中提及了自定义<code>vue</code>组件的事项，但不知道在什么地方建立什么文件。在<code>bilibili</code>中有关于 <code>v1</code> 版本 <code>vuepress</code> 自定义组件的视频，方法是在<code>.vuepress
</code>文件夹下建立 <code>enhanceApp.js</code> 文件，填入相应的代码。在<code>v2</code>版本的官方文档中，版本迁移一章提出 <code>.vuepress/enhanceApp.js</code> 重命名为 <code>.vuepress/clientAppEnhance.{js,ts}</code> 。

文件名称和位置有了，在<code>.vuepress</code> 文件夹下建立 <code>components</code> 文件夹，新建自定义组件，比如 <code>MyComponent.vue</code> ，在官方文档 <code>CookBook</code> 一章中有注册<code>vue</code>组件的示例代码：
``` javascript{4}
// .vuepress/clientAppEnhance.ts
import { defineClientAppEnhance } from '@vuepress/client'
//实际引入位置为'./components/MyComponent.vue'
import MyComponent from './MyComponent.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('MyComponent', MyComponent)
})
```
在这里，会由于ts文件找不到模块报错，在网上找到的解决方法是在.vuepress文件夹下建立shims.d.ts文件，也不知道是干嘛的，然后再其中写入：
``` typescript
//.vuepress/shims.d.ts
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  }
```
报错就消失了。
至此，应该可以使用自定义组件了，比如下面这个div：

<MyComponent />

竟然原生支持scss，斯巴拉西！！！