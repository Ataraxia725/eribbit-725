<template>
  <App-Topnav/>
  <App-Header/>
  <main class="app-body">
    // 二级路由
    <router-view></router-view>
  </main>
  <App-Footer/>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: { AppTopnav, AppHeader, AppFooter },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang="less">
.app-body{
  min-height: 600px;
}
</style>
