<template>
<!--  <transition enter-active-class="animate__fadeInDown">-->
    <div class="container animated zoomIn fastest">
      <input type="text" v-model="loginName">
      <input type="password" v-model="password">
      <button @click="login">登录</button>
      <router-link to="/Register" class="">注册</router-link>
    </div>
<!--  </transition>-->
</template>

<script>
  export default {
    name: "Login",
    data () {
      return {
        loginName: "",
        password: ""
      }
    },
    methods: {
      login() {
        let url = "/index/login";
        let data = {
          loginName: this.loginName,
          password: this.password
        };
        this.$httpPost(url, data,(res) => {
          if (res.code == 0) {
            this.$root.userInfo.loginName = this.loginName
            this.$router.push('/index');
          } else {
            console.log(res)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    border: 1px solid red;
    height: 300px;
  }
  input {
    width: 100px;
    height: 20px;
  }
</style>
