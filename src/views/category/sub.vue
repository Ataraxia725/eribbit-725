<template>
  <xtx-bread>
    <xtx-bread-item to="/">首页</xtx-bread-item>
    <xtx-bread-item v-if="category.top" :top="`/category/${category.top.id}`">{{category.top.name}}</xtx-bread-item>
    <transition name="fade-right" mode="out-in">
      <xtx-bread-item v-if="category.sub" :key="category.sub.id">{{category.sub.name}}</xtx-bread-item>
    </transition>
  </xtx-bread>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
  name: 'SubBread',
  setup () {
    // 注意：setup中this不是当前vue实例

    // 1. 获取二级分类的ID，在地址在路由中
    // route ===> this.$route
    const route = useRoute()
    console.log(route.params.id)
    const store = useStore()
    console.log(store)
    const category = computed(() => {
      const obj = {}
      store.state.category.list.forEach(top => {
        top.children && top.children.forEach(sub => {
          if (sub.id === route.params.id) {
            obj.sub = { id: sub.id, name: sub.name }
            obj.top = { id: top.id, name: top.name }
          }
        })
      })
      return obj
    })
    return { category }
  }
}
</script>

<style scoped lang="less">

</style>
