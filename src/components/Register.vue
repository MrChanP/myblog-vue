<template>
  <div class="container">
    <div>Register</div>
    <input type="text" v-model="loginName">
    <input type="password" v-model="password">
    <button @click="register">注册</button>
  </div>
</template>

<script>
  export default {
    name: "",
    data () {
      return {
        loginName: "",
        password: ""
      }
    },
    methods: {
      register() {
        let url = "/index/register";
        let data = {
          loginName: this.loginName,
          password: this.password
        };
        this.$httpPost(url, data,(res) => {
            if (res.code === 0) {
              this.$root.userInfo.loginName = this.loginName;
              this.$router.push('/index');
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

</style>
