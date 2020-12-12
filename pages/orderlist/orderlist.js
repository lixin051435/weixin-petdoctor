// pages/infolist/infolist.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseURL: "http://localhost:8888/petdoc/",
    realname: '',
    infos: []
  },
  setRealname(e) {
    let realname = e.detail.value;
    this.setData({
      realname: realname
    })
  },
  search() {
    let realname = this.data.realname;
    console.log(realname);
    let form = {
      realname: realname
    };
    let that = this;
    app.wxRequest("post", "/order/getAllByRealnameLike", form, (res) => {
      that.setData({
        infos: res
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    app.wxRequest("get", "/order/findAll", {}, (res) => {
      that.setData({
        infos: res
      })
    })
  },
  toDetail(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/orderdetail/orderdetail?orderId=' + id,
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