// pages/modulePages/vacation/vacationApply/vacationApply.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    roles: ['用户', '医生', '管理员'],
    role: '用户',
    nickname: "",
    password: ""
  },
  inputedit(e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    this.data[dataset.item] = value;
  },
  formSubmit(e) {

    let data = this.data;
    console.log(data);
    let form = {};
    let url = "";
    if (data.role == "用户") {
      form.userNickname = data.nickname;
      form.userPassword = data.password;
      url = "/user/login"
      app.wxRequest("post", url, form, (res) => {
        if (res) {
          wx.setStorageSync("session_user", res);
          wx.switchTab({
            url: '/pages/index/index',
            success: function(res) {},
            fail: function(res) {}
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none'
          })
        }
      })
    } else if (data.role == "医生") {
      form.doctorNickname = data.nickname;
      form.doctorPassword = data.password;
      url = "/doctor/login"
      app.wxRequest("post", url, form, (res) => {
        if (res) {
          wx.setStorageSync("session_doctor", res);
          wx.navigateTo({
            url: '/pages/doctorIndex/doctorIndex',
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none'
          })
        }
      })
    } else if (data.role == "管理员") {
      form.adminNickname = data.nickname;
      form.adminPassword = data.password;
      url = "/admin/login"
      app.wxRequest("post", url, form, (res) => {
        if (res) {
          wx.setStorageSync("session_admin", res);
          wx.navigateTo({
            url: '/pages/adminIndex/adminIndex',
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none'
          })
        }
      })
    }


  },
  selectRole: function(e) {
    let role = this.data.roles[e.detail.value];
    this.setData({
      role: role
    })
  },
  toRegister() {
    wx.navigateTo({
      url: '/pages/userform/userform'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})