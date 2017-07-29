<template>
<div>
    <p>sasa</p>
    <video autoplay="autoplay" v-show="mvShow">
        <source  :src="source" type="video/mp4"/>
    </video>
</div>
</template>
<script>
    import { mapState } from 'vuex';
    export default{
        name : "mvplayer",
        props : ['mvShow'],
        computed: {
          ...mapState([
             "source"
         ])
        }


    }
</script>

<style>
  

</style>
