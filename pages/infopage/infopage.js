// pages/register/register.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseURL: 'http://localhost:8888/petdoc/',
    icon: "",
    info: {
      "infoId": "",
      "infoTitle": "",
      "infoType": "科普",
      "infoContent": "",
      "createtime": "",
      "infoIcon": ""
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let infoId = options.infoId;
    let that = this;
    if (infoId != undefined) {
      app.wxRequest("get", "/info/get/" + infoId, {}, (res) => {
        this.setData({
          info: res,
          icon: res.infoIcon || ''
        })
      })
    }

  }
})