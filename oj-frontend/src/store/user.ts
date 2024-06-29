// initial state
import { StoreOptions } from "vuex";

// state

// getters
const getters = {};

// actions

// mutations

export default {
  namespaced: true,
  state: {
    loginUser: {
      userName: "未登录",
      role: "notLogin",
    },
  },
  getters,
  actions: {
    getLoginUser({ commit, state }, payload) {
      //TODO 改成远程登录
      commit("updateUser", { userName: "已登录" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
