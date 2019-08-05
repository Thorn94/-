<template>
  <div>
    <div class="left" style="padding:15px 0;">
      <div>
        <img :src="img" class="img" />
      </div>
      <div class="right">
        <p style="font-size:16px; padding-bottom:8px;color:red;">{{title}}</p>
        <p style="font-size:14px; padding-bottom:8px;">{{ptime}}</p>
        <p style="font-size:14px;">{{digest}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      img: "",
      title: "",
      ptime:"",
      digest: ""
    };
  },
  onLoad: function(options) {
    //console.log(options);
    this.title = options.item
    this.ptime = options.ptime
    this.digest = options.digest
  }
  // created(){
  //   this.img = this.$router.params.userId.picInfo[0].url;
  //   this.title = this.$router.params.userId.title;
  //   this.ptime = this.$router.params.userId.ptime;
  //   this.digest = this.$router.params.userId.digest;
  // }
};
</script>

<style scoped>
.left {
  width: 100%;
  display: inline-flex;
}
.img {
  width: 150px;
  height: 100px;
}
.right {
  width: 60%;
  padding-left: 10px;
}
</style>