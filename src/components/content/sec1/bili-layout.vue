<template>
  <section class="sec1">
    <section class="sec1_main">
      <a href="#" class="sec1_main_swiper">
        <el-carousel :interval="3000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </a>
      <a href="#" class="sec1_main_item">1</a>
      <a href="#" class="sec1_main_item">2</a>
      <a href="#" class="sec1_main_item">3</a>
      <a href="#" class="sec1_main_item">4</a>
      <a href="#" class="sec1_main_item">5</a>
      <a href="#" class="sec1_main_item">6</a>
      <a href="#" class="sec1_main_item">7</a>
      <a href="#" class="sec1_main_item">8</a>
      <a href="#" class="sec1_main_item">9</a>
      <a href="#" class="sec1_main_item">10</a>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style>
.sec1 {
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.sec1_main_swiper {
  grid-area: swiper;
}
.sec1_main {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
}
/* -------轮播图---------- */
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* --------@media--------- */
@media (max-width: 1100px) {
  .sec1 {
    padding: 0 56px;
  }
  .sec1_main {
    grid:
      "swiper swiper . . ."
      "swiper swiper . . .";
  }
  .sec1_main a:nth-child(n + 8) {
    display: none;
  }
}
@media (min-width: 1100px) and (max-width: 1366.9px) {
  .sec1 {
    padding: 0 64px;
  }
  .sec1_main {
    grid:
      "swiper swiper . . ."
      "swiper swiper . . .";
  }
  .sec1_main a:nth-child(n + 8) {
    display: none;
  }
}
@media (min-width: 1367px) and (max-width: 1700.9px) {
  .sec1 {
    padding: 0 96px;
    max-width: 2270px;
  }
  .sec1_main {
    grid:
      "swiper swiper . . ."
      "swiper swiper . . .";
  }
  .sec1_main a:nth-child(n + 8) {
    display: none;
  }
}
@media (min-width: 1701px) and (max-width: 2199.9px) {
  .sec1 {
    max-width: 2078px;
    padding: 0 96px;
  }
  .sec1_main {
    grid:
      "swiper swiper . . . ."
      "swiper swiper . . . .";
  }
  .sec1_main a:nth-child(n + 10) {
    display: none;
  }
}
@media (min-width: 2200px) {
  .sec1 {
    max-width: 2078px;
  }
  .sec1_main {
    grid:
      "swiper swiper . . . . ."
      "swiper swiper . . . . .";
  }
}
</style>