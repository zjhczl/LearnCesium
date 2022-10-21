import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HelloWorld from "../components/HelloWorld.vue";
import ArcgisMap from "../components/ArcgisMap.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  },
  {
    path: "/arcgismap",
    name: "arcgismap",
    component: ArcgisMap,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
