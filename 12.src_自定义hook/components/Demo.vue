<template>
    <!-- Vue3组件中的模板结构中可以没有根标签 -->
    <h2>当前请求:{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>当前点击鼠标的坐标为:x:{{ point.x }} y:{{ point.y }}</h2>
</template>
<script>
  // 组合式api，本质上都是函数
  import {ref} from 'vue'
  import usePoint from '../hooks/usePoint'
  export default {
    name: "Demo",
    setup() {
      // 数据
      let sum = ref(0)
      let point = usePoint()
      
      // 返回一个对象(常用)
      return {
        sum,
        point,
      };
    },
  }
</script>
<style scoped>

</style>