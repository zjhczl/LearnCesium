import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HelloWorld from "../components/HelloWorld.vue";
import ArcgisMap from "../components/ArcgisMap.vue";
import _3Dtiles from "../components/3Dtiles.vue";
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
  {
    path: "/3dtiles",
    name: "3dtiles",
    component: _3Dtiles,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
