export default {
  data() {
    return {
      userName: "",
      userPwd: "",
    }
  },

  methods: {
    login(){
      console.log(this.userName)
      console.log(this.userPwd)
    }
  }
}
