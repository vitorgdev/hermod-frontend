import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/queue",
      name: "queue",
      component: () => import("@/modules/queue")
    },
    {
      path: "/departaments",
      name: "departament",
      component: () => import("@/modules/departament"),
      children: [
        {
          path: ":id/editar",
          component: () => import("@/modules/departament/_components/edit")
        },
        {
          path: "create",
          component: () => import("@/modules/departament/_components/create")
        }
      ]
    },
    {
      path: "/atendimentos",
      name: "atendimentos",
      component: () => import("@/views/Atendimento.vue")
    }
  ]
});
