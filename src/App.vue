<template>
  <div id="app">
    <Search></Search>
    <Navigation :show="navShow"></Navigation>
    <MvList :keyword="searchCnt"></MvList>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Search from './components/search'
import Navigation from './components/navigation'
import MvList from './components/mvlist'
import { mapState } from 'vuex';

export default {
  name: 'app',
  //别忘记在这里把引入的Vue组件列出来，否则不会显示对应的组件
  components:{
      Search,
      Navigation,
      MvList
  },
  //当一个组件需要获取多个状态时，我们可以使用 mapState 辅助函数帮助我们生成计算属性
  computed: {
      ...mapState([
        'searchCnt','navShow'
      ])
  }


}
</script>

<style>

</style>
