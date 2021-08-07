<template>
  <div class="component-demo" @click="clickMe">
    这是一个演示组件
  </div>
</template>

<script setup>
const clickMe = () => {
  alert('点我干嘛？')
}
</script>

<style lang='scss'>
  div.component-demo{
    text-align: center;
    width: 200px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #666;
    box-shadow: #eee 5px 5px 5px;
    cursor: pointer;
    &:hover{
      color: #eee;
      background: darkcyan;
      border-color: #eee;
    }
  }
</style>