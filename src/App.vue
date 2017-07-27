<template>
  <div id="app">
    <Search></Search>
    <MvList :keyword="searchCnt"></MvList>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Search from './components/search'
import MvList from './components/mvlist'

export default {
  name: 'app',
  components:{
      Search,
      MvList
  },
  data () {
    searchCnt:"talyor"
  }


}
</script>

<style>

</style>
