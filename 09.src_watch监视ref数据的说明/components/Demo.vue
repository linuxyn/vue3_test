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
  import { ref,watch,reactive } from "vue";
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
    let person = ref({
      name:'张三',
      age:33,
      job:{
        j1:{
          salary:20
        }
      }
    })
    console.log(sum) // RefImpl value:0
    console.log(msg) // RefImpl value:"你好啊"
    console.log(person) // RefImpl value:Proxy对象

    // sum里面存的是基本类型，所以不需要.value
    watch(sum,(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue)
    })

    // person存的是对象，而ref包裹的对象默认只能监测浅层次的变化
    // 而person.value的值为: Proxy {name: '张三', age: 33, job: {…}},本质上是reactive的响应式数据
    // 而reactive定义的响应式数据时默认是深层次的，所以可以检测到job的变化
    watch(person.value,(newValue,oldValue)=>{
      console.log('job的值变化了',newValue,oldValue)
    })

    // person存的是对象，如果不加.value，直接开启deep:true，也能开启深层次的变化
    watch(person,(newValue,oldValue)=>{
      console.log('job的值变化了',newValue,oldValue)
    },{deep:true})


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