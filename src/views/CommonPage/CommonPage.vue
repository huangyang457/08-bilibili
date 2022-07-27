<template>
  <biliHeaderVue/>
  <div class="page"><h5>我是page页面</h5></div>
</template>

<script>
import biliHeaderVue from '@/components/common/bili-header.vue'
export default {
  components: {
    biliHeaderVue
  }
}
</script>

<style>
.page {
  width: 300px;
  height: 200px;
  margin: 50px auto;
  font-size: 30px;
  font-weight: 500;
  line-height: 200px;
  text-align: center;
  color: blue;
  background-color: rgb(161, 151, 151);
}
</style>