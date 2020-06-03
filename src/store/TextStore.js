/**
 * 测试使用
 */
const state = {
  isTabShow: true,  // 是否展示 tabbar
};
const mutations = {
  SER_TAB_SHOW(state, newState) {
    state.isTabShow = newState;
  },
};
const actions = {
  setTabShows({ commit }, newState) {
    commit("SER_TAB_SHOW", newState);
  },
};
const getters = {
  tabShow: state => {
		if(state.isTabShow) {
			return 111111111
		} else { 
			return 22222222
		}
	},
}
export default {
  namespaced: true,
	state,
	mutations,
	actions,
  getters
};
