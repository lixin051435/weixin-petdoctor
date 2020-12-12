// pages/infolist/infolist.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseURL: "http://localhost:8888/petdoc/",
    infos: [],
    from: 'other'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let from = options.from;
    this.setData({
      from: from
    })
    app.wxRequest("get", "/info/findAllByType", {
      type: "新闻"
    }, (res) => {
      that.setData({
        infos: res
      })
    })
  },
  toDetail(e) {
    let id = e.currentTarget.dataset.id;
    let from = this.data.from;
    if(from == 'index'){
      wx.navigateTo({
        url: '/pages/infopage/infopage?infoId=' + id,
      })
    }else{
      wx.navigateTo({
        url: '/pages/petnewsform/petnewsform?from=news&infoId=' + id,
      })
    }
    
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