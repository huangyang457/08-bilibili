<template>
  <div class="bili-top">
    <div class="bili-header" style="height: 155px">
      <div class="bg"><img src="./img/bg.webp" /></div>
      <div class="bili-header__bar">
        <ul class="left-entry">
          <li class="fixbet">
            <router-link to="/#" style="color: #fff">
              <img class="bili-ico" src="./img/bili-ico.svg" alt="" />
              <span>首页</span>
            </router-link>
          </li>
          <li>
            <a href="#"><span>番剧</span></a>
          </li>
          <li>
            <a href="#"><span>直播</span></a>
          </li>
          <li>
            <a href="#"><span>游戏中心</span></a>
          </li>
          <li>
            <a href="#"><span>会员购</span></a>
          </li>
          <li>
            <a href="#"><span>漫画</span></a>
          </li>
          <li>
            <a href="#"><span>赛事</span></a>
          </li>
          <li class="download flexCenter">
            <a href="#"
              ><img
                style="width: 16px; height: 16px; margin: 0 4px"
                src="./img/download.svg"
              /><span>下载客户端</span></a
            >
          </li>
        </ul>
        <div class="center-search-container">
          <div class="center-search-container__bar">
            <form id="nav-searchform">
              <div class="nav-search-content">
                <input
                  v-model="message"
                  class="nav-search-input"
                  type="search"
                  placeholder="推荐内容"
                />
              </div>
              <div v-on:click="goToSearch" class="nav-search-btn">
                <img class="search-ico" src="./img/search.svg" />
              </div>
            </form>
          </div>
        </div>
        <ul class="right-entry">
          <li>
            <a href="#">
              <div class="header-avatar-wrap">
                <img src="./img/id.webp" />
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="right-entry_outside">
              <img style="width: 20px; height: 20px" src="./img/vip.svg" /><span
                >大会员</span
              >
            </a>
          </li>
          <li>
            <a href="#" class="right-entry_outside">
              <img
                style="width: 20px; height: 20px"
                src="./img/message.svg"
              /><span>消息</span>
            </a>
          </li>
          <li>
            <a href="#" class="right-entry_outside">
              <img
                style="width: 20px; height: 20px"
                src="./img/dynamic.svg"
              /><span>动态</span>
            </a>
          </li>
          <li>
            <a href="#" class="right-entry_outside">
              <img style="width: 20px; height: 20px" src="./img/favorite.svg" />
              <span>收藏</span>
            </a>
          </li>
          <li class="right-entry_outside">
            <a href="#" class="right-entry_outside">
              <img style="width: 20px; height: 20px" src="./img/history.svg" />
              <span>历史</span>
            </a>
          </li>
          <li>
            <a href="#" class="right-entry_outside">
              <img style="width: 20px; height: 20px" src="./img/creation.svg" />
              <span>创作中心</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flexCenter upload"
              style="background-color: #fb7299"
            >
              <img style="weight: 18px; height: 18px" src="./img/upload.svg" />
              <span>上传</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="logo" v-on:click="linkToPage"><img src="./img/logo.png" /></div>
      <div class="taper-line"></div>
    </div>
    <div class="bili-header__channel">
      <div class="channel-icons">
        <a href="#"
          ><img src="" style="background-color: gray" alt=" " /><span
            >动态</span
          ></a
        >
        <a href="#"
          ><img src="" style="background-color: gray" alt=" " /><span
            >热门</span
          ></a
        >
        <a href="#"
          ><img src="" style="background-color: gray" alt=" " /><span
            >频道</span
          ></a
        >
      </div>
      <div class="right-channel-container">
        <div class="channel-items__left">
          <a class="channel-link" href="#">番剧</a>
          <a class="channel-link" href="#">电影</a>
          <a class="channel-link" href="#">国创</a>
          <a class="channel-link" href="#">电视剧</a>
          <a class="channel-link" href="#">综艺</a>
          <a class="channel-link" href="#">纪录片</a>
          <a class="channel-link" href="#">动画</a>
          <a class="channel-link" href="#">游戏</a>
          <a class="channel-link" href="#">鬼畜</a>
          <a class="channel-link" href="#">音乐</a>
          <a class="channel-link" href="#">舞蹈</a>
          <a class="channel-link" href="#">影视</a>
          <a class="channel-link" href="#">娱乐</a>
          <a class="channel-link" href="#">知识</a>
          <a class="channel-link" href="#">科技</a>
          <a class="channel-link" href="#">资讯</a>
          <a class="channel-link" href="#">美食</a>
          <a class="channel-link" href="#">生活</a>
          <a class="channel-link" href="#">汽车</a>
          <a class="channel-link" href="#">时尚</a>
          <a class="channel-link" href="#">运动</a>
          <a class="channel-link" href="#">动物圈</a>
          <a class="channel-link" href="#">VLOG</a>
          <a class="channel-link" href="#">搞笑</a>
          <a class="channel-link" href="#">单机游戏</a>
          <a class="channel-link" href="#">虚拟UP主</a>
          <a class="channel-link" href="#">公益</a>
          <a class="channel-link" href="#">公开课</a>
          <a class="channel-link" href="#"><span>更多</span><svg width="10" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="buttom-ico"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.50588 3.40623C7.40825 3.3086 7.24996 3.3086 7.15232 3.40623L4.41244 6.14612L1.67255 3.40623C1.57491 3.3086 1.41662 3.3086 1.31899 3.40623C1.22136 3.50386 1.22136 3.66215 1.31899 3.75978L4.11781 6.5586C4.28053 6.72132 4.54434 6.72132 4.70706 6.5586L7.50588 3.75978C7.60351 3.66215 7.60351 3.50386 7.50588 3.40623Z" fill="currentColor"></path><path d="M7.15232 3.40623L7.50588 3.75978L7.50588 3.75978L7.15232 3.40623ZM7.50588 3.40623L7.15232 3.75978L7.15233 3.75978L7.50588 3.40623ZM4.41244 6.14612L4.05888 6.49967C4.15265 6.59344 4.27983 6.64612 4.41244 6.64612C4.54504 6.64612 4.67222 6.59344 4.76599 6.49967L4.41244 6.14612ZM1.67255 3.40623L2.0261 3.05268L2.0261 3.05268L1.67255 3.40623ZM1.31899 3.40623L0.965439 3.05268L0.965439 3.05268L1.31899 3.40623ZM1.31899 3.75978L1.67255 3.40623V3.40623L1.31899 3.75978ZM4.11781 6.5586L3.76425 6.91215L4.11781 6.5586ZM4.70706 6.5586L4.35351 6.20505L4.70706 6.5586ZM7.50588 3.75978L7.15233 3.40623L7.15232 3.40623L7.50588 3.75978ZM7.50588 3.75978C7.40825 3.85742 7.24996 3.85742 7.15232 3.75978L7.85943 3.05268C7.56654 2.75978 7.09166 2.75978 6.79877 3.05268L7.50588 3.75978ZM4.76599 6.49967L7.50588 3.75978L6.79877 3.05268L4.05888 5.79257L4.76599 6.49967ZM1.31899 3.75978L4.05888 6.49967L4.76599 5.79257L2.0261 3.05268L1.31899 3.75978ZM1.67254 3.75979C1.57491 3.85742 1.41662 3.85742 1.31899 3.75979L2.0261 3.05268C1.73321 2.75978 1.25833 2.75978 0.965439 3.05268L1.67254 3.75979ZM1.67255 3.40623C1.77018 3.50386 1.77018 3.66215 1.67255 3.75978L0.965439 3.05268C0.672546 3.34557 0.672546 3.82044 0.965439 4.11334L1.67255 3.40623ZM4.47136 6.20505L1.67255 3.40623L0.965439 4.11334L3.76425 6.91215L4.47136 6.20505ZM4.35351 6.20505C4.38605 6.1725 4.43882 6.1725 4.47136 6.20505L3.76425 6.91215C4.12223 7.27013 4.70264 7.27013 5.06062 6.91215L4.35351 6.20505ZM7.15232 3.40623L4.35351 6.20505L5.06062 6.91215L7.85943 4.11334L7.15232 3.40623ZM7.15233 3.75978C7.05469 3.66215 7.05469 3.50386 7.15233 3.40623L7.85943 4.11334C8.15233 3.82045 8.15233 3.34557 7.85943 3.05268L7.15233 3.75978Z" fill="currentColor"></path></svg></a> 
        </div>
        <div class="channel-items__right">
          <a style="letter-spacing:2px;" href="#" class="channel-link__right"><svg t="1642646834655" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4061" width="200" height="200"><path d="M810.6496 153.6C843.6736 153.6 870.4 180.3264 870.4 213.3504v597.2992c0 33.024-26.7264 59.7504-59.7504 59.7504H213.3504A59.7504 59.7504 0 0 1 153.6 810.6496V213.3504C153.6 180.3264 180.3264 153.6 213.3504 153.6z m-332.8 460.8H341.3504a34.1504 34.1504 0 0 0 0 68.2496h136.4992a34.1504 34.1504 0 1 0 0-68.2496z m204.8-136.6016H341.3504a34.1504 34.1504 0 0 0 0 68.2496h341.2992a34.1504 34.1504 0 0 0 0-68.2496z m0-136.3968H341.3504a34.1504 34.1504 0 0 0 0 68.2496h341.2992a34.1504 34.1504 0 1 0 0-68.2496z" p-id="4062"></path></svg><span>专栏</span></a>
          <a style="letter-spacing:2px;" href="#" class="channel-link__right"><svg t="1642646844599" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4188" width="200" height="200"><path d="M772.4544 229.2736l2.048 6.4512 87.2448 283.136c8.8576 33.1264-10.24 66.56-41.984 78.4384l-6.5536 2.048-118.1696 31.744a32.768 32.768 0 0 1-8.192 1.0752l-4.096-0.2048-124.672-14.6432-193.3824 51.8144 36.6592 136.704a49.152 49.152 0 0 1-93.184 30.8736l-1.792-5.4272L155.2896 267.264a49.152 49.152 0 0 1 93.184-30.8736l1.792 5.4272 4.096 15.36 188.928-50.6368a32.768 32.768 0 0 1 8.1408-1.0752l4.096 0.2048 124.5184 14.592 112.1792-30.0544c33.4336-8.96 68.1984 7.7824 80.2304 39.0144z" p-id="4189"></path></svg><span>活动</span></a>
          <a href="#" class="channel-link__right"><svg t="1642670011510" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3116" width="200" height="200"><path d="M836.3008 170.6496c17.1008 0 31.2832 12.6464 33.7408 29.0816L870.4 204.8v316.16a34.1504 34.1504 0 0 1-29.0816 33.792l-5.0176 0.3584h-102.4v195.7888a34.1504 34.1504 0 0 1-29.1328 33.792l-5.0176 0.3584H386.7648l-127.3344 95.5392a34.2016 34.2016 0 0 1-53.248-17.3568l-1.024-4.8128-0.3584-5.12-0.0512-68.3008H153.6a34.1504 34.1504 0 0 1-32.6656-24.2176l-1.0752-4.8128-0.4096-5.0688v-409.6c0-17.152 12.6464-31.3344 29.0816-33.792L153.6 307.2h174.2336V204.8c0-17.152 12.6464-31.3344 29.1328-33.792l5.0176-0.3584h474.3168z m-477.9008 409.6H256l-5.0688 0.4096a34.1504 34.1504 0 0 0 0 67.4816l5.0688 0.4096h102.4l5.0688-0.4096A34.1504 34.1504 0 0 0 358.4 580.2496z m102.4-136.4992H256l-5.0688 0.4096a34.1504 34.1504 0 0 0 0 67.4816l5.0688 0.4096h204.8l5.0688-0.4096A34.1504 34.1504 0 0 0 460.8 443.7504z m341.2992-204.8512h-406.016v68.2496h303.616c17.152 0 31.3856 12.6464 33.792 29.1328l0.3584 5.0176v145.4592l68.2496 0.0512V238.8992z" p-id="3117"></path></svg><span>社区中心</span></a>
          <a style="letter-spacing:2px;" href="#" class="channel-link__right"><svg t="1642646710703" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3158" width="200" height="200"><path d="M682.6496 204.8512c35.4816 0 64.6656 27.136 67.9424 61.696l0.3072 6.6048V358.4l81.92-61.44a34.2016 34.2016 0 0 1 53.248 17.408l1.024 4.7616 0.3584 5.12v392.5504a34.1504 34.1504 0 0 1-50.2784 30.1056l-4.352-2.7648-81.92-61.4912v68.3008c0 33.1264-23.552 60.7232-54.8352 66.9696l-6.8608 1.024-6.5536 0.256H204.8a68.2496 68.2496 0 0 1-67.9936-61.696l-0.3072-6.5536V273.152c0-35.4816 27.136-64.6656 61.696-67.9936L204.8 204.8512h477.8496zM385.3824 389.12a34.1504 34.1504 0 0 0-34.0992 34.1504v179.6096a34.1504 34.1504 0 0 0 53.0432 28.416l134.7584-89.8048a34.1504 34.1504 0 0 0 0-56.832L404.3264 394.8544a34.1504 34.1504 0 0 0-18.944-5.7344z" p-id="3159"></path></svg><span>直播</span></a>
          <a style="letter-spacing:2px;" href="#" class="channel-link__right"><svg t="1642669966795" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2862" width="200" height="200"><path d="M749.2096 168.96a102.4 102.4 0 0 1 102.2464 96.3584l0.1536 6.0416v477.8496a102.4 102.4 0 0 1-96.3584 102.2464l-6.0416 0.1536H271.36a102.4 102.4 0 0 1-102.2464-96.3584l-0.1536-6.0416V271.36a102.4 102.4 0 0 1 96.3584-102.2464L271.36 168.96h477.8496z m-69.9392 385.4848a34.1504 34.1504 0 0 0-48.2816 0 170.6496 170.6496 0 0 1-241.3568 0 34.1504 34.1504 0 1 0-48.2816 48.2304 238.9504 238.9504 0 0 0 337.92 0 34.1504 34.1504 0 0 0 0-48.2304zM322.56 339.6608a51.2 51.2 0 0 0-51.2 51.2v34.1504a51.2 51.2 0 1 0 102.4 0v-34.1504a51.2 51.2 0 0 0-51.2-51.2z m375.4496 0a51.2 51.2 0 0 0-51.2 51.2v34.1504a51.2 51.2 0 1 0 102.4 0v-34.1504a51.2 51.2 0 0 0-51.2-51.2z" p-id="2863"></path></svg><span>课堂</span></a>
          <a href="#" class="channel-link__right"><svg t="1642669999866" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2989" width="200" height="200"><path d="M783.36 221.8496a102.4 102.4 0 0 1 102.0928 94.7712l0.3072 7.68v409.6a102.4 102.4 0 0 1-94.72 102.0928l-7.68 0.256H237.2096a102.4 102.4 0 0 1-102.0928-94.72l-0.3072-7.68v-409.6A102.4 102.4 0 0 1 229.5808 222.208l7.68-0.3072H783.36z m-155.5968 81.408a34.1504 34.1504 0 0 0-50.7904 23.6032l-54.1696 203.3152a128 128 0 1 0-108.288 220.8256l6.7584 1.024a128 128 0 0 0 141.5168-104.8576l71.7824-253.7984 47.4624 35.4816 3.2768 2.2016a34.1504 34.1504 0 0 0 37.5808-56.832l-91.8528-68.7616z" p-id="2990"></path></svg><span>新歌热榜</span></a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      user: '最帅的那个',
      message: ''
    }
  },
  methods: {
    linkToPage() {
      this.$router.push('/#')
    },
    goToSearch() {
      this.$router.push({
        name: "search",
        params: {
          user: this.user
        },query: {
          message: this.message
        }
      })
    },
    profileClick(){
        this.$router.push({
          path: '/profile',
          query: {
            name: '最帅的那个',
            age: '18',
            height: '1.88cm'
          }
        })
      }
  }
};
</script>

