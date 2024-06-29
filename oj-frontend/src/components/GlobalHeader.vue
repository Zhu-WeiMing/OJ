<template>
  <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
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
        <a-menu-item v-for="item in routes" :key="item.path">
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
import { ref } from "vue";
import { useStore } from "vuex";

const route = useRouter();
const router = useRouter();
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
    // userName: "zhuweiming",
    role: "admin",
  });
}, 3000); //设置3s后执行

const doMenuClick = (key: string) => {
  router.push({ path: key });
};

const store = useStore();
/**
 * store.state.user.loginUser
 * 获取modules的user中的state的loginUser数据
 */
console.log(store.state.user.loginUser);
</script>

<style scoped>
.title-bar {
}

.logo {
  height: 48px;
}
</style>
