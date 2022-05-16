<template>
  <div class="home-banner">
      <xtx-carousel auto-play :sliders="sliders"></xtx-carousel>
  </div>

</template>

<script>
import { ref } from 'vue'
import { findBanner } from '@/api/home'
export default {
  name: 'HomeBanner',
  setup () {
    const sliders = ref([])
    findBanner().then(data => {
      sliders.value = data.result
    })
    return { sliders }
  }
}
</script>

<style>
.home-banner{
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;
}
</style>
