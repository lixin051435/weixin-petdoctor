// pages/addressAdd/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   oldPass:'',
   newPass:''
  },
 
  bindOldPass: function (e) {
    this.setData({
      oldPass: e.detail.value
    })
  },
  bindNewPass: function (e) {
    this.setData({
      newPass: e.detail.value
    })
  },
  submitFun: function () {
   let user = wx.getStorageSync("session_user");
   if(user.userPassword == this.data.oldPass){
     user.userPassword = this.data.newPass;
     app.wxRequest("post","/user/save",user,(res)=>{
       wx.setStorageSync("session_user", res);
       wx.showModal({
         title: '提示',
         content: '修改成功'
       })
     })
   }else{
     wx.showModal({
       title: '提示',
       content: '旧密码错误'
     })
   }
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