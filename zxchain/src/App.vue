<template>
  <div id="app">
    <Spin size="large" fix v-if="spinShow"></Spin>
    <router-view/>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'app',
  data:function(){
    return {
    }
  },
  computed:{
    ...mapState([
      'spinShow'
    ])
  },
  methods:{
    info () {
      var top =  window.innerHeight/2;
      this.$Message.config({
        top: top,
        duration: 3
      });
      this.$Message.info('这是一条普通的提醒');
    },
    ...mapMutations([
      'loading'
    ])
  },
  mounted:function(){
    setTimeout(function() {
      this.loading(false)
    }.bind(this), 2000);
  }
}
</script>
<style>

</style>
