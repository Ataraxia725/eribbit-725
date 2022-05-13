<template>
  <div class="container">
    <!-- 修改数据，测试是否持久化 -->
    App
    <button @click="fn">axios测试</button>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  name: 'App',
  setup () {
    const fn = () => {
      request('member.profile', 'get', { a: 10 })
    }
    return { fn }
  }
}
</script>
