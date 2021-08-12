<template>
  <p id="hitokoto"><a href="#" id="hitokoto_text">:D 获取中...</a></p>
</template>

<script setup>
  
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)
</script>

<style>

</style>