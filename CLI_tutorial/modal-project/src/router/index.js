import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; // Example component
import About from "../views/About.vue"; // Example component

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Using createWebHistory
  routes,
});

export default router;
