<template>
  <div>{{userName}}</div>
</template>

<script>
  export default {
    name: "Index",
    data () {
      return {
        userName: this.$route.params.userName
      }
    }
  }
</script>

<style scoped>

</style>
