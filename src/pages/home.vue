<template>
  <div class="page">
    <div class="page-head">
      <vheader class="page-head"></vheader>
      <vtab :allTab="tabs" :url="url"></vtab>
    </div>
    <div class="page-body"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import vheader from 'components/header/header'
import vtab from 'components/tab'
import vfooter from 'components/footer/footer'

export default {
  data() {
    return {
      czz: {},
      tabs: ['技术栈','饿了么', '2048', 'demo', '自适应简历'],
      url: ['personal', 'elma', 'game', 'demo', 'resume']
    }
  },
  created() {
    this.$http.get('/static/data.json').then((res) => {
      this.czz = res.data.czz;
    })
  },
  components: {
    vheader,
    vtab,
    vfooter
  }
}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
  
</style>
