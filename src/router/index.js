import Vue from "vue";
import VueRouter from "vue-router";
import Pokedex from "../components/Pokedex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:id",
    name: "pokedex",
    component: Pokedex
  },
];

const router = new VueRouter({
  routes
});

export default router;
