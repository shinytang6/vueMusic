<template>
  

</template>
<script>
    import api from "../api"    //  ../api目录下只有Index.js才能引入成功，换个名字都不行
    export default{
        name : 'mvlist',
        props : ['keyword'],
        data () {
            return {}
        },
        mounted : function(){
            this.$http.get(api.getMVs(this.keyword,10))
            .then(function(response){
                console.log(response)
            })
        }
    }
</script>

<style>
    

</style>