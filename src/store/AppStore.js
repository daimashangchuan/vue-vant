/**
 * head 和 tabbar 用到的状态
 */
const state = {
  isTabFixedShow: false,  // 防止 tab 被键盘顶起来
  isTabShow: true,  // 是否展示 tabbar
  isheadShow: true, // 是否展示头部
  title: "首页", // 标题的内容
  showleft: false, // 是否显示返回按钮
  showRight: false, // 是否显示右上角的内容
  actions: {
    code: null, // text/icon  展示字/图片
    text: null, // 按钮的内容
    icon: null, // 按钮的图标
  },
  onLeftClick: null,    // 右边点击事件
  onRightClick: null,    // 左边点击事件 
  loadingShow: false    // 请求接口动画
};
const mutations = {
  SER_TAB_SHOW(state, newState) {
    state.isTabShow = newState;
  },
  SER_HEAD_SHOW(state, newState) {
    state.isheadShow = newState;
  },
  SER_HEAD_SHOW_CONTENT(state, newState) {
    state.title = newState.title;
    state.showleft = newState.showleft;
    state.showRight = newState.showRight;
    state.actions = newState.actions;
    state.onLeftClick = newState.onLeftClick;
    state.onRightClick = newState.onRightClick;
  },
  SET_LOADING(state, newState) {
    state.loadingShow = newState;
  },
  SET_TAB_FIXED_SHOW(state, newState) {
    state.isTabFixedShow = newState;
  }
};
const actions = {
  setTabShow({ commit }, newState) {
    commit("SER_TAB_SHOW", newState);
  },
  setHeadShow({ commit }, newState) {
    commit("SER_HEAD_SHOW", newState);
  },
  setHeadShowContent({ commit }, newState) {
    commit("SER_HEAD_SHOW_CONTENT", newState);
  },
  setLoading({ commit }, newState) {
    commit("SET_LOADING", newState);
  },
  setTabFixedShow({ commit }, newState) {
    commit("SET_TAB_FIXED_SHOW", newState);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
