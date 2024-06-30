<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        :default-selected-keys="['1']"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" />
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/router";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import ASSESS_ENUM from "@/access/accessEnum";

const router = useRouter();
const store = useStore();

/**
 * 菜单显隐：
 * 在router文件中给路由新增一个标志位，用于判断路由是否显隐
 * visibleRoutes判断meta的hideInMenu 放入visibleRoutes中
 * 最后在<a-menu-item v-for="item in visibleRoutes" :key="item.path">
 *           {{ item.name }}
 *         </a-menu-item>
 *       </a-menu>
 *       渲染
 */

const visibleRoutes = computed(() => {
  return routes.filter((item) => {
    //根据hideInMenu的参数隐藏菜单（无权限页面不显示在菜单上）
    if (item.meta?.hideInMenu) {
      return false;
    }
    //根据权限过滤菜单
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});

// 默认主页
const selectedKeys = ref(["/"]);
/**
 * vue-router 提供了导航钩子:全局前置导航钩子 beforeEach 和全局后置导航钩子 afterEach，
 * 他们会在路由即将改变前和改变后进行触发。所以判断用户是否登录需要在 beforeEach 导航钩子中进行判断。
 * 1、to:即将要进入的目标路由对象；
 *
 * 2、from:当前导航即将要离开的路由对象；
 *
 * 3、next ：调用该方法后，才能进入下一个钩子函数（afterEach）。
 */
router.afterEach((to, from, next) => {
  selectedKeys.value = [to.path];
});

setTimeout(() => {
  /**
   * dispatch方法
   * type----模块名字/方法名
   */
  store.dispatch("user/getLoginUser", {
    userName: "zhuweiming",
    userRole: ASSESS_ENUM.ADMIN,
  });
}, 3000); //设置3s后执行

const doMenuClick = (key: string) => {
  router.push({ path: key });
};

/**
 * store.state.user.loginUser
 * 获取modules的user中的state的loginUser数据
 */
// console.log(store.state.user.loginUser);
</script>

<style scoped>
.title-bar {
}

.logo {
  height: 48px;
}
</style>
