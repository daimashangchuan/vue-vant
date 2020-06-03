<template>
  <div id="root">
    <div id="app" :style="!isheadShow&&!isTabShow ? { padding: 0 } : !isheadShow ? { paddingTop: 0 } : !isTabShow ? { paddingBottom: 0 }: ''">
      <!-- 接口加载loading -->
      <AppLoading></AppLoading>

      <!-- 公共的 head -->
      <app-header></app-header>

      <!-- 本地接口数据缓存 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" :key="$route.fullPath"></router-view>

      <!-- 公共的 foot -->
      <app-tab-bar></app-tab-bar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppHeader from "./components/AppHeader";
import AppTabBar from "./components/AppTabBar";
import AppLoading from "./components/AppLoading";
export default {
  components: {
    AppHeader,
    AppTabBar,
    AppLoading
  },
  computed: {
    ...mapState("AppStore", ["isheadShow", "isTabShow"])
  }
};
</script>

<style lang="less">
@import "./assets/css/default.less";
</style>
