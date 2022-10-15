import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getId, isTokenInLocalStorage, isLoggedIn } from './funcs'

const app = createApp(App)
app.use(router).mount('#app')

// if a token is stored in localstorage, assign it to gloabal variable '$token'
isTokenInLocalStorage(app)

// Get Id based on token
getId(app.config.globalProperties.$token, app)

// check if logged in
isLoggedIn(app)

export const globalStorage = app.config.globalProperties