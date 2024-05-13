
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'
app.use(lazyPlugin)
app.mount('#app')

