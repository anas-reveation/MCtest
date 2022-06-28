import { Auth } from 'aws-amplify';
import { API } from 'aws-amplify';
import { getUser } from '../../../graphql/queries';

export default {
  // async getUserData(userId) {
  //   const user = await API.graphql({
  //     query: getUser,
  //     variables: { id: userId },
  //   });
  //   if (user) {
  //     console.log('user from getuser', user);
  //   }
  // },

  async load({ commit }, req) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userData = user ? user.attributes : user;
      console.log('userData', user);
      commit('setUser', userData);
      return user;
    } catch (error) {
      commit('setUser', null);
    }
  },

  async register({ commit }, { email, password }) {
    commit('SET_LOADER', true, { root: true });
    try {
      const user = await Auth.signUp({
        username: email,
        password,
      });
      commit('SET_LOADER', false, { root: true });
      return user;
    } catch (err) {
      commit('SET_LOADER', false, { root: true });
      console.error('ERR', err);
    }
  },

  async confirmRegistration({ commit }, { email, code }) {
    commit('SET_LOADER', true, { root: true });

    try {
      commit('SET_LOADER', false, { root: true });
      await Auth.confirmSignUp(email, code);
      return;
    } catch (err) {
      commit('SET_LOADER', false, { root: true });
      console.error('ERR', err);
    }
  },

  async login({ commit }, { email, password }) {
    commit('SET_LOADER', true, { root: true });

    try {
      const user = await Auth.signIn(email, password);
      const userData = user ? user.attributes : user;
      commit('setUser', userData);
      // console.log(user.username);
      // const userApiData = await API.graphql({
      //   query: getUser,
      //   variables: { id: 'a164598a-2952-4c0e-a568-178c248009f7' },
      // });
      // console.log('user from getuser', userApiData);

      commit('SET_LOADER', false, { root: true });
      return user;
    } catch (err) {
      commit('SET_LOADER', false, { root: true });
      console.error('ERR', err);
    }
  },

  async logout({ commit }) {
    commit('SET_LOADER', true, { root: true });

    try {
      await Auth.signOut();
      commit('setUser', null);
      commit('SET_LOADER', false, { root: true });
      return true;
    } catch (err) {
      commit('SET_LOADER', false, { root: true });
      console.error('ERR', err);
      return false;
    }
  },
};
