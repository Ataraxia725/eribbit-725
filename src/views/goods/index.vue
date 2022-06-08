<template>
  <div class='xtx-goods-page' v-if="goods" >
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem :to="`/category/${goods.categories[1].id}`">{{goods.categories[1].name}}</XtxBreadItem>
        <XtxBreadItem  :to="`/category/sub/${goods.categories[0].id}`">{{goods.categories[0].name}}</XtxBreadItem>
        <XtxBreadItem  to="/">{{goods.name}}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info">
          <div class="media">
              <goodsImage :images ="goods.mainPictures"></goodsImage>
              <goods-sales></goods-sales>
          </div>
          <div class="spec">
            <!-- 名字组件 -->
              <goods-name :goods="goods"></goods-name>
            <!-- 规格组件 -->
              <goods-sku :goods="goods" @change="changeSku"></goods-sku>
              <!-- 数量组件 -->
              <xtx-numbox label="数量" v-model="num" :max="goods.inventory"></xtx-numbox>
              <xtx-button type="primary" style="margin-top:20px;">加入购物车</xtx-button>
          </div>
      </div>
      <!-- 商品推荐 -->
      <GoodsRelevant :goodsId="goods.id" />
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <goods-tabs :goods="goods"></goods-tabs>
          <!-- 注意事项 -->
          <goods-warn></goods-warn>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside">
          <goods-hot :goodsId="goods.id" :type="1"></goods-hot>
          <goods-hot :goodsId="goods.id" :type="2"></goods-hot>
          <goods-hot :goodsId="goods.id" :type="3"></goods-hot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsRelevant from './components/goods-relevant'
import GoodsImage from './components/goods-image'
import GoodsSales from './components/goods-sales'
import GoodsName from './components/goods-name'
import GoodsSku from './components/goods-sku'
import { nextTick, ref, watch, provide } from 'vue'
import { findGoods } from '@/api/product'
import { useRoute } from 'vue-router'
import GoodsTabs from './components/goods-tabs'
import GoodsHot from './components/goods-hot'
import GoodsWarn from './components/goods-warn'
export default {
  name: 'XtxGoodsPage',
  components: {
    GoodsRelevant,
    GoodsImage,
    GoodsSales,
    GoodsName,
    GoodsSku,
    GoodsTabs,
    GoodsHot,
    GoodsWarn
  },
  setup () {
    const num = ref(1)
    const goods = useGoods()
    const changeSku = (sku) => {
      if (sku.skuId) {
        goods.value.price = sku.price
        goods.value.oldPrice = sku.oldPrice
        goods.valueinventory = sku.inventory
      }
    }
    provide('goods', goods)
    return { goods, changeSku, num }
  }
}
const useGoods = () => {
  const goods = ref(null)
  const route = useRoute()
  watch(() => route.params.id, (newVal) => {
    if (newVal && `/product/${newVal}` === route.path) {
      findGoods(route.params.id).then(
        data => {
          goods.value = null
          nextTick(() => { goods.value = data.result })
        }
      )
    }
  }, { immediate: true })
  return goods
}
</script>

<style scoped lang='less'>
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
