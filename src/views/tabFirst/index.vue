a<template>
  <div class="container">
    <!-- <div class="datetime">{{ new Date() | dateTime }}</div> -->
    <van-tabs
      v-model="tabActive"
      sticky
      animated
      offset-top="46"
      swipe-threshold="5"
      title-active-color="#1989fa"
      color="#1989fa"
      @click="onTabsClick"
    >
      <van-tab v-for="(tab, tabIndex) in list" :key="tabIndex" :title="tab.title" :name="tab.tabActive">
        <listNews
          v-if="tabActive == tab.tabActive"
          :finished="false"
          :disabled="false"
          @jumpClick="jumpClick"
          :requestData="requestData"
        />
      </van-tab>
    </van-tabs>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { AppService } from "@/api";
export default {
  data() {
    return {
      tabActive: 1,
      list: [
        {
          title: "分页一",
          tabActive: 1
        },
        {
          title: "分页二",
          tabActive: 2
        },
        {
          title: "分页三",
          tabActive: 3
        },
        {
          title: "分页四",
          tabActive: 4
        },
        {
          title: "分页五",
          tabActive: 5
        }
      ],
      requestData: null
    };
  },
  computed: {},
  created() {
    this.requestData = {
      longitude: 117.233055,
      latitude: 39.109994,
      tabActive: this.tabActive,
    };
  },
  methods: {
    ...mapActions("AppStore", [
      "setTabShow",
      "setHeadShow",
      "setHeadShowContent"
    ]),
    // 列表跳转函数
    jumpClick(e) {
      const query = { shopId: e.sId };
      this.$router.push({ path: "/other", query });
    },
    // tab 切换
    onTabsClick(e) {
      this.requestData = JSON.parse(JSON.stringify(this.requestData));
      this.requestData.tabActive = e;
    }
  },
  components: {
    // 分页和上拉加载
    listNews: () => import("./list-news"),
  },
  activated() {
    this.setTabShow(true);
    this.setHeadShow(true);
    this.setHeadShowContent({
      title: "首页",
      showleft: false,
      showRight: true,
      actions: {
        code: "text",
        text: "确定"
      },
      onLeftClick: null,
      onRightClick: () => {
        this.$toast("首页");
      }
    });
  }
};
</script>

<style lang="less" scoped>
.datetime {
  height: 50px;
}
</style>
