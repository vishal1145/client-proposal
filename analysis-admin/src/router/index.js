import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Reviews from '../components/Reviews.vue'
import Settings from '../components/Settings.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/",
    name: "Home",
    component: Reviews,
    meta: { requiresAuth: true },
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { requiresAuth: false }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  
  // Allow access to 404 page without authentication
  if (to.name === 'NotFound' && !token) {
    next();
    return;
  }
  
  if (to.meta.requiresAuth && !token) {
    // If route requires auth and user is not authenticated
    next('/login');
  } else if (to.path === '/login' && token) {
    // If user is already authenticated and tries to access login page
    next('/reviews');
  } else {
    // In all other cases, proceed normally
    next();
  }
});

export default router 