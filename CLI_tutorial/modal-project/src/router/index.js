import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; // Example component
import About from "../views/About.vue"; // Example component
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import Notfound from "../views/404.vue";
import Blog from "../views/Blog.vue";

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
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    //no matter the id, this route will show the job details component
    //you need to put the params in the path for it to be accepted when passing multiple params on a router link
    path: "/jobs/:id/:description/:title",
    name: "JobDetails",
    component: JobDetails,
    // when params are use on v-binded :to we can receive the params as a prop on the component receiving it
    props: true,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  //redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  //catchall 404 , patch catches everything that does not match all routes before it
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: Notfound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Using createWebHistory
  routes,
});

export default router;
