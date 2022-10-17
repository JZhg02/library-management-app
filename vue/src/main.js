import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getId, isTokenInLocalStorage, isLoggedIn } from './funcs'

<<<<<<< Updated upstream
export const app = createApp(App)
export const globalProperties = app.config.globalProperties

app.use(router).mount('#app')
=======
const app = createApp(App)
app.use(router).mount('#app')

// if a token is stored in localstorage, assign it to gloabal variable '$token'
isTokenInLocalStorage(app)

// Get Id based on token
getId(app.config.globalProperties.$token, app)

// check if logged in
isLoggedIn(app)

export const globalStorage = app.config.globalProperties
>>>>>>> Stashed changes
