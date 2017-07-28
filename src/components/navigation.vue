<template>
 <div class="layout" v-if="show">
   <div class="header">
      <div class="nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
          <mu-tab value="tab1" title="推荐"/>
          <mu-tab value="tab2" title="排行榜"/>
        </mu-tabs>
      </div>
    </div>
 </div>
</template>

<script>
export default {
 data () {
    return {
      activeTab: 'tab1'
    }
  },
 props : ['show'],
 methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }

}
</script>

<style>
.layout{
  min-width:100px;
}

.header{
  background-color: #7e57c2;
  margin: 0 450px 0 450px;
}


.nav{
  display: inline-block;
  width: calc(100% - 150px);
  margin: 0 auto;
}

.tab{
  margin: 0 auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
}

</style>
