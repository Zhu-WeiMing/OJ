<template>
  <div class="userLoginView">
    <h2>用户登录</h2>
    <a-form
      label-align="left"
      :model="form"
      auto-label-width
      style="max-width: 480px; margin: 0 auto"
      :style="{ width: '600px' }"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" tooltip="请输入账号" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="post" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/**
 * 提交表单
 */
const store = useStore();
const router = useRouter();

const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);
const handleSubmit = async () => {
  // 调用后端接口
  const res = await UserControllerService.userLoginUsingPost(form);

  if (res.code === 0) {
    // 登陆成功
    await store.dispatch("user/getLoginUser");
    console.log(res);
    //跳转到主页
    router.push({
      path: "/",
      replace: true,
    });
    alert("登陆成功" + JSON.stringify(res.data));
  } else {
    // 登录失败
    message.error("登陆失败" + JSON.stringify(res.message));
  }
};
</script>
