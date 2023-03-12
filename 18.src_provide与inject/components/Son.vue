<template>
  <div class="son">
    <h2>我是Son组件(孙) {{ name }}--{{ price }}</h2>
  </div>
</template>
<script>
  import { inject, reactive,toRefs } from 'vue';
  export default {
    name:'Son',
    setup() {
      const car = inject('qiche')
      console.log('Son car:',car)

      return {...car}
    }
  }
</script>
<style>
.son{
  background-color:orange;
  padding: 10px;
}
</style>