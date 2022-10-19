import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { isTokenInLocalStorage, isTokenValid, getId, isLoggedIn } from './funcs'

export const app = createApp(App)
export const globalProperties = app.config.globalProperties

// if a token is stored in localstorage, assign it to gloabal variable '$token'
async function startUp() {
    if (isTokenInLocalStorage(globalProperties)) {
        if (await isTokenValid(globalProperties)) {
            // Get Id based on token
            await getId(globalProperties.$token, globalProperties);
        }
    }

    // check if logged in
    if (!(await isLoggedIn(globalProperties))) {
        alert("Please log in (token expired)");
    }
}

startUp()




app.use(router).mount('#app')

