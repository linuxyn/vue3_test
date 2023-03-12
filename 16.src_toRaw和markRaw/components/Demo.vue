<template>
  <!-- Vue3组件中的模板结构中可以没有根标签 -->
  <h2>当前求和:{{ sum }}</h2>
  <button @click="sum++">点我x++</button>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}k</h2>
  <h2 v-show="person.car">座驾信息:{{ person.car }}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">年龄增长</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name +='!'">换车名</button>
  <button @click="changPrice">换车价格</button>
</template>
<script>
// 组合式api，本质上都是函数
  import { ref,reactive,toRefs,toRaw, markRaw} from "vue";
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

      function showRawPerson(){
        // console.log('person;',person)  // person的响应式对象Prxoy
        const p = toRaw(person)
        // console.log('rawPerson:',p) // 原始的raw对象 {name: '张三', age: 33, job: {…}}
        
        // 对基础类型不生效, toRaw只能处理reactive对象
        // console.log(sum)
        // const sum1 = toRaw(sum)
        // console.log(sum1==sum) // 结果为true
      }

      function addCar(){
        // 注意这里直接这样写是不会生效的，因为return '...toRefs(person)'代表是会把person中每个属性拆分添加return的对象里面，此时返回值里面已经不存在person，想要页面响应式的变化可以直接在return中添加返回值person即可
        let car = {name:'奔驰',price:30}
        person.car = car
        // 后添加的属性自动是响应式的,如果不想让后添加的属性为响应式,怎么做？
        person.car = markRaw(car) 

      }

      function changPrice(){
      //加上上面的markRaw(car)之后，此时改价格也是生效的，但是不再是响应式了，不会刷新页面了
        person.car.price++
        console.log(person.car.price)
      }

      return {
        person,
        sum,
        showRawPerson,
        ...toRefs(person),
        addCar,
        changPrice
      }
    },
  }
</script>
<style scoped>

</style>