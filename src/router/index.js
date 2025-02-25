import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import recentProject from "../pages/recentProject.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
  },
  {
    path: "/recent-projects",
    name: "RecentProjects",
    component: recentProject,
    props: true,
  },
  {
    path: "/:section",
    name: "Section",
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 }; // Scroll to top for page navigation
  },
});

export default router;
