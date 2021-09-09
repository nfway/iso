<template>
  <div class="poetry">
      <p id="hitokoto" v-text="poetry"></p>
      <p style="text-align:right"><i>--- {{from_who}}  《{{from}}》</i> </p>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
const poetry = ref('')
const from = ref('')
const from_who = ref('')

onMounted(()=>{
  fetch('https://v1.hitokoto.cn?c=d')
    .then(response => response.json())
    .then(data => {
      poetry.value = data.hitokoto
      from.value = data.from
      from_who.value = data.from_who
    })
    .catch(console.error)
})
  
</script>

<style lang="scss">
  div.poetry{
    padding: 5px 10px;
    background: #0993;
    backdrop-filter: blur(5px);
    & p{
      margin: 0px;
    };
  }
</style>