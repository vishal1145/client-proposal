import { createApp } from 'vue'
import App from './App.vue'
import VueMathjaxNext from 'vue-mathjax-next'
import './assets/styles.css'
import router from '.'
createApp(App).use(router).use(VueMathjaxNext).mount('#app')
