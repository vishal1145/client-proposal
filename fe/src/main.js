import { createApp } from 'vue'
import App from './App.vue'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import VueMathjaxNext from 'vue-mathjax-next'
import './assets/styles.css'
import router from '.'
createApp(App).use(router).use(VueMathjaxNext).use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  hideProgressBar: true,
}).mount('#app')
