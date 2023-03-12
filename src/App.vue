<template>
  <div class="app">
    <h2>我是App组件(祖)</h2>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>稍等,加载中......</h3>
      </template>
    </Suspense> 
  </div>
</template>
<script>
  // import Child from './components/Child'  // 静态引入，等待组件引入成功后才集中一起渲染

  import {defineAsyncComponent} from 'vue'
  // const Child = defineAsyncComponent(()=>{
  //   return import('./components/Child')}
  //   )
  // 简写
  const Child = defineAsyncComponent(()=>import('./components/Child')) // 异步引入，浏览器调成3G网路，首先App会先加载出来，Child后面才会出来
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