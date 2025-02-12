import { createRouter, createWebHistory } from 'vue-router'
 
import WebsiteReviewPage from './WebsiteReviewPage.vue'
import ViewAnalysis from './ViewAnalysis.vue'

const routes = [
  { path: '/', component: WebsiteReviewPage },
  { path: '/website-review', component: WebsiteReviewPage },
  { path: '/analysis/:id', component: ViewAnalysis },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
