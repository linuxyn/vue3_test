<template>
    <!-- Vue3组件中的模板结构中可以没有根标签 -->
    <h2 v-show="person.name">姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="test">测试触发Demo组件的hello方法</button>
</template>
<script>
  import { reactive } from "vue";
  export default {
    name: "Demo",
    beforeCreate() {
      console.log('---beforeCreate---')
    },
    props:['msg','school'],
    emits:['hello'],
    setup(props, context) {
      console.log('---setup---context',context)
      console.log('---setup---context',context)
      console.log('---setup---context.attrs',context.attrs) // 与Vue2中的this.$attrs
      console.log('---setup---context.emit',context.emit) // 触发自定义事件
      console.log('---setup---context.slots',context.slots) // 触发自定义事件
      function test(){
        context.emit('hello', 666)
      }
      // 数据
      let person = reactive({
          name:"张三",
          age:18,
        })
        return {
          person,
          test,
        };
    },
  }
</script>
<style scoped>

</style>