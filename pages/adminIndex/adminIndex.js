// pages/adminIndex/adminIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addDoctor(){
    wx.navigateTo({
      url: '/pages/doctorform/doctorform'
    })
  },
  addUser() {
    wx.navigateTo({
      url: '/pages/userform/userform'
    })
  },

  toDoctorlist() {
    wx.navigateTo({
      url: '/pages/doctorlist/doctorlist'
    })
  },
  toUserlist() {
    wx.navigateTo({
      url: '/pages/userlist/userlist'
    })
  },
  toOrderlist() {
    wx.navigateTo({
      url: '/pages/orderlist/orderlist'
    })
  },
  toAbout() {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  },
  toUpdatePass() {
    wx.navigateTo({
      url: '/pages/updatePass/updatePass'
    })
  },

  addPopularScience(){
    wx.navigateTo({
      url: '/pages/popscienceform/popscienceform'
    })
  },
  toPopularScienceList() {
    wx.navigateTo({
      url: '/pages/popsciencelist/popsciencelist'
    })
  },
  addPetNews() {
    wx.navigateTo({
      url: '/pages/petnewsform/petnewsform'
    })
  },
  toPetNewsList() {
    wx.navigateTo({
      url: '/pages/petnewslist/petnewslist'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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