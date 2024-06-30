<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ASSESS_ENUM from "@/access/accessEnum";
import { onMounted } from "vue";

/**
 * 全局初始化函数，有全局单词调用的代码，都可以写这里
 */
const doInit = () => {
  console.log("hello 欢迎来到我的项目");
};

onMounted(() => {
  doInit();
});

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  //判断to的页面meta是否有需要管理员用户的标识
  if (to.meta?.access === ASSESS_ENUM.ADMIN) {
    //是，查询已登录用户是否有权限
    if (store.state.user.loginUser?.userRole !== ASSESS_ENUM.ADMIN) {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
