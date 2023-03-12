<template>
  <div class="app">
    <h2>我是App组件(祖)</h2>
    <Child/>
  </div>
</template>
<script>
  import {provide, reactive,toRefs} from 'vue'
  import Child from './components/Child'
  export default {
    name:'App',
    components: { Child },
  }
</script>
<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>