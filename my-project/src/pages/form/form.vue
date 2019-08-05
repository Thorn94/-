<template>
  <div>
    <div class="mian">
      <div class="center">
        <view class="section">
          <!-- <view class="section__title">普通选择器</view> -->
          <picker @change="bindPickerChange" :value="index" :range="array">
            <view class="picker">
              收款银行：
              <span>{{array[index]}}</span>
            </view>
          </picker>
        </view>
        <div class="section">
          <div class="bank">
            <h1>收款银行支行</h1>
            <input type="text" placeholder="请输入收款银行支行" class="num" :value="bank" v-model="bank" />
          </div>
        </div>
        <div class="section">
          <div class="bank">
            <h1>银行卡</h1>
            <input type="text" placeholder="请输入银行卡号" class="num" :value="number" v-model="number" />
          </div>
        </div>
        <div class="section">
          <div class="bank">
            <h1>收款户名</h1>
            <input
              type="text"
              placeholder="请输入收款户名"
              class="num"
              :value="userName"
              v-model="userName"
            />
          </div>
        </div>

        <view class="section">
          <!-- <view class="section__title">省市区选择器</view> -->
          <picker
            mode="region"
            @change="bindRegionChange"
            :value="region"
            :custom-item="customItem"
          >
            <view class="picker">
              收款地区
              <span>{{region[0]}}，{{region[1]}}，{{region[2]}}</span>
            </view>
          </picker>
        </view>
        <view class="section">
          <!-- <view class="section__title">日期选择器</view> -->
          <picker
            mode="date"
            :value="date"
            start="2015-09-01"
            end="2017-09-01"
            @change="bindDateChange"
          >
            <view class="picker">
              操作时间
              <span>{{date}}</span>
            </view>
          </picker>
        </view>
        <div class="submit">
          <input type="button" value="提交" class="btn" @click="submit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bank: "",
      number: "",
      userName: "",
      array: [
        "工商银行",
        "农业银行",
        "招商银行",
        "建设银行",
        "中国银行",
        "平安银行",
        "上海银行",
        "光大银行",
        "邮政储蓄银行",
        "浦发银行",
        "民生银行",
        "广发银行",
        "交通银行",
        "兴业银行",
        "北京农业商业银行",
        "上海银行",
        "渤海银行",
        "中信银行",
        "浙商银行",
        "东亚银行",
        "华夏银行",
        "杭州银行",
        "上海农业商业银行"
      ],
      objectArray: [
        {
          id: 0,
          name: "工商银行"
        },
        {
          id: 1,
          name: "农业银行"
        },
        {
          id: 2,
          name: "招商银行"
        },
        {
          id: 3,
          name: "建设银行"
        },
        {
          id: 4,
          name: "中国银行"
        },
        {
          id: 5,
          name: "平安银行"
        },
        {
          id: 6,
          name: "上海银行"
        },
        {
          id: 7,
          name: "光大银行"
        },
        {
          id: 8,
          name: "邮政储蓄银行"
        },
        {
          id: 9,
          name: "浦发银行"
        },
        {
          id: 10,
          name: "民生银行"
        },
        {
          id: 11,
          name: "广发银行"
        },
        {
          id: 12,
          name: "交通银行"
        },
        {
          id: 13,
          name: "兴业银行"
        },
        {
          id: 14,
          name: "北京农业商业银行"
        },
        {
          id: 15,
          name: "上海银行"
        },
        {
          id: 16,
          name: "渤海银行"
        },
        {
          id: 17,
          name: "中信银行"
        },
        {
          id: 18,
          name: "浙商银行"
        },
        {
          id: 19,
          name: "东亚银行"
        },
        {
          id: 20,
          name: "华夏银行"
        },
        {
          id: 21,
          name: "杭州银行"
        },
        {
          id: 22,
          name: "上海农业商业银行"
        }
      ],
      index: 0,
      objectMultiArray: [
        [
          {
            id: 0,
            name: "无脊柱动物"
          },
          {
            id: 1,
            name: "脊柱动物"
          }
        ],
        [
          {
            id: 0,
            name: "扁性动物"
          },
          {
            id: 1,
            name: "线形动物"
          },
          {
            id: 2,
            name: "环节动物"
          },
          {
            id: 3,
            name: "软体动物"
          },
          {
            id: 3,
            name: "节肢动物"
          }
        ],
        [
          {
            id: 0,
            name: "猪肉绦虫"
          },
          {
            id: 1,
            name: "吸血虫"
          }
        ]
      ],
      date: "2016-09-01",
      region: ["广东省", "广州市", "海珠区"],
      customItem: "全部"
    };
  },
  methods: {
    bindPickerChange: function(e) {
      //   console.log("picker发送选择改变，携带值为", e.mp.detail.value);
      //   this.setData({
      //     index: e.mp.detail.value
      //   });
      this.index = e.mp.detail.value;
    },
    bindDateChange: function(e) {
      this.date = e.mp.detail.value;
    },
    bindRegionChange: function(e) {
      this.region = e.mp.detail.value;
    },
    submit() {
      if (this.bank == "" || this.bank == null) {
        // console.log("请输入收款银行支行");
        wx.showToast({
          title: "请输入收款银行支行",
          icon: "success",
          duration: 2000
        });
      }
      if (this.number == "" || this.number == null) {
        console.log("请输入银行卡号");
        wx.showToast({
          title: "请输入银行卡号",
          icon: "success",
          duration: 2000
        });
      }
      if (this.userName == "" || this.userName == null) {
        console.log("请输入收款户名");
       wx.showToast({
          title: "请输入收款户名",
          icon: "success",
          duration: 2000
        });
      }
    }
  }
};
</script>

<style scoped>
.picker span {
  float: right;
}
.mian {
  width: 100%;
  height: auto;
  background-color: #fff;
}
.center {
  width: 90%;
  margin: 0 auto;
}
.section {
  width: 100%;
  height: auto;
  padding: 25px 0 15px 0;
  color: black;
  font-size: 16px;
  border-bottom: 1px solid #f6f6f6;
}
.bank {
  font-size: 16px;
  /* display: inline-flex; */
  position: relative;
}
.num {
  text-align: right;
  color: darkgray;
  position: absolute;
  top: 0;
  right: 0;
}
.submit {
  margin-top: 30px;
}
.btn {
  width: 100%;
  height: 45px;
  background-color: #26a2ff;
  color: #fff;
  text-align: center;
  line-height: 45px;
  border-radius: 25px;
  font-size: 18px;
  border: 0;
  outline: none;
}
</style>