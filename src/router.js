import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/HomePage.vue";
import ProfilePage from "./components/ProfilePage.vue";
import ScrollPage from "./components/ScrollPage.vue";
import BrowseScrolls from "./components/BrowseScrolls.vue";
import EditScrollPage from "./components/EditScrollPage";
import EditChapterPage from "./components/EditChapterPage";
import DeleteScrollPage from "./components/DeleteScrollPage";

// const HomePage = { template: "<div>Home</div>" };

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
    path: "/scrolls/:scroll_id",
    component: ScrollPage,
    name: "ScrollPage",
    props: true,
  },
  {
    path: "/browse",
    component: BrowseScrolls,
    name: "BrowseScrolls",
  },
  {
    path: "/scrolls/users/7/scrolls/:scroll_id",
    component: EditScrollPage,
    name: "EditScrollPage",
    props: true,
  },
  {
    path: "/chapters/:chapter_id/edit",
    component: EditChapterPage,
    name: "EditChapterPage",
    props: true,
  },
  {
    path: "/scrolls/users/7/scrolls/delete/:scroll_id",
    component: DeleteScrollPage,
    name: "DeleteScrollPage",
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
