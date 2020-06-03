<template>
  <div class="container">
    <div class="datetime">{{ new Date() | dateTime }}</div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-if="list.length>0" v-model="loading" :finished="finished" loading-text='玩命加载中...' finished-text="没有更多了" @load="onLoad">
        <van-cell-group>
          <van-cell @click="cellClick(item)" v-for="(item, index) in list" :key="index" :title="item.sTitle" />
        </van-cell-group>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { AppService } from '@/api';
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      page: 1,
    };
  },
  computed: {},
  mounted() {
    this.onLoad()
  },
  methods: {
    ...mapActions('AppStore', ['setTabShow', 'setHeadShow', 'setHeadShowContent']),
    ...mapActions('TextStore', ['setTabShows']),
    async onLoad() {
      if(this.page == 1) {
        this.list = [];
        this.loading = false;
      } else {
        this.loading = true;
      }
      // 设置 loading 加载
      const { errCode, result } = await AppService.getShop({
        longitude: 117.233055,
        latitude: 39.109994,
        page: this.page,
        pageSize: 40
      });
      if(errCode == "USER_200") {
        this.list = this.page == 1 ? result.records : this.list.concat(result.records);
        this.page++;
        this.loading = this.list.length>0 ? false : true;
        if (this.page > result.pageCount) {
          this.finished = true;
        }
      }
    },
    async onRefresh() {
      this.page = 1;
      // 设置 loading 加载
      const { errCode, result } = await AppService.getShop({
        longitude: 117.233055,
        latitude: 39.109994,
        page: this.page,
        pageSize: 40
      });
      if(errCode == "USER_200") {
        this.list = result.records;
        this.page++;
        this.refreshing = false;
      }
    },
    cellClick(e) {
      const query = {
        shopId: e.sId
      }
      this.$router.push({ path: '/other', query })
    }
  },
  components: {},
  activated() {
    this.setTabShow(true);
    this.setHeadShow(true);
    this.setHeadShowContent({
      title: '首页',
      showleft: false,
      showRight: true,
      actions: {
        code: 'text',
        text: '确定',
      },
      onLeftClick: null,
      onRightClick: () => {
        this.$toast('首页');
      }
    })
  },
};
</script>

<style lang="less" scoped>
  .datetime {
    height: 100px;
  }
</style>
