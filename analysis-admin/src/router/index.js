import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    // meta: { requiresAuth: true }
  },
  {
    path: '/',
    redirect: '/dashboard'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next('/login')
//   } else if (to.path === '/login' && isAuthenticated) {
//     next('/dashboard')
//   } else {
//     next()
//   }
// })

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token"); // Check for token

//   if (to.meta.requiresAuth && !token) {
//     next("/login"); // Redirect to login if no token
//   } else if (to.path === "/login" && token) {
//     next("/dashboard"); // Redirect to dashboard if already authenticated
//   } else {
//     next(); // Proceed to the route
//   }
// });

export default router 