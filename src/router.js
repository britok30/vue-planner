import Vue from "vue";
import Router from "vue-router";
import Search from "./components/Search.vue";
import Construction from "./components/Construction.vue";
import Roofing from "./components/Roofing.vue";
import About from "./components/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Search",
      component: Search
    },
    {
      path: "/construction",
      name: "Construction",
      component: Construction
    },
    {
      path: "/roofing",
      name: "Roofing",
      component: Roofing
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
  
  ]
});
