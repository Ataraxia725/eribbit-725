<template>
<div class="page-home">
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <home-category></home-category>
    </div>
  </div>
</div>
</template>

<script>
import homeCategory from './components/home-category'
export default {
  name: 'PageHome',
  components: { homeCategory }
}
</script>

<style scoped lang='less'>
.xtx-home-page{
  color:@xtxColor;
  .hoverShadow();
}
</style>
