<template>
    <form @submit.prevent="submit" action="">
       <i class="fa fa-search" aria-hidden="true"></i> <input type="text" name="search" placeholder="搜索 歌曲/专辑/歌手" v-model="keyword" @keyup.enter="hideKeyboard($event)">
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
               this.$store.commit('UPDATE_SEARCH_CONT',this.keyword)
               this.$store.commit('UPDATE_NAV_SHOW')
               this.$root.$emit('changeKey',this.keyword)
           },
           hideKeyboard: function(ev){
              ev.target.blur();
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