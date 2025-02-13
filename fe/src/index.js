import { createRouter, createWebHistory } from 'vue-router'
 
import WebsiteReviewPage from './WebsiteReviewPage.vue'
import ViewAnalysis from './ViewAnalysis.vue'

const routes = [
  { 
    path: '/', 
    component: WebsiteReviewPage,
    meta: { requiresAuth: true }
  },
  { 
    path: '/website-review', 
    component: WebsiteReviewPage,
    meta: { requiresAuth: true }
  },
  { 
    path: '/analysis/:id', 
    component: ViewAnalysis,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: () => import('./LoginPage.vue')  // You'll need to create this component
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('proposal-writer-token')
  if (to.meta.requiresAuth && !token) {
    // Redirect to login if trying to access a protected route without auth
    next('/login')
  } else {
    next()
  }
})

export default router
