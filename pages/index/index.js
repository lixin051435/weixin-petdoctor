//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    baseURL: 'http://localhost:8888/petdoc/',
    imgUrls: ['/images/pet1.jpg', '/images/pet2.jpg', '/images/pet3.jpg', '/images/pet4.jpg'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list: [],
    page: 1
  },
  getImgs() {
    let that = this;
    app.wxRequest("post", "/pet/banner/4", null, (res) => {
      that.setData({
        list: res
      });
    })
  },
  lower: function(e) {},
  onShow: function() {
    let session_user = wx.getStorageSync("session_user");
    if (session_user == "") {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    this.getImgs();
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})