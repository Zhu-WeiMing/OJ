// initial state
import { StoreOptions } from "vuex";
import ASSESS_ENUM from "@/access/accessEnum";
import { UserControllerService } from "../../generated";
import AccessEnum from "@/access/accessEnum";

export default {
  namespaced: true,

  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),

  actions: {
    //从远程请求获取登录信息
    async getLoginUser({ commit, state }, payload) {
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: AccessEnum.NOT_LOGIN,
        });
      }
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
