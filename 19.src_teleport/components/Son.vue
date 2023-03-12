<template>
  <div class="son">
    <h2>我是Son组件(孙)</h2>
    <Dialog/>
  </div>
</template>
<script>
  import { inject, reactive,toRefs } from 'vue'
  import Dialog from './Dialog'
  export default {
    name:'Son',
    components:{Dialog}
  }
</script>
<style>
.son{
  background-color:orange;
  padding: 10px;
}
</style>