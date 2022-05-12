<template>
  <div>
    app
  </div>
  <p>ppp</p>
  <p>{{$store.state.username}}</p>
  <p>{{$store.getters['newName']}}</p>
  <button @click="mutationsFn">改名字</button>

</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.state.username)
    console.log(store.getters.newName)
    const mutationsFn = () => {
      // store.commit('updateName')
      store.dispatch('updateName')
    }
    return { mutationsFn }
  }
}
</script>
