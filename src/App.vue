<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get('/static/data.json').then((res) => {
      console.log(res);
    })
  }
}
</script>

<style>

</style>
