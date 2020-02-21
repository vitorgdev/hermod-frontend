import Vue from "vue";
import Router from "vue-router";

import auth from "./middleware/auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/modules/auth"),
      meta: {
        template: "blank"
      }
    },
    {
      path: "/",
      redirect: "/auth"
    },
    {
      path: "/queue",
      name: "queue",
      component: () => import("@/modules/queue"),
      meta: {
        middleware: [auth]
      }
    },
    {
      path: "/departaments",
      name: "departament",
      component: () => import("@/modules/departament"),
      meta: {
        middleware: [auth]
      },
      children: [
        {
          path: ":id/edit",
          component: () => import("@/modules/departament/_components/edit")
        },
        {
          path: "create",
          component: () => import("@/modules/departament/_components/create")
        },
        {
          path: ":id/view",
          component: () => import("@/modules/departament/_components/view")
        }
      ]
    },
    {
      path: "/users",
      name: "user",
      component: () => import("@/modules/user"),
      meta: {
        middleware: [auth]
      },
      children: [
        {
          path: ":id/edit",
          component: () => import("@/modules/user/_components/edit")
        },
        {
          path: "create",
          component: () => import("@/modules/user/_components/create")
        },
        {
          path: ":id/view",
          component: () => import("@/modules/user/_components/view")
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

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
