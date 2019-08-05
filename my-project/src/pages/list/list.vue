<template>
  <div>
    <div v-for="(item,index) in list" :key="index" class="left" style="padding:15px 0;">
      <navigator :url="'/pages/detail/main?item='+item.title+'&ptime='+item.ptime+'&digest='+item.digest">
      <div>
        <img :src="item.picInfo[0].url" class="img" />
      </div>
      <div class="right">
        <p style="font-size:16px; padding-bottom:8px;color:red;">{{item.title}}</p>
        <p style="font-size:14px; padding-bottom:8px;">{{item.ptime}}</p>
        <p style="font-size:14px;">{{item.digest}}</p>
      </div>
      </navigator>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: "https://www.apiopen.top/journalismApi",
      method: "get",
      success: function(res) {
        that.list = res.data.data.auto;
      }
    });
  }
  // method:{
  //   toDetail() {
  //   console.log(1)
  //    wx.navigateTo({
  //     url: "./pages/detail/main" //传值
  //   });
  // }
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