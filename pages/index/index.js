//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bank: "",
    number: "",
    userName: "",
    // money:"10000000",
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

  },

  //事件处理函数

  onLoad: function () {
  

  },
  bindPickerChange(e) {
    //   console.log("picker发送选择改变，携带值为", e.mp.detail.value);
      this.setData({
        index: e.detail.value
      });
  },
  bindDateChange: function(e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
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

})
