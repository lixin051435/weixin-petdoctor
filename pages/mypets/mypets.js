// pages/addressList/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    baseURL: 'http://localhost:8888/petdoc/'
  },
  handleLongPress(e){
    let that = this;
    let id = e.currentTarget.dataset.petid;
    let data = {
      id : id
    };
    app.wxRequest("post","/pet/delete",data,(res)=>{
      that.getList();
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  defaultFun: function (data) {
    
  },
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  getList(){
    var that = this;
    let data = {};
    let session_user = wx.getStorageSync("session_user");
    data.userId = session_user.userId;
    app.wxRequest("get", "/pet/findByUserId", data, (res) => {
      if (res) {
        that.setData({
          list: res
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getList();
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