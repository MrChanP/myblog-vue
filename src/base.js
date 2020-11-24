exports.install = function (Vue, options) {
  Vue.prototype.post = function (link, data, fn){
    var url = this.contextPath + link

    this.axios.post(url, this.qs.stringify(data)).then(res=>{
      if (res.status == 200) {
        console.log(link)
        console.log(data)
        fn(res.data)
      }
    })
  };
};
