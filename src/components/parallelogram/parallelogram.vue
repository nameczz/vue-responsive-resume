<template>
  <div class="parallelogram">
    {{ desc }}
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      default: '联系方式'
    }
  }
};
</script>

<style lang="stylus" rel='stylesheet/stylus'>
  .parallelogram
    padding: 10px
    color: white
    font-size: 26px
    z-index: 20
    background: #00d3ff
    text-align:center
    

</style>
