<template>
  <section class="promotion">
    <div class="promotion_head">
      <div class="promotion_head_left area-header">
        <slot name="logo_ico"></slot>
        <span class="fz14">
            <slot name="headline"></slot>
        </span>
      </div>
      <div class="promotion_head_right"></div>
    </div>
    <div class="promotion_content">
        <div class="promotion_content_card">1</div>
        <div class="promotion_content_card">2</div>
        <div class="promotion_content_card">3</div>
        <div class="promotion_content_card">4</div>
        <div class="promotion_content_card">5</div>
        <div class="promotion_content_card">6</div>
        <div class="promotion_content_card">7</div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.promotion {
    margin-bottom: 56px;
    min-height: 240px;
    display: flex;
    flex-direction: column;
}
.promotion_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.promotion_head > img {
    border: 2px solid rgb(207, 96, 5);
    height: 100%;
}
.promotion_head_left > span {
    font-size: 24px;
    font-weight: 400;
    margin-left: 5px;
    color: black;
}
.promotion_content {
    flex: 1;
    width: 100%;
    display: grid;
    grid-gap: 20px;
}
.promotion_content_card {
    width: 100%;
    height: 100%;
    background-color: rgb(207, 96, 5);
}
/* -------------------- */
@media (max-width: 1099.9px) {
    .area-header {
    height: 28px;
    margin-bottom: 12px;
    }
    .promotion_content {
        grid-template-columns: repeat(4, 1fr);
    }
    .promotion_content > div:nth-child(n+5) {
        display: none;
    }
}
@media (min-width: 1100px) and (max-width: 1366.9px) {
    .area-header {
    height: 28px;
    margin-bottom: 12px;
    }
    .promotion_content {
        grid-template-columns: repeat(5, 1fr);
    }
    .promotion_content > div:nth-child(n+6) {
        display: none;
    }
}
@media (min-width: 1367px) and (max-width: 1700.9px) {
    .area-header {
    height: 34px;
    margin-bottom: 12px;
    }
    .promotion_content {
        grid-template-columns: repeat(5, 1fr);
    }
    .promotion_content > div:nth-child(n+6) {
        display: none;
    }
}
@media (min-width: 1701px) and (max-width: 2199.9px) {
  .area-header {
    height: 34px;
    margin-bottom: 12px;
  }
  .promotion_content {
        grid-template-columns: repeat(6, 1fr);
    }
    .promotion_content > div:nth-child(n+7) {
        display: none;
    }
}
@media (min-width: 2200px) {
  .area-header {
    height: 34px;
    margin-bottom: 12px;
  }
  .promotion_content {
        grid-template-columns: repeat(7, 1fr);
    }
}
</style>