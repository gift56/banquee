import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FeatureView from "../views/FeatureView.vue";
import BlogView from "../views/BlogView.vue";
import SupportView from "../views/SupportView.vue";
import CompareView from "../views/CompareView.vue";
import BlogDetailView from "../views/BlogDetailView.vue";

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
      path: "/blog/:blogId",
      name: "blog_detial",
      component: BlogDetailView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If the user has previously scrolled on this page, return to the previous position
      return savedPosition;
    } else if (to.hash) {
      // If the destination route has a hash (e.g., "#pricing"), scroll to the element with the corresponding ID
      return {
        el: to.hash,
        behavior: "smooth", // Optional, adds smooth scrolling effect
      };
    } else {
      // Scroll to the top of the page
      return { top: 0 };
    }
  },
});

export default router;
