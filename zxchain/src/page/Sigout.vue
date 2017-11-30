<template>

</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
      mounted(){
          this.dispatch('sigout')
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>