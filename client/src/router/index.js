import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FeatureView from "../views/FeatureView.vue";
import BlogView from "../views/BlogView.vue";
import SupportView from "../views/SupportView.vue";
import CompareView from "../views/CompareView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/feature",
      name: "feature",
      component: FeatureView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/compare",
      name: "compare",
      component: CompareView,
    },
    {
      path: "/support",
      name: "support",
      component: SupportView,
    },
    {
      path: "/blog/blogId",
      name: "blog_detial",
      component: BlogView,
    },
  ],
});

export default router;
