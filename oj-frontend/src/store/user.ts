// initial state
import { StoreOptions } from "vuex";
import ASSESS_ENUM from "@/access/accessEnum";

export default {
  namespaced: true,

  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: ASSESS_ENUM.NOT_LOGIN,
    },
  }),

  actions: {
    getLoginUser({ commit, state }, payload) {
      //TODO 改成远程登录
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
