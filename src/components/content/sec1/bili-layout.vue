<template>
  <main class="bili-layout">
    <section class="sec1">
    <section class="sec1_main">
      <!-- --------轮播图------ -->
      <div href="#" class="sec1_main_swiper">
        <swiperVue v-if="swiperControl"></swiperVue>
        <swiperGetVue v-if="!swiperControl">
          <el-carousel-item v-for="item in sec1MainSwiper" :key="item.id">
            <a to="/page" class="swiper-img"><img style="width: 100%; height: 100%;" :src="item.address" alt=""></a>
            <a to="/page" style="display: block; margin: 5px 100px 5px 15px;"><span text="2xl" justify="center">图片描述{{ item.title }}</span></a>
          </el-carousel-item>
        </swiperGetVue>
      </div>
      <!-- -------轮播图右侧---------- -->
      <router-link to="/page" class="sec1_main_item" v-for="item in 10" :key="item">
      <img src="@/components/content/sec1/img/ts2hrmljkaa.jpg" alt="">
      <div>描述{{item}}</div>
      </router-link>
    </section>
  </section>
  <div v-for="i in 5" :key="i">
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
import swiperGetVue from './swiperGet.vue';
import { getSec1 } from '@/network/home'
export default {
  data() {
    return {
      sec1MainSwiper: [],
      sec1_main_item: [],
      sec2_promotion: [],
      swiperControl: true
    }
  },
  components: {
    promotionVue,
    swiperVue,
    swiperGetVue
  },
  created() {
    getSec1().then((res) => {
      console.log(res.swiper);
      this.sec1MainSwiper = res.swiper;
      console.log(this.sec1MainSwiper);
      this.swiperControl = false;
    }).catch(() => {
      console.log("未连接到接口，使用备用数据");
      this.swiperControl = true;
    })
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