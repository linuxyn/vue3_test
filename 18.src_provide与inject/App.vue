<template>
  <div class="app">
    <h2>我是App组件(祖) {{ name }}--{{ price }}</h2>
    <Child/>
  </div>
</template>
<script>
  import {provide, reactive,toRefs} from 'vue'
  import Child from './components/Child'
  export default {
    name:'App',
    components: { Child },
    setup() {
      let car = reactive({name:'奔驰',price:'40万'})
      provide('qiche',car)
      return {
        ...toRefs(car)
      }
    }
  }
</script>
<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>