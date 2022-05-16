import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/assets/styles/common.less'
import ui from './components/library'
// 插件的使用，在main.js使用app.use(插件)
createApp(App).use(store).use(router).use(ui).mount('#app')
