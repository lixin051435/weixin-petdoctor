// pages/chatdetail/chatdetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chats: [{

    }],
    userId: '',
    doctorId: '',
    message: '',
    isuser: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = options.userId;
    let doctorId = options.doctorId;
    let isuser = options.isuser;
    this.setData({
      userId: userId,
      doctorId: doctorId,
      isuser: isuser
    })
    this.getAll();
  },
  getAll() {
    let that = this;
    let userId = that.data.userId;
    let doctorId = that.data.doctorId;
    let form = {
      doctorId: doctorId,
      userId: userId
    }
    app.wxRequest("get", "/chat/findAll", form, (res) => {
      that.setData({
        chats: res
      })
    })
  },
  setMessage(e) {
    let value = e.detail.value;
    this.setData({
      message: value
    })
  },
  send() {
    let that = this;
    let chat = {
      userId: that.data.userId,
      doctorId: that.data.doctorId,
      message: that.data.message,
      senderType: 1,
      receiverType: 0
    }
    if (this.data.isuser == 0) {
      chat.receiverType = 1;
      chat.senderType = 0;
    }
    app.wxRequest("post", "/chat/save", chat, (res) => {
      that.setData({
        chats: res,
        message: ''
      })
      that.getAll();
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