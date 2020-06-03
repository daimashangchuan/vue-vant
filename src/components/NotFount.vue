<template>
  <div class="container">
    <van-image :src="require('@/assets/images/noFount.png')" />
    <div class="goViews" @click="GO_VIEWS">返回首页</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions('AppStore', ['setTabShow', 'setHeadShow']),
    GO_VIEWS() {
      this.$router.replace("/");
    }
  },
  components: {},
  created() {
    this.setTabShow(false);
    this.setHeadShow(false);
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  background: @back494;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .goViews {
    color: @colofff;
  }
}
</style>
