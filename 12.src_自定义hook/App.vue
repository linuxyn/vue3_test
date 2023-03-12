  <template>
    <button @click="isShowDemo = !isShowDemo">显示/隐藏</button>
    <!-- Vue3组件中的模板结构中可以没有根标签 -->
    <Demo v-if="isShowDemo"/>
    <Test/>
  </template>
  <script>
  import {ref} from 'vue'
  import Demo from './components/Demo'
  import Test from './components/Test'
  export default {
    name:'App',
    components:{Demo,Test},
    setup() {
      let isShowDemo = ref(true)
      return {isShowDemo}
    }
  };
  </script>

  <style>
  </style>
