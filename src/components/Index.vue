<template>
  <div class="container">
    <h1>{{userInfo.loginName}}</h1>
    <button @click="signOut">退出</button>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data () {
      return {
        userInfo: { loginName: "" }
      }
    },
    created(){
      let loginName = this.$root.userInfo.loginName;
      if (this.$isEmpty(loginName)) {
        this.$router.push('/login');
      } else {
        this.userInfo.loginName = loginName;
        this.$set(this.userInfo, 'loginName', loginName)
      }
    },
    methods: {
      signOut() {
        this.$root.userInfo.loginName = "";
        this.userInfo.loginName = "";
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  h1 {
    height: 20px;
    border: 1px solid red;
  }
</style>
