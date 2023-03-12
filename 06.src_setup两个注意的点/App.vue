  <template>
    <!-- Vue3组件中的模板结构中可以没有根标签 -->
    <Demo @hello="showHello" msg="你好啊" school="尚硅谷">
      <!-- 传递默认插槽 -->
      <!-- <span>尚硅谷</span>  -->
      <template v-slot:atguigu>
        <span>尚硅谷</span>
      </template>
      <template v-slot:atguigu1>
        <span>尚硅谷</span>
      </template>
    </Demo>
  </template>
  <script>
  import Demo from './components/Demo';
  export default {
    name:'App',
    components:{Demo},
    setup(props) {
      function showHello(value){
        console.log(`你好啊,你触发了hello事件,我收到的参数是:${value}`)
      }
      return {
        showHello
      }
    }
  };
  </script>

  <style>
  </style>
