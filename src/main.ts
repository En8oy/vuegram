import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import Storage from './plugins/Storage'
import './assets/main.scss'
//import './style.css'
import App from './App.vue'
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Storage)
app.mount('#app')
