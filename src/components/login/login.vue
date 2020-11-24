<template>
  <div class="container">
    <div class="info_wrap">
      <input v-model="userName" type="text" class="" id="userName">
      <p>userName:{{userName}}</p>
      <input v-model="userPwd" :type="showPwd" class="" id="userPwd">
      <p>userPwd:{{userPwd}}</p>
      <button @click="login" type="button" class="">Primary</button>
    </div>
    <!--<button @click="switchShow" type="button" class="btn btn-warn">Primary</button>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: "",
        userPwd: "",
        showPwd: "password"
      }
    },

    methods: {
      login(){
        const _this = this;
        _this.post("/loginByPwd",
          {userName: _this.userName, pwd: _this.userPwd},
          function (data) {
            if (data.code === 0) {
              _this.$router.push({path: "/index"});
            }
          })
      },
      switchShow(){
        if (this.showPwd === "password") {
          this.showPwd = "text"
        } else if (this.showPwd === "text") {
          this.showPwd = "password"
        }
      }
    }
  }

</script>

<style src="./login.css"></style>
