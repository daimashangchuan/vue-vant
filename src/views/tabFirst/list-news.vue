<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :disabled="disabled">
    <van-list
      v-if="list && list.length>0"
      v-model="loading"
      :finished="finished"
      loading-text="玩命加载中..."
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell-group>
        <van-cell
          @click="jumpClick(item)"
          v-for="(item, index) in list"
          :key="index"
          :title="item.sTitle"
        />
      </van-cell-group>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { AppService } from "@/api";
export default {
  name: "listNews",
  props: {
    requestData: {
      type: Object,
      default: null
    },
    // F 开启上拉记载  T  关闭上拉加载
    finished: {
      type: Boolean,
      default: false
    },
    // F 开启下拉刷新  T 关闭下拉刷新
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [], // 响应数据
      loading: false, // 记载上拉状态
      refreshing: false, // 记载下拉状态
      page: 1,
      pageSize: 20,
    };
  },
  computed: {},
  mounted() {
    this.onLoad();
  },
  watch: {
    requestData:{
      async handler(nVal,oVal){
        this.page = 1;
        await this.onLoad();
      },
      deep:true
    },
  },
  methods: {
    async onLoad() {
      /**
       * 判断 T/F 第一页
       * 		T：设置loading为false不展示加载中
       * 		F：设置loading为true展示加载中
       */
      this.loading = this.page == 1 ? false : true;
      const { errCode, result } = await AppService.getShop({
        ...this.requestData,
        page: this.page,
        pageSize: this.pageSize
      });
      if (errCode == "USER_200") {
        /**
         * 判断 T/F 第一页
         * 		T：直接赋值
         * 		F：合并数据
         */
        this.list = this.page == 1 ? result.records : this.list.concat(result.records);
        // 更新分页的状态
        this.page++; // 分页加一
        this.loading = false; // 关闭上拉状态
        this.refreshing = false; // 关闭下拉状态
        /**
         * 判断请求页数与数据总页数大小
         * 		T：关闭触发
         * 		F：继续触发
         */
        if (this.page > result.pageCount) {
          this.finished = true;
        }
      }
    },
    async onRefresh() {
      this.page = 1;
      this.refreshing = true;
      await this.onLoad();
    },
    // 跳转到详情
    jumpClick(e) {
      this.$emit("jumpClick", e);
    }
  },
  components: {}
};
</script>

<style lang="less" scoped></style>
