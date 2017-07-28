<template>
    <form @submit.prevent="submit" action="">
       <i class="fa fa-search" aria-hidden="true"></i> <input type="text" name="search" placeholder="搜索 歌曲/专辑/歌手" v-model="keyword" >
    </form>
 
</template>
<script>
    export default{
        name : "search",
        data () {
            return {
                keyword : ""
            }
        },
        methods:{
           submit : function(){
               console.log(this.keyword)
               this.$store.commit('UPDATE_SEARCH_CONT',this.keyword)
           }
        }


    }
</script>

<style>
    input{
        width: 200px;
        margin-left: 600px;
    }

</style>