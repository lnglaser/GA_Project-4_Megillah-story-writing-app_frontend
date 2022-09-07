import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/HomePage.vue";
import ProfilePage from "./components/ProfilePage.vue";
import ScrollPage from "./components/ScrollPage.vue";
import BrowseScrolls from "./components/BrowseScrolls.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "HomePage",
  },
  {
    path: "/profile",
    component: ProfilePage,
    name: "ProfilePage",
  },
  {
    path: "/scroll/:scroll_id",
    component: ScrollPage,
    name: "ScrollPage",
  },
  {
    path: "/browse",
    component: BrowseScrolls,
    name: "BrowseScrolls",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
