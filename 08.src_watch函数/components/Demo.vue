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
  /* vue2写法
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

  // 情况一: 监视一个值
  watch(sum,(newValue, oldValue)=>{
    console.log('sum的值变了',newValue, oldValue)
  },{immediate:true})

  // 情况二: 监视ref所定义的多个响应式数据
    // 1. 直接写多个watch在Vue中是支持的
    // 2. vue3中还支持一个比较好的写法
  watch([sum,msg],(newValue, oldValue)=>{
    console.log('sum或者msg的值变了',newValue, oldValue)
  },{immediate:true})

  // 情况三:监视reactive所定义的一个响应式数据的全部属性,
  //    1.注意:此处无法正确的获取oldValue，目前Vue 3.2.47版本依然无法解决
  //    2.注意:强制开启了深度监视(deep配置无效)
  watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
  },{deep:false}) // 此处的deep配置无效

  // 情况四:监视reactive所定义的一个响应式数据的中的某个属性
  // 要监听一个值需要写成一个函数，函数的返回值为要监听的值
  watch(()=>person.age,(newValue,oldValue)=>{
    console.log('person的age变化了',newValue,oldValue)
  })

  // 情况五:监视reactive所定义的一个响应式数据中的某些属性（无法获取oldValue）
  watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
    console.log('person的name或者age变化了',newValue,oldValue)
  })

  // 特殊情况(如果不加deep，修改job对象中的salary属性，watch是监测不到的)（无法获取oldValue）
  watch(()=>person.job,(newValue,oldValue)=>{
    console.log('person的job变化了',newValue,oldValue)
  },{deep:true}) //此处由于监视的是reactive所定义的某个属性，且属性的值依然是一个对象，那么deep配置有效



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