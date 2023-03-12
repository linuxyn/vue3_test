<template>
    <!-- Vue3组件中的模板结构中可以没有根标签 -->
    <h2>当前请求:{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <h2>当前信息为:{{ msg }}</h2>
    <button @click="msg+='!'">修改信息</button>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>薪资:{{ person.job.j1.salary }}k</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">年龄增长</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>
<script>
  // 组合式api，本质上都是函数
  import { ref,watch,reactive, watchEffect } from "vue";
  export default {
    name: "Demo",
    /*
    watch:{
      sum(newValue, oldValue){
        console.log(newValue, oldValue)
      },
      sum:{
        immediate:true,
        deep:true,
        handler(newValue, oldValue){
          console.log(newValue, oldValue)
        }
      }
    },*/
    setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name:'张三',
      age:33,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // 监视
    // watch(sum,(newValue,oldValue)=>{
    //   console.log('sum的值变化了',newValue,oldValue)
    // },{immediate:true})

    // watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调
    watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log('watchEffect所指定的回调执行了');
    })

    // 返回一个对象(常用)
    return {
      sum,
      msg,
      person,
    };
    },
  }
</script>
<style scoped>

</style>