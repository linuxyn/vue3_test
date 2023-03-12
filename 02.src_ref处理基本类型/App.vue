<template>
  <!-- Vue3组件中的模板结构中可以没有根标签 -->
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <button @click="changeInfo">修改个人信息</button>
</template>
<script>

import {ref} from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('张三')
    let age = ref(18)
    
    function changeInfo(){
      name.value = '李四'
      age.value = 19
      console.log(name,age)
    }
   
    return {
      name,
      age,
      changeInfo
    }
  }
}
</script>

<style>
</style>