<style>
.flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.bili-top {
  margin: 0 auto;
  width: 100%;
  min-height: 64px;
  max-width: 2560px;
}
.bili-header {
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 100%;
  min-height: 64px;
  max-width: 2560px;
  color: #fff;
  background-color: #e3e5e7;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bili-header__bar {
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 64px;
  width: 100%;
  opacity: 0.9;
}
.left-entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  /* 在flex容器中，当空间不够的时候，flex-shrink不为0的元素会被压缩，所以解决的方法就是给图片设置：flex-shrink:0。 */
}
.left-entry a,
.right-entry a {
  color: #fff;
}
.left-entry > li {
  margin-right: 10px;
}
.bili-ico {
  width: 18px;
  height: 18px;
  fill: none; /* 保持原有尺寸比例。同时保持替换内容原始尺寸大小。 */
  vertical-align: text-bottom;
  margin: 0 4px;
}
.center-search-container {
  height: 38px;
  flex: 1 auto;
  /* 为 flex-grow: 1;flex-shrink: 1;flex-basis: auto; 的简写  */
  /* flex-grow CSS 设置 flex 项 主尺寸 的 flex 增长系数。 */
  /* flex-basis 指定了 flex 元素在主轴方向上的初始大小。 */
}
.center-search-container__bar {
  min-width: 181px;
  max-width: 500px;
  margin: 0 auto;
  background-color: #eaebeb;
}
#nav-searchform {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  height: 40px;
  line-height: 38px;
  border: 1px solid;
  padding: 0 48px 0 4px;
  opacity: 0.9;
  transition: background-color 0.3s;
}
.nav-search-content {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 32px;
}
.nav-search-input {
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
  border: 0;
  background-color: #eaebeb;
  padding-left: 15px;
  outline: none;
}
.nav-search-btn {
  position: absolute;
  top: 3px;
  right: 7px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-search-btn:hover {
  background-color: rgb(206, 201, 201);
}
.search-ico {
  width: 17px;
  height: 17px;
}
.right-entry {
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.right-entry > li:first-child {
  margin-right: 10px;
}
.right-entry_outside {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0 5px;
  min-width: 35px;
  font-size: 13px;
  text-align: center;
}
.header-avatar-wrap {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 3px solid #eaebeb;
  overflow: hidden;
}
.header-avatar-wrap > img {
  width: 100%;
  height: 100%;
}
.taper-line {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
  pointer-events: none;
}
.logo {
  position: absolute;
  right: 80%;
  bottom: 10%;
  width: 162px;
  height: 78px;
  cursor:pointer;
}
.logo > img {
  width: 100%;
}
/* --------bili-header__channel------- */
.bili-header__channel {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.channel-icons {
  width: 210px;
  height: 72px;
  display: flex;
  align-items: center;
}
.channel-icons > a {
  width: 46px;
  height: 72px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.channel-icons > a > img {
  display: block;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border-color: transparent;
}
.right-channel-container {
  width: 100%;
  max-width: 2078px;
  margin: 0 auto;
  text-align: center;
  /* background-color: rgb(205, 213, 205); */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.channel-items__left {
  flex: 1;
  padding-right: 20px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  grid-template-rows: repeat(2, 1fr);
  align-content: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 0%;
  border-right: 1px solid grey;
}
.channel-link {
  display: block;
  border: 1px solid transparent;
  background-color: #f6f7f8;
}
.channel-items__left > a:last-child span{
    margin-right: 5px;
  }
.buttom-ico {
  transform: rotate(0); /*deg*/
}
.channel-items__right {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-template-rows: repeat(2, 1fr);
  align-content: center;
  justify-content: center;
  flex-shrink: 0;
}
.channel-link__right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
}
.side-icon {
  margin-right: 4px;
  width: 20px;
  height: 20px;
}
/* --------@media--------- */
@media (max-width: 1100px) {
  .upload {
    width: 34px;
    height: 34px;
    margin-left: 5px;
  }
  .left-entry {
    margin-right: 10px;
  }
  .left-entry > li:last-child {
    display: none;
  }
  .right-entry span {
    display: none;
  }
  .bili-header__channel {
    height: 100px;
    padding: 0 56px;
  }
  .channel-entry-more__link, .channel-link {
    font-size: 13px;
    height: 22px;
    line-height: 22px;
  }
  .channel-items__left {
    grid-template-columns: repeat(9, 1fr);
  }
  .channel-items__left > a:nth-child(n + 18) {
    display: none;
  }
  .channel-items__left > a:last-child {
    display: block;
  }
}
@media (min-width: 1100px) {
  .left-entry {
    margin-right: 30px;
  }
  .upload {
    width: 90px;
    height: 34px;
    margin-left: 16px;
  }
}
@media (min-width: 1100px) and (max-width: 1366.9px) {
  .bili-header__channel {
    height: 100px;
    padding: 0 56px;
  }
  .left-entry {
    margin-right: 10px;
  }
  .channel-entry-more__link, .channel-link {
    font-size: 13px;
    height: 26px;
    line-height: 26px;
  }
  .channel-items__left {
    grid-template-columns: repeat(9, 1fr);
  }
  .channel-items__left > a:nth-child(n + 18) {
    display: none;
  }
  .channel-items__left > a:last-child {
    display: block;
  }
}
@media (min-width: 1367px) and (max-width: 1700.9px) {
  .bili-header__channel {
    height: 110px;
    padding: 0 64px;
  }
  .channel-entry-more__link, .channel-link {
    font-size: 14px;
    height: 26px;
    line-height: 26px;
  }
  .channel-items__left {
    grid-template-columns: repeat(11, 1fr);
  }
  .channel-items__left > a:nth-child(n + 22) {
    display: none;
  }
  .channel-items__left > a:last-child {
    display: block;
  }
}
@media (min-width: 1701px) and (max-width: 2199.9px) {
  .bili-header__channel {
    height: 120px;
    padding: 0 96px;
    max-width: 2270px;
  }
  .channel-entry-more__link, .channel-link {
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }
  .channel-items__left {
    grid-template-columns: repeat(12, 1fr);
  }
  .channel-items__left > a:nth-child(n + 24) {
    display: none;
  }
  .channel-items__left > a:last-child {
    display: block;
  }
}
@media (min-width: 2200px) {
  .bili-header__channel {
    height: 130px;
    max-width: 2078px;
  }
  .channel-entry-more__link, .channel-link {
    font-size: 15px;
    height: 30px;
    line-height: 30px;
  }
  .channel-items__left {
    grid-template-columns: repeat(14, 1fr);
  }
  .channel-items__left > a:last-child {
    display: none;
  }
}
</style>