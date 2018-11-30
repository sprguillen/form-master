import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({
    loggedInUser: state.loggedInUser,
  }),
  filter: mutation => mutation.type === 'setLoggedInUser',
});

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
  plugins: [vuexLocal.plugin],
});

export default store;
