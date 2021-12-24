<template>
  <div class="container">
    <input type="text" v-model="userName">
    <input type="password" v-model="password">
    <button @click="login">登录</button>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data () {
      return {
        userName: "",
        password: "",
      }
    },
    methods: {
      login(){
        let url = "/index/test";
        let data = { userName:this.userName };
        this.$httpPost(url, data,(res) => {
            if (res.code == 0) {
              this.$router.push( { name: 'Index', params: { userName:this.userName} } );
            } else {
              console.log(res)
            }
          }
        )
      }
    }
  }
</script>

<style scoped>
  input {
    width: 100px;
    height: 20px;
  }
</style>
