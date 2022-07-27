<template>
    <div class="win">
        <biliHeaderVue/>
        <biliLayoutVue/>
    </div>
 
</template>

<script>
import biliHeaderVue from "@/components/common/bili-header.vue";
import biliLayoutVue from "@/components/content/sec1/bili-layout.vue";
export default {
    components: {
        biliHeaderVue,
        biliLayoutVue
    }
}

</script>

<style>

* {
    margin: 0;
    padding: 0;
    border-radius: 8px;
    box-sizing: border-box;
}
body {
    height: 100%;
    width: 100%;
    min-width: 1100px !important;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    overflow-x: auto;
    background-color: #fff;
}
li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

</style>
