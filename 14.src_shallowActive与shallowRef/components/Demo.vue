<template>
  <!-- Vue3组件中的模板结构中可以没有根标签 -->
  <h2>x.y的值:{{ x.y }}</h2>
  <button @click="x.y++">点我x++</button>
  <br>
  <button @click="x={y:888}">点我替换x</button>
  <h2>{{ person }}</h2>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}k</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">年龄增长</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>
<script>
// 组合式api，本质上都是函数
  import { ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from "vue";
  export default {
    name: "Demo",
    setup() {
      // shallowReactive只考虑第一层的响应式数据，里面的不再考虑，所有这次无法修改salary的值
      // let person = shallowReactive({
      let person = reactive({
        name:'张三',
        age:33,
        job:{
          j1:{
            salary:20
          }
        }
      })
      // 由于处理于基本数据类型的响应式，而这里为对象类型，所以监测不到y值的变化
      let x = shallowRef({
        y:1
      })
      console.log(x)
      return {
        x,
        person,
        ...toRefs(person)
      }
    },
  }
</script>
<style scoped>

</style>