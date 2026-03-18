import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n/index.js'

const app = createApp(App)

app.use(router)
app.use(i18n)

// Set document lang attribute
document.documentElement.lang = i18n.global.locale.value

app.mount('#app')
