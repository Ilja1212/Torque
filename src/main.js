import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/main.css'

// Create the Vue app, add the router, and put it inside <div id="app"> in index.html
createApp(App).use(router).mount('#app')
