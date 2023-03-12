<template>
  <!-- Vue3组件中的模板结构中可以没有根标签 -->
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>性别:{{ gender }}</h2>
  <h2>a:{{ a }}</h2>
  <button @click="sayHello">点我</button>
  <br>
  <br>
  <button @click="test1">测试vue2去获取vue3中的数据和方法</button>
  <br>
  <br>
  <button @click="test2">测试vue3 setup去获取vue2中的数据和方法</button>
</template>

<script>


// import { h } from 'vue'
export default {
  name: 'App',
  data() {
    return {
      gender: '男',
      a: 300,
    }
  },
  methods: {
    sayWelcome(){
      alert('欢迎来到尚硅谷学习')
    },
    test1(){
      console.log(this.gender)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayWelcome)
      console.log(this.sayHello)
    }
  },


  // 此处只是测试一下setup，暂时不考虑响应式的问题
  setup() {
    // 数据
    let name = '张三'
    let age = 18
    let a = 100

    // 方法
    function sayHello() {
      alert(`我叫${name},我今年${age},你好啊`)
    }
    function test2() { 
      console.log(name)
      console.log(age)
      console.log(sayHello)
      console.log(this.gender)
      console.log(this.sayWelcome)
     }
    return {
      a,
      name,
      age,
      sayHello,
      test2
    }
    // 返回一个函数（渲染函数，和Vue2中的render类似）
    // return ()=> h('h1', '尚硅谷')
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
