<template>
  <el-carousel :interval="3000" arrow="always" style="height: 100%">
          <el-carousel-item v-for="item in 4" :key="item">
            <a href="#" class="swiper-img"><img style="width: 100%" src="./img/ts2hrmljkaa.jpg" alt=""></a>
            <a href="#" style="margin: 5px 100px 5px 15px;"><span text="2xl" justify="center">图片描述{{ item }}</span></a>
          </el-carousel-item>
        </el-carousel>
</template>

<script>
export default {

}
</script>

<style>
/* -------轮播图---------- */
.el-carousel__item span {
  color: #475669;
  opacity: 0.75;
  /* line-height: 300px; */
  font-size: 18px;
  margin: 0;
  text-align: left;
}
/* ----修改---- */
.swiper-img {
  height: 70%;
  width: 100%;
}
.el-carousel__container {
  height: 100% !important;
}
.el-carousel__button {
  width: 8px !important;
  height: 8px !important;
}
.el-carousel__arrow--left {
  top: 91% !important;
  left: 78% !important;
}
.el-carousel__arrow--right {
  top: 91% !important;
  right: 5% !important;
}
.el-carousel__indicators--horizontal {
  left: 10% !important;
}
/* ----修改结束---- */
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* ------轮播图结束----- */

</style>