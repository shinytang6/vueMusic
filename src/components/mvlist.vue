<template>
<div class="gridlist-demo-container">
  <mu-grid-list class="gridlist-demo">
  <!--   <mu-sub-header>图片展示</mu-sub-header> -->
    <mu-grid-tile v-for="content, index in mvList" :key="index">
      <img :src="content.cover"/>
      <span slot="title">{{content.name}}</span>
      <span slot="subTitle">by <b>{{content.artistName}}</b></span>
      <mu-icon-button icon="star_border" slot="action"/>
    </mu-grid-tile>
  </mu-grid-list>
</div>
</template>
<script>
    import api from "../api"    //  ../api目录下只有Index.js才能引入成功，换个名字都不行
    import { mapState } from 'vuex';
    export default{
        name : 'mvlist',
        props : ['keyword'],
        data () {
            return {
                key : this.keyword,
                mvList : []
            }
        },
        mounted : function(){

               //监听search.vue里的事件变化，否则mounted里面获取不到变化的keyword
               this.$root.$on('changeKey', val => {
               this.key = val
               this.getData()
               })
        },
        methods:{
            getData : function(){
            var that =this
            this.$http.get(api.getMVs(this.key,10))
            .then(
                function(response){
                  that.mvList = that.mvList.concat(response.data.result.mvs)
                  console.log(response.data.result.mvs)
                  console.log(that.mvList)
              },
                function(err){
                console.log(err)
              })
            }
        }
    }
</script>

<style>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo{
  width: 500px;
  height: 450px;
  overflow-y: auto;
}

</style>