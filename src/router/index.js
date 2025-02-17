import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App,
    },
    {
        path: '/:section',
        name: 'Section',
        component: App,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
    }
})

export default router 