<template>
  <main class="bili-layout">
    <section class="sec1">
    <section class="sec1_main">
      <div href="#" class="sec1_main_swiper">
        <swiperVue></swiperVue>
      </div>
      <!-- -------使用端口数据---------- -->
      <!-- <a href="#" class="sec1_main_item" v-for="(img, text) in axios.data">
      <img :src="img" alt="">
      <div>{{text}}</div>
      </a> -->
      <!-- ----------暂用-------- -->
      <a href="#" class="sec1_main_item"><img src="@/components/content/sec1/img/ts2hrmljkaa.jpg" alt=""><div class="sec1_main_item_describe">描述1111</div></a>
      <a href="#" class="sec1_main_item"><img src="@/components/content/sec1/img/ts2hrmljkaa.jpg" alt=""><div class="sec1_main_item_describe">描述2222</div></a>
      <a href="#" class="sec1_main_item"><img src="@/components/content/sec1/img/ts2hrmljkaa.jpg" alt=""><div class="sec1_main_item_describe">描述3333</div></a>
      <a href="#" class="sec1_main_item"><img src="@/components/content/sec1/img/ts2hrmljkaa.jpg" alt=""><div class="sec1_main_item_describe">描述4444</div></a>
      <a href="#" class="sec1_main_item"><img src="@/components/content/sec1/img/ts2hrmljkaa.jpg" alt=""><div class="sec1_main_item_describe">描述5555</div></a>
      <a href="#" class="sec1_main_item"><img src="@/components/content/sec1/img/ts2hrmljkaa.jpg" alt=""><div class="sec1_main_item_describe">描述6666</div></a>
      <a href="#" class="sec1_main_item"><img src="@/components/content/sec1/img/ts2hrmljkaa.jpg" alt=""><div class="sec1_main_item_describe">描述7777</div></a>
      <a href="#" class="sec1_main_item"><img src="@/components/content/sec1/img/ts2hrmljkaa.jpg" alt=""><div class="sec1_main_item_describe">描述8888</div></a>
      <a href="#" class="sec1_main_item"><img src="@/components/content/sec1/img/ts2hrmljkaa.jpg" alt=""><div class="sec1_main_item_describe">描述9999</div></a>
      <a href="#" class="sec1_main_item"><img src="@/components/content/sec1/img/ts2hrmljkaa.jpg" alt=""><div class="sec1_main_item_describe">描述0000</div></a>
    </section>
  </section>
  <div v-for="i in 5" key="i">
    <promotionVue>
    <template v-slot:logo_ico>
      <img src="../sec1/img/ts2hrmljkaa.jpg" alt="">
    </template>
    <template v-slot:headline>
      推广{{i}}
    </template>
  </promotionVue>
  </div>
  </main>
</template>

<script>
import promotionVue from '../sec2/promotion.vue';
import swiperVue from './swiper.vue';
export default {
  components: {
    promotionVue,
    swiperVue
  }
};
</script>

<style>
.bili-layout {
    width: 100%;
    max-width: 2078px;
    margin: 0 auto;
}
.sec1 {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 24px;
  display: grid;
  align-items: center;
  grid-gap: 20px 12px;
}
.sec1_main_item > img {
  width: 100%;
}
.sec1_main_item_describe {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 15px;
  font-weight: 500;
  color: #18191c;
}
.sec1_main_swiper {
  height: 100%;
  grid-column: span 2;
  grid-column: 1/3;
  grid-row: 1/3;
}
.sec1_main {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px 12px;
}

/* --------@media--------- */
@media (max-width: 1100px) {
  .bili-layout {
    padding: 0 56px;
  }
  .sec1 {
    grid-template-columns: repeat(4,1fr);
  }
  .sec1_main {
    grid-column: span 4;
    grid-template-columns: repeat(4,1fr);
    grid-template: 1/3 / auto auto auto;
  }
  .sec1_main a:nth-child(n + 6) {
    display: none;
  }
}
@media (min-width: 1100px) and (max-width: 1366.9px) {
  .bili-layout {
    padding: 0 64px;
  }
  .sec1 {
    grid-template-columns: repeat(5,1fr);
  }
  .sec1_main {
    grid-column: span 5;
    grid-template-columns: repeat(5,1fr);
  }
  .sec1_main a:nth-child(n + 8) {
    display: none;
  }
}
@media (min-width: 1367px) and (max-width: 1700.9px) {
  .bili-layout {
    padding: 0 96px;
    max-width: 2270px;
  }
  .sec1 {
    grid-template-columns: repeat(5,1fr);
  }
  .sec1_main {
    grid-column: span 5;
    grid-template-columns: repeat(5,1fr);
  }
  .sec1_main a:nth-child(n + 8) {
    display: none;
  }
}
@media (min-width: 1701px) and (max-width: 2199.9px) {
  .bili-layout {
    max-width: 2078px;
    padding: 0 96px;
  }
  .sec1 {
    grid-template-columns: repeat(6,1fr);
  }
  .sec1_main {
    grid-column: span 6;
    grid-template-columns: repeat(6,1fr);
  }
  .sec1_main a:nth-child(n + 10) {
    display: none;
  }
}
@media (min-width: 2200px) {
  .bili-layout {
    max-width: 2078px;
  }
  .sec1 {
    grid-template-columns: repeat(7,1fr);
  }
  .sec1_main {
    grid-column: span 7;
    grid-template-columns: repeat(7,1fr);
  }
}
</style>