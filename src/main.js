import Vue from "vue";
import App from "./App.vue";
import vueRouter from 'vue-router'

// 添加路由
import router from "./router";
// 添加vuex状态
import store from "./store";
// 按需导入组件
import "./plugins/vant";
// 添加全局的样式变量
import "./assets/style/reset.css";
// 配置 vant 的 px 转化为 rem
import "lib-flexible/flexible.js";
// 挂载公共的方法
import { SessionUtil, LocalUtil, CookieUtil } from "./utils/caches";
Vue.use(SessionUtil).use(LocalUtil).use(CookieUtil);
// 全局过滤器 filter 
import initFilters from './utils/fliters';
initFilters(Vue);
// 全局过滤器 filter 
import initDirectives from './utils/directives';
initDirectives(Vue);

Vue.config.productionTip = false;

// 解决不能跳转自己的问题
// const originalPush = vueRouter.prototype.push
// vueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
