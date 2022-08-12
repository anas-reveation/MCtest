export default {
  setUser(state, user) {
    state.isAuthenticated = !!user;
    state.user = user;
  },

  setUserGroup(state, groupName) {
    state.userGroup = groupName;
  },

  setStripeSeller(state, stripeSellerId) {
    state.user = {
      ...state.user,
      stripe_seller_id: stripeSellerId,
    };
  },
};
