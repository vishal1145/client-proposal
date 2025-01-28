import { createRouter, createWebHistory } from 'vue-router'
 
import WebsiteReviewPage from './WebsiteReviewPage.vue'

const routes = [
  { path: '/', component: WebsiteReviewPage },
  { path: '/website-review', component: WebsiteReviewPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
