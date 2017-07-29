<template>
   <MvPlayer :mvShow="show"></MvPlayer>
</template>
<script>
    import MvPlayer from './mvplayer'   //同目录下一定要加上./，否则报错
    import api from "../api"  
    export default{
        name : "detail",
        components:{
            MvPlayer
        },
        data (){
            return {
                source : "",
                show : false
            }
        },
        mounted : function(){
            this.getData()
        },
        methods : {
           getData : function(){
               var that = this
               this.$http.get(api.getMv(this.$route.params.id))
               .then(function(response){
                   that.source = response.data.data.brs["240"]
                   that.$store.commit('UPDATE_SRC',that.source)
                   that.show = true

              },
                function(err){
                console.log(err)
              })

           }
        }


    }
</script>

<style>

</style>