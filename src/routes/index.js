import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/project",
    name: "project",
    component: () => import("../views/Project.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
