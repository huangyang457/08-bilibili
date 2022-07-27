<template>
  <biliHeaderVue />
  <div class="page">{{ $route.params.user }},您好！</div>
  <div class="page">您搜索了{{ $route.query.message }}</div>
</template>

<script>
import biliHeaderVue from "@/components/common/bili-header.vue";
export default {
  components: {
    biliHeaderVue,
  },
};
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
  color: rgb(240, 161, 141);
  background-color: rgb(161, 151, 151);
}
</style>