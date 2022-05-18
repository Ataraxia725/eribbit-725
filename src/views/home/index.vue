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
  <!-- 新鲜好物 -->
  <home-new></home-new>
  <!-- 人气推荐 -->
  <home-hot></home-hot>
  <!-- 热门品牌 -->
  <home-brand></home-brand>
  <!-- 商品区域 -->
  <home-product></home-product>
  <!-- 最新专题 -->
  <home-special></home-special>
</div>
</template>

<script>
import homeCategory from './components/home-category'
import homeBanner from './components/home-banner'
import homeNew from './components/home-new'
import homeHot from './components/home-hot'
import homeBrand from './components/home-brand'
import homeProduct from './components/home-product'
import homeSpecial from './components/home-special'
export default {
  name: 'PageHome',
  components: { homeCategory, homeBanner, homeNew, homeHot, homeBrand, homeProduct, homeSpecial }
}
</script>

<style scoped lang='less'>
.xtx-home-page{
  color:@xtxColor;
  .hoverShadow();
}

</style>
