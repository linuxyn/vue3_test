<template>
    <!-- Vue3组件中的模板结构中可以没有根标签 -->
    <h2>当前请求:{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
</template>
<script>
  // 组合式api，本质上都是函数
  import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from "vue";
  export default {
    name: "Demo",
    setup() {
      // 数据
      let sum = ref(0)
      // 返回一个对象(常用)

      // 通过组合API的形式去使用生命周期钩子
      onBeforeMount(() => {
        console.log('***onBeforeMount***');
      })
      onMounted(() => {
        console.log('***onMounted***');
      })
      onBeforeUpdate(() => {
        console.log('***onBeforeUpdate***');
      })
      onUpdated(() => {
        console.log('***onUpdated***');
      }),
      onBeforeUnmount(() => {
        console.log('onBeforeUnmount***');
      })
      onUnmounted(() => {
        console.log('***onUnmounted***');
      })
      return {
        sum
      };
    },
    // 通过配置项的形式使用生命周期钩子
    // #region 
    // /*
    beforeCreate() {
      console.log('---beforeCreate---');
    },
    created() {
      console.log('---created---');
    },
    beforeMount() {
      console.log('---beforeMount---');
    },
    mounted() {
      console.log('---mounted---');
    },
    beforeUpdate() {
      console.log('---beforeUpdate---');
    },
    updated() {
      console.log('---updated---');
    },
    beforeUnmount() {
      console.log('---beforeUnmount---');
    },
    unmounted() {
      console.log('---unmounted---');
    },
    // */
    // #endregion
  }
</script>
<style scoped>

</style>