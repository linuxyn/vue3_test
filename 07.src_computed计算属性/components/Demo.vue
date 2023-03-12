<template>
    <!-- Vue3组件中的模板结构中可以没有根标签 -->
    <h1>一个人的信息</h1>
    姓: <input type="text" v-model="person.firstName">
    <br>
    名: <input type="text" v-model="person.lastName">
    <br>
    全名:{{ person.fullName }}
    <br>
    全名:<input type="text" v-model="person.fullName">
    
</template>
<script>
  import { reactive,computed } from "vue";
  export default {
    name: "Demo",
    // Vue2中的写法 不推荐
    /* computed: {
          fullName(){
        return this.person.firstName + '-' + this.person.lastName
      }
    },*/
    setup() {
      // 数据
      let person = reactive({
        firstName:"张",
        lastName:'三',
      })
      // Vue3中计算属性的值不再是一个对象了，而是一个函数
      // 这里直接给person增加一个属性fullName，在vue3中直接可以进行响应式渲染
      // 计算属性-简写
      person.fullName = computed(()=>{
        return person.firstName + '-' + person.lastName
      })
      // 计算属性-完整写法(考虑读和写)
      person.fullName = computed({
        get(){
          return person.firstName + '-' + person.lastName
        },
        set(value){
          const nameArr = value.split('-')
          person.firstName = nameArr[0]
          person.lastName = nameArr[1]
        }
        
      })
      return {
        person,
      };
    },
  }
</script>
<style scoped>

</style>