import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import ASSESS_ENUM from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthView,
    meta: {
      //给路由新增一个标志位，用于判断路由是否显隐
      hideInMenu: true,
    },
  },
  {
    path: "/about",
    name: "about 管理员可见",
    meta: {
      access: ASSESS_ENUM.ADMIN,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
