<template>
  <!-- Vue3组件中的模板结构中可以没有根标签 -->
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>年龄:{{ job.type }}</h2>
  <h2>年龄:{{ job.salary }}</h2>
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
    let job = ref({
      type:'前端工程师',
      salary:'30k'
    })
    
    function changeInfo(){
      name.value = '李四'
      age.value = 19
      job.value.type = '运维开发工程师'
      job.value.salary = '50k'
      console.log(name,age,job)
    }
   
    return {
      name,
      age,
      changeInfo,
      job
    }
  }
}
</script>

<style>
</style>
