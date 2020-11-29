// pages/doctorlist/doctorlist.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctors: [],
    baseURL: "http://localhost:8888/petdoc/"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    app.wxRequest("get", "/doctor/findAll", {}, (res) => {
      that.setData({
        doctors: res
      })
    })
  },
  toDetail(e) {
    let id = e.currentTarget.dataset.id;
    let user = wx.getStorageSync('session_user');
    wx.navigateTo({
      url: '/pages/chatdetail/chatdetail?isuser=1&doctorId=' + id + '&userId=' + user.userId,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})