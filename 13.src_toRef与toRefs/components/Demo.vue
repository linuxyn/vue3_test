<template>
  <!-- Vue3组件中的模板结构中可以没有根标签 -->
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
  import { ref,reactive,toRef,toRefs} from "vue";
  export default {
    name: "Demo",
    setup() {
      // 数据
      let person = reactive({
        name:'张三',
        age:33,
        job:{
          j1:{
            salary:20
          }
        }
      })
      // const name = person.name
      // const name2 = toRef(person,'name')
      // console.log(name) // 张三
      // console.log(name2) // ObjectRefImpl, name获取的就是person中的name

      // 返回一个对象(常用)
      // 第一种写法(错误，虽然界面上name,age,salary看起来都没有问题，因为此时改变的只是对应的每个属性的refImpl对应，person的内容并没有发生变化）
      return {
        person,
        name: ref(person.name),
        age:ref(person.age),
        salary:ref(person.job.j1.salary)
      }
      // 第二种写法(正确，因为每个属性通过RefImpl中的value间接的访问person对象的属性值)
      return {
        person,
        name: toRef(person,'name'),
        age:toRef(person,'age'),
        salary:toRef(person.job.j1,'salary')
      }
      // 第三种写法
      return {
        person,
        ...toRefs(person)
      }
    },
  }
</script>
<style scoped>

</style>