import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象(类似之前Vue2中的vm，但app比vm更"轻")
// const app = createApp(App)
// console.log('@',app)
// // 挂载
// app.mount('#app')

createApp(App).mount('#app')