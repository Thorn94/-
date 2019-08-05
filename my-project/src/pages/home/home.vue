<template>
  <div>
    <div class="header">
      <div class="search">
        <img src="../../../static/images/search.png" class="search_img" />
        <input type="text" placeholder="请搜索你想搜索的内容" class="search_content" />
      </div>
    </div>
    <div class="occupy">
      <!--轮播-->
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in list" :key="index">
              <img :src="item.img" class="banner_img" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="lists">
        <ul class="lists_ul">
          <li class="lists_li">
            <img src="../../../static/images/nav-001.png" class="nav_img" />
            <p class="nav_p">简历</p>
          </li>
          <li class="lists_li">
            <img src="../../../static/images/nav-002.png" class="nav_img" />
            <p class="nav_p">企业</p>
          </li>
          <li class="lists_li">
            <img src="../../../static/images/nav-003.png" class="nav_img" />
            <p class="nav_p">收藏</p>
          </li>
          <li class="lists_li">
            <img src="../../../static/images/nav-004.png" class="nav_img" />
            <p class="nav_p">编辑</p>
          </li>
          <li class="lists_li">
            <img src="../../../static/images/nav-005.png" class="nav_img" />
            <p class="nav_p">更多</p>
          </li>
        </ul>
      </div>
      <div class="blank"></div>
      <div class="hot">
        <h1 class="hot_header">精选职位</h1>
        <div class="hot_content" v-for="(item,index) in items" :key="index">
          <img :src="item.img" class="hot_img" />
          <div class="hot_top">
            <h1 class="hot_h1">{{item.name}}</h1>
            <div class="look">
              <p class="look_p">
                {{item.money}} 元/天
                <span class="look_span">{{item.sex}}</span>
              </p>
              <h3 class="look_h3">浏览{{item.look}}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <ul class="footer_ul">
          <li class="footer_li">
            <img src="../../../static/images/home.png" class="footer_img" />
            <p class="footer_p">首页</p>
          </li>
          <li class="footer_li">
            <img src="../../../static/images/f2.png" class="footer_img" />
            <p class="footer_p">精选</p>
          </li>
          <li class="footer_li">
            <img src="../../../static/images/msg.png" class="footer_img" />
            <p class="footer_p">消息</p>
          </li>
          <li class="footer_li">
            <img src="../../../static/images/my.png" class="footer_img" />
            <p class="footer_p">我的</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min.js";
export default {
  data() {
    return {
      list: [
        { img: require("../../../static/images/banner.png") },
        { img: require("../../../static/images/banner.png") },
        { img: require("../../../static/images/banner.png") },
        { img: require("../../../static/images/banner.png") },
        { img: require("../../../static/images/banner.png") }
      ],
      items: [
        {
          img: require("../../../static/images/icon-fl-001.png"),
          name: "微信在线兼职，不限时间地点",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-002.png"),
          name: "微信小游戏5分钟现结月...",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-003.png"),
          name: "微信在线兼职，不限时间地点",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-004.png"),
          name: "微信小游戏5分钟现结月...",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-005.png"),
          name: "微信在线兼职，不限时间地点",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-006.png"),
          name: "微信小游戏5分钟现结月...",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-007.png"),
          name: "微信在线兼职，不限时间地点",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-008.png"),
          name: "微信小游戏5分钟现结月...",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-009.png"),
          name: "微信在线兼职，不限时间地点",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-010.png"),
          name: "微信小游戏5分钟现结月...",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-011.png"),
          name: "微信在线兼职，不限时间地点",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-012.png"),
          name: "微信小游戏5分钟现结月...",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-013.png"),
          name: "微信在线兼职，不限时间地点",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-014.png"),
          name: "微信小游戏5分钟现结月...",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-015.png"),
          name: "微信在线兼职，不限时间地点",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-016.png"),
          name: "微信小游戏5分钟现结月...",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-017.png"),
          name: "微信在线兼职，不限时间地点",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-018.png"),
          name: "微信小游戏5分钟现结月...",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-019.png"),
          name: "微信在线兼职，不限时间地点",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        },
        {
          img: require("../../../static/images/icon-fl-020.png"),
          name: "微信小游戏5分钟现结月...",
          money: "300",
          sex: "长期|男女不限",
          look: "89689"
        }
      ]
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      // 如果需要分页器
      pagination: ".swiper-pagination",
      paginationClickable: true, //按钮点击
      autoplay: true,
      spaceBetween: 30,
      loop: true,
      speed: 3000
    });
  }
};
</script>

<style scoped>
@import "../../../static/css/home.css";
.swiper-container,
.swiper-slide,
.swiper-slide img {
  width: 100%;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: orange !important;
}
</style>