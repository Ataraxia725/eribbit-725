<template>
  <App-Topnav/>
  <App-Header/>
  <App-Header-Sticky></App-Header-Sticky>
  <main class="app-body">
    <router-view></router-view>
  </main>
  <App-Footer/>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppHeaderSticky from '@/components/app-header-sticky'
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: { AppTopnav, AppHeader, AppFooter, AppHeaderSticky },
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
