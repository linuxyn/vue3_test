  <template>
    <!-- Vue3组件中的模板结构中可以没有根标签 -->
    <input type="text" v-model="keyWord">
    <h3>{{ keyWord }}</h3>
  </template>
  <script>
  import {ref,customRef} from 'vue'
  export default {
    name:'App',
    setup() {
      // 自定义一个ref名为:myRef
      function myRef(value,delay){
        let timer
        return customRef((track,trigger)=>{
          return {
            get(){
              console.log(`有人从myRef这个容器中读取数据了,我把${value}给他了`)
              track() // 通知Vue跟踪value的变化(提前和get商量一下，让他认为这个value是有用的)
              return value
            },
            set(newValue){
              console.log(`有人把myRef这个容器中数据改为了:${newValue}`)
              clearTimeout(timer)
              timer=setTimeout(() => {
                value = newValue
                trigger() // 通知Value去重新解析模版
              }, delay); 
            }
          }
        })
      }

      let keyWord= myRef('hello',500) // 使用Vue内置的ref
      return {keyWord}
    }
  };
  </script>

  <style>
  </style>
