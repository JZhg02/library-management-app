import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

export const app = createApp(App)
export const globalProperties = app.config.globalProperties

app.use(router).mount('#app')