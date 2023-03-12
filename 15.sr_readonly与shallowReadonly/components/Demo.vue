<template>
  <!-- Vue3组件中的模板结构中可以没有根标签 -->
  <h2>当前求和:{{ sum }}</h2>
  <button @click="sum++">点我x++</button>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}k</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">年龄增长</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>
<script>
// 组合式api，本质上都是函数
  import { ref,reactive,toRefs,readonly,shallowReadonly} from "vue";
  export default {
    name: "Demo",
    setup() {
      let sum = ref(0)
      let person = reactive({
        name:'张三',
        age:33,
        job:{
          j1:{
            salary:20
          }
        }
      })
      // person中所有的数据都不能改
      // person = readonly(person)
      // person中只有浅层即第一层的数据不能改，salary的数据可以改
      person = shallowReadonly(person)

      sum = readonly(sum)
      sum = shallowReadonly(sum) // 本来就是基础数据类型，其实没必要用 shallowReadonly
      return {
        sum,
        ...toRefs(person)
      }
    },
  }
</script>
<style scoped>

</style>