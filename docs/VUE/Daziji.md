---
title: 打字机效果的Vue组件
date: 2021-05-10
categories:
 - 前端技术
tags:
 - Vue
---

一个实现打字机效果的方式，用以下方式实现，后面span中的'|'添加闪烁动画作为输入光标，改变增加和删除的速度比例会让人感觉更真实。利用axios方法获取更多的话，实现数组的无限更新。
```
<template>
    <div>
        <p>{{p2}}<span class="lightbiao">|</span></p>
    </div>
</template>
<style>
    .lightbiao {
        animation: infinite 1s slidein;
    }

    @keyframes slidein {

    66% {
        opacity: 0;
    }
    33% {
        opacity: 1;
    }
    }
</style>
<script >
export default {
    setup() {
    },
    mounted() { 
    let i = 0;
    let j = -1;
    let b = true;
    setInterval(() => {
      //字符串遍历结束，i反向，结束时
        if(i<=0||i>(this.p1[j].length+3))
        b=!b
        //本字符串结束，进行下一字符串
        if (i<=0)
        {
            j++;
            i=0;
            axios.get('https://v1.hitokoto.cn')
            .then(({ data }) => {
              this.p1.push(data.hitokoto);
            })
            .catch(console.error)
        }
        //
        this.p2=this.p1[j].slice(0,i)
        if(b)
        i--;
      else
        i+=1/3;
    }, 80)
  },
    data(){
        return{
            p1:[
                '去二仙桥，走成华大道',
                '你妈又上树了',
            ],
            p2:'1'
        }
    }
}

</script>
```