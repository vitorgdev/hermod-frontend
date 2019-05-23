import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/modules/courses")
    },
    {
      path: "/emissoes",
      name: "emissoes",
      component: () => import("@/modules/emissions")
    },
    {
      path: "/atendimentos",
      name: "atendimentos",
      component: () => import("@/views/Atendimento.vue")
    }
  ]
});
