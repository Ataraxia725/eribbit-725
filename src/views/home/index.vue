<template>
<!-- 首页入口 -->
<div class="xtx-home-page">
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <home-category></home-category>
      <!-- 轮播图 -->
      <home-banner></home-banner>
    </div>
  </div>
</div>
</template>

<script>
import homeCategory from './components/home-category'
import homeBanner from './components/home-banner'
export default {
  name: 'PageHome',
  components: { homeCategory, homeBanner }
}
</script>

<style scoped lang='less'>
.xtx-home-page{
  color:@xtxColor;
  .hoverShadow();
}

</style>
