import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedInUser: {},
  },
  getters: {
    getLoggedInUser(state) {
      return state.loggedInUser;
    },
  },
  mutations: {
    setLoggedInUser(state, { user }) {
      state.loggedInUser = user;
    },
  },
});

export default store;
