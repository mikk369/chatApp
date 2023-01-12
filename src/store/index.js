import { createStore } from 'vuex';

export default createStore({
  state: {
    token: null,
  },
  getters: {
    isLoggedIn: (state) => {
      // check if token is not null
      return state.token !== null;
    },
  },
  mutations: {
    authorized(state) {
      if (localStorage.getItem('pocketbase_auth')) {
        state.token = localStorage.getItem('pocketbase_auth');
      }
    },
    logout(state) {
      localStorage.removeItem('pocketbase_auth');
      localStorage.removeItem('user');
      state.token = null;
    },
  },
  actions: {},
});
