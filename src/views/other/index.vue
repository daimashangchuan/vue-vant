<template>
  <div class="container">
    <p>{{ list }}</p> 
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  data() {
    return {
      list: [1,2,3]
    };
  },
  computed: {},
  methods: {
    ...mapActions('AppStore', ['setTabShow', 'setHeadShow', 'setHeadShowContent']),
  },
  components: {},
  created() {
    this.setTabShow(false);
    this.setHeadShow(true);
    this.setHeadShowContent({ 
      title: '二级页面',
      showleft: true, 
      showRight: true,
      actions: {
        code: 'icon', 
        icon: 'setting',
      },
      onLeftClick: () => {
        this.$router.go(-1);
      },
      onRightClick: () => {
        this.list = [1,2,3];
      }
    }) 
    this.list = this.$route.query.shopId;
  },
};
</script>

<style lang="less" scoped></style>
