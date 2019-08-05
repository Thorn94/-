<template>
  <div>
    <div :class="{ header:isHeader}">
      <h1 :class="{ log_txt:isTxt}">{{message}}</h1>
    </div>
    <form :class="{ form:isForm}">
      <div class="form_content">
        <input :class="{ tel_txt:isTel}" type="tel" placeholder="请输入您的手机号" />
        <div :class="{change:isChange}">
          <input :class="{ tel_txt2:isTel}" type="tel" v-model="txt" v-if="pwdType" />
          <!--方便显示密码数据-->
          <input :class="{ tel_txt2:isTel}" type="password" v-model="txt" v-else />
          <div class="img2" @click="changeType()">
            <img :src="seen ? seenImg : unseenImg" alt="img" style="width:30px;height:30px" />
          </div>
        </div>
      <input type="button" :class="{btn:isBtn}" value="登  录" @click="toHome"/>
      </div>
    </form>
    <div :class="{footer:isFooter}">
      <a :class="{link:isLink}">{{message2}}</a>
      <p :class="{account:isAccount}">
        {{message3}}
        <span :class="{login:isLogin}">{{message4}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel:"",
      message: "logo",
      isHeader: true,
      isTxt: true,
      isForm: true,
      isTel: true,
      isChange: true,
      txt: "523654",
      close: true,
      isBtn: true,
      // btn_txt: "登  录",
      message2: "忘记密码?",
      isLink: true,
      isFooter: true,
      message3: "没有账号?",
      message4: "立即注册",
      isAccount: true,
      isLogin: true,
      seen: "",
      unseenImg: require("../../../static/images/2.png"), //看不见
      seenImg: require("../../../static/images/1.png"), //看得见密码
      pwdType: false, //此时文本框隐藏，显示密码框
      isLast: true,
      // isshow: false,
      infor: null,
      isH1: true,
      isRun: true,
      isBtn1: true,
      isa: true
    };
  },
  computed: {},
  methods: {
    //密码的显示隐藏
    changeType: function() {
      this.seen = !this.seen; //图片的变化
      this.pwdType = !this.pwdType; //切换
    },
    toHome() {
      // localStorage.setItem("userInfo", this.tel);
      //输入后跳到首页
      // if (!!this.route.query.redirect) {
      //   this.router.push(this.route.query.redirect); //这里是拦截前想跳转的页面 }
      // } else {
      //   this.router.push("/home"); //这里填你默认跳转的地址
      // }
    }
  }
};
</script>

<style lang="" scoped>
@import "../../../static/css/index.css";
</style>