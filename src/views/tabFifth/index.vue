<template>
  <div class="container">
    <p>tabFifth</p> 
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
    ...mapActions('AppStore', ['setTabShow', 'setHeadShow', 'setHeadShowContent']),
  },
  components: {},
  created() {
    this.setTabShow(true);
    this.setHeadShow(true);
    this.setHeadShowContent({ 
      title: '设置',
      showleft: false, 
      showRight: true,
      actions: {
        code: 'icon', 
        icon: 'setting',  
      },
      onLeftClick: null,
      onRightClick: () => {
        this.$toast('设置');
      }
    }) 
  },
};
</script>

<style lang="less" scoped></style>
