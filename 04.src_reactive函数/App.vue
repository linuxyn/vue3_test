<template>
  <!-- Vue3组件中的模板结构中可以没有根标签 -->
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>年龄:{{ person.job.type }}</h2>
  <h2>年龄:{{ person.job.salary }}</h2>
  <h2>爱好:{{ person.hobby }}</h2>
  <h2>测试数据c的值:{{ person.job.a.b.c }}</h2>
  <button @click="changeInfo">修改个人信息</button>
</template>
<script>
import { ref,reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
  let person = reactive({
      name:"张三",
      age:18,
      job:{
        type: "前端工程师",
        salary: "30k",
        a:{
          b:{
            c:666
          }
        }
      },
      hobby:['抽烟','喝酒','烫头']

    })

    function changeInfo() {
      person.name = "李四";
      person.age = 19;
      person.job.type = "运维开发工程师";
      person.job.salary = "50k";
      person.job.a.b.c = 99,
      person.hobby[0] = '学习'
      // console.log(job);
    }

    return {
      person,
      changeInfo
    };
  },
};
</script>

<style>
</style>
