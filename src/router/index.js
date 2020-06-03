import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'NotFount',
    meta: { keepAlive: false },
    component: () => import("@/components/NotFount.vue"),
  },{
    path: "/",
    name: "tabFirst",
    meta: { keepAlive: true },
    component: () => import("@/views/tabFirst/index.vue"),
  },{
    path: "/tabSecond",
    name: "tabSecond",
    meta: { keepAlive: false },
    component: () => import("@/views/tabSecond/index.vue"),
  },{
    path: "/tabThird",
    name: "tabThird",
    meta: { keepAlive: false },
    component: () => import("@/views/tabThird/index.vue"),
  },{
    path: "/tabFourth",
    name: "tabFourth",
    meta: { keepAlive: false },
    component: () => import("@/views/tabFourth/index.vue"),
  },{
    path: "/tabFifth",
    name: "tabFifth",
    meta: { keepAlive: false },
    component: () => import("@/views/tabFifth/index.vue"),
  },{
    path: "/other",
    name: "other",
    meta: { keepAlive: false },
    component: () => import("@/views/other/index.vue"),
  }
];

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
	}
});

export default router;
